const userControl = require('../controllers/userControl');
const auth = require('../middleware/auth');

const router = require('express').Router();

router.post('/register',userControl.register)
router.post('/login',userControl.login)
router.get('/logout',userControl.logout)
router.post('/refreshtoken',userControl.refreshtoken)
router.get('/information',auth,userControl.getUser)


module.exports = router;