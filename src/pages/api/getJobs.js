// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI; // Use from .env.local
// const client = new MongoClient(uri);

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       await client.connect();
//       const database = client.db('AlSayed'); // Your database name
//       const collection = database.collection('Jobs'); // Your collection name

//       // Fetch all documents from the Jobs collection
//       const jobs = await collection.find({}).toArray();

//       res.status(200).json(jobs);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//       res.status(500).json({ message: 'Failed to fetch data', error });
//     } finally {
//       await client.close();
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }


import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // from your .env.local
const options = {};

// Create a cached connection for hot-reloads in dev
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const database = client.db('AlSayed'); // your DB name
      const collection = database.collection('Jobs'); // your collection

      // Only get valid jobs
      const jobs = await collection.find({
        description: { $exists: true, $ne: null },
        title: { $exists: true, $ne: null }
      }).toArray();

      // Extra filter to drop any accidental nulls or weird docs
      const cleanedJobs = jobs.filter(job => job && job.description && job.title);

      res.status(200).json(cleanedJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ message: 'Failed to fetch jobs', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
