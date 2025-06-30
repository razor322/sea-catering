<div align="center">
    <div >
        <img height="150px" src="./img/logo.png" alt=""/>
    </div>
    <div>
            <h3><b>SEA Catering</b></h3>
            <p><i>Healthy Meals, Anytime, Anywhere</i></p>
    </div>      
</div>
<br>
<h1 align="center">SEA Catering - SEA Academy - Compfest 17</h1>
<div align="center">
  <img src="./img/banner.jpg" alt=""/>
</div>
<br>
SEA Catering is a customizable healthy meal service delivering across Indonesia. With rapid growth and increased orders, we developed this web application to streamline ordering, allow meal customization, and enhance delivery logistics. This platform empowers users to subscribe to meal plans, manage orders, and access tailored dashboards for both users and admins.

---

## 📃 Table of Contents

- [Technology Stack](#-technology-stack)
- [Core Features](#-core-features)
- [Account Information](#-account-information)
- [Getting Started Locally](#-getting-started-locally)
- [env Configuration](#-env-configuration)
- [Website Preview](#-website-preview)
- [Owner](#-owner)
- [Contact](#-contact)

---

## ⚙️ Technology Stack

<div align="center">
<a href="https://nextjs.org/">
<kbd>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png" height="60" />
</kbd>
</a>

<a href="https://www.typescriptlang.org/">
<kbd>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" height="60" />
</kbd>
</a>

<a href="https://tailwindcss.com/">
<kbd>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png" height="60" />
</kbd>
</a>

<a href="https://ui.shadcn.com/">
<kbd>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/shadcn_ui.png" height="60" />
</kbd>
</a>

<a href="https://www.postgresql.org/">
<kbd>
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" height="60" />
</kbd>
</a>

<a href="https://www.prisma.io/">
<kbd>
<img src="./img/tech/prisma.png" height="60" />
</kbd>
</a>

</div>

<div align="center">
<h4>Next JS | Typescript  | TailwindCSS | ShadcnUI | PostgreSQL | Prisma</h4>
</div>

<br>

---

## 🧩 Core Features (based on criteria given)

### ✅ Level 1: Welcome to SEA Catering

- Static homepage introducing SEA Catering
- Add some details information of the website

### ✅ Level 2: Making It Interactive

- Full Responsive Layout
- Meal Plan cards with modals
- Testimonials form + slider
- Static Business Contact Page

### ✅ Level 3: Subscription System

- Custom form with:

  - Name
  - Phone
  - Plan
  - Meal Types
  - Delivery Days
  - Allergies

- Auto price calculation
- Database integration using PostgreSQL & SeaORM

### ✅ Level 4: Securing SEA

- Authentication and Authorization with hashed passwords + Secure Middleware
- Role-based Access (User & Admin)
- Form validations and sanitizations (XSS, SQLi, CSRF)

### ✅ Level 5: User & Admin Dashboard

- Users: View, pause, cancel subscriptions
- Admins: View subscription metrics, MRR, growth

## 👤 Account Information

> [!TIP]
>
> If you run it locally, just run the seeding (make sure you already setup the Postgres Database and .env file). However, if you use the deployment this is accounts that you can use

#### Admin Account

- **Email**: admin@example.com
- **Password**: Admin@123

#### User/Customer Account

- **Email**: nana@example.com
- **Password**: Nana@1234

---

## 🧰 Getting Started Locally

### Prerequisites

- **Node.js** (v14 or higher)
- **PostgreSQL** (configured locally or remotely)
- **PgAdmin** (optional)
- **Git**
- **Postman** (optional)

### Clone (Setup Locaclly)

```bash
git clone https://github.com/razor322/sea-catering.git
cd sea-catering
(Dont forget to do .env configuration first)
(Dont forget to seeding the database optional but very recommended)
npm install -g prisma (Install prisma globally)
npm install
npm run dev
npm run build
```

### Seeding Database

```bash
npx prisma migrate reset
npx prisma migrate dev
npx prisma generate
npm run seed
```

---

## 🔐 .env Configuration

Default Local Postgres SQL Server Port is: 5432 (But, you can check it manually)

```
DATABASE_URL=postgresql://username:password@localhost:5432/database_name?schema=public
JWT_SECRET=my_super_secret_key
```

#### 🫙 PostgreSQL Database Configuration

1. Install PostgreSQL Database
2. Create Database (make sure you already have a server to make a database)
3. Change the DATABASE_URL value based on your PostgreSQL Database Configuration

## 📸 &nbsp;Website Preview

<table style="width:100%; text-align:center">
    <col width="100%">
    <tr>
        <td width="1%" align="center"><img height="370" src="./img/web-preview/home.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Home Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./img/web-preview/login.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Login Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./img/web-preview/register.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Register Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./img/web-preview/menu.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Menu Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./img/web-preview/testi.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Testimonial Section |Home Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./img/web-preview/contact.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">Contact Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./img/web-preview/dashboard-admin.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">AdminDashboard Page</td>
    </tr>
    <tr>
        <td width="1%" align="center"><img height="400" src="./img/web-preview/dashboard-user.png"/></td>
    </tr>
    <tr>
        <td width="1%" align="center">User Dashboard Page</td>
    </tr>   
</table>

## 👥 Owner

This Repository is created by

<ul>
<li>Gybran Nauval Yuhandika</li>
</ul>
As assignment selection at SEA Academy Compfest 17

---

## 📬 Contact

Have questions or want to collaborate?

- 📧 Email: nauvalgybran@gmail.com
- 💬 Discord: `razor32_`

<code>Crafted with dedication 💪 amid a hectic schedule, for SEA Academy - COMPFEST 17</code>
