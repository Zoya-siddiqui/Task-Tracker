import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      // required :[true , 'Name is required ],
      minLength: [3, "name must be more then 3 carecters"],
      maxLength: [30, "name should not  be more then 30"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
      select: false, // this field will not show up automatically when you query the database.
    },
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    refereshToken: {
      type: String,
    },

    //access tken ii short live token 1 hour whhen the user login the accens token generate and  when it expre the refresh token provide new access token so that user to do active work proeprly
  },
  { timestamps: true }
);

// data datebase mai save hone se phele ye kro
UserSchema.pre("save", async function (next) {
  console.log("Pre-save middleware triggered");
  // Check if the password field is modified
  if (!this.isModified("password")) {
    console.log("Password not modified, skipping hashing");
    return next();
  }
  console.log("Hashing password...");
  this.password = await bcrypt.hash(this.password, 10);
  console.log("Password hashed successfully");
  next();
});

// to compare the password is correct or not

UserSchema.methods.isPasswordCorrect = async function (password) {
  console.log("password" , password)
 console.log("hasshed", this.password)
  return await bcrypt.compare(password, this.password);
  // it check the userenter password is same as the hashed passowrd in he db the passowrd is plan and this.passowrd is hasshed passwords
};

// generate TOKEN ACCESS FOR SORT TIME TOKEN

UserSchema.methods.generateAccessToken = function () {
  return jwt.sign({
    _id: this._id,
    email: this.email,
    fullName: this.fullName,
  },

  process.env.ACCESS_TOKEN_SECRET,{
    expiresIn : process.env.ACCESS_TOKEN_EXPIRY
  }
);
};


UserSchema.methods.generateRefereshToken = function (){
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            fullName : this.fullName
        },
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn : process.env.REFERESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", UserSchema);
