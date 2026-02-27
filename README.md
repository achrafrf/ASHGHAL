# 🏗️ ASHGHAL - Industrial Fleet Management System

![Banner](https://ashghal.vercel.app/og-image.png) <!-- حط سكرينشوت للسيت هنا من بعد -->

> **ASHGHAL** is a high-performance, full-stack SaaS solution for heavy machinery rental, specifically engineered for the Moroccan BTP (Construction) sector.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.1-green?logo=springboot)](https://spring.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://www.docker.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-darkgreen?logo=mongodb)](https://www.mongodb.com/)

---

## 🚀 Key Features

- **🛡️ Secure RBAC:** Role-Based Access Control using JWT (Admin vs. Client).
- **🚜 Dynamic Fleet Management:** Full CRUD operations for industrial assets.
- **📊 Real-time Analytics:** Interactive dashboards with Recharts for fleet distribution and rental health.
- **📱 Industrial UI:** A high-contrast, professional "Nadia Design" optimized for operational efficiency.
- **☁️ Cloud Native:** Fully containerized with Docker, deployed on Railway (Backend) and Vercel (Frontend).

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Charts:** Recharts

### Backend
- **Framework:** Spring Boot 3.1
- **Security:** Spring Security & JWT
- **Database:** MongoDB Atlas
- **Documentation:** Swagger UI / OpenAPI 3

---

## 🏗️ Architecture Diagram

```mermaid
graph TD
    User(Operator/Client) -->|Next.js 15| Frontend
    Frontend -->|JWT / REST| Backend[Spring Boot API]
    Backend -->|Native Driver| MongoDB[(MongoDB Atlas)]
    Backend -->|Container| Docker[Docker Cloud]
