var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Tokbox: Beer Bash',
    apiKey: '45752672',
    sessionId: '1_MX40NTc1MjY3Mn5-MTQ4NDg2MDYzMDk4Nn4rbU5zT3pLdGFNdlJOYmFLVTVKeE5WZHN-fg',
    token: 'T1==cGFydG5lcl9pZD00NTc1MjY3MiZzaWc9ODQ5YzM5ZmI2MzkyMjJiMGUyZWM5ZmE2ODM0NTgyNzQyMGNiMWM0MzpzZXNzaW9uX2lkPTFfTVg0ME5UYzFNalkzTW41LU1UUTRORGcyTURZek1EazRObjRyYlU1elQzcExkR0ZOZGxKT1ltRkxWVFZLZUU1V1pITi1mZyZjcmVhdGVfdGltZT0xNDg0ODYwNjU2Jm5vbmNlPTAuODM2MDE1OTQ1NTM0NzcyNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDg3NDUyNjU1'
  });
});

router.get('/game', function(req, res, next) {
  res.render('game', {
    title: 'Tokbox: Beer Bash',
    apiKey: '45752672',
    sessionId: '1_MX40NTc1MjY3Mn5-MTQ4NDg2MDYzMDk4Nn4rbU5zT3pLdGFNdlJOYmFLVTVKeE5WZHN-fg',
    token: 'T1==cGFydG5lcl9pZD00NTc1MjY3MiZzaWc9ODQ5YzM5ZmI2MzkyMjJiMGUyZWM5ZmE2ODM0NTgyNzQyMGNiMWM0MzpzZXNzaW9uX2lkPTFfTVg0ME5UYzFNalkzTW41LU1UUTRORGcyTURZek1EazRObjRyYlU1elQzcExkR0ZOZGxKT1ltRkxWVFZLZUU1V1pITi1mZyZjcmVhdGVfdGltZT0xNDg0ODYwNjU2Jm5vbmNlPTAuODM2MDE1OTQ1NTM0NzcyNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDg3NDUyNjU1'
  });
});

module.exports = router;
