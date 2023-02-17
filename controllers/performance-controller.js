import performance from "../models/performance.js";

const addPercormance = async (req, res) => {
  const evaluationPeriod = req.body.evaluationPeriod;
  const manager = req.body.manager;
  const goals = req.body.goals;
  const objrctives = req.body.objrctives;
  const jobDuties = req.body.jobDuties;
  const performanceRating = req.body.performanceRating;
  const feedBack = req.body.feedBack;
     
  // const { employeeID } = req.params;
  // try {
  //   const existingUser = await performance.findOne({employeeID});
  //   if (existingUser) {
  //     return res.status(400).json({ message: "User already exists" });
  //   }
    // save data in database
    const employeePerfromnce = new performance({
    evaluationPeriod,
    manager,
    goals,
    objrctives,
    jobDuties,
    performanceRating,
    feedBack
    });
    const newEmployeeperformance = await employeePerfromnce.save();
    if (newEmployeeperformance ) {
      return res.status(201).json({ message: "EmployeePerformance added successfully", performance: newEmployeeperformance });
    } else {
      return res.status(400).json({ message: "Unable to save" });
    }
  // } catch (error) {
  //   return res.status(400).json({ message: error.message });
  // }
};

// retrieve data from employee directory
const getEmployeePerformance = async (req, res) => {
//   const employeeID = req.params.id;
  try {
    const employeegetPerormance = await performance.find({})
    if (!employeegetPerormance) {
      return res.status(400).json({ message: "Employees not found" });
    }
    return res.status(200).json(employeegetPerormance);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// // update Employee Directory
const updateEmployeePerformance = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const updatedEmployeePerformnce = await performance.findOneAndUpdate(
      { employeeID },
      {
        $set: {
          evaluationPeriod: req.body.evaluationPeriod,
          manager: req.body.manager,
          goals: req.body.goals,
          objrctives: req.body.objrctives,
          jobDuties: req.body.jobDuties,
          performanceRating: req.body.performanceRating,
          feedBack: req.body.feedBack
        }
      },
      { new: true }
    );
    if (!updatedEmployeePerformnce) {
      return res.status(400).json({ message: "Employee not found" });
    }
    return res.status(201).json(updatedEmployeePerformnce);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete employee directory
const deletePerformance = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const deletedPerform= await performance.findOneAndDelete({ employeeID })
    if (!deletedPerform) {
      return res.status(400).json({ message: "Employee ID not found" });
    }
    return res.status(200).json({ message: "Performance deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export { addPercormance, getEmployeePerformance , updateEmployeePerformance , deletePerformance};
