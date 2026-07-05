/**
 * SchoolERP-Pro Simulated Local Database Manager
 * Uses browser localStorage to simulate standard database operations.
 */

const DB_KEYS = window.DB_KEYS = {
    USERS: 'school_erp_users',
    TEACHERS: 'school_erp_teachers',
    STUDENTS: 'school_erp_students',
    CLASSES: 'school_erp_classes',
    SUBJECTS: 'school_erp_subjects',
    ASSIGNMENTS: 'school_erp_assignments',
    ATTENDANCE: 'school_erp_attendance',
    MARKS: 'school_erp_marks',
    HOMEWORK: 'school_erp_homework',
    SUBMISSIONS: 'school_erp_submissions',
    NOTICES: 'school_erp_notices',
    SETTINGS: 'school_erp_settings',
    SESSION: 'school_erp_active_session',
    INITIALIZED: 'school_erp_initialized'
};

// Seed default data if not initialized
function initDatabase() {
    // 1. Users
    if (!localStorage.getItem(DB_KEYS.USERS) || JSON.parse(localStorage.getItem(DB_KEYS.USERS)).length === 0) {
        const users = [
            { id: 1, username: 'admin', password: 'admin123', email: 'admin@antigravityschool.edu', role: 'admin', status: 'active' },
            { id: 2, username: 'jdoe', password: 'teacher123', email: 'jdoe@antigravityschool.edu', role: 'teacher', status: 'active' },
            { id: 3, username: 'msmith', password: 'teacher123', email: 'msmith@antigravityschool.edu', role: 'teacher', status: 'active' },
            { id: 4, username: 'alice', password: 'student123', email: 'alice@student.edu', role: 'student', status: 'active' },
            { id: 5, username: 'bob', password: 'student123', email: 'bob@student.edu', role: 'student', status: 'active' }
        ];
        localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
    }

    // 2. Teachers
    if (!localStorage.getItem(DB_KEYS.TEACHERS) || JSON.parse(localStorage.getItem(DB_KEYS.TEACHERS)).length === 0) {
        const teachers = [
            { id: 1, user_id: 2, employee_id: 'EMP001', name: 'John Doe', phone: '+1 (555) 234-5678', qualification: 'M.Sc. Mathematics, B.Ed.', joining_date: '2021-08-15', status: 'active' },
            { id: 2, user_id: 3, employee_id: 'EMP002', name: 'Mary Smith', phone: '+1 (555) 345-6789', qualification: 'M.A. English Literature', joining_date: '2022-09-01', status: 'active' }
        ];
        localStorage.setItem(DB_KEYS.TEACHERS, JSON.stringify(teachers));
    }

    // 3. Classes
    if (!localStorage.getItem(DB_KEYS.CLASSES) || JSON.parse(localStorage.getItem(DB_KEYS.CLASSES)).length === 0) {
        const classes = [
            { id: 1, class_name: 'Grade 10', section: 'A', class_teacher_id: 1 },
            { id: 2, class_name: 'Grade 10', section: 'B', class_teacher_id: 2 }
        ];
        localStorage.setItem(DB_KEYS.CLASSES, JSON.stringify(classes));
    }

    // 4. Students
    if (!localStorage.getItem(DB_KEYS.STUDENTS) || JSON.parse(localStorage.getItem(DB_KEYS.STUDENTS)).length === 0) {
        const students = [
            { id: 1, user_id: 4, admission_no: 'ADM2026001', name: 'Alice Johnson', roll_no: 101, class_id: 1, dob: '2011-04-12', gender: 'Female', blood_group: 'O+', phone: '+1 (555) 456-7890', address: '12 Space St, Science City', guardian_name: 'Robert Johnson', guardian_phone: '+1 (555) 456-7891', admission_date: '2026-06-01', status: 'active' },
            { id: 2, user_id: 5, admission_no: 'ADM2026002', name: 'Bob Miller', roll_no: 102, class_id: 1, dob: '2011-07-23', gender: 'Male', blood_group: 'A-', phone: '+1 (555) 567-8901', address: '45 Orbit Way, Science City', guardian_name: 'Sarah Miller', guardian_phone: '+1 (555) 567-8902', admission_date: '2026-06-01', status: 'active' }
        ];
        localStorage.setItem(DB_KEYS.STUDENTS, JSON.stringify(students));
    }

    // 5. Subjects
    if (!localStorage.getItem(DB_KEYS.SUBJECTS) || JSON.parse(localStorage.getItem(DB_KEYS.SUBJECTS)).length === 0) {
        const subjects = [
            { id: 1, subject_name: 'Mathematics', subject_code: 'MATH101' },
            { id: 2, subject_name: 'English Language', subject_code: 'ENG101' },
            { id: 3, subject_name: 'General Science', subject_code: 'SCI101' }
        ];
        localStorage.setItem(DB_KEYS.SUBJECTS, JSON.stringify(subjects));
    }

    // 6. Subject Assignments
    if (!localStorage.getItem(DB_KEYS.ASSIGNMENTS) || JSON.parse(localStorage.getItem(DB_KEYS.ASSIGNMENTS)).length === 0) {
        const assignments = [
            { id: 1, class_id: 1, subject_id: 1, teacher_id: 1 },
            { id: 2, class_id: 1, subject_id: 2, teacher_id: 2 },
            { id: 3, class_id: 1, subject_id: 3, teacher_id: 2 },
            { id: 4, class_id: 2, subject_id: 1, teacher_id: 1 }
        ];
        localStorage.setItem(DB_KEYS.ASSIGNMENTS, JSON.stringify(assignments));
    }

    // 7. Settings
    if (!localStorage.getItem(DB_KEYS.SETTINGS)) {
        const settings = {
            school_name: 'St. Antigravity International School',
            school_email: 'info@antigravityschool.edu',
            school_phone: '+1 (555) 123-4567',
            school_address: '101 Gravity-Free Boulevard, Science City, CA 94016',
            academic_session: '2026-2027',
            currency: '$'
        };
        localStorage.setItem(DB_KEYS.SETTINGS, JSON.stringify(settings));
    }

    // 8. Notices
    if (!localStorage.getItem(DB_KEYS.NOTICES) || JSON.parse(localStorage.getItem(DB_KEYS.NOTICES)).length === 0) {
        const notices = [
            { id: 1, title: 'Welcome to Academic Session 2026-2027', content: 'Dear all, welcome to the new academic year. Please ensure your contact details are updated.', target_audience: 'all', created_by: 'Admin', date: '2026-07-01' },
            { id: 2, title: 'Staff Meeting: Exam Scheduling', content: 'All teachers are requested to attend the scheduling meeting in the library at 3:00 PM today.', target_audience: 'teachers', created_by: 'Admin', date: '2026-07-05' }
        ];
        localStorage.setItem(DB_KEYS.NOTICES, JSON.stringify(notices));
    }

    // 9. Attendance
    if (!localStorage.getItem(DB_KEYS.ATTENDANCE) || JSON.parse(localStorage.getItem(DB_KEYS.ATTENDANCE)).length === 0) {
        const attendance = [
            { id: 1, student_id: 1, class_id: 1, date: '2026-07-01', status: 'Present', remarks: 'On time' },
            { id: 2, student_id: 2, class_id: 1, date: '2026-07-01', status: 'Present', remarks: 'On time' },
            { id: 3, student_id: 1, class_id: 1, date: '2026-07-02', status: 'Late', remarks: 'Missed bus' },
            { id: 4, student_id: 2, class_id: 1, date: '2026-07-02', status: 'Present', remarks: 'On time' }
        ];
        localStorage.setItem(DB_KEYS.ATTENDANCE, JSON.stringify(attendance));
    }

    // 10. Marks
    if (!localStorage.getItem(DB_KEYS.MARKS) || JSON.parse(localStorage.getItem(DB_KEYS.MARKS)).length === 0) {
        const marks = [
            { id: 1, student_id: 1, subject_id: 1, exam_type: 'Quiz', marks_obtained: 18, max_marks: 20, grading_period: 'Term 1 2026', remarks: 'Good job' },
            { id: 2, student_id: 2, subject_id: 1, exam_type: 'Quiz', marks_obtained: 15, max_marks: 20, grading_period: 'Term 1 2026', remarks: 'Average' },
            { id: 3, student_id: 1, subject_id: 2, exam_type: 'Quiz', marks_obtained: 17, max_marks: 20, grading_period: 'Term 1 2026', remarks: 'Excellent writing' },
            { id: 4, student_id: 2, subject_id: 2, exam_type: 'Quiz', marks_obtained: 14, max_marks: 20, grading_period: 'Term 1 2026', remarks: 'Need improvement' }
        ];
        localStorage.setItem(DB_KEYS.MARKS, JSON.stringify(marks));
    }

    // 11. Homework
    if (!localStorage.getItem(DB_KEYS.HOMEWORK) || JSON.parse(localStorage.getItem(DB_KEYS.HOMEWORK)).length === 0) {
        const homework = [
            { id: 1, class_id: 1, subject_id: 1, teacher_id: 1, title: 'Algebra Equations Review', description: 'Solve quadratic expressions exercise sheets from page 45-47.', assigned_date: '2026-07-01', due_date: '2026-07-08', file_path: '' }
        ];
        localStorage.setItem(DB_KEYS.HOMEWORK, JSON.stringify(homework));
    }

    // 12. Submissions
    if (!localStorage.getItem(DB_KEYS.SUBMISSIONS) || JSON.parse(localStorage.getItem(DB_KEYS.SUBMISSIONS)).length === 0) {
        const submissions = [
            { id: 1, homework_id: 1, student_id: 1, file_path: 'Algebra_Solutions_Alice.txt', submission_date: '2026-07-04', marks_obtained: 9, status: 'Graded', remarks: 'Great answers!' }
        ];
        localStorage.setItem(DB_KEYS.SUBMISSIONS, JSON.stringify(submissions));
    }
    
    localStorage.setItem(DB_KEYS.INITIALIZED, 'true');
}

