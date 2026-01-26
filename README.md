# EatSure Web Frontend

A modern web application for nutrition tracking and meal planning.

## Getting Started

The only requirement is having Node.js installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd EatSure-Web-Frontend

# Install dependencies (requires Yarn v4)
yarn install

# Start the development server
yarn dev
```

The development server will start on port 8080.

## Tech Stack

- **Build**: Vite with React SWC plugin
- **Runtime**: React 18 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6
- **State**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + Testing Library

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Production build
- `yarn lint` - Run ESLint
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode
