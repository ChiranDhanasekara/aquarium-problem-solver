# AquaHub - Aquarium Problem Solver

AquaHub is a comprehensive aquarium management platform that revolutionizes how aquarium enthusiasts interact, learn, and grow their hobby. Whether you're a beginner setting up your first tank or an experienced aquarist managing multiple systems, AquaHub provides the tools and community support you need.

## Project Overview

AquaHub bridges the gap between aquarium enthusiasts by creating a centralized platform where users can:

- **Trade & Exchange**: Safely buy, sell, and trade fish with verified community members
- **Expert Diagnosis**: Get professional help diagnosing fish health issues with AI-assisted recommendations
- **Community Knowledge**: Access a vast database of community-driven solutions and experiences
- **Compatibility Matching**: Use advanced algorithms to find perfect tankmates for your fish species
- **Problem Resolution**: Get step-by-step guidance for common and complex aquarium challenges

Our platform combines modern web technologies with aquarium expertise to create an intuitive, reliable, and educational experience for aquarists worldwide.

## Key User Flows

### 🐠 Fish Trading Flow
1. **Browse Listings**: Users can browse available fish with detailed descriptions, photos, and seller ratings
2. **Create Listings**: Sellers upload fish photos, provide health certificates, and set pricing
3. **Secure Communication**: Built-in messaging system for negotiations and arrangement details
4. **Trade Completion**: Secure payment processing and feedback system for successful trades

### 🩺 Health Diagnosis Flow
1. **Symptom Input**: Users describe fish symptoms using guided forms and photo uploads
2. **AI Analysis**: Advanced algorithms analyze symptoms and suggest potential diagnoses
3. **Expert Review**: Experienced aquarists and veterinarians provide additional insights
4. **Treatment Plan**: Step-by-step treatment recommendations with medication suggestions
5. **Progress Tracking**: Users can update symptoms and track recovery progress

### 🤝 Tankmate Compatibility Flow
1. **Tank Setup Input**: Users enter current tank parameters and existing fish species
2. **Compatibility Analysis**: Algorithm checks water requirements, temperament, and space needs
3. **Suggestions**: Ranked list of compatible species with detailed explanations
4. **Community Reviews**: Real user experiences with suggested combinations

### 🛠️ Problem Solving Flow
1. **Issue Description**: Users describe aquarium problems with photos and water parameters
2. **Diagnostic Questions**: Guided questionnaire to identify root causes
3. **Solution Matching**: AI matches problems with proven solutions from the database
4. **Expert Assistance**: Community experts provide personalized advice
5. **Solution Tracking**: Users can mark solutions as helpful and provide feedback

## API Routes Summary

### Authentication Routes
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication handlers
- Supports Google OAuth and credential-based authentication

### Posts & Community
- `GET /api/posts` - Retrieve community posts and discussions
- `POST /api/posts` - Create new community posts
- `PUT /api/posts/[id]` - Update existing posts
- `DELETE /api/posts/[id]` - Delete posts (author/admin only)

### Trading System
- `GET /api/trades` - List available fish trades with filtering
- `POST /api/trades` - Create new trade listings
- `PUT /api/trades/[id]` - Update trade listings
- `DELETE /api/trades/[id]` - Remove trade listings
- `POST /api/trades/[id]/contact` - Contact seller for trade inquiries

### Fish & Tank Management
- `GET /api/fish` - Retrieve fish database with species information
- `GET /api/tanks/[userId]` - Get user's tank setups
- `POST /api/tanks` - Create new tank configuration
- `PUT /api/tanks/[id]` - Update tank parameters

### Diagnosis & Health
- `POST /api/diagnosis` - Submit fish health issues for analysis
- `GET /api/diagnosis/[id]` - Retrieve diagnosis results and recommendations
- `POST /api/diagnosis/[id]/update` - Update symptom progress

