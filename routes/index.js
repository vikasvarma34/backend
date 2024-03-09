const express = require('express');
const router = express.Router();


const formsRoutes = require('../app/forms/routes/formsRoutes');
const responseRoutes = require('../app/forms/routes/responseRoutes');

router.use('/forms', formsRoutes);

router.use('/response', responseRoutes);


module.exports = router;
