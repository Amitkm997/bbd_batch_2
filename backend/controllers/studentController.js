import Student from "../models/student.js";
import bcrypt from "bcrypt";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const register = async (req, res) => {
    try {
        const { name, email, password, role, course, skills } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Name must be provided"
            });
        }

        if (!email) {
            return res.status(400).json({
                message: "Email must be provided"
            });
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email"
            });
        }

        if (!password) {
            return res.status(400).json({
                message: "Password must be provided"
            });
        }

        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student = await Student.create({
            name,
            email,
            password: hashedPassword,
            role,
            course,
            skills
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            student
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};