/**
 * SchoolERP-Pro Simulated Authentication Guard
 * Runs on portal page load to verify the active sessionStorage user session.
 */

(function() {
    // 1. Retrieve active session
    const sessionStr = sessionStorage.getItem('school_erp_active_session');
    
    if (!sessionStr) {
        // No session -> redirect to login
        window.location.href = '../login.html';
        return;
    }

    const session = JSON.parse(sessionStr);
    const path = window.location.pathname.toLowerCase();
    
    // 2. Validate role against folder path
    let isAuthorized = true;
    if (path.includes('/admin/') && session.user.role !== 'admin') {
        isAuthorized = false;
    } else if (path.includes('/teacher/') && session.user.role !== 'teacher') {
        isAuthorized = false;
    } else if (path.includes('/student/') && session.user.role !== 'student') {
        isAuthorized = false;
    }

    if (!isAuthorized) {
        // Mismatched role -> redirect
        window.location.href = '../login.html';
        return;
    }

    // 3. Expose global credentials for pages rendering script controllers
    window.current_user = session.user;
    window.profile_details = session.profile || {};
})();

// Simple HTML escaping helper for client rendering (replacing PHP sanitize)
function sanitize(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
