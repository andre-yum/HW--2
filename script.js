//Задание 1
let a;
a=alert(10);
a=alert(20);
//Задание 2
let year=2007;
alert (`год выпуска первого iPhone ${year} года`);
//Задание 3
let creator="Брендан Айк";
alert (`создатель языка JavaScript ${creator}`);
//Задание 4
let b=10;
let c=2;
let d=Number(b) + Number(c); 
alert(d);
let e=Number(b) - Number(c);
let f=Number(b) * Number(c);
alert(f);
let j=Number(b) / Number(c);
alert(j);
//Задание 5
alert(c**5);//2 в 5й степени
let i=9;
//Задание 6
alert(i%2);// остаток от деления 9/2 
//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7; 
num /= 3;
num ++;
num --;
alert(num);// использование операторов присваивания 
//Задание 8
let age = (prompt ("Сколько вам лет?"));
alert(age);
// Задание 9
const user={
name: "Андрей",
age:63,
isAdmin:true
}
// Задание 9.1
user['city of residence']=true; 
// Задание 9.2
user.age=63;
console.log(user)
// 3адание 9.3
delete user['city of residence']
// Задание 9.4
let info=prompt("Какую информацию хотите узнать о пользователе?") 
console.log(user[info]);
alert(user[info])
// Задание 10
let newName=prompt ("Назовите свое имя");
alert(`Привет, ${newName}!`);