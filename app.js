document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const activeTab = document.querySelector('#loginTab .nav-link.active');
    const userType = activeTab.getAttribute('data-user-type');

    if (userType === 'admin') {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'student.html';
    }
});

// Update tab text colors based on active state
document.querySelectorAll('#loginTab .nav-link').forEach(tab => {
    tab.addEventListener('shown.bs.tab', function (event) {
        document.querySelectorAll('#loginTab .nav-link').forEach(t => {
            if (t.classList.contains('active')) {
                t.classList.remove('text-secondary');
                t.classList.add('text-white');
            } else {
                t.classList.remove('text-white');
                t.classList.add('text-secondary');
            }
        });
    });
});
