import schemaRole from '../models/role.js';

const addRole = async (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
       
    // const { employeeID } = req.params;
    // try {
    //   const existingUser = await training.findOne();
    //   if (existingUser) {
    //     return res.status(400).json({ message: "User already exists" });
    //   }
      // save data in database
      const userRole = new schemaRole({
        userName,
        email,
        password,
        role
      });
      const newuserRole = await userRole.save();
      if (newuserRole ) {
        return res.status(201).json({ message: "Role added successfully", performance: newuserRole });
      } else {
        return res.status(400).json({ message: "Unable to save" });
      }
    // } catch (error) {
    //   return res.status(400).json({ message: error.message });
    // }
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