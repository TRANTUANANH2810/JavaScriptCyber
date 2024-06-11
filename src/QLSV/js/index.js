import { SinhVien } from "../model/sinh_vien";
import { createSinhVien } from "./manage-sinh-vien.js";
export function layThongTinSinhVien() {}

const formEle = document.getElementById("formQLSV");

formEle.onsubmit = (event) => {
    // Chan di su kien mac dinh cur the form: reload form
    event.preventDefault();

    // const msv = document.getElementById("txtMaSV").value;
    // const txtTenSV = document.getElementById("txtTenSV").value;
    // const txtEmail = document.getElementById("txtEmail").value;
    // const txtPass = document.getElementById("txtPass").value;
    // const khSV = document.getElementById("khSV").value;
    // const txtDiemToan = document.getElementById("txtDiemToan").value;
    // const txtDiemLy = document.getElementById("txtDiemLy").value;
    // const txtDiemHoa = document.getElementById("txtDiemHoa").value;

    const ListEle = document.querySelectorAll(
        "#formQLSV input, #formQLSV select"
    );
    const sv = {};
    ListEle.forEach((ele) => {
        // console.log(ele.id, ele.value);
        sv[ele.id] = ele.value;
    });

    new SinhVien(
        sv.txtMaSV,
        sv.txtTenSV.sv.txtEmail,
        sv.txtPass,
        sv.khSV,
        sv.txtDiemToan,
        sv.txtDiemLy,
        sv.txtDiemHoa
    );

    createSinhVien(newSinhVien);
};
