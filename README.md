# College Copyshop Order System (PWA)

A Progressive Web App (PWA) for managing college copyshop orders with separate interfaces for students and administrators.

## Features

### React-based PWA with Material-UI for professional UI components

#### Student Interface:
- File upload with preview
- Order customization (paper size, color, quantity, finishing options)
- Real-time pricing calculator
- Order submission with payment integration

#### Admin Interface:
- Order management dashboard
- Status updates (pending, printing, ready, completed)
- DataGrid for efficient order viewing

#### Backend API with Node.js/Express and MongoDB

### PWA Capabilities:
- Offline functionality
- Installable on devices
- Fast loading

## Prerequisites
- Node.js (v16+ recommended)
- MongoDB (v5+ recommended)
- Yarn or npm

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/nexussjcet/canteen_copyshop_Automation.git
cd canteen_copyshop_Automation
```

### 2️⃣ Set Up the Backend

#### Install dependencies:
```sh
cd backend
npm install
```

#### Set up environment variables:
Create `.env` file with:
```env
MONGODB_URI=mongodb://localhost:27017/copyshop
PORT=5000
JWT_SECRET=your_secret_key
```

#### Run the development server:
```sh
node server.js
```

### 3️⃣ Set Up the Frontend

#### Install dependencies:
```sh
cd ../frontend
npm install
```

#### Start the development server:
```sh
npm run dev
```

Now visit [http://localhost:5173](http://localhost:5173) to access the application.

## Project Structure
```
/canteen_copyshop_Automation
│── backend/             # Node.js backend
│   ├── models/         # MongoDB models
│   ├── routes/        # API routes
│   ├── server.js      # Backend entry point
│
│── frontend/          # React PWA frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/     # Main views
│   │   ├── api.js     # API service
│   │   ├── App.jsx    # Root component
│   ├── public/        # Static assets
│   ├── vite.config.js # Vite configuration
│
│── README.md          # Project documentation
```

## API Endpoints

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| POST   | `/api/orders`       | Create new order         |
| GET    | `/api/orders`       | Get all orders (admin)   |
| PATCH  | `/api/orders/:id`   | Update order status      |

## Deployment

### Frontend Deployment (Vercel)
```sh
cd frontend
npm run build
vercel
```

### Backend Deployment (Render/Railway)
1. Set up MongoDB Atlas for production database
2. Configure environment variables
3. Deploy using:
```sh
git push
```

## PWA Features
- **Installation**: Users can install the app on their devices
- **Offline Mode**: Basic functionality works without internet
- **Fast Loading**: Service worker caches assets for quick loading

## Testing

### Student Flow:
1. Access [http://localhost:5173](http://localhost:5173)
2. Upload files and place an order
3. Verify order appears in admin view

### Admin Flow:
1. Access [http://localhost:5173/admin](http://localhost:5173/admin)
2. Update order statuses
3. Verify changes reflect in database

## Troubleshooting
- **Blank Page**: Check browser console for errors
- **API Connection Issues**: Ensure backend is running on port 5000
- **Database Issues**: Verify MongoDB is running
- **PWA Installation**: Must be served over HTTPS in production

## License
This project is licensed under the MIT License.

