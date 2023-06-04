const Costs = require("../models/costs");
const Reports = require("../models/reports");
const Users = require("../models/users");
const validateDate = require("../utils/validateDate");

// array of allowed cost's categories
const categoryArr = [
  "food",
  "health",
  "housing",
  "sport",
  "education",
  "transportation",
  "other",
];

module.exports = async (req, res) => {
  try {
    const { user_id, year, month, day, description, category, sum } = req.body;

    //before saving a new cost item, all the current items are counted
    // and the new cost item id is equal to count + 1
    //by doing so, we make sure that all cost items have a unique id.
    const id = (await Costs.count({})) + 1;
    const user = await Users.findOne({ id: user_id });

    // validations
    if (!user) {
      return res.error({ message: "User doesn't exist in the DB" });
    }

    if (!validateDate(year, month, day)) {
      return res.error({ message: "Date invalid" });
    }

    if (typeof description !== "string") {
      return res.error({ message: "Description invalid" });
    }

    if (!categoryArr.includes(category)) {
      return res.error({ message: "Category doesn't exist!" });
    }

    if (typeof sum !== "number" && sum < 0) {
      return res.error({ message: "Sum invalid" });
    }
    // end of validations

    const cost = new Costs({
      id,
      user_id,
      year,
      month,
      day,
      description,
      category,
      sum,
    });

    // saving the new cost into the DB
    await cost.save();

    // Deleting any previous computed report
    await Reports.findOneAndRemove({ user_id, month, year });

    const _cost = cost.toObject();

    // removing unnecessary fields from the cost object
    delete _cost._id;
    delete _cost.__v;
    return res.json(_cost);
  } catch (err) {
    res.error({ message: "There was an error adding the cost:" + err });
  }
};
