//////////////////////////////////////////////////////////
//////////////////////////// MAIN JS //////////////////////////////
//////////////////////////////////////////////////////////

// GLOBAL
var arrSV = [];

var dataJSON = localStorage.getItem("arrSV");
if (dataJSON != null) {
  var list = JSON.parse(dataJSON);
  arrSV = list.map(function (item) {
    return new ClassSinhVien(
      item.ma,
      item.ten,
      item.email,
      item.pass,
      item.toan,
      item.ly,
      item.hoa
    );
  });
  render(arrSV);
}

// <button> thêm sinh viên
function buttonThemSV() {
  var objSV = getData();
  arrSV.push(objSV);

  render(arrSV);

  var dataJSON = JSON.stringify(arrSV);
  localStorage.setItem("arrSV", dataJSON);
}

// <button> xóa
function buttonXoa(id) {
  var index = timViTri(id, arrSV);
  arrSV.splice(index, 1);
  render(arrSV);

  var dataJSON = JSON.stringify(arrSV);
  localStorage.setItem("arrSV", dataJSON);
}

// <button> sửa
function buttonSua(id) {
  var index = timViTri(id, arrSV);

  var objSV = arrSV[index];

  pushData(objSV);
  document.getElementById("txtMaSV").disabled = true;
}

// <button> cập nhật
function buttonCapNhat() {
  var objSV = getData();
  var index = timViTri(objSV.ma, arrSV);
  arrSV[index] = objSV;

  var dataJSON = JSON.stringify(arrSV);
  localStorage.setItem("arrSV", dataJSON);
  render(arrSV);
}
