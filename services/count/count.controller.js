const util = require("../../utils/response");
const message = require("../../utils/message.json");
const countModal = require("./count.modal");

class countHandler {
  async dashboardCount(request, response) {
    try {
      var patient = await countModal.getPatientCount();
      var doctor = await countModal.getDoctorCount();
      var department = await countModal.getDepartmentCount();
      if (patient && doctor && department) {
        response.send(
          util.success({ patient, doctor, department }, "Retrived Successfully")
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

module.exports = new countHandler();
