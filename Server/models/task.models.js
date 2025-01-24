import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },
    discription: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      default: ["School", "office", "Home", "College"],
    },

    dueDate: {
      type: String,
    },
    priority: {
      type: String,
      enum: ["HIEGH", "MEDIUM", "LOW"],  // for providing specific predefine value
      default: "MEDIUM",
    },
    status: {
      type: String,
      enum: ["TODO", "PROGRESS", "COMPLETE"],
      default: "TODO",
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", TaskSchema);
