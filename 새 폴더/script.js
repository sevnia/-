// script.js

// 패럴럭스 레이어 이동
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    document.querySelector('.layer1').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    document.querySelector('.layer2').style.transform = `translateY(${scrollPosition * 0.3}px)`;
    document.querySelector('.layer3').style.transform = `translateY(${scrollPosition * 0.1}px)`;
    document.querySelector('.layer4').style.transform = `translateY(${scrollPosition * 0.05}px)`;
});

// 부드러운 스크롤
document.querySelectorAll('a.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
