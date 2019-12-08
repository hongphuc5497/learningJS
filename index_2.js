// !Object and block statement 
const obj = {
  name: 'Ruby',
  getName() {
    return this.name;
  }
};
console.log(obj.getName());

{
  let blockScope = 'RoR';
  var objInBlock = {
    get blockScope() {
      return blockScope;
    }
  };
}
console.log(objInBlock.blockScope);

//!Closure
const myTranslator = {
  en: {
    title: 'My title',
    content: 'My content'
  },
  vi: {
    title: 'Tieu de',
    content: 'Noi dung'
  }
};

function translation(language) {
  return function translationSubFunc(textLabel) {
    return myTranslator[language][textLabel]
  }
}
const myTrans = translation('en')
console.log(myTrans('title'));

//!arrow function and mapping
const arr = ['Harry Potter', 'Hermione', 'Ron Weasly'];



var newArray = arr.map((value) => {
  return {
    name: value
  }
})

console.log(newArray);

//!destructuring object  
console.log(obj)

const { getName } = obj

console.log(getName)

//!function 