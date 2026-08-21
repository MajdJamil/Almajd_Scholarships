// سكربت مشترك لصفحات مقالات دليل المجد (قائمة الجوال + زر المشاركة)
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }
});

function shareArticle() {
    const descMeta = document.querySelector('meta[name="description"]');
    const shareData = {
        title: document.title,
        text: descMeta ? descMeta.content : document.title,
        url: window.location.href
    };
    if(navigator.share) {
        navigator.share(shareData).catch(() => {});
    } else if(navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('تم نسخ رابط المقال بنجاح!');
        }).catch(() => {});
    } else {
        alert(window.location.href);
    }
}
