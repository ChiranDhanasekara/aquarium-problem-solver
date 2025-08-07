# AquaHub - Aquarium Problem Solver

AquaHub is a comprehensive aquarium management platform that helps aquarium enthusiasts trade fish, diagnose health issues, find compatible tankmates, and solve aquarium problems.

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
