const printName = (firstName: string, lastName: string) => {
    const fullName = firstName + " " + lastName;
    console.log(fullName);
    return fullName;
  }
console.log(printName("Lilly", "Huston"));
module.exports = printName;