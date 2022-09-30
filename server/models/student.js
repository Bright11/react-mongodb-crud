import mongoose from "mongoose";
//creating a table
const studentSchema = mongoose.Schema({
  regNo: Number,
  studentName: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
  subject: [String],
});
const student = mongoose.model("student", studentSchema);

export default student;
