# Critical Event Detection System - Setup Guide

This system now includes both a React frontend and Node.js backend with proper authentication.

## Features

- **Frontend**: React with TypeScript, Tailwind CSS, and shadcn/ui components
- **Backend**: Node.js with Express, JWT authentication, and bcrypt password hashing
- **Authentication**: Login/Register with JWT tokens
- **Protected Routes**: Dashboard requires authentication
- **Real-time State**: User session management with localStorage persistence

## Quick Start

### Option 1: Run Both Servers Simultaneously
```bash
./start.sh
```

### Option 2: Run Servers Separately

**Backend Server:**
```bash
cd server
npm start
```

**Frontend Server:**
```bash
npm run dev
```

## Default Credentials

The system comes with pre-configured users:

**Admin User:**
- Email: `admin@security.com`
- Password: `admin123`

**Regular User:**
- Email: `user@security.com`
- Password: `user123`

## API Endpoints

The backend server runs on `http://localhost:3001` and provides:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/verify` - Token verification
- `GET /api/user/profile` - Get user profile (protected)
- `POST /api/auth/logout` - User logout (protected)
- `GET /api/health` - Health check

## Frontend Routes

The frontend runs on `http://localhost:5173` with:

- `/` - Landing page
- `/login` - Login/Register page
- `/dashboard` - Protected dashboard (requires authentication)

## Authentication Flow

1. User visits login page
2. Enters credentials and submits form
3. Frontend sends POST request to `/api/auth/login`
4. Backend validates credentials and returns JWT token
5. Frontend stores token in localStorage
6. User is redirected to dashboard
7. Dashboard is protected by `ProtectedRoute` component
8. Token is verified on page refresh via `/api/auth/verify`

## Development

### Backend Structure
```
server/
├── server.js          # Main server file
├── package.json       # Dependencies
├── .env              # Environment variables
└── README.md         # This file
```

### Frontend Structure
```
src/
├── contexts/
│   └── AuthContext.tsx    # Authentication state management
├── components/
│   └── ProtectedRoute.tsx # Route protection component
├── pages/
│   ├── Login.tsx         # Updated with API integration
│   └── Dashboard.tsx     # Updated with user info and logout
└── App.tsx              # Updated with AuthProvider
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Frontend route protection
- Token expiration (24 hours)
- Input validation
- Error handling

## Environment Variables

Create a `.env` file in the `server` directory:

```
PORT=3001
JWT_SECRET=your-secret-key-here-change-in-production
NODE_ENV=development
```

## Troubleshooting

1. **CORS Issues**: Backend includes CORS middleware for frontend communication
2. **Token Expiration**: Tokens expire after 24 hours, user will need to re-login
3. **Port Conflicts**: Backend uses port 3001, frontend uses 5173
4. **Database**: Currently uses in-memory storage, consider adding a real database for production

## Next Steps

For production deployment:
1. Use a real database (PostgreSQL, MongoDB, etc.)
2. Add proper environment configuration
3. Implement password reset functionality
4. Add role-based access control
5. Set up proper logging
6. Add API rate limiting
7. Implement refresh tokens