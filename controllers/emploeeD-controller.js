import EmployeeDirectry from '../models/emplyeeD.js';

const addEmployeeToDirectory = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const jobTitle = req.body.jobTitle;
  const department = req.body.department;
  const contactInformation = req.body.contactInformation;
  const dateOfHire = req.body.dateOfHire;

    // save data in database
    const employeeD = new EmployeeDirectry({
      firstName,
      lastName,
      jobTitle,
      department,
      contactInformation,
      dateOfHire
    });
    const newEmployeeDirectory = await employeeD.save();
    if (newEmployeeDirectory) {
      return res.status(201).json({ message: "Employee added to directory successfully", employee: newEmployeeDirectory });
    } else {
      return res.status(400).json({ message: "Unable to save employee to directory" });
    }
  
};

// retrieve data from employee directory
const getEmployeeDirectory = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const employeeDirectory = await EmployeeDirectry.find({})
    if (!employeeDirectory) {
      return res.status(400).json({ message: "Employee ID not found" });
    }
    return res.status(200).json(employeeDirectory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update Employee Directory
const updateEmployeeDirectory = async (req, res) => {
  try {
    const updatedEmployee = await EmployeeDirectry.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          jobTitle: req.body.jobTitle,
          department: req.body.department,
          contactInformation: req.body.contactInformation,
          dateOfHire: req.body.dateOfHire
        }
      },
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(400).json({ message: "Employee not found" });
    }
    return res.status(201).json(updatedEmployee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete employee directory
const deleteDirectory = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const deletedDirectory = await EmployeeDirectry.findOneAndDelete({ employeeID })
    if (!deletedDirectory) {
      return res.status(400).json({ message: "Employee ID not found" });
    }
    return res.status(200).json({ message: "Directory deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { addEmployeeToDirectory, getEmployeeDirectory, updateEmployeeDirectory, deleteDirectory };
