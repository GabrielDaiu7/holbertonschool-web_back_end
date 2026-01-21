// const fjalet = [
//   "shkolle",
//   "kompjuter",
//   "javascript",
//   "telefon",
//   "liber",
//   "programim",
//   "student",
//   "internet",
//   "mesim",
//   "kod"
// ];

// function gjejFjaletMeGermen(germa) {
//   return fjalet.filter(fjale => fjale.includes(germa));
// }

// console.log(gjejFjaletMeGermen("o"));

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const year = getCurrentYear();

  return {
    [`income-${year}`]: income,
    [`gdp-${year}`]: gdp,
    [`capita-${year}`]: capita,
  };
}

console.log(getBudgetForCurrentYear(2100, 5200, 1090));
