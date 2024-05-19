const patientModal = require("./patient.modal");
const util = require("../../utils/response");
const message = require("../../utils/message.json");

class PatientHandler {
  async addPatient(request, response) {
    try {
      let data = request.body;

      var checkSameNumber = await patientModal.checkSameNumber(data.contact);

      if (checkSameNumber) {
        return response
          .status(500)
          .send(util.error("result", "Patient Exists"));
      }

      var result = await patientModal.createPatient(data);
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

  async listPatient(request, response) {
    try {
      let limit = request.body.limit;

      var result = await patientModal.getPatients(limit);
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

  async getAllPatients(request, response) {
    try {
      var result = await patientModal.getAllPatients();
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

module.exports = new PatientHandler();
