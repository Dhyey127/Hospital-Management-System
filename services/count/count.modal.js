const PatientSchema = require("../patient/patient.schema");
const DoctorSchema = require("../doctor/doctor.schema");
const DepartmentSchema = require("../department/department.schema");

class CountModal {
  getPatientCount() {
    let patientCount = PatientSchema.countDocuments({});

    return new Promise(async (resolve, reject) => {
      try {
        resolve(patientCount);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getDoctorCount() {
    let doctorCount = DoctorSchema.countDocuments({});

    return new Promise(async (resolve, reject) => {
      try {
        resolve(doctorCount);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getDepartmentCount() {
    let departmentCount = DepartmentSchema.countDocuments({});

    return new Promise(async (resolve, reject) => {
      try {
        resolve(departmentCount);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = new CountModal();
