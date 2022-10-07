function docThem() {
    alert('Hiện tại chưa có bài viết đọc thêm');
}

function clickLienHe() {
    let thongBao = confirm('Bạn có muốn click vô đây không?');
    if(thongBao) {
        alert('Bạn đã nhấn OK!');
    }else{
        alert('Bạn đã nhấn Cancel!');
    }
}
