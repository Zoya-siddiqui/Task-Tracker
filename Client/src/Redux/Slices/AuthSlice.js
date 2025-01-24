import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  isLogedIn: localStorage.getItem("isLoggedIn") === "true" ? true : false,
  user: null,
  error: null,
};

export const createAccount = createAsyncThunk(
  "/user/register",
  async (data) => {
    try {
      const response = await toast.promise(
        axiosInstance.post("/user/register", data),
        {
          loading: "Creating account...",
          success: (res) => res?.message || "Account Created Sucessfully",
          error: (res) => res?.message,
        }
      );
      return response.data;
    } catch (e) {
      return toast.error(e?.response?.data?.message);
    }
  }
);

export const loginUser = createAsyncThunk("/user/login", async (data) => {
  try {
    const response = await toast.promise(
      axiosInstance.post("/user/login", data),
      {
        loading: "Login.....",
        success: (res) => res.message || "Login Sucessfully",
        error: (res) => res?.message,
      }
    );
    return response.data;
  } catch (e) {
    return toast.error(e?.response?.data?.message);
  }
});

export const fetchProfile = createAsyncThunk(
  "/user/profile",
  async (req, res) => {
    try {
      const res = await axiosInstance.get("/user/profile");
      return res?.data;
    } catch (error) {
      return toast.error(error?.message);
    }
  }
);

// title , discription , category , dueDate , priority , status
export const addTask = createAsyncThunk('/user/create-task' , async(data)=>{
  try{
    const res = await toast.promise(
      axiosInstance.post('/user/create-task' , data),
      {
        loading : "loading.......",
        success : (res)=> res.message || "Task added successfully",
        error : (res)=>res?.message,
      }
    )
    return res.data

  }
  catch(e){
    return toast.error(e?.response?.data?.message);
  }
})


export const editTask = createAsyncThunk('/user/edit-task'  ,async(data)=>{
  try{
    const { taskId, title, discription, category, dueDate, priority, status } = data;

    const res = await toast.promise(
      axiosInstance.put(`/user/edit-task/${taskId}`, { title, discription, category, dueDate, priority, status }),
      {
          loading : "updating ............",
          success : (res)=> res?.message || "task Updated Sccessfully",
          error: (res)=> res?.message
      }
    )
    return res.data

  }
  catch(error){
    return toast.error(e?.response?.data?.message);
  }
})


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem("isLoggendIn", true);
        state.isLogedIn = true;
        state.user = action.payload;
        state.loading = false;
      }).addCase(fetchProfile.fulfilled , (state , action)=>{
        state.user = action?.payload
      }).addCase(addTask.fulfilled , (state , action)=>{
        if (state.user?.data?.tasks) {
          state.user.data.tasks.push(action.payload.task);
      }
      }).addCase(editTask.fulfilled, (state, action) => {
        state.tasks = action.payload; 
      })
  },
});

export const authReducer = authSlice.reducer;
