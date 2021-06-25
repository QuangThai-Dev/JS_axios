var sanPhamService = new SanPhamService();

function getEl(id) {
    return document.getElementById(id);
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
                    <button class="btn btn-info">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>
        `
    })
    getEl('tblDanhSachSP').innerHTML = content;
}

var layDanhSachSP = function() {
    sanPhamService.layDanhSachSP().then((result) => {
        // Thành công
        // console.log(result.data);
        // render ra table
        renderTable(result.data);
    }).catch((err) => {
        // Thất bại
        console.log(err);
    });;
}
layDanhSachSP();