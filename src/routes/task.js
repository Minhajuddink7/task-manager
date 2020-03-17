const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const auth = require("../middleware/auth");
router.get("/all-tasks", auth, async (req, res) => {
  const match = {};
  const sort = {};
  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }
  try {
    // const tasks = await Task.find({ owner: req.user._id }); or
    await req.user
      .populate({
        path: "tasks",
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.send(req.user.tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send({ message: "No task found" });
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
  // Task.findById(_id)
  //   .then(task => {
  //     if (!task) {
  //       return res.status(404).send({ message: "No tasks found" });
  //     }
  //     res.send(task);
  //   })
  //   .catch(e => res.status(500).send(e));
});
router.post("/add-task", auth, async (req, res) => {
  const task = new Task({ ...req.body, owner: req.user._id });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }

  // task
  //   .save()
  //   .then(() => res.status(201).send(task))
  //   .catch(e => res.status(400).send(e));
});
// update a task
router.patch("/tasks/:id", auth, async (req, res) => {
  // const task = new Task(req.body);
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "completed"];
  const isOperationValid = updates.every(update =>
    allowedUpdates.includes(update)
  );
  if (!isOperationValid) {
    res.status(400).send({ error: "Invalid Operation" });
  }
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    // const newTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true
    // });
    if (!task) {
      return res.status(404).send();
    }
    updates.forEach(update => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete a task
router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});
module.exports = router;