import payRoll from '../models/payRoll.js';

const addPayRoll = async (req, res) => {
  const payPeriod = req.body.payPeriod;
  const salary = req.body.salary;
  const taxas = req.body.taxas;
  const deductions = req.body.deductions;
  const totallDeductions = req.body.totallDeductions;
  const totalEarning = req.body.totalEarning;
  const netPay = req.body.netPay; 

  try {
    const employeePay = new payRoll({
      payPeriod,
      salary,
      taxas,
      deductions,
      totallDeductions,
      totalEarning,
      netPay
    });
    const newEmployeePay = await employeePay.save();
    if (newEmployeePay) {
      return res.status(201).json({ message: "EmployeePayroll added successfully", employee: newEmployeePay });
    } else {
      return res.status(400).json({ message: "Unable to save" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// const addPayRoll = async (req, res) => {
// //   const employeeID = req.body.employeeID;
//   const payPeriod = req.body.payPeriod;
//   const salary = req.body.salary;
//   const taxas = req.body.taxas;
//   const deductions = req.body.deductions;
//   const totallDeductions = req.body.totallDeductions;
//   const totalEarning = req.body.totalEarning;
//   const netPay = req.body.netPay;
     
//   const { id } = req.params;
//   try {
//     const existingUser = await payRoll.findOne({id});
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     // save data in database
//     const employeePay = new payRoll({
//     //   employeeID,
//       payPeriod,
//       salary,
//       taxas,
//       deductions,
//       totallDeductions,
//       totalEarning,
//       netPay
//     });
//     const newEmployeePay = await employeePay.save();
//     if (newEmployeePay) {
//       return res.status(201).json({ message: "EmployeePayroll added successfully", employee: newEmployeePay });
//     } else {
//       return res.status(400).json({ message: "Unable to save" });
//     }
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

// retrieve data from employee directory
const getEmployeePay = async (req, res) => {
//   const employeeID = req.params.id;
  try {
    const employeegetPay = await payRoll.find({})
    if (!employeegetPay) {
      return res.status(400).json({ message: "Employees not found" });
    }
    return res.status(200).json(employeegetPay);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update Employee Directory
const updateEmployeePay = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const updatePay = await payRoll.findOneAndUpdate(
      { employeeID },
      {
        $set: {
          payPeriod: req.body.payPeriod,
          salary: req.body.salary,
          taxas: req.body.taxas,
          deductions: req.body.deductions,
          totallDeductions: req.body.totallDeductions,
          totalEarning: req.body.totalEarning,
          netPay: req.body.netPay
        }
      },
      { new: true }
    );
    if (!updatePay) {
      return res.status(400).json({ message: "Employee not found" });
    }
    return res.status(201).json(updatePay);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// delete employee directory
const deletePayroll = async (req, res) => {
  const employeeID = req.params.id;
  try {
    const deletedRoll = await payRoll.findOneAndDelete({ employeeID })
    if (!deletedRoll) {
      return res.status(400).json({ message: "Employee ID not found" });
    }
    return res.status(200).json({ message: "Directory deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { addPayRoll, getEmployeePay , updateEmployeePay , deletePayroll};
