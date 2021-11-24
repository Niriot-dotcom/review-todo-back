import TodoModel from "../models/models.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const createTodo = async (req, res) => {
  // console.log("body request:\n", req.body)
  const todo = new TodoModel(req.body);
  try {
    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    // const del = await TodoModel.findByIdAndDelete();
    // console.log(req.body.id);
    let idTodo = req.body.id;
    await TodoModel.findByIdAndDelete(idTodo);
    res.status(200).json({
      message: idTodo + " deleted",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
