const util = require("../../utils/response");
const message = require("../../utils/message.json");
const AssignModal = require("./assign.modal");

class AssignHandler {
  async assignPatient(request, response) {
    try {
      let data = request.body;

      var result = await AssignModal.assignPatient(data);
      if (result) {
        response.send(util.success(result, "Assigned Successfully"));
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

  async getPatientListForDoctor(request, response) {
    try {
      let data = request.body;

      var result = await AssignModal.getPatientListForDoctor(data);
      if (result) {
        response.send(util.success(result, "Appointments Retrived"));
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

  async reassignPatient(request, response) {
    try {
      let id = request.params.id;
      let data = request.body;

      var result = await AssignModal.reassignPatient(id, data);
      if (result) {
        response.send(util.success(result, "Reassigned Successfully"));
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

  async appointmentRecord(request, response) {
    try {
      let data = request.body;

      var result = await AssignModal.appointmentRecord(data);
      if (result) {
        response.send(util.success(result, "Appointments Retrived"));
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

module.exports = new AssignHandler();
