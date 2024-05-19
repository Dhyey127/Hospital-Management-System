const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  service: {
    type: String,
  },
});
const DepartmentModal = mongoose.model("departments", DepartmentSchema);
module.exports = DepartmentModal;
