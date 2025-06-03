# 📦 Inventory Management System

A full-stack inventory management application built with **ASP.NET (C#)**, **React**, and **SQL Server**. This app supports user registration and login, secure inventory tracking, and item categorization by type.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Backend**: ASP.NET Core Web API
- **Database**: SQL Server
- **Authentication**: JWT-based authentication
- **ORM**: Entity Framework Core

---

## 📐 Database Structure & Relationships

### 🔹 User

Stores registered users and their associated inventories and items.

| Field                  | Type            |
| ---------------------- | --------------- |
| Id                     | int             |
| FirstName              | string          |
| LastName               | string          |
| Username               | string          |
| Email                  | string          |
| HashedPassword         | string          |
| CreatedAt              | DateTime        |
| Token                  | string          |
| RefreshToken           | string          |
| RefreshTokenExpiryDate | DateTime        |
| Inventories            | List<Inventory> |
| Items                  | List<Item>      |

**Relationships**:
- One User → Many Inventories (1:N)
- One User → Many Items (1:N)

---

### 🔹 InventoryType

Defines categories/types of inventories.

| Field       | Type            |
| ----------- | --------------- |
| Id          | int             |
| Name        | string          |
| Inventories | List<Inventory> |

**Relationships**:
- One InventoryType → Many Inventories (1:N)

---

### 🔹 Inventory

Represents a collection of items owned by a user.

| Field           | Type          |
| --------------- | ------------- |
| Id              | int           |
| Title           | string        |
| UserId          | int (FK)      |
| InventoryTypeId | int (FK)      |
| User            | User          |
| InventoryType   | InventoryType |

**Relationships**:
- Many Inventories → One User (N:1)
- Many Inventories → One InventoryType (N:1)
- One Inventory → Many Items (1:N)

---

### 🔹 Item

Represents a specific item in an inventory.

| Field       | Type      |
| ----------- | --------- |
| Id          | int       |
| Name        | string    |
| Tag         | string    |
| CreatedAt   | DateTime  |
| InventoryId | int (FK)  |
| UserId      | int (FK)  |
| Inventory   | Inventory |
| User        | User      |

**Relationships**:
- Many Items → One Inventory (N:1)
- Many Items → One User (N:1)

---

## 🔐 Security

- ✅ **JWT Authentication**: Secure login and protected routes
- ✅ **Password Hashing**: Follows industry best practices
- ✅ **Refresh Tokens**: Extend user sessions securely
- ✅ **Role-based Access** *(optional and extendable)*

---

## 📦 Features

- ✅ User Registration & Login  
- ✅ Add/Update/Delete Inventory Items  
- ✅ Categorize Inventories by Type  
- ✅ View Items by User  
- ✅ Secure API with JWT tokens

---