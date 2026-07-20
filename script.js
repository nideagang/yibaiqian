// 导航滚动变色效果
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = "#fff";
    } else {
        header.style.background = "#fff";
    }
})