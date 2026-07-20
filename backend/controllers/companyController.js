import Company from "../models/company.js";

export const addCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);

        res.status(201).json({
            success: true,
            message: "Company created successfully",
            company
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};