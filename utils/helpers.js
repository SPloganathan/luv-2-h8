// below function is used as a helper method for displaying the formatted date
module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()} ${new Date(
      date
    ).getHours()}:${new Date(date).getMinutes()}`;
  },
  ifIn: (value, arrayElements) => {
    if (arrayElements.indexOf(value.toString()) > -1) {
      return true;
    } else {
      return false;
    }
  },
};
