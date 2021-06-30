var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.render ('about',{title:'Information About the site and author'})
});


module.exports = router;