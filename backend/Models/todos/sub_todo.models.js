import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,

  },
  complete: {
    type: Boolean,
    default: false,

  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',

  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo",
    }
  ] //array of sub todos
}, { timestamps: true })


export const SubTodo = mongoose.model('SubTodo', subTodoSchema)
