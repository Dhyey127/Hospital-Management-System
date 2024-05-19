const PatientSchema = require("./patient.schema");

class PatientModal {
  createPatient(createData) {
    let patient = new PatientSchema(createData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await patient.save();
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  checkSameNumber(contact) {
    let patient = PatientSchema.findOne({ contact });
    return new Promise(async (resolve, reject) => {
      try {
        resolve(patient);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getPatients(limit) {
    let patient = PatientSchema.find().limit(limit);
    return new Promise(async (resolve, reject) => {
      try {
        resolve(patient);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getAllPatients() {
    const patient = PatientSchema.find({}, { name: 1 });
    return new Promise(async (resolve, reject) => {
      try {
        resolve(patient);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = new PatientModal();
