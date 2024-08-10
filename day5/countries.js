const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// check if Ethiopia is in the country array

console.log(countries.includes("Ethiopia"));

// Check if Ghana is in the country array, display 'Ghana is a happy country' if not, add Ghana as the first itmen to the array and display the array elements

if (countries.includes("Ghana")) {
  console.log("Ghana is a happy country");
} else {
  countries.unshift("Ghana");
  console.log(countries);
}

const country = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

const newArr = [];

for (let i = 0; i < country.length; i++) {
  newArr.push(country[i].toUpperCase());
}

console.log(newArr);
