import Student from "../models/student.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

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

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message:`
                  Requirements \n
                  At least one lowercase letter \n
                  At least one uppercase letter \n
                  At least one digit \n
                  Minimum 8 characters
                `
            })
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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email) {
            return res.status(404).json({
                success: true,
                message: "Email must be provided"
            })
        }
        if (!password) {
            return res.status(404).json({
                success: true,
                message: "password must be provided"
            })
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email"
            })
        }

        const student = await Student.findOne({ email });

        if (!student) {
            return res.status(400).json({
                message: "Student not found"
            })
        }

        let comparedPassword = await bcrypt.compare(password, student.password);

        if (!comparedPassword) {
            return res.status(400).json({
                message: "password not matched"
            })
        }

        let token = await jwt.sign(
            { email: email, id: student._id },//payload
            "secret key", //secret key
            { expiresIn: "2d" } // token validity
        );

        return res.status(400).json({
            success: true,
            message: "token generated successfully",
            token: token
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getAllStudents = async (req, res) => {
    try {
        let students = await Student.find();

        console.log(`Total no. of students ${students.length}`)

        if (students.length == 0) {
            return res.status(404).json({
                success: false,
                message: "No Students found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Got all students list",
            students: students
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const student = await Student.findById(id);

        if (!student) {
            return res.status(400).json({
                success: false,
                message: "Student Not Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Student Received",
            student: student
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params

        const student = await Student.findByIdAndUpdate(id,
            req.body, { new: true });

        if (!student) {
            return res.status(400).json({
                success: false,
                message: "No student found"
            })

        }

        return res.status(200).json({
            success: true,
            message: "Student updated successfully",
            student: student
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(400).json({
                success: false,
                message: "No student found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Student Deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message
        })
    }
}