## Technologies and Libraries

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router for server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better development experience
- **[React 18](https://react.dev/)** - Frontend library with concurrent features

### Database & ORM
- **[Prisma](https://www.prisma.io/)** - Type-safe database ORM with migrations
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database for production

### Authentication & Security
- **[NextAuth.js](https://next-auth.js.org/)** - Complete authentication solution
- **[Google OAuth](https://developers.google.com/identity/protocols/oauth2)** - Secure social authentication

### UI & Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization
- **[Prettier](https://prettier.io/)** - Code formatting (if configured)

## Features

- 🐠 **Fish Trading**: Buy, sell, and trade fish with fellow aquarium enthusiasts
- 🩺 **Health Diagnosis**: Get expert help diagnosing and treating sick fish
- 🤝 **Tankmate Finder**: Find compatible tankmates for your fish species
- 🛠️ **Problem Solving**: Get expert advice on aquarium setup and maintenance
- 👥 **Community**: Connect with thousands of aquarium enthusiasts worldwide

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Database**: PostgreSQL with Prisma ORM  
- **Authentication**: NextAuth.js with Google OAuth
- **Styling**: Tailwind CSS with Radix UI components
- **Language**: TypeScript
- **Deployment**: Vercel (recommended) or Docker containers

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database running
- Google OAuth credentials (for authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/aquarium-problem-solver.git
cd aquarium-problem-solver
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit the `.env` file with your database URL and OAuth credentials:
```
DATABASE_URL="postgresql://username:password@localhost:5432/aquahub_db?schema=public"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

The application uses PostgreSQL with the following main entities:

- **Users**: User accounts and profiles
- **Posts**: Community posts and discussions
- **FishTanks**: User's aquarium setups
- **Fish**: Individual fish in tanks
- **Trades**: Fish trading listings
- **TradeItems**: Items being traded

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── api/              # API route handlers
│   ├── auth/             # Authentication pages
│   ├── trade/            # Fish trading pages
│   ├── diagnose/         # Health diagnosis pages
│   └── matchmaker/       # Tankmate compatibility pages
├── components/           # Reusable UI components
│   ├── ui/               # Basic UI components
│   └── auth/             # Authentication components
├── lib/                  # Utility functions and configurations
│   ├── prisma.ts         # Prisma client
│   ├── auth.ts           # NextAuth configuration
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── styles/               # Global styles
```

## How to Run Tests

Currently, the project uses basic linting for code quality. To extend testing capabilities:

### Running Current Tests
```bash
# Run ESLint for code quality checks
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

### Setting Up Additional Testing (Recommended)
```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Install Playwright for E2E testing
npm install --save-dev @playwright/test

# Run unit tests (after setup)
npm run test

# Run E2E tests (after setup)
npm run test:e2e

# Run tests in watch mode
npm run test:watch
```

### Test Structure (When Implemented)
```
tests/
├── __tests__/           # Unit tests
│   ├── components/      # Component tests
│   ├── pages/          # Page tests
│   └── api/            # API route tests
├── e2e/                # End-to-end tests
│   ├── auth.spec.ts    # Authentication flows
│   ├── trading.spec.ts # Trading functionality
│   └── diagnosis.spec.ts # Diagnosis features
└── setup/              # Test configuration
```

## Contact & Community

### Get in Touch
- **GitHub Issues**: [Report bugs or request features](https://github.com/ChiranDhanasekara/aquarium-problem-solver/issues)
- **Discussions**: [Join community discussions](https://github.com/ChiranDhanasekara/aquarium-problem-solver/discussions)
- **Email**: [contact@aquahub.com](mailto:contact@aquahub.com)

### Community Links
- **Discord Server**: [Join our Discord](https://discord.gg/aquahub) (Community chat and support)
- **Reddit**: [r/AquaHub](https://reddit.com/r/aquahub) (Community discussions)
- **YouTube**: [AquaHub Channel](https://youtube.com/aquahub) (Tutorials and updates)
- **Twitter**: [@AquaHubApp](https://twitter.com/aquahubapp) (News and announcements)

### Contributing Guidelines
We welcome contributions from the community! Please:

1. Read our [Contributing Guide](CONTRIBUTING.md)
2. Check existing [Issues](https://github.com/ChiranDhanasekara/aquarium-problem-solver/issues)
3. Join our [Discord](https://discord.gg/aquahub) for development discussions
4. Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

### Support the Project
- ⭐ Star this repository if you find it helpful
- 🐛 Report bugs and suggest features
- 💬 Share your experience in discussions
- 🤝 Contribute code, documentation, or design improvements

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio
- `npx prisma db push` - Push schema changes to database
- `npx prisma migrate dev` - Create and apply migrations

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/your-username/aquarium-problem-solver/issues) page
2. Create a new issue if your problem isn't already addressed
3. Join our community discussions

## Roadmap

- [ ] Real-time chat for trades
- [ ] Advanced fish compatibility algorithms
- [ ] Mobile app
- [ ] AI-powered fish health diagnosis
- [ ] Aquarium equipment marketplace
- [ ] Water parameter tracking
- [ ] Fish breeding records
