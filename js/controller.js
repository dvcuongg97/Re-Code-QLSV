/////////////////////// CONTROLLER JS ///////////////////////////
/////////////////////////////////////////////////////////////////

// lấy data từ form
function getData() {
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _pass = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value * 1;
  var _ly = document.getElementById("txtDiemLy").value * 1;
  var _hoa = document.getElementById("txtDiemHoa").value * 1;
  return (data = new ClassSinhVien(_ma, _ten, _email, _pass, _toan, _ly, _hoa));
}

// render content
function render(arrSV) {
  var contentHTML = "";
  for (var i = 0; i < arrSV.length; i++) {
    var data = arrSV[i];
    var contentTr = `<tr>
<td>${data.ma}</td>
<td>${data.ten}</td>
<td>${data.email}</td>
<td>${data.diemTB()}</td>
<td>
<button class="btn btn-warning" onclick="buttonSua('${data.ma}')">Sửa</button>
<button class="btn btn-danger" onclick="buttonXoa('${data.ma}')">Xóa</button>
</td>
</tr>
`;
    contentHTML += contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

// push data lên form
function pushData(objSV) {
  document.getElementById("txtMaSV").value = objSV.ma;
  document.getElementById("txtTenSV").value = objSV.ten;
  document.getElementById("txtEmail").value = objSV.email;
  document.getElementById("txtPass").value = objSV.pass;
  document.getElementById("txtDiemToan").value = objSV.toan;
  document.getElementById("txtDiemLy").value = objSV.ly;
  document.getElementById("txtDiemHoa").value = objSV.hoa;
}

// tim vi tri
function timViTri(id, arrSV) {
  return arrSV.findIndex(function (item) {
    return item.ma == id;
  });
}
