let currentPage = 0;
const pages = document.querySelectorAll(".page");
const total = pages.length;

function showPage(index) {
    pages.forEach((page, i) => {
        if (i < index) {
            page.style.transform = "translateY(-20vh)";
            page.style.opacity = "0";        // Trang trước mờ dần
        } 
        else if (i === index) {
            page.style.transform = "translateY(0)";
            page.style.opacity = "1";        // Trang hiện tại rõ nhất
        } 
        else {
            page.style.transform = "translateY(100vh)"; 
            page.style.opacity = "0";        // Trang sau ẩn bên dưới
        }
    });
}

showPage(currentPage);

let lock = false;

window.addEventListener("wheel", e => {
    if (lock) return;
    lock = true;
    setTimeout(() => lock = false, 1100);

    if (e.deltaY > 0 && currentPage < total - 1) {
        currentPage++;
        showPage(currentPage);
    } else if (e.deltaY < 0 && currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});
