# 📋 Team Track — Mini Issue Tracking System

**Team Track** is a full-stack web application inspired by tools like Jira, designed to help teams organize projects, manage sprints, and track tasks through a structured workflow.

---

## 🚀 Overview

The system follows a **hierarchical workflow model**:

```text
Team → Project → Sprint → Task
```

This enables structured planning and execution of work across multiple teams and projects.

---

## 🔗 Links

- 🐙 **GitHub:** https://github.com/mayhemking007/TeamTrack  

---

## 🧱 Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* REST APIs

**Frontend**

* React.js
* Tailwind CSS

---

## ⚙️ Core Features

### 🗂️ Hierarchical Project Workflow

Designed a structured hierarchy of **teams, projects, sprints, and tasks** to organize and track work across multiple teams.

---

### 🔐 Role-Based Access Control (RBAC)

Implemented **JWT-based authentication and role-based permissions** to manage team membership, invitations, and controlled access to resources.

---

### 📌 Task Management & Collaboration

Users can **assign tasks, update task status, and add comments on tasks**, enabling collaborative issue tracking similar to Jira.

---

### 📄 Pagination & Task Filtering

Implemented **pagination and filtering** in task APIs, allowing tasks to be queried by **project, sprint, page, and limit** for efficient data handling.

---

### 🗄️ Data Modeling & Consistency

Designed MongoDB schemas for **teams, projects, sprints, and tasks**, ensuring consistency across nested entities and supporting concurrent updates.

---

## 🎯 Key Learnings

* Designing **scalable REST APIs**
* Modeling **hierarchical data structures**
* Implementing **secure authentication and authorization**
* Building **collaborative task management systems**
