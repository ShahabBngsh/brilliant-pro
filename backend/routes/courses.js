const express = require('express');
const courseRouter = express.Router();
const conn = require('../db/conn');
const ObjectId = require('mongodb').ObjectId;

courseRouter.route('/api/courses')
  .get(async (req, res) => {
    const db = conn.getDb();
    db.collection('courses')
      .find({}).limit(10).toArray()
      .then(result => res.json(result))
      .catch(err => res.status(err.code).send("Error fetching courses"));
  })
  .post(async (req, res) => {
    const db = conn.getDb();
    db.collection('courses')
      .insertOne(req.body)
      .then(result => {
        console.log(result);
        res.redirect('/api/courses');
      })
      .catch(err => console.log(err));
  })
  .put(async (req, res) => {
    const db = conn.getDb();
    db.collection('courses')
      .findOneAndUpdate(
        { '_id': ObjectId(req.body.id) },
        {
          $set: {
            'title': req.body.title,
            'img': req.body.img,
            'overview': req.body.overview,
            'price': req.body.price,
            'offered-by': req.body.offered_by,
            'skills': req.body.skills,
            'materials': req.body.materials,
            'assesments': req.body.assesments,
            'enrolled': req.body.enrolled,
            'mid': req.body.mid,
            'failed': req.body.failed,
            'passed': req.body.passed,
          }
        }
      )
      .then(result => {
        if (result.deleteCount === 0) {
          res.json('No courses to update')
          console.log('No doc updated')
        } else {
          res.redirect('/api/courses')
          console.log('1 doc updated')
        }
      })
      .catch(error => console.log(error))
  })
  .delete(async (req, res) => {
    const db = conn.getDb();
    const params = { '_id': ObjectId(req.body.id) };
    db.collection('courses')
      .deleteOne(params)
      .then(result => {
        if (result.deleteCount === 0) {
          res.json('No courses to delete')
          console.log('No doc to deleted')
        } else {
          res.json('1 course deleted')
          console.log(params)
        }
      })
      .catch(err => console.log(err))
  });

courseRouter.route('/api/courses/:id').get(async (req, res) => {
  const db = conn.getDb();
  const params = { '_id': ObjectId(req.params.id) };
  db.collection('courses')
    .findOne(params)
    .then(result => res.json(result))
    .catch(err => console.log(err))
});

module.exports = courseRouter;