// Initialize Database
initDatabase();

// --- Generic Accessors Helpers ---
const db = {
    getCollection: function(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    },
    saveCollection: function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    
    // Auth & Session
    login: function(username, password, role) {
        const users = this.getCollection(DB_KEYS.USERS);
        const user = users.find(u => (u.username.toLowerCase() === username.toLowerCase() || u.email.toLowerCase() === username.toLowerCase()) && u.role === role);
        
        if (user && user.password === password) {
            if (user.status !== 'active') {
                return { success: false, message: 'Your account is inactive.' };
            }
            
            // Fetch profile binding
            let profile = null;
            if (role === 'teacher') {
                const teachers = this.getCollection(DB_KEYS.TEACHERS);
                profile = teachers.find(t => t.user_id === user.id);
            } else if (role === 'student') {
                const students = this.getCollection(DB_KEYS.STUDENTS);
                profile = students.find(s => s.user_id === user.id);
            }

            const session = {
                user: { id: user.id, username: user.username, email: user.email, role: user.role },
                profile: profile
            };
            
            sessionStorage.setItem(DB_KEYS.SESSION, JSON.stringify(session));
            return { success: true, redirect: `${role}/dashboard.html` };
        }
        return { success: false, message: 'Invalid username, password, or portal role.' };
    },
    
    logout: function() {
        sessionStorage.removeItem(DB_KEYS.SESSION);
        window.location.href = '../login.html';
    },
    
    getCurrentSession: function() {
        return JSON.parse(sessionStorage.getItem(DB_KEYS.SESSION));
    },
    
    getSettings: function() {
        return JSON.parse(localStorage.getItem(DB_KEYS.SETTINGS)) || {};
    },

    saveSettings: function(settings) {
        localStorage.setItem(DB_KEYS.SETTINGS, JSON.stringify(settings));
    }
};
