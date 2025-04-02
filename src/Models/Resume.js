import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  file: {
    type: Buffer, // Store file as binary data
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  candidateName: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  passportNumber: {
    type: String,
    required: true,
  },
  ecnrEcr: {
    type: String,
    required: true,
  },
  passportExpiry: {
    type: String,
    required: true,
  },
  currentCompany: {
    type: String,
    required: true,
  },
  localExperience: {
    type: String,
    required: true,
  },
  internationalExperience: {
    type: String,
    required: true,
  },
  totalExperience: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  currentSalary: {
    type: String,
    required: true,
  },
  expectedSalary: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const Resume = mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);

export default Resume;
