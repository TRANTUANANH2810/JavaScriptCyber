// Tương tác vớwioô Input

// Click vao btn Get --> lay gia tri cua o input --> log ra man hinh

// b1
document.getElementById("get").onclick = function () {
    var email = document.getElementById("exampleFormControlInput1").value;

    console.log(" GFia tri cua o input la :::", email);

    // reset o input
    document.getElementById("exampleFormControlInput1").value = "";
};

// toan tu boleans

var num1 = 10;
var num2 = 20;
function calcSum(a, b) {
    return a + b;
}

var r1 = num1 > num2;
var r2 = num1 < num2;
var r3 = num1 > calcSum(num1, num2);
var r4 = num1 == num1;

console.log(r1, r2, r3, r4);

// bai4:

document.getElementById("bt-1").onclick = function () {
    var inputEle = document.getElementById("chan-le");
    var inputValue = Number(inputEle.value);

    if (inputEle.value == "") {
        alert(" nhap vao gia tri cua o input");
    } else {
        var kqEle = document.getElementById("kq-1");
        if (inputValue % 2 == 0) {
            kqEle.innerHTML = "so " + inputValue + " la so chan ";
        } else {
            kqEle.innerHTML = "so " + inputValue + " la so le ";
        }

        inputEle.value = "";
    }
};

/**
 * b1: gan su kien click
 * b2: lay tgia tri 3 mon
 * b3: tinh DTB
 * b4: xep loai hoc luc
 * b5: in ra man hinh diem trung binh
 * b6: in ra hoc luc
 */
document.getElementById("xepLoai").onclick = function () {
    var inputEleToan = document.getElementById("toan");
    var inputEleLy = document.getElementById("ly");
    var inputEleHoa = document.getElementById("hoa");

    var inputValueToan = Number(inputEleToan.value);
    var inputValueLy = Number(inputEleLy.value);
    var inputValueHoa = Number(inputEleHoa.value);

    var dtb = (inputValueToan + inputValueLy + inputValueHoa) / 3;

    var hocLuc = "";

    if (
        inputEleToan.value == "" ||
        inputEleLy.value == "" ||
        inputEleHoa.value == ""
    ) {
        alert(" vui long nhạp day du diem vao các o");
    } else {
        if (dtb >= 8.5) {
            // gioi

            hocLuc = " Gioi";
        } else if (dtb >= 6.5 && dtb < 8.5) {
            // kha
            hocLuc = " Kha";
        } else if (dtb >= 5 && dtb < 6.5) {
            // trb

            hocLuc = " Trung binh";
        } else {
            // yeu

            hocLuc = " Yeu";
        }
    }

    document.getElementById("dtb").innerHTML = "DTB ::: " + dtb.toFixed(2);

    document.getElementById("hocLuc").innerHTML = "Hoc luc :::" + hocLuc;

    inputEleToan.value = "";
    inputEleLy.value = "";
    inputEleHoa.value = "";
};

document.getElementById("btn").onclick = function () {
    var hoa1Ele = document.getElementById("hoa1");
    var hoa1Value = Math.floor(Number(hoa1Ele.value));
    debugger;
    if (hoa1Ele.value == "") {
        alert(" vui long nhap vao  ::: ");
    } else {
        if (hoa1Value > 12 || hoa1Value <= 0) {
            alert(" chi co 12 thang");
        } else {
            document.getElementById("hoc-luc").innerHTML =
                " Thang :::" + hoa1Value;
        }
    }

    hoa1Ele.value = "";
};
