const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  specialization: {
    type: String,
  },
  contact: {
    type: String,
  },
  department: {
    type: ObjectId,
    ref: "departments",
  },
});
const DoctorModal = mongoose.model("doctors", DoctorSchema);
module.exports = DoctorModal;
