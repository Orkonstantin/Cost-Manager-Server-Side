// Returns true if date is valid
module.exports = function validateDate(year, month, day) {
    // Check if the year, month, and day are whole numbers
    if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
        return false;
    }

    // Validate the year
    if (year < 1 || year > 9999) {
        return false;
    }

    // Validate the month
    if (month < 1 || month > 12) {
        return false;
    }

    // Validate the day
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > lastDayOfMonth) {
        return false;
    }

    return true;
};


// module.exports = function validateDate(year, month, day) {
//     const date = new Date(year, month, day);
//     return !isNaN(date);
// };