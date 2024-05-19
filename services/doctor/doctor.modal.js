const DoctorSchema = require("./doctor.schema");

class DoctorModal {
  createDoctor(createData) {
    let doctor = new DoctorSchema(createData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await doctor.save();
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  checkSameNumber(contact) {
    let doctor = DoctorSchema.findOne({ contact });
    return new Promise(async (resolve, reject) => {
      try {
        resolve(doctor);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getDoctors(limit, filter = []) {
    let doctor = DoctorSchema.find(
      filter.length > 0 ? { specialization: { $in: filter } } : {}
    )
      .limit(limit)
      .populate({
        path: "department",
        select: "name",
      });
    return new Promise(async (resolve, reject) => {
      try {
        resolve(doctor);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getAllDoctors() {
    let doctor = DoctorSchema.find({}, { name: 1 });
    return new Promise(async (resolve, reject) => {
      try {
        resolve(doctor);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getAllDoctors() {
    let doctor = DoctorSchema.find({}, { name: 1 });
    return new Promise(async (resolve, reject) => {
      try {
        resolve(doctor);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  assignDepartment(data) {
    let doctor = DoctorSchema.updateOne(
      { _id: data.doctor_id },
      {
        department: data.department_id,
      }
    );
    return new Promise(async (resolve, reject) => {
      try {
        resolve(doctor);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = new DoctorModal();
