const util = require("../../utils/response");
const message = require("../../utils/message.json");
const DepartmentModal = require("./department.modal");

class DepartmentHandler {
  async addDepartment(request, response) {
    try {
      let data = request.body;

      var checkSameName = await DepartmentModal.checkSameName(data.contact);

      if (checkSameName) {
        return response
          .status(500)
          .send(util.error("result", "Department Exists"));
      }

      var result = await DepartmentModal.createDepartment(data);
      if (result) {
        response.send(
          util.success(result, message.common_messages_record_added)
        );
      } else {
        response
          .status(400)
          .send(
            util.error("result", message.common_messages_record_not_available)
          );
      }
    } catch (error) {
      console.log(error, "error");
      response
        .status(400)
        .send(util.error(error, message.common_messages_error));
    }
  }

  async listDepartment(request, response) {
    try {
      let limit = request.body.limit;

      var result = await DepartmentModal.getDepartments(limit);
      if (result) {
        response.send(
          util.success(result, message.common_messages_record_available)
        );
      } else {
        response
          .status(400)
          .send(
            util.error("result", message.common_messages_record_not_available)
          );
      }
    } catch (error) {
      console.log(error, "error");
      response
        .status(400)
        .send(util.error(error, message.common_messages_error));
    }
  }

  async getAllDoctors(request, response) {
    try {
      var result = await DoctorModal.getAllDoctors();
      if (result) {
        response.send(
          util.success(result, message.common_messages_record_available)
        );
      } else {
        response
          .status(400)
          .send(
            util.error("result", message.common_messages_record_not_available)
          );
      }
    } catch (error) {
      console.log(error, "error");
      response
        .status(400)
        .send(util.error(error, message.common_messages_error));
    }
  }
}

module.exports = new DepartmentHandler();
