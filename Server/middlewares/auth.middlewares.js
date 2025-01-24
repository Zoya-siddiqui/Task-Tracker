import { User } from "../models/user.models.js";
import AppError from "../utils/AppError.utils.js";
import asynchandler from "../utils/AsyncHandler.utils.js";
import jwt from "jsonwebtoken";

export const varifyJWT = asynchandler(async (req, res, next) => {
    const token = req.cookies.accessToken

    console.log("Token from cookies:", token);

    if (!token) {
        throw new AppError(401, "Unauthorized Request: No token found.");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken._id).select("-password -refreshToken");

        if (!user) {
            throw new AppError(400, "Invalid Access Token");
        }

        req.user = decodedToken;
        next();
    } catch (error) {
        throw new AppError(401, "Unauthorized Request: Invalid Token");
    }
});
