function SanPhamService() {
    this.layDanhSachSP = function() {
        // Gọi axios trả về promise để so sánh thành công(resolve) hay thất bại(rejected)
        // GET: lấy dữ liệu từ server
        var promise = axios({
            url: 'https://60d5dbf7943aa60017768c50.mockapi.io/products',
            method: 'GET',
        });
        return promise;
    }

    this.themSanPham = function(sp) {
        // POST: Thêm mới dữ liệu
        // data: dữ liệu cần thêm vào database
        return axios({
            url: 'https://60d5dbf7943aa60017768c50.mockapi.io/products',
            method: 'POST',
            data: sp,
        });
    }

    this.xoaSanPham = function(id) {
        // DELETE: xóa data
        return axios({
            url: `https://60d5dbf7943aa60017768c50.mockapi.io/products/${id}`,
            method: 'DELETE',
        })
    }

    this.xemSamPham = function(id) {
        // GET: Lấy data sản phẩm dựa vào id
        return axios({
            url: `https://60d5dbf7943aa60017768c50.mockapi.io/products/${id}`,
            method: 'GET',
        })
    }
}