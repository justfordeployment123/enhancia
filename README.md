# Enhancia - AI-Powered Real Estate Photo Enhancement Platform

A modern Next.js application with Tailwind CSS for transforming property photos into buyer magnets.

## Features

- 🎨 Complete design system with photography-inspired UI
- 📱 Fully responsive design
- 🚀 Built with Next.js 16 and TypeScript
- 💅 Styled with Tailwind CSS
- 🎯 Multiple pages: Landing, About, Pricing, Knowledge Base, Authentication, Dashboard

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
enhancia/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── dashboard/         # Dashboard page
│   ├── knowledge-base/    # Knowledge base page
│   ├── login/             # Login page
│   ├── pricing/           # Pricing page
│   ├── signup/            # Sign up page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── landing/          # Landing page sections
│   ├── Button.tsx         # Button component
│   ├── Card.tsx           # Card component
│   ├── Footer.tsx         # Footer component
│   ├── Input.tsx          # Input component
│   └── Navigation.tsx     # Navigation component
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Design System

The design system is based on the Enhancia brand with:

- **Primary Colors**: Cyan and Teal gradients
- **Typography**: Display font for headlines, Inter for body text
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable Button, Card, Input components

## Pages

- **Landing Page** (`/`) - Complete landing page with 9 sections
- **About** (`/about`) - Company story, vision, mission, values
- **Pricing** (`/pricing`) - Pricing plans and comparison
- **Knowledge Base** (`/knowledge-base`) - Help center and FAQs
- **Sign Up** (`/signup`) - User registration
- **Login** (`/login`) - User authentication
- **Dashboard** (`/dashboard`) - User dashboard (basic version)

## Customization

### Colors

Edit `tailwind.config.ts` to customize colors:
- `cyan-bright`, `cyan-medium`, `teal-deep` - Primary colors
- `navy-dark`, `gray-medium` - Text colors
- `cream-warm` - Background color

### Typography

Font sizes and families are defined in `tailwind.config.ts`:
- Display font for headlines
- Body font for content
- Responsive font sizes

## Build for Production

```bash
npm run build
npm start
```

## Next Steps

- Add API integration
- Implement authentication logic
- Add image upload functionality
- Connect to backend services
- Add more dashboard features

## License

ISC

