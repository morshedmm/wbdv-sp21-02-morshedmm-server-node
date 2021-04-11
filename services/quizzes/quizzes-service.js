
/*
const quizzes = require("./quizzes.json")

const quizzesModel = require("../../models/quizzes/quizzes-model")

const createQuiz = () => {}
const findAllQuizzes = () => {
    return quizzesModel.find()
}
const findQuizById = (qid) => {
    return quizzesModel
        .findById(qid)
        .populate("questions")
        .exec()

}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes, findQuizById,
    updateQuiz, deleteQuiz
}
*/

const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }

