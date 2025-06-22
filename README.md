# Restaurant Point of Sale (POS) System

A comprehensive Restaurant Management System built with modern web technologies, featuring order management, table booking, payment processing, and real-time analytics.

![Restaurant POS System](pos_frontend/src/assets/images/restaurant-img.jpg)

## 🚀 Features

### Core Functionality
- **User Authentication & Authorization** - Secure login system with JWT tokens
- **Table Management** - Real-time table status tracking and reservations
- **Menu Management** - Comprehensive menu with categorized items
- **Order Processing** - Complete order lifecycle management
- **Payment Integration** - Razorpay payment gateway integration
- **Invoice Generation** - Automated bill generation and printing
- **Dashboard Analytics** - Real-time metrics and reporting
- **Responsive Design** - Mobile-first approach with modern UI

### Menu Categories
- **Starters** - Appetizers and small plates
- **Main Course** - Primary dishes (Vegetarian & Non-Vegetarian)
- **Beverages** - Hot and cold drinks
- **Desserts** - Sweet treats and traditional desserts

### Payment Methods
- Online payments via Razorpay
- Cash payments
- Digital wallet support

## 🛠️ Technology Stack

### Backend (Node.js/Express)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: Razorpay API
- **Security**: bcrypt for password hashing
- **CORS**: Cross-origin resource sharing enabled

### Frontend (React/Vite)
- **Framework**: React 19 with hooks
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Redux Toolkit
- **Data Fetching**: React Query (TanStack Query)
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Notifications**: Notistack

## 📁 Project Structure

```
Restaurant_POS_System/
├── pos_backend/                 # Backend API server
│   ├── app.js                  # Main application entry point
│   ├── config/                 # Configuration files
│   │   ├── config.js          # Environment configuration
│   │   └── database.js        # MongoDB connection
│   ├── controllers/           # Request handlers
│   │   ├── orderController.js
│   │   ├── paymentController.js
│   │   ├── tableController.js
│   │   └── userController.js
│   ├── middlewares/           # Custom middleware
│   │   ├── globalErrorHandler.js
│   │   └── tokenVerification.js
│   ├── models/               # Database models
│   │   ├── orderModel.js
│   │   ├── paymentModel.js
│   │   ├── tableModel.js
│   │   └── userModel.js
│   ├── routes/               # API routes
│   │   ├── orderRoute.js
│   │   ├── paymentRoute.js
│   │   ├── tableRoute.js
│   │   └── userRoute.js
│   └── services/             # Business logic services
├── pos_frontend/             # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── auth/        # Authentication components
│   │   │   ├── dashboard/   # Dashboard specific components
│   │   │   ├── home/        # Home page components
│   │   │   ├── invoice/     # Invoice generation
│   │   │   ├── menu/        # Menu and ordering components
│   │   │   ├── orders/      # Order management
│   │   │   ├── shared/      # Shared UI components
│   │   │   └── tables/      # Table management
│   │   ├── pages/           # Main page components
│   │   ├── redux/           # State management
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   └── constants/       # Application constants
│   └── public/              # Static assets
└── Approach/                # Documentation and diagrams
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/devilshiv-07/Restaurant_POS_System.git
   cd Restaurant_POS_System
   ```

2. **Navigate to backend directory**
   ```bash
   cd pos_backend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Environment Configuration**
   Create a `.env` file in the `pos_backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/restaurant_pos
   JWT_SECRET=your_jwt_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

5. **Start the backend server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd pos_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the `pos_frontend` directory:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Backend Deployment
The backend is configured for deployment on platforms like:
- Vercel
- Heroku
- AWS EC2
- Railway

### Frontend Deployment
The frontend is optimized for:
- Vercel (recommended)
- Netlify
- AWS S3 + CloudFront

Current deployment: `https://restaurant-pos-system-omega.vercel.app`

## 📱 Usage

### For Restaurant Staff

1. **Login**: Access the system with your credentials
2. **Dashboard**: View real-time metrics and recent activities
3. **Tables**: Manage table reservations and status
4. **Menu**: Browse and select items for orders
5. **Orders**: Process and track order status
6. **Payments**: Handle different payment methods
7. **Reports**: Generate sales and performance reports

### Key Workflows

1. **Taking an Order**:
   - Select available table
   - Add customer information
   - Choose menu items
   - Review order summary
   - Process payment
   - Generate invoice

2. **Table Management**:
   - View table status (Available/Booked)
   - Assign customers to tables
   - Track table turnover

3. **Payment Processing**:
   - Online payments via Razorpay
   - Cash payment recording
   - Receipt generation

## 🔐 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout

### Orders
- `GET /api/order` - Get all orders
- `POST /api/order` - Create new order
- `PUT /api/order/:id` - Update order
- `DELETE /api/order/:id` - Delete order

### Tables
- `GET /api/table` - Get all tables
- `POST /api/table` - Create table
- `PUT /api/table/:id` - Update table status

### Payments
- `POST /api/payment/create` - Create payment order
- `POST /api/payment/verify` - Verify payment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support and queries, please contact:
- Email: [er.shivank07@gmail.com]
- GitHub Issues: [Create an issue](https://github.com/devilshiv-07/Restaurant_POS_System/issues)

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js for the robust backend framework
- MongoDB for the flexible database solution
- Razorpay for payment integration
- All contributors and open-source libraries used

---

**Made with ❤️ for the restaurant industry** 