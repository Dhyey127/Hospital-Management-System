const DepartmentSchema = require("./department.schema");

class DepartmentModal {
  createDepartment(createData) {
    let department = new DepartmentSchema(createData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await department.save();
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  checkSameName(name) {
    let department = DepartmentSchema.findOne({ name });
    return new Promise(async (resolve, reject) => {
      try {
        resolve(department);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getDepartments(limit) {
    let department = DepartmentSchema.find().limit(limit);
    return new Promise(async (resolve, reject) => {
      try {
        resolve(department);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getAllDoctors() {
    let doctor = DepartmentSchema.find({}, { name: 1 });
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

module.exports = new DepartmentModal();
