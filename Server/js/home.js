__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {res.sendFile(__path + '/pages/index.html')})

// sendFile
// css
router.get('/css/main.css', async(req, res) => {res.sendFile(__path + '/css/main.css')})
router.get('/css/all.min.css', async(req, res) => {res.sendFile(__path + '/css/all.min.css')})
router.get('/css/bootstrap.min.css', async(req, res) => {res.sendFile(__path + '/css/bootstrap.min.css')})
router.get('/css/admin.min.css', async(req, res) => {res.sendFile(__path + '/css/admin.min.css')})
router.get('/css/all.min.css', async(req, res) => {res.sendFile(__path + '/css/all.min.css')})

// image file
// jpg
router.get('/server1.jpg', async(req, res) => {res.sendFile(__path + '/images/server1.jpg')})
router.get('/server2.jpg', async(req, res) => {res.sendFile(__path + '/images/server2.jpg')})
router.get('/server3.jpg', async(req, res) => {res.sendFile(__path + '/images/server3.jpg')})
router.get('/server4.jpg', async(req, res) => {res.sendFile(__path + '/images/server4.jpg')})
router.get('/server5.jpg', async(req, res) => {res.sendFile(__path + '/images/server5.jpg')})
router.get('/main.jpg', async(req, res) => {res.sendFile(__path + '/images/main.jpg')})
router.get('/Ajay.jpg', async(req, res) => {res.sendFile(__path + '/images/Ajay.jpg')})
router.get('/server.jpg', async(req, res) => {res.sendFile(__path + '/images/server4.jpg')})
router.get('/images/2236553.jpg', async(req, res) => {res.sendFile(__path + '/images/2236553.jpg')})
// webp
router.get('/images/background.webp', async(req, res) => {res.sendFile(__path + '/images/background.webp')})
// png
router.get('/images/Untitled-1.png', async(req, res) => {res.sendFile(__path + '/images/Untitled-1.png')})
// ico
router.get('/images/favicon.ico', async(req, res) => {res.sendFile(__path + '/images/favicon.ico')})
router.get('platypus.ico', async(req, res) => {res.sendFile(__path + '/images/platypus.ico')})


// js file
router.get('/nicepage.js', async(req, res) => {res.sendFile(__path + '/js/nicepage.js')})
router.get('/jquery.js', async(req, res) => {res.sendFile(__path + '/js/jquery.js')})
router.get('/js/highlight.min.js', async(req, res) => {res.sendFile(__path + '/js/highlight.min.js')})


//router.get('', async(req, res) => {res.sendFile('')})
//router.get('', async(req, res) => {res.sendFile('')})

router.use(function (req, res) {res.status(404).sendFile(__path + '/pages/404.html')});


module.exports = router
