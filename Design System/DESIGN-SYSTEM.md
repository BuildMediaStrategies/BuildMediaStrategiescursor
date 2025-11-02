# 🎨 Build Media Strategies - Complete Design System
## Extracted from Bolt.new Project - SACRED DOCUMENT

> **CRITICAL**: This design system is the source of truth. ALL future changes must reference and maintain these patterns.

---

## 🎨 COLOR PALETTE

### Primary Colors
```typescript
colors: {
  // Base colors
  black: '#000000',           // Primary background
  darkGray: '#1A1A1A',       // Secondary backgrounds, cards
  white: '#FFFFFF',          // Primary text, buttons
  
  // Gold accents (used sparingly)
  gold: {
    light: '#ffd700',        // Hover states, highlights
    dark: '#b8860b',         // Subtle accents
  },
  
  // Purple glow effects
  purpleGlow: {
    light: 'rgba(168, 85, 247, 0.4)',   // Subtle glow
    strong: 'rgba(168, 85, 247, 0.6)',  // Intense glow
  },
  
  // Grays (for text and borders)
  gray: {
    300: '#D1D5DB',          // Light text
    400: '#9CA3AF',          // Medium text, subtle elements
    600: '#4B5563',          // Borders, inactive elements
    700: '#374151',          // Dark borders
  },
  
  // Gradients
  textGradient: 'from-white to-gray-600',  // Used for headline effects
  backgroundGradient: 'from-transparent to-black',  // Overlays
}
```

