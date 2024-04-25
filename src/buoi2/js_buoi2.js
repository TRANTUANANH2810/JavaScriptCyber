// ! Cách thực hiện tương tác giữa JS với Giao diện Index
/**
 *
 * B1: lấy được Element mà chúng ta muốn thao tác bằng ID
 * Tìm một element trên file html bằng ID
 *! => document.getElementById(<ID>)
 * B2: thêm style cho thẻ
 * ! => "nameVariable".style.color = "red/#fff";
 */

//  Ex
// Cos Id ở trên file index nên sẽ trả về element chúng ta cần lấy
// nếu không có Id trên file giao diện thì câu lệnh sẽ trả về giá trị NULL
var h1E = document.getElementById("hello");

// !thay đổi style cho elementhttps://www.facebook.com/

// // !Thay đổi nội dung
// h1E.innerHTML = "TranTuanAnh";
// console.log(h1E);
// console.log(document.getElementById("hello"));

// // !Thay đổi ID
// h1E.id = "hi";
// console.log(document.getElementById("hi"));

// // ! Lấy nội dung
// var h2Ele = document.getElementById("h2");
// var textH2 = h2Ele.innerHTML;
// console.log(textH2);
// console.log(h2Ele.id);

// var h3Ele = document.getElementById("h3");
// console.log(h3Ele);
// h3Ele.style.color = "blue";

// // lay noi dung the H4
// var h4Ele = document.getElementById("h4");
// var textH4 = h4Ele.innerHTML;
// console.log(textH4);

// h4Ele.innerHTML = "HIUBI";
// console.log(h4Ele.innerHTML);

// ! function: Ham, chuc nang

// Khai báo hàm
function tinhtong() {
    var a = 2;
    var b = 5;
    var sum = a + b;
    console.log(" Sum :::" + " " + sum);
}
// Sử dụng: Gọi function
tinhtong();

// ! bat tawt den
function handleToggle() {
    var on = document.getElementById("bat");
    var off = document.getElementById("tat");
    on.style.display = "block";
    off.style.display = "none";
}
function handleTang() {
    //Lay element
    var countEle = document.getElementById("count");
    // lay nd cuar element va ep kieu thanh number
    var count = Number(countEle.innerHTML);
    // tang gia tri
    count = ++count;
    // gan laij cho bien count
    countEle.innerHTML = count;
    console.log(count);
}

//
function handleGiam() {
    var countEle = document.getElementById("count");
    var count = Number(countEle.innerHTML);
    count = --count;
    countEle.innerHTML = count;
    console.log(count);
}

// var mauNenEle = document.getElementById("doiMau");
// function red() {
//     doiMau.style.backgroundColor = "red";
// }
// function blue() {
//     doiMau.style.backgroundColor = "blue";
// }
// function green() {
//     doiMau.style.backgroundColor = "green";
// }
// function black() {
//     doiMau.style.backgroundColor = "black";
// }
function handleChangeColor(color) {
    var bgcEle = document.getElementById("doiMau");

    bgcEle.style.backgroundColor = color;
}

// !tryền tham số function

function calcSum(a, b) {
    var sum = a + b;
    console.log(sum);
}

calcSum(2, 4);
