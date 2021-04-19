// тут весь код!
let a = 10;
let b = 2;
let c = a - b;
let d = 8;
let result = c + d;
alert(result);
//
let str = 'abc';
let str1 = 'java';
let str2 = 'Script';
let age = 36;
alert(str.length);
alert(str + ' !!!');
alert(str1 + str2);
alert('Мне ' + age + ' лет');
alert(`Обратные
ковычки
в JS`);
let name = 'Sergey';
alert(`Hello, ${name}`);
//
let a = undefined;
alert(a);
let b = null;
alert(b);
let s = true;
alert(s);
let d = false;
alert(d);
let f = 'ertt';
let g = 'asjflfjd';
alert(f * g);
alert(10 / 0);
alert(-10 / 0);
//
alert(60 * 24 * 365);
alert(1024 * 1024 * 1024);
let a = 13;
let d = a * a;
alert(d);
let h = '5' + 2;
alert(h);
let y = (-'5') + (-'2');
alert(y);
let u = '5' * 1 + '2' * 1;
alert(u);
let j = '5' * '1' + '2' * '1';
alert(j);
let k = '' + 3 + 1;
alert(k);
//
let a = '10';
let b = '20';
let d = (Number(a) + Number(b));
alert(d);
alert('2' + Number('3'));
let s = '3';
let r = '5';
alert(Number(s) + Number(r));
let q = '12.2';
alert(parseInt(q));
let y = '234.567';
alert(parseFloat(y));
let w = '12px';
let e = '23px';
let t = (parseInt(w) + parseInt(e));
alert(t + 'ps');
let i = parseFloat('5.5px');
let o = parseFloat('6.25px');
alert(i + o + 'px');
let z = String(34);
let x = String(3);
alert(z + x);
let num = String(123456);
alert(num.length);
let c = 67889893242384;
alert(String(c).length);
let qw = 1234;
let er = 567890;
alert(String(qw).length + String(er).length);
//
alert(true + 4);
alert(false - 6);
alert(true + true);
alert(true - false);
alert('1' + true);
alert(String(true) + 1);
alert(String(true) + Number(true));
//Заметка:
/*Преобразование к логическому типу осуществляется с помощью
функции Boolean.
Вот значения, которые при приведению к логическому типу дают
false: 0, -0, +0, null, false, NaN, undefined, '' (пустая строка).
Все остальные значения в JavaScript (в других языках бывает не так)
дают true.
Вот значения, приводящиеся к true, но могущие вызвать у вас сомнения:
-1, Infinity, -Infinity.
Следующие значения являются строками, так как взяты в кавычки, и
также приводятся к true: '0', 'false', 'NaN', 'null', 'undefined'.
*/
//Строки в JavaScript (в отличие, например, от PHP) неизменяемы!!!
//let str = 'abcde'; // строка
//str[0] = '!'; // выдаст ошибку (в строгом режиме "use strict")