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
}