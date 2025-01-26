import express from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
require("dotenv").config();

router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password, gender, dateOfBirth } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        console.log(password);
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(bcrypt.compare(hashedPassword, bcrypt.hash(password,10)));

        // Create new user
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, gender, dateOfBirth });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Check password
        let hashedPassword = await bcrypt.hash(password, 10);
        const isPasswordValid = await bcrypt.compare(hashedPassword, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        if (!token) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }
        res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

export const authRoutes = router;