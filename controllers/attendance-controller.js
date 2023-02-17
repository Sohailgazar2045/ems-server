import Attendance from '../models/attendance.js';

const createAttendance = async (req, res) => {
  const { date, checkInTime, checkOutTime } = req.body;

  try {
    const empattendance = new Attendance({
      date,
    checkInTime,
  checkOutTime,
    });
    const newEmployeeattendance = await empattendance.save();
    if (newEmployeeattendance) {
      return res.status(201).json({ message: "EmployeeAttendance added successfully", attendance: newEmployeeattendance });
    } else {
      return res.status(400).json({ message: "Unable to save" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// import Attendance from '../models/attendance.js';
// const createAttendance = async (req, res) => {
//   const { date, checkInTime, checkOutTime } = req.body;
//   const { id } = req.params;
//   try {
//     const existingAttendance = await Attendance.findOne({id });

//     if (existingAttendance) {
//       return res.status(400).json({ message: "Attendance already exists" });
//     }

//     const newAttendance = new Attendance({
//       date,
//       checkInTime,
//       checkOutTime,
//     });

//     const savedAttendance = await newAttendance.save();

//     return res.status(201).json({
//       message: "Attendance added successfully",
//       attendance: savedAttendance,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

const getAttendance = async (req, res) => {
  try {
    const allAttendance = await Attendance.find();
    return res.status(200).json(allAttendance);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const attendance = await Attendance.findById(id);

    if (!attendance) {
      return res.status(400).json({ message: "Attendance not found" });
    }

    attendance.date = req.body.date || attendance.date;
    attendance.checkInTime = req.body.checkInTime || attendance.checkInTime;
    attendance.checkOutTime = req.body.checkOutTime || attendance.checkOutTime;

    const updatedAttendance = await attendance.save();

    return res.status(200).json({
      message: "Attendance updated successfully",
      attendance: updatedAttendance,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(id);

    if (!deletedAttendance) {
      return res.status(400).json({ message: "Attendance not found" });
    }

    return res
      .status(200)
      .json({ message: "Attendance deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { createAttendance, getAttendance, updateAttendance, deleteAttendance };
