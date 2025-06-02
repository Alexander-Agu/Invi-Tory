# 📦 Inventory Management System

A full-stack inventory management application built with **ASP.NET (C#)**, **React**, and **SQL Server**. This app supports user registration and login, secure inventory tracking, and item categorization by type.

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: ASP.NET Core Web API
- **Database**: SQL Server
- **Authentication**: JWT-based authentication
- **ORM**: Entity Framework Core

---

## 📐 Database Structure

### 🔹 User
Stores registered users and their associated inventory.

| Field         | Type          |
|---------------|---------------|
| Id            | int           |
| FirstName     | string        |
| LastName      | string        |
| Username      | string        |
| Email         | string        |
| HashedPassword| string        |
| CreatedAt     | DateTime      |
| Inventories   | List<Inventory> |

---

### 🔹 ItemType
Defines categories or types of items.

| Field         | Type          |
|---------------|---------------|
| Id            | int           |
| Name          | string        |
| Inventories   | List<Inventory> |

---

### 🔹 Inventory
Represents a single item in a user's inventory.

| Field         | Type          |
|---------------|---------------|
| Id            | int           |
| Name          | string        |
| Tag           | string        |
| CreatedAt     | DateTime      |
| UserId        | int (FK)      |
| User          | User          |
| ItemTypeId    | int (FK)      |
| ItemType      | ItemType      |

---

## 🔐 Security

- **JWT Authentication**: Secure login and protected routes.
- **Password Hashing**: User passwords are securely hashed using industry best practices.
- **Role-based Access (optional)**: Easily extendable to support roles (e.g., admin, user).

---

## 📦 Features

- ✅ User Registration & Login
- ✅ Add/Update/Delete Inventory Items
- ✅ Categorize Items by Type
- ✅ View items by user
- ✅ Secure API with JWT tokens

---

## 🚀 Getting Started

### Backend

1. **Clone the repo**  
   ```bash
   git clone <your-repo-url>
   cd InventoryApi
   ```

2. **Setup SQL Server**  
   - Create a new SQL Server database.
   - Update the `appsettings.json` with your DB connection string.

3. **Run Migrations**  
   ```bash
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```

4. **Run the API**  
   ```bash
   dotnet run
   ```

---

### Frontend

1. **Navigate to React client folder**  
   ```bash
   cd client
   npm install
   npm run dev
   ```

2. **Configure `.env`**  
   Example:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

---

## 📁 Folder Structure (Simplified)

```
/InventoryApi
│
├── Controllers/
├── Models/
├── Data/
├── Services/
├── DTOs/
└── Program.cs

/client
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
└── vite.config.js
```

---

## 🧪 Testing

- Postman collection included for API testing
- Frontend supports login and JWT storage in localStorage

---

## 👤 Author

**Alexander Agu**  
Built with ❤️ as part of a full-stack learning project.
