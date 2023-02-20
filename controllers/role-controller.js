import schemaRole from '../models/role.js';
import bcrypt from "bcrypt";
const addRole = async (req, res) => {
  const { userName, email, password, role } = req.body;
  try {
    const existingUser = await schemaRole.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userRole = new schemaRole({
      userName,
      email,
      password: hashedPassword,
      role
    });
    const newuserRole = await userRole.save();
    return res.status(201).json({ message: "Role added successfully", performance: newuserRole });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
  const getRole = async (req, res) => {
    //   const employeeID = req.params.id;
      try {
        const gettingRole = await schemaRole.find({})
        if (!gettingRole) {
          return res.status(400).json({ message: "Role not found" });
        }
        return res.status(200).json(gettingRole);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };

    const updateRole = async (req, res) => {
        const employeeID = req.params.id;
        try {
          const updatedRole = await schemaRole.findOneAndUpdate(
            { employeeID },
            {
              $set: {
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
              }
            },
            { new: true }
          );
          if (!updatedRole) {
            return res.status(400).json({ message: "Role not found" });
          }
          return res.status(201).json(updatedRole);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      };
    

      const deleteRole = async (req, res) => {
        const employeeID = req.params.id;
        try {
          const deletedRole = await schemaRole.findOneAndDelete({ employeeID });
          if (!deletedRole) {
            return res.status(404).json({ message: "Employee ID not found" }); // return 404 for not found
          }
          return res.status(200).json({ message: "Role deleted successfully" });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "Server error" }); // return a generic message for server error
        }
      };
    



  export {addRole , getRole , updateRole , deleteRole};