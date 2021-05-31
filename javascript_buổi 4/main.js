
document.getElementById("btntinhtien").onclick = function(event) {
    event.preventDefault();
var tongtien ="";
var soluong = document.getElementById("amount").value;
var dongia = document.getElementById("demo") .value;
var ten = document.getElementById("name").value;

if (50<=soluong<=100){
    tongtien = (soluong*dongia)-[(soluong*dongia)*0.92];
}else if(soluong >100){
    tongtien = (soluong*dongia)-[(soluong*dongia)*0.88];
}else{
    tongtien = soluong*dongia;
}
var info = "<div class='alert alert-danger'>"+ tongtien + "</div>";
document.getElementById("btnfooter").innerHTML =info;
}