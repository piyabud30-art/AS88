// แสดงข้อความเมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");
});


// เมื่อกดปุ่มส่งข้อมูล
function sendForm() {

    alert("ส่งข้อมูลเรียบร้อยแล้ว");

}


// ตรวจสอบฟอร์มก่อนส่ง
function checkForm() {

    let email = document.getElementById("email").value;
    let topic = document.getElementById("topic").value;

    if (email === "" || topic === "") {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return false;
    }

    alert("ส่งข้อมูลสำเร็จ");
}