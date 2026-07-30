# 🎓 CareerBridge — Career Guidance SaaS Platform

A full-stack MERN application where students get career guidance from verified counselors, with a real-time chat system, credits economy, and admin control panel.

---

## 🧩 Features Overview

| Module | Description |
|--------|-------------|
| **Auth** | Register as Student / Counselor / Admin with JWT |
| **Career Explorer** | Browse careers by category with qualifications, salary, duration |
| **Counselor Profiles** | View ratings, experience, availability before booking |
| **Real-time Chat** | WebSocket-based 1:1 messaging between student & counselor |
| **Credits System** | Students spend credits to access counselors; admin approves top-ups |
| **Admin Dashboard** | Approve counselors, manage credit requests, monitor platform |
| **Ratings & Reviews** | Students rate counselors after sessions |

---

## 🏗️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Redux Toolkit** — global auth, user, credits state
- **TanStack Query (React Query)** — server state, caching, background refetch
- **Socket.io-client** — real-time chat
- **Tailwind CSS** — styling

### Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **Socket.io** — WebSocket server for chat
- **JWT** — authentication
- **Bcrypt** — password hashing
- **Multer / Cloudinary** — profile image uploads (optional)

---

## 📁 Project Structure

```
careerbridge/
├── client/                         # React Frontend
│   ├── src/
│   │   ├── app/
│   │   │   └── store.js            # Redux store
│   │   ├── features/
│   │   │   ├── auth/               # authSlice.js
│   │   │   ├── chat/               # chatSlice.js (active room, messages)
│   │   │   └── credits/            # creditsSlice.js
│   │   ├── hooks/
│   │   │   └── useSocket.js        # custom socket hook
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── CareersPage.jsx
│   │   │   ├── CounselorList.jsx
│   │   │   ├── CounselorProfile.jsx
│   │   │   ├── ChatPage.jsx
│   │   │   ├── StudentDashboard.jsx
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── ManageCounselors.jsx
│   │   │       └── CreditRequests.jsx
│   │   ├── components/
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── CounselorCard.jsx
│   │   │   ├── RatingModal.jsx
│   │   │   └── Navbar.jsx
│   │   ├── services/
│   │   │   └── api.js              # axios instance + interceptors
│   │   └── main.jsx
│   └── package.json

├── server/                         # Express Backend
│   ├── models/
│   │   ├── User.js
│   │   ├── Counselor.js
│   │   ├── Career.js
│   │   ├── Category.js
│   │   ├── Rating.js
│   │   ├── CreditRequest.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── counselor.routes.js
│   │   ├── career.routes.js
│   │   ├── category.routes.js
│   │   ├── rating.routes.js
│   │   ├── credit.routes.js
│   │   └── admin.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── counselor.controller.js
│   │   ├── career.controller.js
│   │   ├── rating.controller.js
│   │   ├── credit.controller.js
│   │   └── admin.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js      # verifyToken
│   │   └── role.middleware.js      # requireRole('ADMIN')
│   ├── socket/
│   │   └── chatHandler.js          # Socket.io events
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json

└── README.md
```

---

## 🗄️ Database Schema

### User
```js
{
  id: ObjectId,
  name: String,
  email: String,
  password: String,          // bcrypt hashed
  phone: String,
  type: ["STUDENT", "COUNSELOR", "ADMIN"],
  isActive: Boolean,
  qualification: String,
  location: String,
  credits: Number            // wallet balance
}
```

### Counselor
```js
{
  id: ObjectId,
  category: ObjectId,        // ref: Category
  user: ObjectId,            // ref: User
  experience: Number,
  isActive: Boolean,         // admin approved?
  ratings: Number,           // avg rating
  isAvailable: Boolean
}
```

### Career
```js
{
  id: ObjectId,
  category: ObjectId,        // ref: Category
  title: String,
  description: String,
  requiredQualification: String,
  duration: String,
  salary: String
}
```

### Category
```js
{
  id: ObjectId,
  title: String
}
```

