// setTimeout(function(){
// 	console.log('hi 3 secs');
// },3000);

// var time=0;
// setInterval(function(){
// 	time+=2;
// 	console.log(time + "seconds");
// },2000);

// console.log(__dirname);

// var hi= function(){
// 	console.log("vaasan here");
// }
// hi();

module.exports.counter = function(arr) {
  return "There are" + arr.length + "elements";
};

module.exports.add = function(a, b) {
  return `Sum of elemets is ${a + b}`;
};
// console.log(counter([1,2,3]));
