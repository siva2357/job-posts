const express = require('express');
const router = express.Router();
const jobPostController = require('../controllers/jobPostController');

// Recruiter routes
router.post('/job', jobPostController.createJobPost);
router.get('/jobs', jobPostController.getAllJobPosts);
router.get('/job/:id', jobPostController.getJobPostById); // Get job post by MongoDB _id
router.put('/job/:id', jobPostController.updateJobPost); // Update by MongoDB _id
router.delete('/job/:id/delete', jobPostController.deleteJobPost); // Delete by MongoDB _id

router.put('/job/:id/close', jobPostController.closeJobPost); // Close job by ID
router.get('/jobs/closed', jobPostController.getClosedJobPosts); // Get all closed jobs
router.put('/job/:id/reopen', jobPostController.reopenJobPost); // Reopen job by ID


router.put('/job/:id/apply',  jobPostController.applyJobPost); // Close job by ID
router.get('/jobs/applied', jobPostController.getAppliedJobPosts); // Get all closed jobs
router.put('/job/:id/withdraw', jobPostController.withdrawJobPost); // Reopen job by ID


router.put('/job/:id/save',  jobPostController.saveJobPost); // Close job by ID
router.get('/jobs/saved', jobPostController.getSavedJobPosts); // Get all closed jobs
router.put('/job/:id/unsave', jobPostController.unsaveJobPost); // Reopen job by ID

module.exports = router;
