var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Tokbox: Beer Bash',
    apiKey: '45752672',
    sessionId: '1_MX40NTc1MjY3Mn5-MTQ4NDk0OTQxMzY3Nn5venA4Uk9hTzRhZjhqSHRhclNzWWhHTnd-fg',
    token: 'T1==cGFydG5lcl9pZD00NTc1MjY3MiZzaWc9N2MzZTRkMDQyMzEwZmZiYWY1ZTRhMjAyNzQxMTc2ZjI5NjQyNjhjNjpzZXNzaW9uX2lkPTFfTVg0ME5UYzFNalkzTW41LU1UUTRORGswT1RReE16WTNObjV2ZW5BNFVrOWhUelJoWmpocVNIUmhjbE56V1doSFRuZC1mZyZjcmVhdGVfdGltZT0xNDg0OTQ5NDIxJm5vbmNlPTAuMjc4ODIyNTc1MjkzNDYxMiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDg3NTQxNDIw'
  });
});

router.get('/game', function(req, res, next) {
  res.render('game', {
    title: 'Tokbox: Beer Bash',
    apiKey: '45752672',
    sessionId: '1_MX40NTc1MjY3Mn5-MTQ4NDk0OTQxMzY3Nn5venA4Uk9hTzRhZjhqSHRhclNzWWhHTnd-fg',
    token: 'T1==cGFydG5lcl9pZD00NTc1MjY3MiZzaWc9N2MzZTRkMDQyMzEwZmZiYWY1ZTRhMjAyNzQxMTc2ZjI5NjQyNjhjNjpzZXNzaW9uX2lkPTFfTVg0ME5UYzFNalkzTW41LU1UUTRORGswT1RReE16WTNObjV2ZW5BNFVrOWhUelJoWmpocVNIUmhjbE56V1doSFRuZC1mZyZjcmVhdGVfdGltZT0xNDg0OTQ5NDIxJm5vbmNlPTAuMjc4ODIyNTc1MjkzNDYxMiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDg3NTQxNDIw'
  });
});

module.exports = router;
