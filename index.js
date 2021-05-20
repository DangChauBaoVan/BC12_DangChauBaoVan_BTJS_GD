//BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN

var tienCong = 100000;
var thongTinLuong = document.getElementById('thongTinLuong');
thongTinLuong.style.opacity = 0;

var btnTinhTien = document.getElementById('btnTinhTien')
btnTinhTien.onclick = function(){
    var soNgayLam = document.getElementById('soNgayLam').value;
    var tienLuong = document.getElementById('tienLuong');
    if( soNgayLam !=""){
        var thucLanh = tienCong*soNgayLam;
        thucLanh = Intl.NumberFormat().format(thucLanh);
        tienLuong.innerHTML = thucLanh;
        thongTinLuong.style.opacity = 1;
    }
    else{
        swal({
            title: "Bạn Chưa Nhập Số Ngày Làm",
            icon: "warning",
            dangerMode: true,
          })
    }
    
}
var soDo1 = document.getElementById('soDo1');
var x = document.getElementById("soDoBaKhoi1");
x.style.display = "none";
soDo1.onclick = function(){
    
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
     x.style.display = "none";
    }
}

// Bài 2: TÍNH GIÁ TRỊ TRUNG BÌNH 5 SỐ


var average;
var btnCal = document.getElementById('btnCalculate');

var showResult = document.getElementById('showResult');
showResult.style.opacity = 0;

btnCal.onclick =function(){
    var soThuNhat = document.getElementById('soThuNhat').value;
    var soThuHai = document.getElementById('soThuHai').value;
    var soThuBa = document.getElementById('soThuBa').value;
    var soThuTu = document.getElementById('soThuTu').value;
    var soThuNam = document.getElementById('soThuNam').value;

    

    var result = document.getElementById('pResult');
    if( soThuNhat != "" && soThuHai != "" && soThuBa != "" && soThuTu != "" && soThuNam != ""){
        soThuNhat = parseFloat(soThuNhat);
        soThuBa = parseFloat(soThuBa);
        soThuHai = parseFloat(soThuHai);
        soThuNam = parseFloat(soThuNam);
        soThuTu = parseFloat(soThuTu);
        average = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam)/5;

        result.innerHTML = '( '+soThuNhat+' + '+soThuHai+' + '+soThuBa+' + '+soThuTu+' + '+soThuNam+' ) / 5 = '+ average;

        showResult.style.opacity = 1;
    }else{
        swal({
            title: "Bạn Chưa Nhập Đủ 5 Số",
            icon: "warning",
            dangerMode: true,
          })
    }
    
    
    
}
var soDo2 = document.getElementById('soDo2');
var x2 = document.getElementById("soDoBaKhoi2");
x2.style.display = "none";
soDo2.onclick = function(){
    if (x2.style.display === "none") {
    x2.style.display = "block";
    } else {
     x2.style.display = "none";
    }
}

// Bài 3: Quy Đổi Tiền

var usd = 23500;

var btnChange = document.getElementById('btnChange');
btnChange.onclick = function(){
    var usdChange = document.getElementById('USD').value;
    var vnd = document.getElementById('VND');
    usdChange = parseFloat(usdChange);
    if(usdChange>=0){
        vnd.readOnly = 'false';
        vnd.value = Intl.NumberFormat().format(usdChange * usd) + ' VNĐ' ;
        vnd.readOnly = 'true';
    }else{
        
          swal({
            title: "NHẬP SAI ĐỊNH DẠNG",
            text: "Số tiền phải là số dương",
            icon: "warning",
            dangerMode: true,
          })
    }
    
    
}

var soDo3 = document.getElementById('soDo3');
var x3 = document.getElementById("soDoBaKhoi3");
x3.style.display = "none";
soDo3.onclick = function(){
    if (x3.style.display === "none") {
    x3.style.display = "block";
    } else {
     x3.style.display = "none";
    }
}

//Bài 4: Tính chu vi diện tích hình chữ nhật

