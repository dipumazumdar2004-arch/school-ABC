# SchoolERP-Pro - Setup & Running Guide (localStorage Version)

This application has been fully converted to a **Serverless Static Web Application** utilizing browser **`localStorage`**. You no longer need to configure MySQL, import SQL files, or set up a PHP web server!

---

## Running Locally

1.  Navigate to the project directory:
    *   [SchoolERP-Pro](file:///e:/web%20development/school%20mangemaent%20by%20antigravity/SchoolERP-Pro)
2.  Simply double-click the **`login.html`** file (or open it in any modern browser).
3.  Alternatively, you can open the project folder in any code editor (like VS Code) and run it with a simple static server helper like **Live Server**.

---

## Deploying to GitHub Pages (Free Hosting)

Since this app is fully static, you can deploy it directly to GitHub Pages for free in less than 2 minutes:

1.  **Create a New GitHub Repository**:
    *   Go to [GitHub](https://github.com/) and create a new repository (e.g., `schoolerp-pro`).
2.  **Upload the Code**:
    *   In your terminal, run the following commands:
        ```bash
        git init
        git add .
        git commit -m "Initial commit of serverless application"
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/schoolerp-pro.git
        git push -u origin main
        ```
3.  **Activate GitHub Pages**:
    *   Go to your repository settings page on GitHub.
    *   Click on **Pages** in the left sidebar menu.
    *   Under **Build and deployment**, select **Deploy from a branch** and set the branch to **`main`** / **`/ (root)`**.
    *   Click **Save**.
4.  Your website will be published online in a few seconds!

---

## Default Demo Login Accounts

| Portal Role | Username | Password |
| :--- | :--- | :--- |
| **Administrator** | `admin` | `admin123` |
| **Teacher** | `jdoe` | `teacher123` |
| **Student** | `alice` | `student123` |
