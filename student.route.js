const router = require("express").Router();

router.get('/students', (req, res,next) => {
    res.send(`<ul style="font-size:3em;">
    <li>ahmed</li>
    <li>mohamed</li>
    <li>omar</li>
    <li>abdelrahman</li>
    </ul>`)
  })


module.exports = router;
