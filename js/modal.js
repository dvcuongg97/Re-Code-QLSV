function ClassSinhVien(_ma, _ten, _email, _pass, _toan, _ly, _hoa) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.pass = _pass;
  this.toan = _toan;
  this.ly = _ly;
  this.hoa = _hoa;
  this.diemTB = function () {
    var kq = (this.toan + this.ly + this.hoa) / 3;
    return kq.toFixed(1);
  };
}