### Usage Rules
- **Black (#000000)**: Main background for sections
- **Dark Gray (#1A1A1A)**: Cards, elevated elements
- **White**: Primary text on dark backgrounds, primary buttons
- **Gold**: Accent only - use for special highlights, never as primary color
- **Purple Glow**: Hover effects on buttons and interactive elements
- **Text Gradients**: Headlines and special text elements

---

## 📝 TYPOGRAPHY

### Font Family
```typescript
fontFamily: {
  sans: ['Manrope', 'system-ui', 'sans-serif'],
}
```

**CRITICAL**: Manrope is the ONLY font. No exceptions.

### Font Sizes & Hierarchy

```typescript
// Hero/Display text
text-6xl: 3.75rem (60px)  // Large hero headlines
text-5xl: 3rem (48px)     // Hero headlines
text-4xl: 2.25rem (36px)  // Section headers
text-3xl: 1.875rem (30px) // Large headings

// Body & UI text
text-xl: 1.25rem (20px)   // Large body text
text-lg: 1.125rem (18px)  // Subheadings, prominent body
text-base: 1rem (16px)    // Standard body text
text-sm: 0.875rem (14px)  // Small text, captions

// Font weights
font-normal: 400          // Default body text
font-medium: 500          // Slightly emphasized
font-semibold: 600        // Headings
font-bold: 700            // Strong emphasis
```

### Typography Patterns

**Hero Headlines:**
```tsx
<h1>
  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium text-white leading-tight drop-shadow-2xl">
    First Line
  </span>
  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
    Second Line with Gradient
  </span>
</h1>
```

**Section Headers:**
```tsx
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-6">
  Section Title
</h2>
```

**Body Text:**
```tsx
<p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
  Body content here
</p>
```

---

## 🔘 BUTTONS

### Primary Button (White on Dark)
```tsx
<a className="inline-block px-7 sm:px-6 py-3.5 sm:py-3 bg-black text-white font-normal rounded-full border border-gray-700 hover:border-gray-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
  Button Text
</a>
```

### Secondary Button (White Fill)
```tsx
<a className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 active:scale-95">
  Button Text
</a>
```

### Outline Button
```tsx
<button className="px-5 py-1.5 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
  Register Now
</button>
```

### Button Rules
- **Always use `rounded-full`** for pill shape
- **Always include hover effects**: translate-y-1, shadow
- **Always include active effect**: scale-95
- **Transition duration**: 300ms standard
- **Purple glow on primary buttons**: `hover:shadow-purple-500/20`

---

## 🎭 ANIMATIONS

### Keyframes (from tailwind.config.js)
```typescript
animations: {
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
  'fadeIn': 'fadeIn 0.8s ease-out forwards',
  'fadeInUp': 'fadeInUp 1s ease-out forwards',
  'fadeInDelay': 'fadeIn 1.7s ease-out forwards',
  'fadeInUpDelay': 'fadeInUp 1.5s ease-out forwards',
}

keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  glow: {
    '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
    '100%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)' },
  },
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeInUp: {
    '0%': { opacity: '0', transform: 'translateY(30px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
}
```

### Usage Patterns
- **Initial page elements**: `animate-fadeIn` or `animate-fadeInUp`
- **Delayed hero content**: `animate-fadeInDelay` or `animate-fadeInUpDelay`
- **Button hover**: `transform hover:-translate-y-1`
- **Button active**: `active:scale-95`
- **Floating elements**: `animate-float`
- **Glowing effects**: `animate-glow`

---

## 🏗️ LAYOUT PATTERNS

### Navigation Bar
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm animate-fadeIn">
  {/* Logo */}
  <a href="/" className="flex items-center space-x-2">
    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
      <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
    </div>
    <span className="text-white font-normal text-lg">BuildMediaStrategies</span>
  </a>
  
  {/* Nav links */}
  <div className="hidden md:flex items-center space-x-7">
    <a href="/web-design" className="text-white hover:text-gray-300 transition-colors">
      Web Design
    </a>
  </div>
</nav>
```

**Nav Rules:**
- Fixed position with backdrop blur
- Black with 30% opacity
- 5px padding on mobile, 11px on desktop
- Logo: white circle with black inner circle
- Links: white text, gray-300 on hover
- Space-x-7 between links

### Hero Section Pattern
```tsx
<div className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
  {/* Black base */}
  <div className="absolute inset-0 bg-black" />
  
  {/* Hero image */}
  <img
    src="/hero-image.png"
    className="absolute inset-0 w-full h-full z-0"
    style={{
      objectFit: 'cover',
      objectPosition: 'center 50%',
      transform: 'translateY(18vh)',
      filter: 'brightness(0.9) contrast(1.1)',
    }}
  />
  
  {/* Top gradient cover */}
  <div className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black via-black to-transparent h-32 md:h-[20vh]" />
  
  {/* Readability veil */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 via-black/20 to-black/40" />
  
  {/* Content */}
  <header className="relative z-40 flex flex-col items-center justify-center px-5 pt-24 pb-16 min-h-[80vh]">
    {/* Hero content here */}
  </header>
  
  {/* Bottom fade (desktop only) */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-30 hidden sm:block" />
</div>
```

**Hero Rules:**
- Full viewport height minimum
- Black base layer
- Image with transform and filter
- Multiple gradient overlays for readability
- Content at z-40 (above all overlays)

### Card Pattern
```tsx
<div 
  className="rounded-2xl sm:rounded-3xl py-12 sm:py-16 px-6 sm:px-8 relative overflow-hidden"
  style={{ backgroundColor: '#1A1A1A' }}
>
  {/* Subtle texture overlay */}
  <div
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage: `
        linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
        linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
      `,
      backgroundSize: '20px 20px'
    }}
  />
  
  {/* Grey fade on bottom right */}
  <div
    className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
    style={{
      background: 'radial-gradient(circle at bottom right, rgba(128,128,128,0.3) 0%, transparent 70%)'
    }}
  />
  
  {/* Content */}
  <div className="relative z-10">
    {/* Card content */}
  </div>
</div>
```

**Card Rules:**
- Background: #1A1A1A (dark gray)
- Rounded corners: 2xl on mobile, 3xl on desktop
- Padding: py-12 sm:py-16, px-6 sm:px-8
- Subtle texture overlay at 5% opacity
- Gray radial gradient bottom-right
- Content at z-10

### Section Spacing
```typescript
// Standard section padding
py-12 sm:py-16 lg:py-20  // Vertical
px-5 sm:px-6              // Horizontal

// Max width container
max-w-6xl mx-auto         // For content
max-w-2xl mx-auto         // For centered text blocks
```

---

## 🎨 EFFECTS & OVERLAYS

### Gradient Text Effect
```tsx
<span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Backdrop Blur
```tsx
className="backdrop-blur-sm"  // For navigation
className="backdrop-blur-md"  // For modals/overlays
```

### Box Shadows
```tsx
// Standard hover shadow
hover:shadow-lg

// Purple glow shadow
hover:shadow-2xl hover:shadow-purple-500/20

// Subtle card shadow
shadow-md shadow-black/50
```

### Gradient Overlays
```tsx
// Top to bottom fade
bg-gradient-to-b from-black via-black to-transparent

// Readability veil
bg-gradient-to-b from-black/0 via-black/20 to-black/40

// Bottom fade
bg-gradient-to-b from-transparent to-black
```

---

## 📐 RESPONSIVE BREAKPOINTS

```typescript
sm: '640px'   // Mobile landscape, small tablets
md: '768px'   // Tablets
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

### Responsive Patterns

**Text Sizing:**
```tsx
text-3xl sm:text-4xl md:text-5xl lg:text-6xl
```

**Padding:**
```tsx
px-5 sm:px-6 lg:px-11
py-12 sm:py-16 lg:py-20
```

**Display:**
```tsx
hidden md:block        // Show on desktop only
block md:hidden        // Show on mobile only
hidden md:flex         // Flex on desktop
```

---

## 🚫 DESIGN RULES - DO NOT VIOLATE

### NEVER:
1. ❌ Use fonts other than Manrope
2. ❌ Use bright colors (red, blue, green) except gold accents
3. ❌ Use square corners (always rounded)
4. ❌ Use harsh shadows (always soft)
5. ❌ Use colorful gradients (only white-to-gray or purple glow)
6. ❌ Skip hover states on interactive elements
7. ❌ Use arbitrary spacing values (stick to Tailwind scale)
8. ❌ Add em dashes in copy
9. ❌ Use generic AI phrases like "transform" or "leverage"
10. ❌ Break the black/white/gold color scheme

### ALWAYS:
1. ✅ Use Manrope font
2. ✅ Include hover effects on buttons (translate-y-1)
3. ✅ Include active effects on buttons (scale-95)
4. ✅ Use rounded-full for buttons
5. ✅ Use black or dark gray backgrounds
6. ✅ Include purple glow on primary interactive elements
7. ✅ Add gradient overlays for image readability
8. ✅ Maintain consistent spacing (Tailwind scale)
9. ✅ Include fade-in animations for new elements
10. ✅ Test on mobile (mobile-first approach)

---

## 🔧 COMPONENT LIBRARY REFERENCE

### Existing Components to Reuse:
- `<Button>` - src/components/ui/button.tsx
- `<LogoCloud>` - Logo carousel
- `<StatisticsSection>` - Stats display
- `<TestimonialsSection>` - Testimonial cards
- `<CTABanner>` - Call-to-action banner
- `<Footer>` - Site footer
- `<SEOWrapper>` - SEO meta tags

### When Creating New Components:
1. Follow existing component patterns
2. Use TypeScript with proper interfaces
3. Include proper ARIA labels
4. Make fully responsive
5. Include hover/active states
6. Use design system colors only
7. Match existing animation timing (300ms standard)

---

## 📋 IMPLEMENTATION CHECKLIST

When adding ANY new feature:

- [ ] Uses Manrope font
- [ ] Uses design system colors only
- [ ] Includes hover effects (if interactive)
- [ ] Includes active effects (if clickable)
- [ ] Responsive on all breakpoints
- [ ] Has proper animations (fadeIn, etc.)
- [ ] Uses rounded corners (no sharp edges)
- [ ] Has soft shadows (no harsh)
- [ ] Black/dark gray backgrounds
- [ ] White/gray text
- [ ] Purple glow on primary elements
- [ ] Follows spacing scale
- [ ] Has ARIA labels (accessibility)
- [ ] No em dashes in copy
- [ ] No generic AI language

---

## 💡 EXAMPLE: CORRECT vs INCORRECT

### ✅ CORRECT Button
```tsx
<button className="px-7 py-3.5 bg-black text-white font-normal rounded-full border border-gray-700 hover:border-gray-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
  Get Started
</button>
```

### ❌ INCORRECT Button
```tsx
<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
  Transform Your Business
</button>
```

**Why incorrect:**
- Uses blue color (not in design system)
- Uses rounded-md instead of rounded-full
- Missing hover effects (translate, shadow, purple glow)
- Missing active effect (scale)
- Uses "Transform" (generic AI language)
- Wrong padding values

---

## 🎯 QUICK REFERENCE

**When in doubt, reference these files from the Bolt project:**
- `/src/pages/HomePage.tsx` - Hero and layout patterns
- `/src/components/CTABanner.tsx` - Card and CTA patterns
- `/src/components/ui/button.tsx` - Button variants
- `/tailwind.config.js` - Colors and animations
- `/src/index.css` - Global styles

**Golden Rule:**
> If it doesn't look like it came from the Bolt project, it's wrong.

---

## 📞 ENFORCEMENT

Every prompt to Cursor/Claude Code should:
1. Reference this design system
2. Include "maintain Bolt.new design system" instruction
3. Specify exact colors, fonts, and patterns
4. Reject any suggestions that deviate

**Example prompt prefix:**
```
CRITICAL: Maintain the exact design system from Bolt.new project.
Reference DESIGN-SYSTEM.md for all styling decisions.
- Font: Manrope only
- Colors: Black, white, gray, gold accents only
- Buttons: rounded-full with purple glow
- No blue, red, or colorful elements
```

---

**This design system is sacred. Treat it as law, not suggestion.**
