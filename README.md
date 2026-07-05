# SchoolERP-Pro

A comprehensive, state-of-the-art School Enterprise Resource Planning (ERP) web application. Designed with premium aesthetics, rich interactive UI, and robust backend structures for managing admins, teachers, and students.

## Project Structure

```
SchoolERP-Pro/
│
├── index.html               # Main landing page
├── login.html               # Multi-role login page (Admin/Teacher/Student)
├── forgot-password.html     # Password recovery page
│
├── admin/                   # Administrative portal
│   ├── dashboard.php
│   ├── students.php
│   ├── teachers.php
│   ├── classes.php
│   ├── subjects.php
│   ├── attendance.php
│   ├── marks.php
│   ├── results.php
│   ├── certificates.php
│   ├── reports.php
│   └── settings.php
│
├── teacher/                 # Teacher portal
│   ├── dashboard.php
│   ├── attendance.php
│   ├── marks.php
│   ├── homework.php
│   ├── subjects.php
│   └── profile.php
│
├── student/                 # Student portal
│   ├── dashboard.php
│   ├── attendance.php
│   ├── results.php
│   ├── homework.php
│   ├── notices.php
│   ├── profile.php
│   └── download.php
│
├── css/                     # Styling sheets
│   ├── style.css            # Base styles & variables
│   ├── login.css            # Login & forgot-password page styles
│   ├── dashboard.css        # Common dashboard layouts
│   ├── admin.css            # Admin portal specific styling
│   ├── teacher.css          # Teacher portal specific styling
│   ├── student.css          # Student portal specific styling
│   ├── animation.css        # Interactive transitions & micro-animations
│   └── responsive.css       # Mobile & tablet responsiveness
│
├── js/                      # JavaScript logic
│   ├── app.js               # Global application scripts
│   ├── login.js             # Auth and session handling
│   ├── dashboard.js         # Common layout interactions
│   ├── attendance.js        # Attendance sheet interactions
│   ├── marks.js             # Marksheets and editing
│   ├── charts.js            # Visual analytics utilizing Chart.js / D3.js
│   └── pdf.js               # PDF viewer and generation logic
│
├── php/                     # Backend API & controller logic
│   ├── config.php           # Database & environmental constants
│   ├── login.php            # Login handler
│   ├── logout.php           # Session destroyer
│   ├── auth.php             # Role-based access control checking
│   ├── functions.php        # Helper utilities
│   ├── attendance.php       # Attendance manager API
│   ├── marks.php            # Marks management API
│   ├── students.php         # Student operations CRUD
│   ├── teachers.php         # Teacher operations CRUD
│   ├── classes.php          # Class schedule CRUD
│   ├── subjects.php         # Subject mapping operations
│   ├── result.php           # Marksheet generation logic
│   └── certificate.php      # PDF Certificate generation logic
│
├── database/                # Database schemas
│   └── school_erp.sql       # MySQL schema and initial setup data
│
├── uploads/                 # Server storage directories for user files
│   ├── students/
│   ├── teachers/
│   ├── homework/
│   └── certificates/
│
├── pdf/                     # Generated PDF artifacts
│   ├── marksheets/
│   └── certificates/
│
├── images/                  # Core image assets
│   ├── logo.png             # Modern high-quality SVG/PNG logo
│   ├── school.jpg           # Background assets
│   └── avatars/             # User avatar templates
│
├── icons/                   # Custom icons / SVG assets
│
└── assets/                  # Fonts & Audio resources
    ├── fonts/
    └── sounds/
```

## Technologies & Stack
- **Frontend**: HTML5, Vanilla JavaScript, Vanilla CSS.
- **Backend**: PHP (Object-Oriented/Modular architecture).
- **Database**: MySQL.
- **Styling Philosophy**: Custom-built style guidelines utilizing HSL-tailored premium color themes, beautiful glassmorphism, responsive grids, and detailed micro-interactions.
