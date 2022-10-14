/*Bài tập 1: Tính tiền lương nhân viên
 * Đầu vào:
 *  - Lương 1 ngày : 100.000
 *  - số ngày làm :  10
 * Xử lý:
 *  - Lương = lương 1 ngày * số ngày làm
 * Đầu ra 
 *  - In ra Lương của nhân viên
 */

// Bài tập 1
// Đầu vào
var salaryInDay = 100000;
var days = 10;
// Xử lý
var salary = salaryInDay*days;
// Đầu ra
console.log("Lương của nhân viên là: " + salary);

/**Bài Tập 2: Tính giá trị trung bình
 * Đầu vào:
 *  - 5 số thực
 * Xử lý:
 *  - Tính tổng của 5 số thực
 *  - giá trị trung bình bằng tổng chia cho 5
 * Đầu ra:
 *  - In ra giá trị trung bình
 */

// Bài tập 2
// Đầu vào 
var no_1 = 5;
var no_2 = 2;
var no_3 = 7;
var no_4 = 8;
var no_5 = 9;
// Xử lý
var sum = no_1 + no_2 + no_3 + no_4 + no_5;
var avg = sum/5;
// Đầu ra
console.log("giá trị trung bình là: " + avg);

/**Bài tập 3
 * Đầu vào:
 *  - Tỷ giá của 1 USD: 23500
 *  - Số tiền USD của người dùng: 5
 * Xử lý
 *  - Tiền quy đổi = tỷ giá * số tiền USD
 * Đầu ra:
 *  - IN ra giá trị quy đổi
 */

// Bài tập 3
// Đầu vào
var tygia = 23500;
var  tienUSD = 4;
// Xử lý
var tienVND = tygia*tienUSD;
//Đầu ra

console.log(tienUSD + ' USD quy ra VND là :' + tienVND + ' VND');

/**
 * Bài tập 4
 * Đầu vào:
 *  - Chiều rộng của hình chữ nhật
 *  - Chiều dài của hình chữ nhật
 * Xử lý:
 *  - Chu vi bằng tổng chiều dài và chiều rộng nhân 2
 *  - Diện tích bằng chiều dài nhân chiều rộng 
 * Đầu ra:
 *  - In ra chu vi và dien tich cua hinh chữ nhật;
 */
// Đầu vào
var chieudai = 4;
var chieurong = 3;
// Xử lý
var chuvi = (chieudai + chieurong)*2;
var dientich = chieudai*chieurong;
// Đầu ra
console.log("chu vi cua hinh chu nhat: " + chuvi);
console.log("dientich cua hinh chu nhat: " + dientich)

/**Bài tập 5
 * Đầu vào:
 *  - một số thực có 2 số   
 * Xử lý:
 *  - lấy ra giá trị hàng đơn vị
 *  - lấy ra giá trị hàng chục
 *  - tổng 2 ký số : hàng đơn vị + hàng chục
 * Đầu ra:
 *  - In ra tổng 2 ký số 
 */
// Đầu vào
var sothuc = 49;
// Xử lý
var donvi = sothuc % 10;
var chuc = Math.floor(sothuc /10) ;
var tong = donvi + chuc;
// Đầu ra
console.log("tổng 2 ký số là :" + tong);
