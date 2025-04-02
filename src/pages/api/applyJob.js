import { connectToDatabase } from '@/lib/db';
import Resume from '@/Models/Resume';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ Disable bodyParser since multer will handle it
export const config = {
  api: {
    bodyParser: false,
  },
};

// ✅ Middleware to handle file and form data
const  uploadMiddleware =(req, res) =>
  new Promise((resolve, reject) => {
    upload.fields([{ name: 'file' }, { name: 'details' }])(req, res, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  async function handleGet(req, res) {
    try {
      await connectToDatabase();
  
      const resumes = await Resume.find();
      return res.status(200).json(resumes);
    } catch (error) {
      console.error('Error fetching resumes:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  async function handlePost(req, res) {
  try {
    // ✅ Use multer middleware to parse request
    await uploadMiddleware(req, res);

    // ✅ Extract form data
    const details = JSON.parse(req.body.formData);
    const file = req.files?.file?.[0];

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // ✅ Connect to MongoDB
    await connectToDatabase('AlSayed');

    // ✅ Save to MongoDB
    const newResume = await Resume.create({
      fileName: file.originalname,
      contentType: file.mimetype,
      file: file.buffer,
      size: file.size,
      ...details,
    });
   

    return res.status(200).json({
      message: 'File uploaded successfully',
      fileId: newResume._id,
      fileName: newResume.fileName,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ error: error.message });
  }
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
      return handleGet(req, res);
    }
  
    if (req.method === 'POST') {
      return handlePost(req, res);
    }
  
    // ✅ Handle unsupported methods
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }