const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const glob = require('glob');
const AWS = require('aws-sdk');

const port = process.env.PORT || 3000;
const router = express.Router();

require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey
});

const s3 = new AWS.S3();

app.use(express.static('dest'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
  res.end();
});

app.get('/resources/images/:layer/:id', function(req, res) {
  const images = [];
  const prefix = req.params.layer === 'projects' ? `welfare-rev/${req.params.layer}/${req.params.id}/Photo/` :
    `welfare-rev/${req.params.layer}/${req.params.id}/`;
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Delimiter: '/',
    Prefix: prefix
  };

  s3.listObjects(s3Params, function(err, data) {
    if (err) {
      console.error('There was an error reading the file!', err);
    }
    data.Contents.forEach(function(file) {
      images.push(file.Key);
    });
    sendResponse(images);
  });

  function sendResponse(results) {
    res.json({ data: results});
    res.end();
  }
});

app.get('/resources/other/:layer/:id', function(req, res) {
  const others = [];
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Delimiter: '/',
    Prefix: `welfare-rev/${req.params.layer}/${req.params.id}/Misc/`
  };
  s3.listObjects(s3Params, function(err, data) {
    if (err) {
      console.error('There was an error reading the file!', err);
    }
    data.Contents.forEach(function(file) {
      others.push(file.Key);
    });
    sendResponse(others);
  });

  function sendResponse(results) {
    res.json({ data: results});
    res.end();
  }
});

app.listen(port);
console.log('on port', port);
