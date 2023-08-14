///////////////////////////////////////
////////////////// INDEX JS /////////////////////
///////////////////////////////////////

var arrObjSv = [];

// show thông tin
function showThongTin() {
  // dom lấy input
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _pass = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value * 1;
  var _ly = document.getElementById("txtDiemLy").value * 1;
  var _hoa = document.getElementById("txtDiemHoa").value * 1;
  // push obj vào arr
  var sv = new OjbSv(_ma, _ten, _email, _pass, _toan, _ly, _hoa);
  arrObjSv.push(sv);
  //   render
  renderHTML(arrObjSv);
}

// function delete
function delSv(maSv) {
  var index = timViTri(maSv, arrObjSv);
  arrObjSv.splice(index, 1);

  renderHTML(arrObjSv);
}
///////////////////////////////////////
////////////////// CONTROLLER JS /////////////////////
///////////////////////////////////////

// ---------- CONTROLLER -------------

// function render
function renderHTML(arrObj) {
  contentHTML = "";
  for (var i = 0; i < arrObj.length; i++) {
    var data = arrObj[i];
    var content = `<tr>
            <td>${data.ma}</td>
            <td>${data.ten}</td>
            <td>${data.email}</td>
            <td>${data.diemtb()}</td>
            <td>
                <button class="btn btn-warning">Sửa</button>
                <button class="btn btn-danger" onclick="delSv('${
                  data.ma
                }')">Xóa</button>
            </td>
        </tr>`;
    contentHTML += content;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
// function tim vi tri

function timViTri(maSv, arrObj) {
  for (var i = 0; i < arrObj.length; i++) {
    if (arrObj[i].ma == maSv) {
      return i;
    }
  }
}
///////////////////////////////////////
////////////////// MODEL JS /////////////////////
///////////////////////////////////////

// --------------  CLASS JS -----------------

function OjbSv(_ma, _ten, _email, _pass, _toan, _ly, _hoa) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.pass = _pass;
  this.toan = _toan;
  this.ly = _ly;
  this.hoa = _hoa;
  this.diemtb = function () {
    return (this.toan + this.ly + this.hoa) / 3;
  };
}
