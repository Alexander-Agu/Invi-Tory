
# Inventory Management System

A full-stack inventory management application built with **ASP.NET (C#)**, **React**, and **PostgreSQL**. This app supports user registration and login, secure inventory tracking, item categorization, and a weighted average inventory valuation method.

---

## Tech Stack

- **Frontend**: React (Vite)
- **Backend**: ASP.NET Core Web API
- **Database**: PostgreSQL
- **Authentication**: JWT-based
- **ORM**: Entity Framework Core

---

## Database Structure & Relationships

### User

Stores registered users and their associated data.

| Field                  | Type     |
| ---------------------- | -------- |
| Id                     | int      |
| FirstName              | string   |
| LastName               | string   |
| Username               | string   |
| Email                  | string   |
| HashedPassword         | string   |
| CreatedAt              | DateTime |
| Token                  | string   |
| RefreshToken           | string   |
| RefreshTokenExpiryDate | DateTime |

**Relationships**:

- One User -> Many Inventories
- One User -> Many Items
- One User -> Many Units
- One User -> Many RecentActivities

---

### Inventory

Represents a collection of items owned by a user.

| Field           | Type   |
| --------------- | ------ |
| Id              | int    |
| Title           | string |
| UserId          | int    |
| InventoryTypeId | int    |

**Relationships**:

- Many Inventories -> One User
- Many Inventories -> One InventoryType
- One Inventory -> Many Items
- One Inventory -> Many Units

---

### Item

Represents a specific item in an inventory.

| Field       | Type     |
| ----------- | -------- |
| Id          | int      |
| Name        | string   |
| Tag         | string   |
| CreatedAt   | DateOnly |
| InventoryId | int      |
| UserId      | int      |

**Relationships**:

- Many Items -> One Inventory
- Many Items -> One User

---

### Unit

Defines units of measurement for inventories and items.

| Field         | Type   |
| ------------- | ------ |
| Id            | int    |
| InventoryUnit | string |
| ItemUnit      | int    |
| UserId        | int    |

**Relationships**:

- One User -> One Unit

---

### RecentActivity

Tracks user actions.

| Field   | Type   |
| ------- | ------ |
| Id      | int    |
| Request | string |
| Type    | string |
| UserId  | int    |

**Relationships**:

- Many RecentActivities -> One User

---

### InventoryValuation (Weighted Average)

Tracks monthly inventory valuation using the weighted average method.

| Field             | Type     |
| ----------------- | -------- |
| Id                | int      |
| InventoryId       | int      |
| UserId            | int      |
| Period            | string   |
| UnitsPurchased    | int      |
| TotalPurchaseCost | decimal  |
| UnitsSold         | int      |
| UnitsRemaining    | int      |
| WeightedAverage   | decimal  |
| ClosingStock      | decimal  |
| CreatedAt         | DateOnly |

**Scenario Example**:

- Buy: 10 units @ R100 = R1000
- Buy: 20 units @ R200 = R2000
- Total: 30 units, R3000
- Weighted Avg = 3000 / 30 = R133.33
- Sold: 5 units
- Remaining = 25 units
- Closing Stock = 25 * 133.33 = R3333.25

**Relationships**:

- Many InventoryValuation -> One Inventory
- Many InventoryValuation -> One User

---

## Security

- JWT Authentication
- Password Hashing
- Refresh Tokens
- Extendable Role-based Access

---

## Features

- User Registration & Login
- Add/Update/Delete Inventories and Items
- Categorize Inventories
- Track Activity (CRUD)
- Unit Customization
- Weighted Average Inventory Valuation
- Secure APIs
