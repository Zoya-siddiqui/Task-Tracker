import AppError from "../utils/AppError.utils.js";
import asynchandler from "../utils/AsyncHandler.utils.js";
import { User } from "../models/user.models.js";
import { Task } from "../models/task.models.js";

const generateAccessAndRefereshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const refereshToken = user.generateRefereshToken();
    const accessToken = user.generateAccessToken();

    user.refereshToken = refereshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refereshToken };
  } catch (error) {
    throw new AppError(500, "something went wrong");
  }
};

const registerUser = asynchandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if ([fullName, email, password].some((feild) => feild.trim() === "")) {
    throw new AppError(400, "All Feild Are required");
  }
  // checcking email allready exist or not
  // if i want to check two feild then
  // const existinguser =await User.findOne({
  //  $or: [{userName}, {email}]
  //})

  const existingemail = await User.findOne({ email });

  if (existingemail) {
    throw new AppError(400, "email already exist ");
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  console.log(user);
  const createdUser = await User.findById(user._id).select(
    "-password -refereshToken"
  );
  console.log(createdUser);
  if (!createdUser) {
    throw new AppError(500, "sommething went wrong ");
  }

  return res
    .status(200)
    .json(new AppError(200, createdUser, "Usr registerd sucessfully "));
});

const loginUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    throw new AppError(400, "email and password are requires");
  }

  console.log(1);

  // user email hai yaa nhi
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new AppError(400, "user not Exist");
  }

  console.log(user);
  //password valid hai yaa nhi
  console.log(2);
  console.log("function is breaking");
  const ispasswordcorrect = await user.isPasswordCorrect(password);

  console.log("this is ispassword correct ", ispasswordcorrect);
  if (!ispasswordcorrect) {
    throw new AppError(401, "invalid password");
  }
  // if each and every thing is correct then generate refresh token
  console.log(3);
  const { accessToken, refereshToken } = await generateAccessAndRefereshToken(
    user._id
  );

  console.log(4);
  const loginUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  console.log(5);
  //    now setting cookiess
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refereshToken", refereshToken, options)
    .json({
      success: true,
      message: "loging sccessflly",
      loginUser,
      accessToken,
      refereshToken,
    });
});

const fetchProfile = asynchandler(async (req, res) => {
  console.log(req.user);

  const userId = req.user._id;
  console.log(userId);
  const isExist = await User.findById(userId)
    .select("-refereshToken")
    .populate("tasks");
  console.log("myuser", isExist);
  if (!isExist) {
    throw new AppError(404, "user does not exist");
  }

  return res.status(200).json({
    success: true,
    data: isExist,
    message: "User Profile fetched successfully",
  });
});

const createTask = asynchandler(async (req, res) => {
  console.log("creating task", req.user);
  const userId = req.user._id;
  const { title, discription, category, dueDate, priority, status } = req.body;
  console.log(req.body);
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(404, "user not found ");
  }

  if (!title || !discription || !category || !dueDate || !priority || !status) {
    throw new AppError(400, "All Feilds Are required ");
  }

  const task = await Task.create({
    owner: userId,
    title,
    discription,
    category,
    dueDate,
    priority,
    status,
  });

  user.tasks.push(task._id);
  await user.save();

  res.status(200).json({
    success: true,
    message: "Task Created Sucessfully",
    task,
  });
});

const editTask = asynchandler(async (req, res) => {
  const userId = req.user._id;
  const { taskid } = req.params;
  const { title, description, category, dueDate, priority, status } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(404, "User not found");
  }

  console.log(user);
  console.log(taskid)

  const task = await Task.findById(taskid)
  console.log("mytask",task)
  if (!task) {
    throw new AppError(404, "Task not found");
  }


  console.log( "body", req.body)
  if (title) task.title = title;
  // if (description) task.discription = discription;
  if (category) task.category = category;
  if (dueDate) task.dueDate = dueDate;
  if (priority) task.priority = priority;
  if (status) task.status = status;

   console.log("clg before saving" , title  , category )
  await task.save();
  console.log("data save")

  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    user,
  });
});

export { registerUser, loginUser, fetchProfile, createTask, editTask };
