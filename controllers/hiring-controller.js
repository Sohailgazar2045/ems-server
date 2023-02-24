import hiring from '../models/hiring.js';

const addHiring = async (req, res) => {
  const jobID = req.body.jobID;
  const jobTitle = req.body.jobTitle;
  const jobDescription = req.body.jobDescription;
  const applicantName = req.body.applicantName;
  const interviewDate = req.body.interviewDate;
  const interviewer = req.body.interviewer;
  const interviewerFeedback = req.body.interviewerFeedback;
  const offerSalary = req.body.offerSalary;
  const hireDate = req.body.hireDate;
     
  // check if employee already exists
  try {
    const existingEmployee = await hiring.findOne({ jobID });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    }
  
    // save data in database
    const employeeHiring = new hiring({
      jobID,
      jobTitle,
      jobDescription,
      applicantName,
      interviewDate,
      interviewer,
      interviewerFeedback,
      offerSalary,
      hireDate
    });
    const newEmployeeperHiring = await employeeHiring.save();
    if (newEmployeeperHiring) {
      return res.status(201).json({ message: "Employeehiring added successfully", training: newEmployeeperHiring });
    } else {
      return res.status(400).json({ message: "Unable to save" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


// retrieve data from employee directorys
const getHiring = async (req, res) => {
//   const employeeID = req.params.id;
  try {
    const employeeggethinring = await hiring.find({})
    if (!employeeggethinring) {
      return res.status(400).json({ message: "Employees not found" });
    }
    return res.status(200).json(employeeggethinring);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// // update Employee Directory
const updateHiring = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const updatedHiring = await hiring.findOneAndUpdate(
      { employeeID },
      {
        $set: {
          jobID: req.body.jobID,
          jobTitle: req.body.jobTitle,
          jobDescription: req.body.jobDescription,
          applicantName: req.body.applicantName,
          interviewDate: req.body.interviewDate,
          interviewer: req.body.interviewer,
          interviewerFeedback: req.body.interviewerFeedback,
          offerSalary: req.body.offerSalary,
          hireDate: req.body.hireDate,

        }
      },
      { new: true }
    );
    if (!updatedHiring) {
      return res.status(400).json({ message: "Employee not found" });
    }
    return res.status(201).json(updatedHiring);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete employee directory
const deleteHiring = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const deletedHiring = await hiring.findOneAndDelete({ employeeID })
    if (!deletedHiring) {
      return res.status(400).json({ message: "Employee ID not found" });
    }
    return res.status(200).json({ message: "Hiring deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { addHiring, getHiring , updateHiring, deleteHiring};
