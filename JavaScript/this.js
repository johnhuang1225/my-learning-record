// this is references whatever thing is calling it
var Person = {
  name: 'Tom',
  printName: function(){
    console.log('Hello my name is Tom');
    console.log('this is equal to Person object: ' + (this === Person));
  }
};

// this === Person because we use Person to call the printName function
Person.printName();

console.log('========================================================');

printName = function(){
  console.log('Hello my name is Tom');
  console.log('this is equal to global object: ' + (this === global));
}

// this === global because we use main program to call the printName function
printName();
