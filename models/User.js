import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { getPreviouslyCachedImageOrNull } from "next/dist/server/image-optimizer";

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    cartItems: { type: Object, required: true },
}, { minimize: false });

const User = mongoose.models.user || mongoose.models('user', userSchema)

export default User;