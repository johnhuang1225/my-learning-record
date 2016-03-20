var counter = 1;

// setTimeout only executes once rigth after given time
setTimeout(function(){
  console.log('setTimeout  executes 1 time');
}, 1000);

// setInterval code executes every given time
setInterval(function(){
  console.log('setInterval executes ' + counter + ' time');
  counter++;
}, 1000);
