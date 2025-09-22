# Microcopy Studio MVP

A minimal web application for generating and testing button label variants with different tones. Built following the "Functional Minimal Tech" design philosophy.

## 🎯 Purpose

Validate whether designers and product people find value in generating primary button label variants with tone control and seeing them live in context.

## ✨ Features

### Core Functionality
- **Tone Selection**: Choose from 3 tone presets (Friendly, Formal, Playful)
- **Variant Suggestions**: 3 curated label options per tone selection
- **Live Preview**: Real-time button preview using shadcn/ui Button component
- **Inline Editing**: Click to edit button text directly
- **Copy/Export**: Copy text to clipboard or export as JSON

### Design System Compliance
- **Typography**: Geist Mono font with consistent sizing
- **Colors**: shadcn/ui neutral theme only
- **Spacing**: 8px baseline grid system
- **Layout**: Borderless cards with spacing-based separation
- **Tone**: Technical, concise copy throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd 04-microcopy

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **UI Library**: shadcn/ui components
- **Styling**: Tailwind CSS
- **Font**: Geist Mono
- **State Management**: React useState/useReducer

### Project Structure
```
src/
├── app/
│   ├── page.tsx              # Main application
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── tone-selector.tsx     # Tone selection UI
│   ├── variant-list.tsx      # Variant suggestions
│   ├── button-preview.tsx    # Live button preview
│   └── action-buttons.tsx    # Copy/Export actions
├── lib/
│   ├── variants.ts           # Hardcoded variant data
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript definitions
```

## 🎨 Design System

### Typography
- **Font Family**: Geist Mono (monospace)
- **Headings**: `text-base font-semibold` (consistent across all heading levels)
- **Body Text**: `text-base` (16px) for primary content, `text-sm` (14px) for secondary

### Colors
- **Theme**: shadcn/ui neutral theme
- **No custom colors** - relies on system tokens for consistency
- **Accent colors** only when functionally required

### Spacing
- **Grid**: 8px baseline system
- **Tokens**: `--space-xs` (4px), `--space-sm` (8px), `--space-md` (16px), `--space-lg` (24px)

### Components
- **Cards**: Borderless with subtle background differences
- **Buttons**: Clean, minimal styling with clear states
- **Inputs**: Consistent with shadcn/ui design tokens

## 🔧 Usage

### Basic Workflow
1. **Select Tone**: Choose from Friendly, Formal, or Playful
2. **Pick Variant**: Click one of the 3 suggested labels
3. **Edit**: Click the preview button to edit text inline
4. **Export**: Copy text or download as JSON

### Keyboard Shortcuts
- **Enter**: Save inline edits
- **Escape**: Cancel inline edits
- **Tab**: Navigate between tone options

## 📊 Current Variants

### Friendly Tone
- "Let's go!"
- "Get started" 
- "Try it out"

### Formal Tone
- "Submit"
- "Continue"
- "Proceed"

### Playful Tone
- "Go for it!"
- "Make it happen"
- "Let's do this!"

## 🚧 Development Roadmap

### Phase 1: Foundation ✅
- [x] Basic UI with hardcoded variants
- [x] Tone selection and live preview
- [x] Inline editing functionality
- [x] Copy/Export features

### Phase 2: AI Integration (Planned)
- [ ] OpenAI GPT-4o-mini integration
- [ ] Usage tracking and rate limiting
- [ ] Freemium model (3 free generations/day)

### Phase 3: Enhancement (Future)
- [ ] More component types (secondary buttons, CTAs)
- [ ] Custom tone creation
- [ ] Team collaboration features
- [ ] Figma plugin integration

## 🧪 Testing

### Manual Testing Checklist
- [ ] All tone selections work correctly
- [ ] Variant selection updates preview
- [ ] Inline editing saves/cancels properly
- [ ] Copy to clipboard works
- [ ] JSON export downloads correctly
- [ ] Responsive design on mobile
- [ ] Keyboard navigation works

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Success Metrics

### Primary KPIs
- **Usage Time**: Average session duration >2 minutes
- **Engagement**: >70% users try multiple tones
- **Export Rate**: >50% users copy or export results
- **Return Rate**: >30% users return within 7 days

### Secondary KPIs
- **Tone Distribution**: Which tones are most popular
- **Variant Selection**: Most/least chosen variants
- **Edit Behavior**: How often users modify suggestions

## 🔒 Security

Following the established security guidelines:
- No hardcoded secrets
- Environment variables for sensitive data
- Client-side only (no backend required for MVP)
- Secure copy/export functionality

## 📝 License

This project follows the same license as the parent whyship project.

---

**Built with ❤️ following the "Functional Minimal Tech" philosophy**