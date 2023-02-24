import Employee from "../models/employeePro.js";

const employeeProfile = async (req, res) => {
  const { address, dataOfBirth, emergencyContactInfo, personalEmail, personalPhoneNumber } = req.body;

  try {
    const existingEmployee = await Employee.findOne({ personalEmail });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee profile already exists" });
    }

    const employee = new Employee({
      address,
      dataOfBirth,
      emergencyContactInfo,
      personalEmail,
      personalPhoneNumber,
    });

    const newEmployee = await employee.save();

    if (newEmployee) {
      return res.status(201).json({ message: "Employee profile added successfully", employee: newEmployee });
    } else {
      return res.status(400).json({ message: "Unable to save" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};



const employeeget = async (req, res) => {
  await Employee.find().then(data => { res.status(200).json(data)
    console.log(data);

  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
};

// Update Employee
const employeeUpdate = async (req, res) => {
  const employeeID = req.params.id;
  const updatedEmployee = await Employee.findOneAndUpdate(
    { employeeID },
    {
      $set: {
        address: req.body.address,
        dataOfBirth: req.body.dataOfBirth,
        emergencyContactInfo: req.body.emergencyContactInfo,
        personalEmail: req.body.personalEmail,
        personalPhoneNumber: req.body.personalPhoneNumber,
      },
    },
    { new: true }
  );
  if (!updatedEmployee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  return res.status(200).json({
    message: "Employee updated successfully",
    employee: updatedEmployee,
  });
};
// Delete Employee
const employeeDelete = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const deletedEmployee = await Employee.findOneAndDelete({ employeeID });
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { employeeProfile, employeeget, employeeUpdate, employeeDelete };
