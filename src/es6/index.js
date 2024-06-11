const bReturn = () => {
    return 10;
};
const a = () => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
};

console.log(bReturn());
console.log(a());

let getInfo = (age, name = "MỊ") => {
    if (age > 0 && age < 30) {
        console.log(`${name} con tre ${name} muon di choi`);
    }
};
getInfo(18);
getInfo(20, "Anh");

let cal = (a, ...rest) => {};

cal(1);
console.log(a, rest);
