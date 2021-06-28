var sanPhamService = new SanPhamService();

function getEl(id) {
    return document.getElementById(id);
}

var layDanhSachSP = function() {
    sanPhamService.layDanhSachSP().then((result) => {
        // Thành công
        // console.log(result.data);
        // render ra table
        renderTable(result.data);
        setLocalStorage(result.data);
    }).catch((err) => {
        // Thất bại
        console.log(err);
    });
}
layDanhSachSP();

var themSP = function() {
    // Lấy thông tin sản phẩm
    var tenSP = getEl('TenSP').value;
    var gia = getEl('GiaSP').value;
    var hinhAnh = getEl('HinhSP').value;
    var moTa = getEl('moTa').value;

    // Khởi tạo đối tượng sản phẩm từ lớp đối tượng sản phẩm
    var sp = new SanPham(tenSP, gia, hinhAnh, moTa);
    // console.log(sp);
    // Thêm sản phẩm
    sanPhamService.themSanPham(sp).then((result) => {
        layDanhSachSP();
    }).catch((err) => {
        console.log(err);
    });
}

var modalFooter = document.querySelector('.modal-footer');
var modalTitle = document.querySelector('.modal-title');
getEl('btnThemSP').addEventListener('click', function() {
    modalTitle.innerHTML = 'Thêm sản phẩm';
    modalFooter.innerHTML = `<buttuon class ="btn btn-success" onclick = "themSP()" > Thêm sản phẩm </button>`
})

var xoaSP = function(id) {
    sanPhamService.xoaSanPham(id).then(function(result) {
        layDanhSachSP();
    }).catch(function(err) {
        console.log(err);
    });
}

var capNhatSP = function(id) {
    var tenSP = getEl('TenSP').value;
    var gia = getEl('GiaSP').value;
    var hinhAnh = getEl('HinhSP').value;
    var moTa = getEl('moTa').value;

    // Khởi tạo đối tượng sản phẩm từ lớp đối tượng sản phẩm
    var sp = new SanPham(tenSP, gia, hinhAnh, moTa);

    sanPhamService.capNhatSanPham(id, sp).then(function(result) {
        layDanhSachSP();
    }).catch(function(err) {
        console.log(err);
    })
}

var xemSP = function(id) {
    sanPhamService.xemSamPham(id).then(function(result) {
        console.log(result);
        var sp = result.data;
        getEl('btnThemSP').click();
        // $('#myModal').modal('show');
        getEl('TenSP').value = sp.tenSP;
        getEl('GiaSP').value = sp.gia;
        getEl('HinhSP').value = sp.hinhAnh;
        getEl('moTa').value = sp.moTa;
        modalTitle.innerHTML = 'Cập nhật sản phẩm';
        modalFooter.innerHTML = `<buttuon class ="btn btn-success" onclick="capNhatSP('${sp.id}')"> Câp nhật sản phẩm </button>`
    }).catch(function(err) {
        console.log(err);
    });
}

function renderTable(mangSP) {
    var content = '';
    mangSP.map(function(sp, index) {
        content += `
            <tr>
                <td>${index+1}</td>
                <td>${sp.tenSP}</td>
                <td>${sp.gia}</td>
                <td>
                    <img style="width: 80px; height: 80px;" src="${sp.hinhAnh}" />
                </td>
                <td>${sp.moTa}</td>
                <td>
                    <button class="btn btn-info" onclick = "xemSP('${sp.id}')" >Xem</button>
                    <button class="btn btn-danger" onclick="xoaSP('${sp.id}')">Xóa</button>
                </td>
            </tr>
        `
    })
    getEl('tblDanhSachSP').innerHTML = content;
}



function setLocalStorage(dssp) {
    localStorage.setItem('DSSP', JSON.stringify(dssp));
}

function getLocalStorage() {
    if (localStorage.getItem('DSSP')) {
        return JSON.parse(localStorage.getItem('DSSP'));
    }
}