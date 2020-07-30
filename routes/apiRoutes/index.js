//apiRoutes/index.js is being used as a central hub for all routing functions to be added to the application
const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
//router can use new zookeeper routes
router.use(require('./zookeeperRoutes'));

module.exports = router;