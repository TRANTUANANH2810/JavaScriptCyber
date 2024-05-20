//  Object

var nhanVienA = {
    hoTen: "TranTuanAnh",
    tuoi: 22,
    gioiTinh: " Nam",
    diaChi: "NA",
    sdt: "0165161516",

    "quoc Gia": "VietName",

    an() {
        console.log(" Nhan Vien A dang an");
    },
    di() {
        console.log(" Nhan Vien A dang di");
    },
};

var nhanVienB = {
    hoTen: "Do Huu Hoa",
    tuoi: 22,
    gioiTinh: " Nam",
    diaChi: "DN",
    sdt: "0316464646",
};
var nhanVienC = {
    hoTen: "Tran My Uyen",
    tuoi: 21,
    gioiTinh: " Nu",
    diaChi: "HT",
    sdt: "0945040503",
    ex: ["1", "2", "3", "4", "5", "6"],
};

console.log(nhanVienA, nhanVienB, nhanVienC);

function loaiNhanVien(hoTen, tuoi, gioiTinh, diaChi, sdt, ex) {}

// lay gia tri cua doi tuong OBJECT

console.log(nhanVienA.hoTen, nhanVienB.hoTen);
console.log(nhanVienC.ex);
console.log(nhanVienA["quoc Gia"]);
// goi phuong thuc an cua nhan vien A
nhanVienA.an();
nhanVienA.di();

class nhanVien {
    //  ham khoi tao
    constructor(hoTen, tuoi, gioiTinh, diaChi, sdt) {
        console.log("constructor");
        (this.hoTen = hoTen),
            (this.tuoi = tuoi),
            (this.gioiTinh = gioiTinh),
            (this.diaChi = diaChi),
            (this.sdt = sdt);
    }

    an() {}
    ngu() {}
    choi() {}

    info() {
        console.log(
            this.hoTen,
            this.tuoi,
            this.gioiTinh,
            this.diaChi,
            this.sdt
        );
    }
}

var nhanVienE = new nhanVien("Hòa", 17, "NỮ", "NA", "0346656515");
var nhanVienF = new nhanVien("Minh", 27, "Nam", "NA", "031314654");
// nhanVienE.hoTen = " Tran Van E";
// nhanVienE.tuoi = " 23";
// nhanVienE.gioiTinh = " Nam";
// nhanVienE.diaChi = " DN";
// nhanVienE.sdt = " 0987473846";
console.log(nhanVienE);
nhanVienE.info();
nhanVienF.info();

function newNhanVien(ten, tuoi, gioiTinh) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.gioiTinh = gioiTinh;
    this.di = function () {};
    this.info = function () {
        this.di();
    };
}

var nhanVienG = new newNhanVien("Anh", 28, "Nam");
console.log(nhanVienG);
