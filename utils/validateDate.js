// Returns true if date is valid
module.exports = function validateDate(year, month, day) {

    // Convert year, month, and day to integers
    year = parseInt(year, 10);
    month = parseInt(month, 10);
    day = parseInt(day, 10);

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