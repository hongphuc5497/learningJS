//! create hide/show table button 
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

function calculateAvg(num1, num2) {
  return (num1 +  num2) / 2;
}

let htmlAddRow = '';

arrayOfStudents.forEach((value, index) => {
  let htmlEachStudent = `<tr>`
                        + `<td>${index}</td>`
                        + `<td>${value.name}</td>`
                        + `<td>${value.gender}</td>`
                        + `<td>${value.math}</td>`
                        + `<td>${value.English}</td>`
                        + `<td>${calculateAvg(value.math,value.English)}</td>`
                      + `</tr>`;

  htmlAddRow += htmlEachStudent;
})

const viewDataButton = document.getElementById('viewDataButton');
const addDataStudent = document.getElementById('addDataStudent');
const tableHead = document.getElementById('tableHead');

let tableHeadTitle =  '<tr>'
                      + '<td>ORDER</td>'
                      + '<td>NAME</td>'
                      + '<td>GENDER</td>'
                      + '<td>MATH</td>'
                      + '<td>ENGLISH</td>'
                      + '<td>AVG</td>'
                    + '</tr>';

viewDataButton.addEventListener("click", function() {
  let tableStudent = document.getElementById('tableStudent');

  if (tableStudent.classList.contains('non-active')) {
    tableStudent.classList.remove('non-active');
    tableStudent.classList.add('active');

    viewDataButton.innerHTML = 'Hide Me';
    tableHead.innerHTML = tableHeadTitle;
    addDataStudent.innerHTML = htmlAddRow;
  } else {
    tableStudent.classList.remove('active');
    tableStudent.classList.add('non-active');

    viewDataButton.innerHTML = 'Click me';
  }
})

//! create scrollling navbar 
const navbar = document.getElementById("navigation");

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
})

//! make anchor tag smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  console.log(anchor);

  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    console.log(this);

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//! get datetime 
// const printDate = document.getElementById('printDate');
// const date = new Date();
// var days = ['chủ nhật','hai','ba','tư','năm','sáu','bảy'];
// var months = ['một','hai','ba','tư','năm','sáu','bảy','tám','chín','mười','mười một','mười hai'];

