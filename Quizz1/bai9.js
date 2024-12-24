// Nhập chuỗi s và số l từ người dùng
let s = prompt("Nhập chuỗi s (chỉ gồm chữ số):");
let l = parseInt(prompt("Nhập số l (độ dài mong muốn của chuỗi):"));
// Kiểm tra và thêm ký tự '0' vào đầu chuỗi s cho đến khi độ dài chuỗi s >= l
while (s.length < l) {
    s = '0' + s; // Thêm ký tự '0' vào đầu chuỗi s
}
// In ra chuỗi s sau khi đã thêm '0'
console.log(s);
