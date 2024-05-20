// function tinhDTB(toan, van) {
//     return (toan + van) / 2;
// }

// function xepLoai(dtb) {
//     if (dtb < 5) {
//         return " Trung Binh";
//     }
//     if (dtb >= 5 && dtb <= 8) {
//         return "kha";
//     }
//     if (dtb >= 8) {
//         return "gioi";
//     }
// }

function inThongTinSinhVien(sv) {
    // console.log(sv);
    var dtb = sv.tinhDTB(sv.diemToan, sv.diemVan);

    document.getElementById("spanTenSV").innerHTML = sv.ten;
    document.getElementById("spanMaSV").innerHTML = sv.msv;
    document.getElementById("spanLoaiSV").innerHTML = sv.loai;
    document.getElementById("spanDTB").innerHTML = sv.tinhDTB(
        sv.diemToan,
        sv.diemVan
    );
    document.getElementById("spanXepLoai").innerHTML = sv.xepLoai(dtb);
}

function layThongTinSinhVien() {
    var msv = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var loai = document.getElementById("loaiSV").value;
    var diemToan = +document.getElementById("txtDiemToan").value;
    var diemVan = +document.getElementById("txtDiemVan").value;

    // console.log(msv, ten, loai, diemToan, diemVan);

    // var sv = {
    //     // key: value
    //     // msv: msv,
    //     // loai: loai,
    //     // ten: ten,
    //     // diemToan: diemToan,
    //     // diemVan: diemVan,

    //     // hoac
    //     msv,
    //     loai,
    //     ten,
    //     diemToan,
    //     diemVan,
    // };
    return {
        msv,
        loai,
        ten,
        diemToan,
        diemVan,
        tinhDTB() {
            return (diemToan + diemVan) / 2;
        },
        xepLoai(dtb) {
            if (dtb < 5) {
                return " Trung Binh";
            }
            if (dtb >= 5 && dtb <= 8) {
                return "kha";
            }
            if (dtb >= 8) {
                return "gioi";
            }
        },
    };
}

function handleHienTHiThongTin() {
    var sv = layThongTinSinhVien();

    inThongTinSinhVien(sv);
}

document.getElementById("hienThi").onclick = handleHienTHiThongTin;
