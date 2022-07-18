import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    email: {
        to: {type: String, required: true},
        from: {type: String, required: true},
        subject: {type: String, required: true},
        message: {type: String, default: "Hi"},
        createdAt: {
            type: Date,
            default: new Date()
        }
    }
});

const Users = mongoose.model('Users', usersSchema);

export default Users;

