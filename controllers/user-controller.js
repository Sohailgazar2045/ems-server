import User from "../models/User.js";
import bcrypt from "bcrypt";
const useradd = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

       // Hash the password before saving it to the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save the user to the database
        const user = new User({
            email,
            password: hashedPassword
        });
        const newuser = await user.save();

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default useradd;