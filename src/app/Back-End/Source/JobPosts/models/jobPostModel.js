const mongoose = require('mongoose');

// Schema for Active Job Posts
const activeJobPostSchema = new mongoose.Schema({
  jobId: { type: Number, required: true, unique: true },
  jobRoleTitle: { type: String, required: true },
  jobType: { type: String, required: true },
  platform: { type: String, required: true },
  salary: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  vacancy: { type: String, required: true },
  postedOn: { type: Date, default: Date.now }, // Automatically set the current date and time
  applyByDate: { type: Date, required: true },
  jobDescription: { type: String, required: true },
  status: { type: String, default: 'active' },
});

// Schema for Applied Job Posts
const appliedJobPostSchema = new mongoose.Schema({
  jobId: { type: Number, required: true, unique: true },
  jobRoleTitle: { type: String, required: true },
  jobType: { type: String, required: true },
  platform: { type: String, required: true },
  salary: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  vacancy: { type: String, required: true },
  postedOn: { type: Date, default: Date.now }, // Automatically set the current date and time

  applyByDate: { type: Date, required: true },
  jobDescription: { type: String, required: true },
  status: { type: String, default: 'applied' },
});

// Schema for Closed Job Posts
const closedJobPostSchema = new mongoose.Schema({
  jobId: { type: Number, required: true, unique: true },
  jobRoleTitle: { type: String, required: true },
  jobType: { type: String, required: true },
  platform: { type: String, required: true },
  salary: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  vacancy: { type: String, required: true },
  postedOn: { type: Date, default: Date.now }, // Automatically set the current date and time

  applyByDate: { type: Date, required: true },
  jobDescription: { type: String, required: true },
  status: { type: String, default: 'closed' },
});

const savedJobPostSchema = new mongoose.Schema({
  jobId: { type: Number, required: true, unique: true },
  jobRoleTitle: { type: String, required: true },
  jobType: { type: String, required: true },
  platform: { type: String, required: true },
  salary: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  vacancy: { type: String, required: true },
  postedOn: { type: Date, default: Date.now }, // Automatically set the current date and time
  applyByDate: { type: Date, required: true },
  jobDescription: { type: String, required: true },
  status: { type: String, default: 'saved' },
});

// Export each schema as a separate model
const ActiveJobPost = mongoose.model('Active-JobPost', activeJobPostSchema);
const AppliedJobPost = mongoose.model('Applied-JobPost', appliedJobPostSchema);
const ClosedJobPost = mongoose.model('Closed-JobPost', closedJobPostSchema);
const SavedJobPost = mongoose.model('Saved-JobPost', savedJobPostSchema);


module.exports = { ActiveJobPost, AppliedJobPost, ClosedJobPost, SavedJobPost };
