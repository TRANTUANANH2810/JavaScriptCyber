// tao lop doi tuong SV
export class SinhVien {
    constructor(
        msv,
        ten,
        email,
        matKhau,
        ngaySinh,
        khoaHoc,
        diemToan,
        diemLy,
        diemHoa
    ) {
        this.msv = msv;
        this.ten = ten;
        this.email = email;
        this.matKhau = matKhau;
        this.ngaySinh = ngaySinh;
        this.khoaHoc = khoaHoc;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    tinhDTB() {
        return (this.diemHoa + this.diemToan + this.diemLy) / 3;
    }
    xepLoai() {
        var DTB = this.tinhDTB();
        console.log(DTB);
    }
}
// var sinhVien1 = new SinhVien(
//     "msv1",
//     "ten1",
//     "email1",
//     "ngaysinh1",
//     "123456",
//     "front-end",
//     9,
//     8,
//     7
// );
// // debugger;
// sinhVien1.xepLoai();
// console.log(sinhVien1);