### Rating
```js
{
  id: ObjectId,
  counsellor: ObjectId,      // ref: Counselor
  student: ObjectId,         // ref: User (implicit via auth)
  rating: Number,
  review: String
}
```

### CreditRequest
```js
{
  id: ObjectId,
  user: ObjectId,            // ref: User
  credits: Number,
  status: Boolean            // false=pending, true=approved
}
```

### Message
```js
{
  id: ObjectId,
  sender: ObjectId,
  receiver: ObjectId,
  content: String,
  createdAt: Date
}
```

---

## 🔌 API Endpoints

### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register (student/counselor) |
| POST | `/api/auth/login` | Login, returns JWT |

### User
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/user/me` | Get own profile |
| PUT | `/api/user/me` | Update profile |

### Counselor
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/counselors` | List all approved counselors |
| GET | `/api/counselors/:id` | Single counselor profile |
| POST | `/api/counselors/apply` | Student applies to become counselor |

### Career & Category
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/careers` | All careers (filterable by category) |
| GET | `/api/careers/:id` | Career detail |
| GET | `/api/categories` | All categories |

### Ratings
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/ratings` | Submit rating for counselor |
| GET | `/api/ratings/:counselorId` | Get ratings for a counselor |

### Credits
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/credits/request` | Student requests credit top-up |
| GET | `/api/credits/my-requests` | Own request history |

### Admin
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/admin/counselors/pending` | Pending counselor approvals |
| PUT | `/api/admin/counselors/:id/approve` | Approve counselor |
| GET | `/api/admin/credits/pending` | Pending credit requests |
| PUT | `/api/admin/credits/:id/approve` | Approve credit request |

---

## ⚡ WebSocket Events (Socket.io)

```
Client → Server:
  join_room     { senderId, receiverId }
  send_message  { senderId, receiverId, content }

Server → Client:
  receive_message  { sender, content, createdAt }
  user_online      { userId }
  user_offline     { userId }
```

Room naming convention: `room_${[id1, id2].sort().join('_')}` (ensures same room both sides)

---

## 🔄 State Management

### Redux Slices
- `authSlice` — user object, token, isLoggedIn
- `chatSlice` — activeRoom, unreadCount
- `creditsSlice` — current balance (synced after approval)

### TanStack Query Usage
- Counselor list — cached, refetches on window focus
- Career/Category data — stale time: 5 min (rarely changes)
- Ratings — invalidated after new rating submitted
- Admin lists — no caching (always fresh)

---

## 💳 Credits Flow

```
Student registers (gets default credits e.g. 10)
     ↓
Student requests more credits → CreditRequest created (status: false)
     ↓
Admin approves → User.credits += requested amount
     ↓
Student starts chat with counselor → credits deducted per session
```

---

## 🛡️ Role-Based Access

```
STUDENT  → Browse careers, view counselors, start chat, rate, request credits
COUNSELOR → All student perms + manage own profile + receive chats
ADMIN    → Approve counselors, approve credit requests, full dashboard access
```

Middleware: `verifyToken` → `requireRole(['ADMIN'])` on protected routes.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Fill MONGO_URI, JWT_SECRET, PORT
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
cp .env.example .env
# Fill VITE_API_URL, VITE_SOCKET_URL
npm run dev
```

### Environment Variables

**server/.env**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/careerbridge
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

**client/.env**
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

---

## 📦 Key Dependencies

### Server
```json
{
  "express": "^4.x",
  "mongoose": "^8.x",
  "socket.io": "^4.x",
  "jsonwebtoken": "^9.x",
  "bcryptjs": "^2.x",
  "cors": "^2.x",
  "dotenv": "^16.x"
}
```

### Client
```json
{
  "react": "^18.x",
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "@tanstack/react-query": "^5.x",
  "socket.io-client": "^4.x",
  "axios": "^1.x"
}
```

---

## 🗺️ Roadmap

- [ ] Notification system (in-app + email)
- [ ] Counselor availability calendar
- [ ] Payment gateway for credits (Razorpay)


---

## 📄 License

MIT © eSkills Web LLP
