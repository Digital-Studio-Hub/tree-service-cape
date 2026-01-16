# Admire Tree Service

## Overview

A professional lead-generation website for Admire Tree Service, a tree felling and maintenance company based in Cape Town, South Africa. The site is designed to generate local leads through a contact form and WhatsApp integration, showcase services with a gallery, and build trust through clean, nature-inspired design. The application uses a React frontend with Express backend, PostgreSQL database, and integrates with ZeptoMail for email notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming (green/brown/white nature palette)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for server state and data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints defined in shared/routes.ts with Zod schemas
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Email Service**: ZeptoMail integration for lead notifications

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: shared/schema.ts
- **Migrations**: Drizzle Kit with migrations stored in /migrations
- **Tables**: leads (id, name, email, phone, service, message, createdAt)

### Project Structure
```
client/           # React frontend
  src/
    components/   # Reusable UI components
    pages/        # Route pages (Home, About, Services, Gallery, Contact)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API route handlers
  storage.ts      # Database operations
  email.ts        # ZeptoMail integration
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
  routes.ts       # API contract definitions with Zod
```

### Key Design Decisions
1. **Shared API Contracts**: API routes and validation schemas defined in shared/routes.ts ensure type safety between frontend and backend
2. **Mobile-First Design**: Responsive layouts with mobile navigation and touch-friendly WhatsApp floating button
3. **Form-to-Lead Pipeline**: Contact form submissions create database records and trigger dual email notifications (admin + user confirmation)
4. **Static Assets**: Images served from /public/images/ with fallback handling

## External Dependencies

### Email Service
- **Provider**: ZeptoMail (api.zeptomail.com)
- **Configuration**: Requires ZEPTOMAIL_TOKEN environment variable
- **From Address**: noreply@admiretreefellingservice.co.za

### Database
- **Provider**: PostgreSQL
- **Configuration**: Requires DATABASE_URL environment variable
- **ORM**: Drizzle with drizzle-kit for migrations

### Key NPM Packages
- **UI**: @radix-ui/* primitives, lucide-react icons, embla-carousel-react
- **Data**: @tanstack/react-query, drizzle-orm, drizzle-zod
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Styling**: tailwindcss, class-variance-authority, clsx

### External Fonts
- Outfit (sans-serif) - Body text
- Playfair Display (serif) - Headings
- Loaded via Google Fonts CDN