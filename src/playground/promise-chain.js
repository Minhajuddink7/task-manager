// const express= require('express');
require("../db/mongoose");

const Task = require("../models/task");
const User = require("../models/user");

// Task.findByIdAndDelete("5e6498e020e40487209da4d4")
//   .then(() => Task.countDocuments({ completed: false }))
//   .then(count => console.log(count))
//   .catch(e => console.log(e));

const deleteTask = async id => {
  await Task.findByIdAndDelete(id);
  return await Task.countDocuments({ completed: false });
};

deleteTask("5e64fcf737464c068d8cfa74")
  .then(count => {
    console.log(count);
  })
  .catch(e => console.log(e));
