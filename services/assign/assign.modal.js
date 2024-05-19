const AssignSchema = require("./assign.schema");

class AssignModal {
  assignPatient(createData) {
    let assign = new AssignSchema(createData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await assign.save();
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getPatientListForDoctor(data) {
    let result = AssignSchema.find({ doctor: data.doctor_id }).populate(
      "patient"
    );
    return new Promise(async (resolve, reject) => {
      try {
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  reassignPatient(id, data) {
    let assign = AssignSchema.updateOne(
      { _id: id },
      { appointment_time: data.appointment_time }
    );
    return new Promise(async (resolve, reject) => {
      try {
        resolve(assign);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  appointmentRecord(data) {
    let result = AssignSchema.find({ patient: data.patient_id }).populate(
      "doctor"
    );
    return new Promise(async (resolve, reject) => {
      try {
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = new AssignModal();
