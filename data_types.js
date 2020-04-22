//classwork

//CW1

// let a = "Vasya Pupkin";
// let b = "Pupkin Vasya";
// a = a.toLowerCase();
// b = b.toLowerCase();
// console.log(a == b);


//CW2

// let vegetables = "potato, beetroot, carrot";
// let bucket = vegetables.split(" , ");
// console.log(bucket);

//CW3 

// let cube1;
// let cube2;
// let min = 1;
// let max = 6;
// let play = confirm('try now', " ");
// cube1 = Math.floor(Math.random() * (max - min + 1)) + 1;
// cube2 = ;
// if (cube1 === 6 && cube2 === 6) {
// 		alert(`JACKPOT, ${cube1}, ${cube2}`);
// 	}else {
// 		alert(`${cube1}, ${cube2}`);
// 	};

//CW4

// let n1 = +prompt('please, insert first number');
// let n2 = +prompt('please, insert second number');
// //let min, max;
// if (n1 > n2) {
// 	min = n2;
// 	max = n1;
// } else {
// 	min = n1;
// 	max = n2;
// }
// 	let rand = Math.floor(min + Math.random() * (max + 1 - min));
// 	alert(rand);

//CW5

// let user1 = ["age", "name", "hobby"];
// let user2 = ["age", "name", "hobby"];
// let user3 = ["age", "name", "hobby"];
// let matrix = [user1, user2, user3];	
// alert( matrix );


//HOMEWORK

// HW2

// let h = +prompt('How many hryvnas do you want to exchange?');
// 	if (h === null || h === undefined || h === false) {
// 	alert("You entered wrong data, please try again");
// } else {
// 	let dollar = (h / 26.95).toFixed(2);
// 	let euro = (h / 29.1).toFixed(2);
// 	let oil = (h / (28.47 * dollar)).toFixed(2);
// 	let gold = (h / 1504.54).toFixed(2);
// 	alert(`Yo can buy ${dollar} dollars or ${euro} euros or ${oil} barrels of oil or ${gold} grams of gold`);
// }

// HW3

// let amount = +prompt('How many hryvnas do you want to spend?');
// if(amount < 500) {
// 	alert(`You have got a 1% discount, and your order amount is ${amount * .99} `);
// } else if(amount < 1000) {
// 	alert(`You have got a 5% discount, and your order amount is ${amount * .95}`);
// } else {
// 	alert(`You have got a 10% discount and 200uah gift certificate, and your order amount is ${amount * .90}`);
// }

// HW4

// let res = 0;
// let q1 = +prompt('2 * 2?');
// let q2 = +prompt('3 * 3?');
// let q3 = +prompt('4 * 4?');
// let q4 = +prompt('5 * 5?');
// let q5 = +prompt('6 * 6?');
// if(q1 === 4) {
// 	res = res + 1;
// } 
// if(q2 === 9) {
// 	res = res + 1;
// } 
// if(q3 === 16) {
// 	res = res + 1;
// } 
// if(q4 === 25) {
// 	res = res + 1;
// } 
// if(q5 === 36) {
// 	res = res + 1;
// } 
// if(res === 5) {
// 	res = res + 1;
// } 
// alert(res);

// HW5

// let num = (+prompt('Enter three digit number')).toString;
// if(num[0] == num[1]) {
// 	alert("you have the same digits");
// } 
// else if(num[0] == num[2]) {
// 	alert("you have the same digits");
// }
// else if(num[1] == num[2]) {
// 	alert("you have the same digits");
// }
// else { 
// 	alert("all digits are different");
// }

// HW6

// confirm('click the button from "1" to "=" of your keyboard');
// document.onkeypress = function(event) {
// if (event.charCode == 49) {
// 	alert('!')}
// if (event.charCode == 50) {
// 	alert('@')}
// if (event.charCode == 51) {
// 	alert('#')}
// if (event.charCode == 52) {
// 	alert('$')}
// if (event.charCode == 53) {
// 	alert('%')}
// if (event.charCode == 54) {
// 	alert('^')}
// if (event.charCode == 55) {
// 	alert('&')}
// if (event.charCode == 56) {
// 	alert('*')}
// if (event.charCode == 57) {
// 	alert('(')}
// if (event.charCode == 48) {
// 	alert(')')}
// if (event.charCode == 45) {
// 	alert("_")}
// if (event.charCode == 61) {
// 	alert("+")}
// }










let name = "Ilya";
// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?