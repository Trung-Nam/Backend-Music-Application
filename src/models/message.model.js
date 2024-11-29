import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: { //Clerk user ID
        type: String,
        require: true
    },
    receiverId: { //Clerk user ID to receiver
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    }
}, { timestamps: true });

export const Message = mongoose.model('Message', messageSchema);