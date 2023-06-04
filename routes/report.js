const Reports = require("../models/reports");
const Costs = require("../models/costs");

const Users = require("../models/users");
const validateDate = require("../utils/validateDate");
const reports = require("../models/reports");

module.exports = async (req, res) => {
  try {
    const { user_id, year, month } = req.query;

    // validate the date
    if (!validateDate(parseInt(year), parseInt(month), 1)) {
      return res.error({ message: "Date invalid" });
    }

    // validate if the user exists
    const user = await Users.findOne({ id: user_id });
    if (!user) {
      return res.error({ message: "User doesn't exist in the DB" });
    }

    // A filter representing the current report
    const _report = {
      user_id: parseInt(user_id),
      month: parseInt(month),
      year: parseInt(year),
    };

    // Checking if the report is already computed
    let report = await Reports.findOne(_report);

    if (!report) {
      // Computing a new report if it doesn't exist
      report = new reports(_report);

      // Getting all the relevent costs for the report
      const costsForReport = await Costs.find(_report);
      costsForReport.forEach((cost) => {
        const { sum, description, day, category } = cost;
        report[category].push({ sum, day, description });
      });

      await report.save();
      report = report.toObject();
    }

    // Removing unnecessary fields from the report object
    delete report._id;
    delete report.__v;
    delete report.user_id;
    delete report.year;
    delete report.month;

    return res.json(report);
  } catch (err) {
    res.error({ message: "There was an error getting the report:" + err });
  }
};
