import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
});

const Login = mongoose.model('Login', loginSchema);

export default Login;

