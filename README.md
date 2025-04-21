# The Digital Diner - Mini Restaurant Ordering System

A full-stack MERN + PostgreSQL application allowing customers to browse the restaurant menu, manage a shopping cart, and place simplified pickup orders online. Built as an internship assessment project, this prototype focuses on providing a seamless ordering experience with thoughtful database design and RESTful architecture.

## Live Demo

**Frontend (Netlify):** [Live Frontend Deployed on Netlify](https://6805c22b94fa972d90daa813--fitemefood.netlify.app/)

**Backend (Render):**
[Live Backend Deployed on Render](https://food-backend-3mjr.onrender.com)

## Key Features

- **Menu Display:** View categorized menu items (Appetizers, Mains, Desserts, Drinks)
- **Shopping Cart:** Add/remove items, view real-time total
- **Order Placement:** Submit cart + contact info (name & phone) for pickup
- **Order Confirmation:** See success message after submission
- **Order History (Bonus):** Retrieve previous orders of the logged in user
- **Admin (Bonus via Postman):** Add/GET menu items (no admin UI)

## Technology Stack

- **Frontend:** React, React Router, Context API, Axios, CSS
- **Backend:** Node.js, Express
- **Databases:** MongoDB (for menuItems), PostgreSQL (for orders, users)
- **ORMs:** Mongoose (MongoDB), Sequelize (PostgreSQL)
- **Deployment:** Netlify (Frontend), Render (Backend)

## API Design

| Method | Endpoint                   | Description                                 |
| ------ | -------------------------- | ------------------------------------------- |
| GET    | `/api/v1/menu?category=""` | Fetch all menu items by category            |
| POST   | `/api/v1/menu`             | Create menu item                            |
| GET    | `/api/v1/menu/:id`         | Get single menu item                        |
| POST   | `/api/v1/user/signup`      | Singup the user                             |
| POST   | `/api/v1/user/login`       | Login the user                              |
| POST   | `/api/v1/orders`           | Create the order for user                   |
| GET    | `/api/v1/orders/:userId`   | Get all the order history of logged in user |

## Database Design & Rationale

### MongoDB (Menu Collection)

Used for:

- Menu items that may evolve over time (e.g., new ingredients, seasonal dishes)
- Flexible structure for categories, descriptions, tags, and modifiers

**Schema:**

```js
{
  name: String,
  category: String,
  price: Number,
  description: String,
  imageUrl: String
}
```

### PostgreSQL (Orders and User Table)

Used for:

- Structured, relational data: orders tied to contact info
- Strong consistency for transactional integrity and future reporting

Order Table

```
- id (PK)
- userId(FK) -> id(User Table)
- items (JSON)
- total_price
- created_at

```

User Table

```
- id (PK)
- name
- phone
- password
```

## Local Setup Guide

Prerequisites:

- Node.js & npm
- PostgreSQL & MongoDB installed/running
- .env files configured properly

**Backend Setup**

Clone the repository

```
git clone git@github.com:Vkpro55/Food-Backend.git
```

Set the .env file

```
PORT=3000
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=5432
DB_DIALECT=postgres
MONGO_URI=
JWT_SECRET=
JWT_EXPIRY=
```

Run the server

```
npm install
npm run dev
```

**Frontend Setup**

Clone the repository

```
git clone git@github.com:Vkpro55/Food-Frontend.git
```

Set the .env file

```
VITE_BACKEND_BASE_URL=
```

Run the server

```
npm install
npm run dev
```