var chuVi,dienTich;
var showResult4 = document.getElementById('showResult4')
showResult4.style.display = "none";
btnCalculate = document.getElementById('btnCal');
btnCalculate.onclick  = function(){
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var pDai = document.getElementById('pDai');
    var pRong = document.getElementById('pRong');
    var pChuVi = document.getElementById('pChuVi');
    var pDienTich = document.getElementById('pDienTich');

    chieuDai = parseFloat(chieuDai);
    chieuRong = parseFloat(chieuRong);

    if(chieuDai < chieuRong){
        swal({
            title:"NHẬP SAI KÍCH THƯỚC",
            text: "Chiều dài phải lớn hơn chiều rộng",
            icon: "warning",
            dangerMode: true,
          })
        return;
    }
    if(chieuDai <=0 || chieuRong <= 0){
        swal({
            title: "NHẬP SAI KÍCH THƯỚC",
            text:"Chiều dài và Chiều rộng phải là số lớn hơn 0",
            icon: "warning",
            dangerMode: true,
          })
        return;
    }
    if(chieuDai>0 && chieuRong>0){
        pDai.innerHTML = chieuDai;
        pRong.innerHTML = chieuRong;
    
        chuVi = (chieuDai+chieuRong)*2;
        dienTich = chieuDai*chieuRong;

        pChuVi.innerHTML = 'Chu Vi = ( ' + chieuDai + ' + ' + chieuRong + ' ) x 2 = ' +chuVi ;
        pDienTich.innerHTML = 'Diện Tích = ' + chieuDai + ' x ' + chieuRong + ' = ' + dienTich;
        showResult4.style.display = "block";
    }else{
        swal({
            title: "CHƯA NHẬP CHIỀU DÀI HOẶC CHIỀU RỘNG",
            text:"Chiều dài và Chiều rộng phải là số lớn hơn 0",
            icon: "warning",
            dangerMode: true,
          })
    }
    

}

var soDo4 = document.getElementById('soDo4');
var x4 = document.getElementById("soDoBaKhoi4");
x4.style.display = "none";
soDo4.onclick = function(){
    if (x4.style.display === "none") {
    x4.style.display = "block";
    } else {
     x4.style.display = "none";
    }
}

// Bài 5: Tính tổng 2 kí số

var chuSoHangChuc,chuSoHangDonVi,tong;

var ketQua = document.getElementById('ketQua');
ketQua.style.display = 'none';

var btnTinhTong = document.getElementById('btnTinhTong');
btnTinhTong.onclick = function(){
    var soHaiCHuSo = document.getElementById('soHaiChuSo').value;
    var h3Tong = document.getElementById('h3Tong');
    var pChuc = document.getElementById('pChuc');
    var pDonVi = document.getElementById('pDonVi');

    soHaiCHuSo = parseInt(soHaiCHuSo);

    if(soHaiCHuSo >9 && soHaiCHuSo <100){
        chuSoHangChuc = parseInt(soHaiCHuSo/10) ;
        chuSoHangDonVi = soHaiCHuSo%10;

        tong = chuSoHangDonVi+chuSoHangChuc;

        h3Tong.innerHTML = 'Tổng: '+tong;
        pChuc.innerHTML = 'Chữ số hàng chục: '+chuSoHangChuc;
        pDonVi.innerHTML = 'Chữ số hàng đơn vị: '+chuSoHangDonVi;
        ketQua.style.display = 'block';
    }else{
        swal({
            title: "NHẬP SAI ĐỊNH DẠNG",
            text: "Vui lòng nhập số có đúng 2 chữ số",
            icon: "warning",
            dangerMode: true,
          })
          return;
    }
    
}




var soDo5 = document.getElementById('soDo5');
var x5 = document.getElementById("soDoBaKhoi5");
x5.style.display = "none";
soDo5.onclick = function(){
    if (x5.style.display === "none") {
    x5.style.display = "block";
    } else {
     x5.style.display = "none";
    }
}