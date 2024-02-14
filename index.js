// import timezone from "./constants.js";

// console.log(timezone);

// import {pi, tau} from "./constants.js"

// // console.log(pi);
// // console.log(tau);

// import { calcCircleArea } from "./math/functions.js"

// console.log(
//     calcCircleArea(10, pi), // 314
//     calcCircleArea(5, pi) // 78.5
//     );

// import lodash from "lodash"

// let array1 = ['a', 'b', 'c', 'd']
// let array2 = ["e", "f", "g"]

// console.log(
//     array1.concat(array2),
//     array2.fill("*")
// );

import axios from "axios";

const getData = async () => {
  let response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1",
  );
  return response.data;
};

console.log(await getData());
