// script.js

document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const buttons = document.querySelectorAll('.page-btn');

    // 페이지를 초기 상태로 설정
    let currentPage = 1;
    showPage(currentPage);

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const pageNumber = parseInt(this.getAttribute('data-page'), 10);
            showPage(pageNumber);
        });
    });

    function showPage(pageNumber) {
        pages.forEach(page => {
            page.classList.remove('active');
            if (parseInt(page.getAttribute('data-page'), 10) === pageNumber) {
                page.classList.add('active');
            }
        });

        buttons.forEach(button => {
            button.classList.remove('active');
            if (parseInt(button.getAttribute('data-page'), 10) === pageNumber) {
                button.classList.add('active');
            }
        });

        currentPage = pageNumber;
    }
});
