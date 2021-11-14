const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./homeRoutes');


router.use("/homeRoutes", homeRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;