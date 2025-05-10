import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      await client.connect();
      const database = client.db('AlSayed');
      const collection = database.collection('Jobs');

      const { jobId } = req.query; // Read jobId from URL query
      
      if (!jobId) {
        return res.status(400).json({ message: 'Missing jobId in request query' });
      }

      const deleteJob = await collection.deleteOne({ jobId: parseInt(jobId) });

      if (deleteJob.deletedCount === 1) {
        res.status(200).json({ message: `Job ${jobId} deleted successfully` });
      } else {
        res.status(404).json({ message: `Job ${jobId} not found` });
      }
      
    } catch (error) {
      console.error('Error deleting job:', error);
      res.status(500).json({ message: 'Failed to delete job', error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
