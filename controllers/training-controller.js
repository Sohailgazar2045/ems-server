import training from '../models/training&development.js';

const addTraining = async (req, res) => {
  const trainingProgram = req.body.trainingProgram;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const skillAquired = req.body.skillAquired;
     
  // const { employeeID } = req.params;
  // try {
  //   const existingUser = await training.findOne();
  //   if (existingUser) {
  //     return res.status(400).json({ message: "User already exists" });
  //   }
    // save data in database
    const employeeTraining = new training({
    trainingProgram,
    startDate,
    endDate,
    skillAquired
    });
    const newEmployeeperTraining = await employeeTraining.save();
    if (newEmployeeperTraining ) {
      return res.status(201).json({ message: "Employeetraining added successfully", performance: newEmployeeperTraining });
    } else {
      return res.status(400).json({ message: "Unable to save" });
    }
  // } catch (error) {
  //   return res.status(400).json({ message: error.message });
  // }
};

// retrieve data from employee directorys
const getTraining = async (req, res) => {
//   const employeeID = req.params.id;
  try {
    const employeeggetTraining = await training.find({})
    if (!employeeggetTraining) {
      return res.status(400).json({ message: "Employees not found" });
    }
    return res.status(200).json(employeeggetTraining);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// // update Employee Directory
const updateTraining = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const updatedTraining = await training.findOneAndUpdate(
      { employeeID },
      {
        $set: {
          trainingProgram: req.body.trainingProgram,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          skillAquired: req.body.skillAquired
        }
      },
      { new: true }
    );
    if (!updatedTraining) {
      return res.status(400).json({ message: "Employee not found" });
    }
    return res.status(201).json(updatedTraining);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// // delete employee directory
const deleteTraining = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const deletedTraining = await training.findOneAndDelete({ employeeID });
    if (!deletedTraining) {
      return res.status(404).json({ message: "Employee ID not found" }); // return 404 for not found
    }
    return res.status(200).json({ message: "Training deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" }); // return a generic message for server error
  }
};
export { addTraining, getTraining , updateTraining , deleteTraining};
