const mongoose = require('mongoose')
const Teacher = require('../models/teacher')

module.exports = {
    getTeachers(req, res, next) {
        Teacher
            .find()
            .select('name students _id')
            .exec()
            .then(result => {
                if (result.length >= 0) {
                    console.log(result)
                    res.status(200).json({
                        message: 'GET request to /teachers',
                        teachers: result
                    })
                } else {
                    res.status(404).json({
                        message: 'No enteries found'
                    })
                }
            })
            .catch(error =>
                res.status(500).json({
                    error: error
                })
            )
    },

    createTeacher(req, res, next) {
        const { name } = req.body
        const teacher = new Teacher({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            students: []
        })
        teacher
            .save()
            .select('name students _id')
            .exec()
            .then(result =>
                res.status(200).json({
                    message: 'Created new teacher succsessfully',
                    teacher: result
                })
            )
            .catch(error =>
                res.status(500).json({
                    error: error
                })
            )
    },

    editTeacher(req, res, next) {
        const { teacherId } = req.params
        const { newName, oldName } = req.body
        Teacher
            .findOneAndUpdate(
                { _id: teacherId }, 
                { $set: { name: newName } }, 
                { 'new': true}
            )
            .select('name students _id')
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Updated teacher',
                    teacher: result
                })
            })
            .catch(error =>
                res.status(500).json({
                    error: error
                })
            )
    },

    removeTeacher(req, res, next) {
        const { teacherId } = req.params
        Teacher
            .remove({ _id: teacherId })
            .select('name students _id')
            .exec()
            .then(result =>
                res.status(200).json({
                    teacher: result
                })
            )
            .catch(error =>
                res.status(500).json({
                    error: error
                })
            )
    }

}