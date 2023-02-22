// import User from "../models/User.js";
import schemaRole from "../models/role.js"
import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";
const userLogin = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // try {
    //     const existingUser = await User.findOne({ email: email });
    //     if (!existingUser) {
    //         return res.status(400).json({ message: "Enter correct Email" });
    //     }

    
    try {
        const existingUser = await schemaRole.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ message: "Enter correct Email" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password" });
        }
        const role = existingUser.role;

        const token = Jwt.sign({ userId: existingUser._id }, process.env.SECRET_KEY, { expiresIn: "5h" });
        return res.status(200).json({ message: "Successfully Logged In", token: token , role:role});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default userLogin;
