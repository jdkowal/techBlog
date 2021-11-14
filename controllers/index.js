const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboard-routes');


router.use("/homeRoutes", homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes)


module.exports = router;