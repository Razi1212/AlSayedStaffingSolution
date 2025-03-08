import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function getNextSequence(name) {
    const database = client.db('AlSayed');
    const counters = database.collection('counters');
  
    const result = await counters.findOneAndUpdate(
      { _id: name },
      { $inc: { seq: 1 } },
      { upsert: true, returnDocument: 'after' }
    );
  
    // If the result is undefined (first-time creation), set initial value
    if (!result) {
      await counters.insertOne({ _id: name, seq: 1 });
      return 1;
    }
  
    return result.seq;
  }
  

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await client.connect();
      const database = client.db('AlSayed');
      const collection = database.collection('Jobs');

      // ✅ Get the next incremental ID
      const nextKey = await getNextSequence('jobId');

      const data = {
        ...req.body,
        jobId: nextKey, // Incremental ID
        createdAt: new Date(), // Created date
      };

      // ✅ Insert data into the collection
      const result = await collection.insertOne(data);

      res.status(201).json({ message: 'Data saved', result });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error saving data', error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
