#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Critical Event Detection System...${NC}"

# Function to kill background processes on exit
cleanup() {
    echo -e "\n${YELLOW}Shutting down servers...${NC}"
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set up trap to catch Ctrl+C
trap cleanup SIGINT

# Start backend server
echo -e "${GREEN}Starting backend server...${NC}"
cd server
npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start frontend server
echo -e "${GREEN}Starting frontend server...${NC}"
cd ..
npm run dev &
FRONTEND_PID=$!

echo -e "${GREEN}Servers started successfully!${NC}"
echo -e "${YELLOW}Backend running on: http://localhost:3001${NC}"
echo -e "${YELLOW}Frontend running on: http://localhost:5173${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop both servers${NC}"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID