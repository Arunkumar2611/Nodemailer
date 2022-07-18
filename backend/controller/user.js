import Users from '../model/user.js';
import Login from '../model/login.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createEmail = async (req, res) => {
    const { email } = req.body;
    const { to, from, message } = email;
    const data = {
        to: to,
        from: from,
        message: message
    }
    const newEmail = new Users({ email: data,  createdAt: new Date().toISOString() });
    try {
        await newEmail.save();
        res.status(201).json(newEmail);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getEmail = async (req, res) => { 
    try {
        const email = await Users.find();
        res.status(200).json(email);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await Login.findOne({ email });
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });
        const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });
        res.status(200).json({ result: existingUser, token});
    } catch (error) {
        console.log(error.stack);
        res.status(500).json({ message: "Something went wrong!" });
    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    try {
        const existingUser = await Login.findOne({ email });
        if(existingUser) return res.status(400).json({ message: "User already exist." });
        if(password !== confirmPassword) return res.status(400).json({ message: "password don't match." });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await Login.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });
        res.status(200).json({ result, token });
    } catch (error) {
        console.log(error.stack);
        res.status(500).json({ message: "Something went wrong!" });
    }
}

export const saveEmailData = async (data) => {
    const { from, to, subject, message } = data;
    const email = {
        from: from,
        to: to,
        subject: subject,
        message: message
    }
    const newData = new Users({ email: email,  createdAt: new Date().toISOString() });
    try {
        await newData.save();
    } catch (error) {
        console.log("Error: ", error.message);
    }
}