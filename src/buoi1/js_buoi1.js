/**
 * !Toán tử:
 * + - * /
 * lấy dư: %
 *
 */

var x = 145;
var y = 20;
var z = x + y;
console.log(z);

var z = x - y;
console.log("z = x + y =" + " " + z);

var z = x * y;
console.log("z = x * y =" + " " + z);

var z = x / y;
console.log("z = x / y =" + " " + z);

var z = x % y;
console.log("z = x % y =" + " " + z);

/**
 * ! Math.floor() Lam tron xuong
 * ! Math.ceil() : lam tron Len
 * ! Math.round() : lam tron den so gan nhat
 *  Ex:  Math.round(3.54) => 4
 *       Math.round(3.45) => 3
 */
// Bai tap:

// Tinh pitago

var a = 3;
var b = 4;

var canhHuyen;

canhHuyen = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log(" Canh Huyen = " + "" + canhHuyen);

// Tinh tong 3 chu so cua n
var n = 586;
var hangTram = Math.floor(n / 100);
console.log(hangTram);

var hangChuc = Math.floor((n % 100) / 10);
console.log(hangChuc);

var hangDonVi = Math.floor(n % 10);
console.log(hangDonVi);

var output = hangChuc + hangTram + hangDonVi;
console.log(output);

//1: tinh tien luong nhan vien

var salaryDay = 100000;
var workday = 30;

var user = salaryDay * workday;
console.log("Salary of user ::: " + "" + user + " VND");

// 2: TInh gia tri trung binh
var a = 1;
var b = 2.2;
var c = 3;
var d = 4.322;
var e = 5;

var TB = Math.round((a + b + c + d + e) / 5);
console.log("Gia Tri Trung Binh la ::: " + " " + TB);

// 3: Quy doi tien

var so = 2;
var usdt = 23_500;
var vnd = so * usdt;
console.log(
    " so tien  " + so + " usdt duoc quy doi sang VND la " + vnd + " vnd"
);

// 4: Tinh dien tich, chu vi hinh chu nhat
var dai = 5;
var rong = 3;
var DT = dai * rong;
var CV = (dai + rong) / 2;
console.log(" Dien tich là :::" + " " + DT);
console.log(" chu Vi là :::" + " " + CV);

//  5; Tinh Tong hai chu so
var number = 43;
var sumNumber = Math.round(number / 10 + (number % 10));
console.log(" Tong hai chu so :::" + " " + sumNumber);


// ! Ép kiểu dữ kiệu
//  cách xem kiểu dữ liệu
console.log(typeof "3");
// ép kiểu dữ liệu: "3" -> 3 => Number("3")
console.log(typeof Number("3"));