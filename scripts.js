// JavaScript file 
document.addEventListener('DOMContentLoaded', function () {
    const courseLinks = document.querySelectorAll('.course-item a');
    courseLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            alert('Đang mở khóa học...');
        });
    });

    // Thêm các sự kiện click cho các liên kết trong menu
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const linkText = link.textContent.trim();

            if (linkText === 'Vào học' || linkText === 'Nhật ký học tập' || linkText === 'Thành tích học tập' || 
                linkText === 'Đánh giá' || linkText === 'Đổi quà' || linkText === 'Đấu trường' || linkText === 'Thách đấu') {
                alert('Chức năng này hiện chưa khả dụng. Vui lòng thử lại sau!');
            } else if (linkText === 'Giới thiệu') {
                alert('Giới thiệu: Chào bạn! Đây là trang web học trực tuyến dành cho học sinh trường Trung học cơ sở Bình Sơn. Website này được phát triển bởi tôi, Huỳnh Khàng, người chịu trách nhiệm xây dựng và quản lý. Chúng tôi hy vọng các bạn sẽ có những trải nghiệm học tập thú vị và hiệu quả! Cô Yến, giáo viên Ngữ Văn, đã đóng góp rất nhiều ý tưởng trong việc phát triển nội dung website.');
            }
        });
    });
});