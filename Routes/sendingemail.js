const express = require('express');
const router = express.Router();
const { sendEmailEjs } = require('../controllers/sendwithejs')
const { sendEmailText } = require('../controllers/sendwithtext')
const { sendEmailHtml } = require('../controllers/sendwithhtml')
const { sendEmailAttachments } = require('../controllers/sendattachments')
router.post('/sending/email/ejs', sendEmailEjs)
router.post('/sending/email/text', sendEmailText)
router.post('/sending/email/html', sendEmailHtml)
router.post('/sending/email/attachments', sendEmailAttachments)


module.exports = router;