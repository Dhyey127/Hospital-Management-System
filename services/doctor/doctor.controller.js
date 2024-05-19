const util = require("../../utils/response");
const message = require("../../utils/message.json");
const DoctorModal = require("./doctor.modal");

class DoctorHandler {
  async addDoctor(request, response) {
    try {
      let data = request.body;

      var checkSameNumber = await DoctorModal.checkSameNumber(data.contact);

      if (checkSameNumber) {
        return response.status(500).send(util.error("result", "Doctor Exists"));
      }

      var result = await DoctorModal.createDoctor(data);
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

  async listDoctor(request, response) {
    try {
      let limit = request.body.limit;
      let filter = request.body.filter;

      var result = await DoctorModal.getDoctors(limit, filter);
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

  async assignDepartment(request, response) {
    try {
      let data = request.body;
      var result = await DoctorModal.assignDepartment(data);
      if (result) {
        response.send(util.success(result, "Department Assigned"));
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

module.exports = new DoctorHandler();
