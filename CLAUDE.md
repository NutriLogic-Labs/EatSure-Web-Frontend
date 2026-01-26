# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: Yarn v4 (Berry)

- `yarn dev` - Start development server on port 8080
- `yarn build` - Production build
- `yarn build:dev` - Development build
- `yarn lint` - Run ESLint
- `yarn test` - Run tests once with Vitest
- `yarn test:watch` - Run tests in watch mode

## Architecture

This is a Vite + React + TypeScript application using shadcn/ui components and Tailwind CSS.

### Tech Stack
- **Build**: Vite with React SWC plugin
- **UI**: shadcn/ui (Radix UI primitives) + Tailwind CSS
- **Routing**: React Router v6
- **State/Query**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + jsdom + Testing Library

### Project Structure

- `src/App.tsx` - Main app with routing and global providers (QueryClient, TooltipProvider, Toast)
- `src/pages/` - Route components
- `src/components/` - Feature components
- `src/components/ui/` - shadcn/ui primitives (auto-generated, customize carefully)
- `src/lib/` - Utilities (includes `cn()` for className merging)
- `src/hooks/` - Custom hooks

### Path Aliases

`@/*` maps to `./src/*` (configured in vite.config.ts and tsconfig)

### Adding Routes

Add new routes in `src/App.tsx` **above** the catch-all ` "*" ` route:
```tsx
<Route path="/your-path" element={<YourPage />} />
```

### TypeScript Configuration

- Strict mode is **disabled** (noImplicitAny, strictNullChecks set to false)
- Unused parameters/locals checking disabled
- Use `@/*` path alias for imports

### UI Components

- Use shadcn/ui components from `@/components/ui/*`
- Use the `cn()` utility from `@/lib/utils` for conditional className merging
- Custom colors defined in Tailwind config: cream, forest, mint, coral
- Dark mode supported via `darkMode: ["class"]`

### Testing

- Test files: `src/**/*.{test,spec}.{ts,tsx}`
- Setup file: `src/test/setup.ts`
- Use globals from Testing Library
