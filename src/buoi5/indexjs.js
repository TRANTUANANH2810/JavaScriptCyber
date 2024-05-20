/**
 * !Vong lap:
 *! while() :
 *  while(dieu_kien_de_dung_vong_lap) {
 *       Neu dieu kien dung thi se chay trong nay
 *  }
 *
 *
 *! do while()
 *! for()
 *
 *
 */

document.getElementById("lam").onclick = function () {
    // Lay gia tri tu o input va ep kieu
    var soLuong = Number(document.getElementById("banh").value);
    // 1. Khai bao bien dem so lan lap
    var count = 0;

    //  2. Dieu kien de chay  vong lap
    while (count < soLuong) {
        console.log("lamf banhs");

        // 3. tang gia tri cua bien dem
        count += 1;
    }

    var count2 = 0;
    do {
        console.log("lamf banhs1");
        count2 += 1;
    } while (count2 < soLuong);

    var i = 0;
    for (var i = 0; i < soLuong; i++) {
        console.log("lamf banhs2 for");
    }
};
// !bai  tap console log gia tri
document.getElementById("daySo").onclick = function () {
    var nhapSo = Number(document.getElementById("so").value);
    // var count4 = 1;
    // while (count4 <= nhapSo) {
    //     count4++;
    //     console.log("while" + count4);
    // }
    //
    for (var i = 1; i <= nhapSo; i++) {
        console.log(i);
    }
};

// !bai tap in so Chan le
document.getElementById("inChanLe").onclick = function () {
    var soChanLe = +document.getElementById("nhapChanLe").value;

    for (var i = 1; i <= soChanLe; i++) {
        if (i % 2 == 0) {
            console.log("so chan  ::: " + i);
        } else {
            console.log("so le ::: " + i);
        }
    }
    document.getElementById("nhapChanLe").value = "";
};

// var so100 = 100;
// for (var i = 1; i <= so100; i++) {
//     if (i % 2 == 0) {
//         console.log("so chan  ::: " + i);
//     } else {
//         console.log("so le ::: " + i);
//     }
// }

// var so = 1;
// var soWhile = 100;
// while (so <= soWhile) {
//     debugger;
//     if (so % 2 == 0) {
//         console.log("so chan  ::: " + so);
//         so++;
//     } else {
//         console.log("so le ::: " + so);
//         so++;
//     }
// }

// n(n + 1)/2;

document.getElementById("log-2").onclick = function () {
    var n = +document.getElementById("n-2").value;

    var tong = forTinhTong(n);

    document.getElementById("kq-log-2").innerHTML =
        "Tổng từ 1 -> " + n + ": " + tong;
};

function tinhTong(n) {
    return (n * (n + 1)) / 2;
}

function whileTinhTong(n) {
    var tong = 0;
    var count = 1;

    while (count <= n) {
        tong += count;

        count++;
    }
}

function doWhileTinhTong(n) {
    var tong = 0;
    var count = 1;

    do {
        tong += count;

        count++;
    } while (count <= n);

    return tong;
}

function forTinhTong(n) {
    var tong = 0;

    for (var count = 1; count <= n; count++) {
        tong += count;
    }

    return tong;
}

// tinh tong so le 1=> n
document.getElementById("log-3").onclick = function () {
    var n = +document.getElementById("n-3").value;

    var tongN = doWhileTinhTong(n);

    document.getElementById("kq-log-3").innerHTML =
        "Tổng le từ 1 -> " + n + ": " + tongN;

    document.getElementById("n-3").value = "";
};
function tinhTongLe(n) {
    var tong = 0;

    for (var count = 1; count <= n; count++) {
        if (count % 2 != 0) {
            tong += count;
        }
    }
    return tong;
}

function whileTongLe(n) {
    var tong = 0;
    var count = 1;
    while (count <= n) {
        if (count % 2 != 0) {
            tong += count;
        }
        count++;
    }
    return tong;
}

function doWhileTinhTong(n) {
    var tong = 0;
    var count = 1;
    do {
        if (count % 2 != 0) {
            tong += count;
        }
        count++;
    } while (count <= n);
    return tong;
}
