/*
  __   ____  ____   __   _  _  ____ 
 / _\ (  _ \(  _ \ / _\ ( \/ )/ ___)
/    \ )   / )   //    \ )  / \___ \
\_/\_/(__\_)(__\_)\_/\_/(__/  (____/
*/

/*

*/

// 1 — create an array `meals` with three of your favorite meals and log it to the console

// 2 — create an array `drinks` with three of your favorite drinks and log it to the console

// 3 - create a variable `lastmeal` that stores the last item from the `meals` array
// hint: use the pop() function - log the result to the console

// 4 - loop over the meals array and print each meal to the console

// 5 - add a meal called `cereal` to the `meals` array, this time using the push() function, log the variable to the console

// 6 - create a variable `breakfast` and find the position of `cereal` in the `meals` array
// hint: use the indexOf() function - log the result to the console

/* CHALLENGE :: TIPJAR */
// 7 - create an array `tipjar` that will contain all our tips, add the following tips: 1, 5, 2, 2, 1

// 8 - create a function `tip` that will add a tip to the `tipjar` array
// hint: the function should take a parameter `amount` and add it to the `tipjar` array via `push()`

// 9 - call the function with a tip amount of 2 and log the `tipjar` array to the console

// 10 - create a function `total` that will calculate the total amount of the `tipjar` array
// hint: use a loop to iterate over the array and add the values together, the function should return the result
// log the total value of the tips to the console

// 1 — create an array `meals` with three of your favorite meals and log it to the console
let meals = ["Pizza", "Pasta pesto", "Kebab"];
console.log(meals);

// 2 — create an array `drinks` with three of your favorite drinks and log it to the console
let drinks = ["Water", "Coffee", "Ice Tea"];
console.log(drinks);

// 3 - create a variable `lastmeal` that stores the last item from the `meals` array
let lastmeal = meals.pop();
console.log(lastmeal);

// 4 - loop over the meals array and print each meal to the console
meals.forEach((meal) => console.log(meal));

// 5 - add a meal called `cereal` to the `meals` array using push() and log the variable
meals.push("Cereal");
console.log(meals);

// 6 - create a variable `breakfast` and find the position of `cereal` in the `meals` array
let breakfast = meals.indexOf("Cereal");
console.log(breakfast);

// 7 - create an array `tipjar` that will contain all our tips
let tipjar = [1, 5, 2, 2, 1];

// 8 - create a function `tip` that will add a tip to the `tipjar` array
function tip(amount) {
  tipjar.push(amount);
}

// 9 - call the function with a tip amount of 2 and log the `tipjar` array to the console
tip(2);
console.log(tipjar);

// 10 - create a function `total` that will calculate the total amount of the `tipjar` array
function total() {
  let sum = 0;
  for (let i = 0; i < tipjar.length; i++) {
    sum += tipjar[i];
  }
  return sum;
}

// Log the total value of the tips to the console
console.log(total());
