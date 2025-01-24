import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "@/Redux/Slices/AuthSlice";
import { Link } from "react-router-dom";

const MainContent = ({ user }) => {
  const dispatch = useDispatch();

  const initialFormState = {
    title: "",
    discription: "",
    category: "",
    dueDate: "",
    priority: "MEDIUM",
    status: "TODO",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [addTaskPopup, setAddTaskPopup] = useState(false);
  const [editTaskPopup, setEditTaskPopup] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask(formData));
    setAddTaskPopup(false);
    setFormData(initialFormState);
  };

  const handleEditTask = (task) => {
    setEditTaskId(task.id || task._id);
    setFormData(task);
    setEditTaskPopup(true);
  };
  console.log(formData , editTaskId)

  const handleUpdateTask = (e) => {
    e.preventDefault();
    dispatch(editTask({ ...formData, taskId: editTaskId }));
    setEditTaskPopup(false);
    setFormData(initialFormState);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          className="border flex items-center justify-center border-1 rounded-xl border-black border-dashed h-[9rem] cursor-pointer"
          onClick={() => setAddTaskPopup(true)}
        >
          <IoIosAdd className="text-5xl" />
        </div>

        {user?.data?.tasks?.map((task) => (
          <div
            key={task.id || task._id}
            className="border border-1 bg-gray-800 text-white rounded-[1rem] shadow-lg p-4 h-48 flex flex-col justify-between"
          >
            <div className="bg-white text-black rounded-t-lg py-1 px-2 text-center font-bold uppercase">
              {task?.title}
            </div>
            <div className="p-2 flex-1">
              <p className="text-sm mb-2 line-clamp-2">{task?.discription}</p>
              <p className="text-xs text-gray-400 ">{`Due: ${task?.dueDate}`}</p>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="text-xs text-blue-400  underline"
                onClick={() => handleEditTask(task)}
              >
                Edit
              </button>
              <p className="text-sm font-medium">Status: {task?.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Popup */}
      {addTaskPopup && (
        <TaskPopup
          title="Add Task"
          formData={formData}
          handleInput={handleInput}
          handleSubmit={handleAddTask}
          onClose={() => setAddTaskPopup(false)}
        />
      )}

      {/* Edit Task Popup */}
      {editTaskPopup && (
        <TaskPopup
          title="Edit Task"
          formData={formData}
          handleInput={handleInput}
          handleSubmit={handleUpdateTask}
          onClose={() => setEditTaskPopup(false)}
        />
      )}
    </>
  );
};

const TaskPopup = ({ title, formData, handleInput, handleSubmit, onClose }) => (
  <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
    <div className="relative top-20 mx-auto shadow-xl rounded-md bg-white max-w-md">
      <div className="p-4">
        <h1 className="p-4 text-center text-xl font-serif">{title}</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            required
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Title"
            value={formData.title}
            onChange={handleInput}
          />
          <input
            name="discription"
            type="text"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Description"
            value={formData.discription}
            onChange={handleInput}
          />
          <input
            name="category"
            type="text"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Category"
            value={formData.category}
            onChange={handleInput}
          />
          <input
            name="dueDate"
            type="date"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            value={formData.dueDate}
            onChange={handleInput}
          />
          <select
            name="priority"
            value={formData.priority}
            onChange={handleInput}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
          >
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
          <select
            name="status"
            value={formData.status}
            onChange={handleInput}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
          >
            <option value="TODO">To Do</option>
            <option value="PROGRESS">In Progress</option>
            <option value="COMPLETE">Complete</option>
          </select>
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default MainContent;
