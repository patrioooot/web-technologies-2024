//Задание 1
function pickPropArray(arr, prop) {
  return arr
    .filter(item => item.hasOwnProperty(prop))
    .map(item => item[prop]);
}

const students = [
  { name: 'Павел', age: 20 },
  { name: 'Иван', age: 20 },
  { name: 'Эдем', age: 20 },
  { name: 'Денис', age: 20 },
  { name: 'Виктория', age: 20 },
  { age: 40 },
];

const result = pickPropArray(students, 'name');
console.log(result);

//Задание 2
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    console.log(count);
    return count;
  };
}

const counter1 = createCounter();
counter1();
counter1();

const counter2 = createCounter();
counter2();
counter2();

//Задание 3
function spinWords(str) {
  return str.split(' ')
    .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
    .join(' ');
}

const result1 = spinWords("Привет от Legacy");
console.log(result1);

const result2 = spinWords("This is a test");
console.log(result2);

//Задание 4
function twoSum(nums, target) {
  const numMap = {};
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    
    numMap[nums[i]] = i;
  }
  
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));

//Задание 5
var findLongestSharedBeginning = function (arr) {
    if (arr.length === 0) return "";

    function checkAllContain(fragment) {
        return arr.every(item => item.toLowerCase().includes(fragment.toLowerCase()));
    }

    let longestFound = "";

    for (let size = 2; size <= arr[0].length; size++) {
        for (let position = 0; position <= arr[0].length - size; position++) {
            let currentFragment = arr[0].slice(position, position + size);
            if (checkAllContain(currentFragment)) {
                if (currentFragment.length > longestFound.length) {
                    longestFound = currentFragment;
                }
            }
        }
    }
    return longestFound;
};

console.log(findLongestSharedBeginning(["цветок", "поток", "хлопок"]));
console.log(findLongestSharedBeginning(["собака", "гоночная маашина", "машина"]));