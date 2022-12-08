const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "favorites";';

  pool.query(queryText).then((results) => {
    res.send(results.rows);
  }).catch((error) => {
    console.log('error getting favorites: ', error);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "favorites" ("url") VALUES ('${req.body}')`

  pool.query(queryText).then(() => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('error POSTING to db, ', error);
    res.sendStatus(500);
  });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const gifId = req.params.favId;
  const categoryId = req.body.category_id;
  const queryText = 'UPDATE "favorites" SET "category_id"=$1 WHERE id=$2;';

  pool.query(queryText, [categoryId, gifId]).then(() => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error updating favorite category', error);
  });
});

// delete a favorite
router.delete('/', (req, res) => {
  const gifId = req.body.id // send the id in the body (data) of the axios.delete request

  const queryText = 'DELETE FROM "favorites" WHERE "id"=$1;';

  pool.query(queryText, [gifId]).then(() => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error deleting from DB', error);
  });
});

module.exports = router;
