const mongoose = require("mongoose");
// const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// const Task = mongoose.model("Task", {
//   description: { type: String, required: true, trim: true },
//   completed: { type: Boolean, required: false, default: false }
// });

// const task1 = new Task({ description: "Complete nodejs course" });
// task1
//   .save()
//   .then(res => console.log(res))
//   .catch(err => {
//     console.log(err);
//   });

// const me = new User({
//   name: "Minhaj",
//   age: 27,
//   email: "minhajuddink7@gmail.com",
//   password: "sdfslkdfsd"
// });
// me.save()
//   .then(me => console.log(me))
//   .catch(err => {
//     console.log(err);
//   });
// const User = mongoose.model("User", {
//   name: { type: String },
//   age: { type: Number }
// });

// const me = new User({ name: "Minhaj", age: 27 });
// me.save()
//   .then(me => console.log(me))
//   .catch(err => console.log(err));
// const Task = mongoose.model("Task", {
//   name: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// });
// const task1 = new Task({ name: "Complete nodejs course", completed: false });
// const task2 = new Task({ name: "Build React Apps", completed: false });

// task1
//   .save()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
// task2
//   .save()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
