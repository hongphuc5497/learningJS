// !array
let myArray = new Array
console.log(myArray.length)

// !function with agrument 
functWithAgrument("string", 20, true, undefined)
function functWithAgrument() {
  console.log(arguments)
}

//!function with closure 
const globalClosure = 10
functWithClosure()
function functWithClosure() {
  let localClosure = 20
  function subFunct() {
    let localSubFunct = 30
    console.log(globalClosure + localClosure + localSubFunct)
  }
  return subFunct()
}

//!if/else statement 
var student1 = {
  name: 'Toan',
  gender: 'Male'
}
var student2 = {
  name: 'Hoa',
  gender: 'Female'
}
isMale(student1)
isMale(student2)
isMale("")
isMale(undefined)
isMale(1)
isMale("a")
isMale(NaN)
isMale()
isMale({
  name: null,
  number: 22, 
  gender: 'female'
})
function isMale(params) {
  if (!params || !params.gender || !params.name) {
    return
  } else {
    if (params.gender === 'Male' ) {
      console.log("Hello Mr." + params.name)
    } else {
      console.log(`Hello Ms.${params.name}`) //template literals
    }
  }
}

//!for loop 
var loopArray = [1, 10, 2, 20, 3, 30, 4, 40]
const forArray = []
for(let i = 0; i < loopArray.length; i++) {
  forArray.push(loopArray[i] *= 2)
  console.log(i)
}
console.log(forArray)

//!forEach loop 
var eachArray = [5, 10, 15, 20, 25]
eachArray.forEach(function(value, index){
  console.log(`index: ${index} value: ${value}`)
})
var arrayOfStudents = [
  {
    name: 'Toan',
    gender: 'male',
    math: 6,
    English: 3
  },
  {
    name: 'Hoa',
    gender: 'female',
    math: 5,
    English: 7
  },
  {
    name: 'Hai',
    gender: 'male',
    math: 9,
    English: 7
  },
  {
    name: 'Tam',
    gender: 'male',
    math: 6,
    English: 7
  },
  {
    name: 'Trang',
    gender: 'female',
    math: 9,
    English: 8
  }
]

var arrayOfAverageStudents = []
var arrayOfWeakStudents = []
var arrayOfNormalStudents = []
var arrayOfGoodStudents = []
var arrayOfAverageScore = []

arrayOfStudents.forEach(function(value, index) {
  if (!value) {
    return
  }  else {
    var average = (value.math + value.English) / 2
    arrayOfAverageScore.push(average) 

    console.log(`${value.name}, ${value.gender}, average: ${average}`)

    if (average < 5) {
      arrayOfWeakStudents.push(value)
    } else if (average > 8) {
      arrayOfGoodStudents.push(value)
    }
    else if (average >= 6.5) {
      arrayOfNormalStudents.push(value)
    }
    else {
      arrayOfAverageStudents.push(value)
    }
  }
})

console.log("Weak", arrayOfWeakStudents)
console.log("Average", arrayOfAverageStudents)
console.log("Normal", arrayOfNormalStudents)
console.log("Good", arrayOfGoodStudents)
console.log(arrayOfAverageScore)

sortAverage(arrayOfAverageScore)

function sortAverage(array) {
  console.log(array)

  for(let i=0; i < array.length; i++) {
    let flag = 0
    if (array[i] > array[i+1]) {
      flag = array[i]
      array[i] = array[i+1]
      array[i+1] = flag
    }
  }
  
  console.log("Array after sorting", array)
}

