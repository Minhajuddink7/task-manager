const express = require("express");
require("./db/mongoose");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   const user = await User.findById("5e6f7615b0755dae18007f6f");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();
