var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET author page. */
router.get('/author', function(req, res) {
  res.render('author', { name: 'Roberto Álvarez Sánchez', photo: '/images/mapache.jpg', video: 'https://www.youtube.com/embed/_g85U_MjrZY' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
