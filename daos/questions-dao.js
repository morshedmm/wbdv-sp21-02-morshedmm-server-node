const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
//const findQuestionsForQuiz = (qzid) => quizzesModel.find({quizId: qzid})
//       .populate('questions').then(quiz => quiz.questions)
const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId: qzid})
    }
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }