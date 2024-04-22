
var express = require('express');
const prisma = require('../prisma/client');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-issue',async(req,res,next)=>{
  const body = req.body
  console.log("body",body)
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
console.log("newIssue",newIssue)
  res.send(newIssue)
})

module.exports = router;
