import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Use from .env.local
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await client.connect();
      const database = client.db('AlSayed'); // Your database name
      const collection = database.collection('Jobs'); // Your collection name

      // Fetch all documents from the Jobs collection
      const jobs = await collection.find({}).toArray();

      res.status(200).json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ message: 'Failed to fetch data', error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


