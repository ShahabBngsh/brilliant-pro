const express = require('express');
const learnerRouter = express.Router();
const conn = require('../db/conn');
const ObjectId = require('mongodb').ObjectId;

learnerRouter.route('/api/learners')
  .get(async (req, res) => {
    const db = conn.getDb();
    db.collection('learners')
      .find({}).limit(10).toArray()
      .then(result => res.json(result))
      .catch(err => {
        console.log(err);
        res.status(err.code).send("error fetching learners list");
      })
  })
  .post(async (req, res) => {
    const db = conn.getDb();
    db.collection('learners')
      .insertOne(req.body)
      .then(result => {
        console.log('1 new learner added!');
        res.redirect('/api/learners');
      })
      .catch(err => {
        console.log(err);
        res.json('Error while adding new learner');
      })
  })
  .put(async (req, res) => {
    const db = conn.getDb();
    db.collection('learners')
      .findAndUpdateOne(
        { '_id': ObjectId(req.body.id) },
        {
          $set: {
            'name': req.body.title,
            'profile-picture': req.body.profile_picture,
            'bio': req.body.overview,
            'achievements': req.body.achievements,
            'enrolled': req.body.enrolled,
            'assesments': req.body.assesments,
            'balance': req.body.skills,
          }
        }
      )
      .then(result => {
        if (result.deleteCount === 0) {
          res.json('No learner info to update')
          console.log('No learner info updated')
        } else {
          res.redirect('/api/learners')
          console.log('1 learner info updated')
        }
      })
      .catch(err => {
        console.log('Error updaing learner info')
        res.json('Error updaing learner info')
      })
  })
  .delete(async (req, res) => {
    const db = conn.getDb();
    db.collection('learners')
      .deleteOne({ '_id': ObjectId(req.body.id) })
      .then(resulter => {
        if (result.deleteCount === 0) {
          res.json('No learner to remove')
          console.log('No learner to remove')
        } else {
          res.json('1 learner removed')
          console.log(params)
        }
      })
      .catch(err => console.log('Error deleting learner: ' + err))
  });

learnerRouter.route('/api/learners/:id')
  .get(async (req, res) => {
    const db = conn.getDb();
    db.collection('learners')
      .findOne({ '_id': ObjectId(req.params.id) })
      .then(result => res.json(result))
      .catch(err => console.log(err))
  });

module.exports = learnerRouter