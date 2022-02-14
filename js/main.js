window.onload = function () {
    document.getElementById('burger').onclick = function () {
        document.getElementById('main-menu').classList.add('open');
    };
    document.querySelectorAll('#main-menu > *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('main-menu').classList.remove('open');
        }
    });
};

