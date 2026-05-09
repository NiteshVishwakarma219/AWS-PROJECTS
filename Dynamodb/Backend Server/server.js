const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
AWS.config.update({
  region: process.env.AWS_REGION
});
const dynamodb = new AWS.DynamoDB.DocumentClient();
app.get('/', (req, res) => {
  res.send('Student Management Backend Running');
});
app.post('/add-student', async (req, res) => {
  const {
    StudentID,
    FullName,
    FatherName,
    MotherName,
    Email,
    Phone,
    Course,
    Department,
    Year,
    City,
    State,
    Country,
    BloodGroup,
    Gender
  } = req.body;
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      StudentID,
      FullName,
      FatherName,
      MotherName,
      Email,
      Phone,
      Course,
      Department,
      Year,
      City,
      State,
      Country,
      BloodGroup,
      Gender
    }
  };
  try {
    await dynamodb.put(params).promise();
    res.send('Student Added Successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
app.get('/students', async (req, res) => {
  const params = {
    TableName: process.env.TABLE_NAME
  };
  try {
    const data = await dynamodb.scan(params).promise();
    res.json(data.Items);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});