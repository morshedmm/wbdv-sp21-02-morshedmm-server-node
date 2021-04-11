
/*
const questionsModel = require("../../models/questions/questions-model")

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questionsModel.find()

}

const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId: qzid})

}
const findQuestionById = (quid) => {
    return questionsModel.findById(quid)

}

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion, createQuestionForQuiz,
    findAllQuestions, findQuestionById,
    findQuestionsForQuiz,
    updateQuestion, deleteQuestion
}*/



const questionsDao = require('../../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }