
// !DOM


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
var arrayOfAvg = []

arrayOfStudents.forEach((value) => {
  let avg = (value.math + value.English) / 2;
  arrayOfAvg.push(avg);
})

const tableRow = 
  '<tr>' 
    + '<td> </td>'
    + '<td> </td>'
    + '<td> </td>'
    + '<td> </td>'
    + '<td> </td>'
    + '<td> </td>'
+ '</tr>'     

const tableBody = document.getElementsByTagName("tbody")


for(let i = 0; i < arrayOfStudents.length; i++) {
  tableBody[i].appendChild(tableRow);
}

console.log(tableBody)