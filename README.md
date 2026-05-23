# Learning Dashboard

A React + TypeScript dashboard built to match the design mockup.

## Tech Stack
- React 18
- TypeScript 5
- Vite 5
- CSS Modules

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx / .module.css       # Top navigation bar
│   │   ├── BottomNav.tsx / .module.css    # Bottom tab navigation
│   │   └── SectionHeader.tsx / .module.css # Reusable section header with carousel controls
│   ├── courses/
│   │   ├── CourseCard.tsx / .module.css   # Individual course card
│   │   └── CoursesSection.tsx / .module.css
│   ├── practice/
│   │   ├── PracticeCard.tsx / .module.css # Individual practice set card
│   │   └── PracticeSection.tsx / .module.css
│   └── pending/
│       ├── PendingActionCard.tsx / .module.css
│       └── PendingActionsSection.tsx / .module.css
├── data/
│   └── mockData.ts                        # All mock data
├── hooks/
│   └── useCarousel.ts                     # Reusable carousel logic
├── types/
│   └── index.ts                           # TypeScript interfaces
├── App.tsx
├── App.module.css
├── main.tsx
└── index.css
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173
