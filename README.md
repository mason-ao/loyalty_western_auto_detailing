# Loyalty Western Auto Detailing

A modern loyalty program application built with Node.js to help businesses manage customer rewards and engagement.

## Features

- **Customer Management** - Register and manage customer profiles
- **Points System** - Earn and redeem points for services
- **Reward Tracking** - Track customer purchases and reward history
- **Admin Dashboard** - Manage rewards, customers, and program settings
- **API Integration** - RESTful API for third-party integrations
- **Real-time Updates** - Live notifications for point updates and rewards

## Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn
- Database (MongoDB/PostgreSQL/MySQL)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/loyalty_western_auto_detailing.git
cd loyalty_western_auto_detailing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
NODE_ENV=development
PORT=3000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
```

5. Run database migrations (if applicable):
```bash
npm run migrate
```

6. Start the development server:
```bash
npm run dev
```

## Usage

### Development
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run test suite
npm run lint         # Run linter
```

### API Endpoints

- `GET /api/customers` - Get all customers
- `POST /api/customers` - Create new customer
- `GET /api/customers/:id` - Get customer by ID
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer
- `POST /api/points/earn` - Add points to customer account
- `POST /api/points/redeem` - Redeem points for rewards
- `GET /api/rewards` - Get available rewards

## Project Structure

```
loyalty_western_auto_detailing/
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
├── tests/              # Test files
├── config/             # Configuration files
├── public/             # Static assets
└── docs/               # Documentation
```

## Configuration

The application uses environment variables for configuration. Key variables include:

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `DATABASE_URL` - Database connection string
- `JWT_SECRET` - Secret key for JWT tokens

## Testing

Run the test suite:
```bash
npm test                 # Run all tests
npm run test:unit       # Run unit tests
npm run test:integration # Run integration tests
npm run test:coverage   # Run tests with coverage report
```

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t loyalty-app .
docker run -p 3000:3000 loyalty-app
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please contact:
- Email: support@westernautoloyalty.com
- Issues: [GitHub Issues](https://github.com/yourusername/loyalty_western_auto_detailing/issues)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.