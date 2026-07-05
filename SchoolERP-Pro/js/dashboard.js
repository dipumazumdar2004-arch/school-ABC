/**
 * SchoolERP-Pro Dashboard Script
 * Manages sidebar drawer toggling, theme switching, and dropdown interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-toggle-icon');

    // --- 1. MOBILE SIDEBAR DRAWER TOGGLE ---
    if (toggleSidebarBtn && sidebar && mainContent) {
        toggleSidebarBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        });
        
        // Close sidebar drawer when clicking outside on mobile viewports
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== toggleSidebarBtn) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }

    // --- 2. DARK/LIGHT THEME SWITCHER ---
    if (themeToggleBtn && themeIcon) {
        // Retrieve local theme preference or default to light
        const storedTheme = localStorage.getItem('school-erp-theme') || 'light';
        setTheme(storedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });

        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('school-erp-theme', theme);
            
            // Adjust visual theme icons class
            if (theme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    }

    // --- 3. NOTIFICATION DROPDOWN HANDLERS (Optional / Expandable) ---
    const noticeBtn = document.getElementById('notice-dropdown-btn');
    if (noticeBtn) {
        noticeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // In a real application, toggle notices panel modal/dropdown
            alert("Latest Announcements:\n1. Welcome to Academic Session 2026-2027\n2. Staff Meeting scheduled for today");
        });
    }
});
