# 🏡 ENHANCIA — Complete Frontend Design System
## AI-Powered Real Estate Photo Enhancement Platform

---

## 🎨 DESIGN FOUNDATION

### Color Palette (Extracted from Brand)
```
PRIMARY COLORS
--cyan-bright: #2DD4DE        // Light cyan (logo top)
--cyan-medium: #1AAFBD        // Medium cyan
--teal-deep: #0D7A8C          // Deep teal (logo bottom)
--navy-dark: #2D3E50          // Text primary

SECONDARY COLORS
--cream-warm: #F8F6F3         // Background light
--gray-soft: #E8E6E3          // Dividers
--gray-medium: #9CA3AF        // Text secondary
--white-pure: #FFFFFF         // Clean backgrounds

ACCENT COLORS
--success: #10B981            // Success states
--warning: #F59E0B            // Warnings
--error: #EF4444              // Errors
--highlight: #FFD700          // Premium features

PHOTOGRAPHY-INSPIRED GRADIENTS
--gradient-sky: linear-gradient(135deg, #2DD4DE 0%, #0D7A8C 100%)
--gradient-dusk: linear-gradient(135deg, #1AAFBD 0%, #2D3E50 100%)
--gradient-overlay: linear-gradient(180deg, rgba(45,212,222,0.1) 0%, rgba(13,122,140,0.05) 100%)
```

### Typography System
```
FONT FAMILIES
--font-display: 'Clash Display', sans-serif     // Headlines
--font-body: 'Inter', sans-serif                // Body text
--font-mono: 'JetBrains Mono', monospace        // Technical elements

SCALE (Desktop)
--text-mega: 72px / 1.1 / -0.02em               // Hero headlines
--text-hero: 56px / 1.2 / -0.01em               // Section heroes
--text-h1: 48px / 1.3 / -0.01em                 // Page titles
--text-h2: 36px / 1.3 / 0em                     // Section titles
--text-h3: 28px / 1.4 / 0em                     // Subsections
--text-h4: 20px / 1.4 / 0em                     // Card titles
--text-body-lg: 18px / 1.6 / 0em                // Large body
--text-body: 16px / 1.6 / 0em                   // Standard body
--text-small: 14px / 1.5 / 0em                  // Supporting text
--text-tiny: 12px / 1.4 / 0.02em                // Labels

SCALE (Mobile - 0.85x reduction)
--text-mega-mobile: 48px
--text-hero-mobile: 40px
--text-h1-mobile: 36px
```

### Spacing System
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
--space-10: 128px
```

### Border Radius System
```
--radius-sm: 8px              // Small elements
--radius-md: 12px             // Cards, buttons
--radius-lg: 16px             // Large cards
--radius-xl: 24px             // Feature sections
--radius-2xl: 32px            // Hero sections
--radius-full: 9999px         // Pills, avatars
```

---

## 📸 PHOTOGRAPHY DESIGN PRINCIPLES

### Visual Language
1. **Aperture-Inspired Layouts**: Use circular masks and iris-like reveals
2. **Lens Flare Accents**: Subtle light leak effects on hover states
3. **Depth of Field**: Layered z-index with blur effects for depth
4. **Golden Hour Aesthetics**: Warm overlays on premium features
5. **Rule of Thirds Grid**: Asymmetric 2/3 - 1/3 content splits
6. **Film Strip Navigation**: Timeline-style progress indicators
7. **Viewfinder Frames**: Bordered focus areas with corner brackets
8. **Exposure Transitions**: Fade-in animations mimicking exposure adjustments

### Motion Design
```
EASING FUNCTIONS
--ease-smooth: cubic-bezier(0.4, 0.0, 0.2, 1)
--ease-snap: cubic-bezier(0.34, 1.56, 0.64, 1)
--ease-photo: cubic-bezier(0.25, 0.46, 0.45, 0.94)

DURATIONS
--duration-instant: 150ms
--duration-quick: 250ms
--duration-normal: 400ms
--duration-slow: 600ms
--duration-slower: 800ms
```

---

## 🌟 COMPONENT LIBRARY

### Navigation Bar (Global)
```
HEIGHT: 80px (desktop) / 64px (mobile)
BACKGROUND: rgba(248, 246, 243, 0.8) with backdrop-blur(20px)
BORDER-BOTTOM: 1px solid rgba(45, 212, 222, 0.1)
POSITION: Sticky top
Z-INDEX: 1000

LEFT SECTION
- Logo (48px height)
- Hover: Subtle glow effect with --cyan-bright shadow

CENTER SECTION (Desktop only)
- Nav Links: "Features" · "Pricing" · "Knowledge Base" · "About"
- Typography: 15px, 600 weight
- Hover: Underline with --cyan-bright (2px, animated)
- Active: Color: --teal-deep

RIGHT SECTION
- "Login" (Ghost button)
- "Try Free" (Primary button with gradient)
- Credits indicator (logged in): Pill with icon

MOBILE
- Hamburger menu (right side)
- Full-screen overlay with fade-in
- Stacked navigation with large touch targets (60px height)
```

### Primary Button
```
STYLE: Gradient background
BACKGROUND: var(--gradient-sky)
PADDING: 14px 32px
BORDER-RADIUS: var(--radius-md)
FONT: 16px, 600 weight
COLOR: white
BOX-SHADOW: 0 4px 20px rgba(45, 212, 222, 0.25)

HOVER
- Transform: translateY(-2px)
- Box-shadow: 0 8px 30px rgba(45, 212, 222, 0.35)
- Scale: 1.02

ACTIVE
- Transform: translateY(0)
- Scale: 0.98

DISABLED
- Opacity: 0.5
- Cursor: not-allowed
- No hover effects
```

### Secondary Button
```
BACKGROUND: transparent
BORDER: 2px solid var(--teal-deep)
PADDING: 12px 28px
COLOR: var(--teal-deep)

HOVER
- Background: var(--teal-deep)
- Color: white
```

### Ghost Button
```
BACKGROUND: transparent
PADDING: 10px 20px
COLOR: var(--navy-dark)

HOVER
- Background: rgba(45, 212, 222, 0.1)
- Border-radius: var(--radius-sm)
```

### Input Field
```
HEIGHT: 52px
PADDING: 16px 20px
BACKGROUND: white
BORDER: 2px solid var(--gray-soft)
BORDER-RADIUS: var(--radius-md)
FONT: 16px

FOCUS
- Border-color: var(--cyan-bright)
- Box-shadow: 0 0 0 4px rgba(45, 212, 222, 0.1)

ERROR
- Border-color: var(--error)
- Background: rgba(239, 68, 68, 0.05)
```

### Card Component
```
BACKGROUND: white
PADDING: 32px
BORDER-RADIUS: var(--radius-lg)
BOX-SHADOW: 0 1px 3px rgba(0, 0, 0, 0.05)
BORDER: 1px solid var(--gray-soft)

HOVER (Interactive cards)
- Transform: translateY(-4px)
- Box-shadow: 0 12px 40px rgba(13, 122, 140, 0.15)
- Border-color: var(--cyan-bright)
```

---

## 💎 PAGE 1 — LANDING PAGE

### SECTION 1 — Hero Block (Full Viewport)

**Structure**
```
HEIGHT: 100vh (minimum 700px)
LAYOUT: Split diagonal 60/40
BACKGROUND-LEFT: var(--gradient-sky) with animated mesh gradient
BACKGROUND-RIGHT: Full-bleed before/after image slider
DIVIDER: Diagonal cut at 25-degree angle with subtle glow
```

**Functional Elements**

| Zone | Element | Function |
|------|---------|----------|
| **Top Navigation** | Transparent overlay nav | Logo (left) · Links (center) · CTA (right) |
| **Left Content Area** | Enhancia™ Logo | Animated entrance with fade + scale |
| | Primary Headline | "Transform Property Photos Into Buyer Magnets" |
| | Subheadline | "AI-powered enhancement for real estate professionals. No subscriptions. No complexity. Just stunning results." |
| | Statistics Bar | "50,000+ Enhanced" · "4.9★ Rating" · "2min Avg. Time" |
| | CTA Group | "Upload Photo Free" (Primary) + "Watch Demo" (Ghost with play icon) |
| | Trust Indicators | Logos: "Trusted by RE/MAX · Century 21 · Coldwell Banker" (grayscale, 40% opacity) |
| **Right Visual Area** | Interactive Before/After | Draggable slider with viewfinder frame, corner brackets, real property photos |
| | Feature Pills | Floating pills: "Day to Dusk" "Virtual Staging" "Sky Replacement" with hover preview |
| **Bottom Scroll Indicator** | Animated arrow | Bouncing arrow with "Scroll to explore" |

**Visual Details**
- Animated gradient shifts on left background (slow, 10s loop)
- Particle system: Floating geometric shapes (circles, triangles) representing photo pixels
- Typography: Headline 72px Clash Display, Subhead 20px Inter
- CTA buttons elevated with strong shadow (0 8px 40px rgba(45, 212, 222, 0.3))

---

### SECTION 2 — Problem/Solution Narrative

**Structure**
```
BACKGROUND: var(--cream-warm)
PADDING: 120px 0
LAYOUT: Centered content, max-width 1200px
```

**Content Flow**
```
[SMALL LABEL] "THE REALITY OF PROPERTY MARKETING"
[HEADLINE] "Blurry photos kill listings. Dark rooms scare buyers."
[GRID - 3 columns]

Column 1: "The Problem"
- Icon: Camera with X
- Text: "82% of buyers skip listings with poor photos"
- Stat visualization: Declining graph

Column 2: "The Old Solution"
- Icon: Clock + Dollar
- Text: "Professional photographers: $200-500 + 2-day wait"
- Stat: "Average cost & turnaround"

Column 3: "The Enhancia Way"
- Icon: Lightning + AI
- Text: "AI enhancement: $0.69 per image, 2 minutes"
- Stat: "96% cost reduction"

[DIVIDER LINE] 1px, --cyan-bright, centered, 100px width

[SUBHEADLINE] "Upload once. Download perfection."
```

**Visual Treatment**
- Each column has subtle card with hover lift effect
- Icons: Custom designed, outlined style, 64px, --teal-deep color
- Stats animate on scroll (count-up effect)

---

### SECTION 3 — Features Showcase (Photography Grid)

**Structure**
```
BACKGROUND: White
PADDING: 140px 0
LAYOUT: Bento grid (asymmetric boxes)
```

**Grid Layout**
```
ROW 1: [Large Feature] [Small Feature] [Small Feature]
ROW 2: [Small Feature] [Large Feature] [Small Feature]
ROW 3: [Medium Feature] [Medium Feature]
```

**Feature Cards (Large)**
```
SIZE: 2x2 grid units
BACKGROUND: Gradient from feature image
BORDER: 2px solid white
BORDER-RADIUS: var(--radius-xl)
PADDING: 48px
LAYOUT: Image left, content right

CONTENT
- Icon badge (floating, top-right): Feature icon in pill
- Title: 32px, "Sky Replacement"
- Description: 18px, "Replace dull skies with vibrant blue or golden-hour sunsets. AI detects and seamlessly blends."
- Before/After toggle: Inline slider
- CTA: "Try This Feature →"

HOVER
- Image scales 1.05
- Content slides up 8px
- Shadow intensifies
```

**Feature Cards (Small)**
```
SIZE: 1x1 grid unit
BACKGROUND: White
IMAGE: Top, 60% height
CONTENT: Bottom 40%
- Icon + Title
- Short description (2 lines)
HOVER: Image zoom effect with overlay
```

**Features to Display**
1. **Sky Replacement** (Large)
2. **Day to Dusk** (Large)
3. **Virtual Staging** (Large)
4. **Prospect Correction** (Small)
5. **Declutter** (Small)
6. **4K Upscale** (Small)
7. **Green the Grass** (Medium)
8. **Facade Upgrade** (Medium)

---

### SECTION 4 — How It Works (Timeline)

**Structure**
```
BACKGROUND: var(--gradient-overlay) over cream
PADDING: 120px 0
LAYOUT: Horizontal timeline (desktop) / Vertical (mobile)
```

**Timeline Design**
```
[HEADLINE CENTER] "Three Steps. Zero Learning Curve."

STEP 1 ————————— STEP 2 ————————— STEP 3
  ↓                 ↓                 ↓
[Circle]         [Circle]         [Circle]
Upload           Enhance          Download

VISUAL LINE: Dashed line connecting circles (--cyan-bright)
CIRCLES: 120px diameter, white background, number inside

Each Step Card:
- Image: Animated GIF showing action (upload animation, enhancement, download)
- Title: 24px, "Upload Your Photo"
- Description: "Drag and drop or click. JPG, PNG, WebP supported. Up to 50MB."
- Time indicator: "~10 seconds"
```

**Interaction**
- As user scrolls, each step animates in sequence
- Timeline line draws from left to right
- Numbers count up in circles

---

### SECTION 5 — Before/After Gallery (Fullwidth Carousel)

**Structure**
```
BACKGROUND: Black (#000000)
PADDING: 0 (fullwidth bleed)
HEIGHT: 800px (desktop)
```

**Carousel Design**
```
[HEADER OVERLAY]
- Position: Absolute, top-left
- Background: Gradient overlay (transparent to black)
- Title: "Real Results. Real Properties." (white, 48px)
- Subtitle: "Swipe through actual enhancements from Enhancia users"

[CAROUSEL CONTAINER]
- Layout: 3 visible slides (1 center focus, 2 partial sides)
- Slides: Before/After image pairs with draggable slider
- Navigation: Left/Right arrows (floating, outside slides)
- Indicators: Dot navigation (bottom-center)

Each Slide:
- Image ratio: 16:9
- Overlay info card (bottom-left of image):
  - Property type: "Modern Condo"
  - Enhancement: "Sky + Virtual Staging"
  - Location: "Austin, TX"
  - Agent quote: "Sold 3 days faster" (testimonial snippet)
  
AUTO-PLAY: 5s interval, pauses on hover
```

**Visual Effects**
- Center slide: Scale 1.0, full opacity
- Side slides: Scale 0.9, 70% opacity
- Smooth transition with --ease-photo
- Image has subtle vignette overlay

---

### SECTION 6 — Social Proof (Testimonials + Stats)

**Structure**
```
BACKGROUND: var(--cream-warm)
PADDING: 100px 0
LAYOUT: Stats bar top, testimonial cards below
```

**Stats Bar**
```
LAYOUT: 4 equal columns, centered
BACKGROUND: White card, elevated shadow
PADDING: 48px
BORDER-RADIUS: var(--radius-lg)

Stat 1: "50,000+" / "Photos Enhanced"
Stat 2: "4.9/5.0★" / "Average Rating"
Stat 3: "2min" / "Avg. Processing Time"
Stat 4: "98%" / "Customer Satisfaction"

Each stat:
- Number: 56px, --teal-deep, Clash Display
- Label: 16px, --gray-medium
- Icon above: Relevant pictogram
```

**Testimonial Cards (3 columns)**
```
CARD DESIGN
- Background: White
- Padding: 32px
- Border-radius: var(--radius-md)
- Border-left: 4px solid var(--cyan-bright)

CONTENT
- Quote: 18px, italic, --navy-dark
- Divider: 40px line, --gray-soft
- Profile section:
  - Avatar: 48px circle (real estate agent photo)
  - Name: 16px, bold
  - Title: "Real Estate Agent, Keller Williams"
  - Star rating: 5 stars, --highlight color

HOVER
- Slight rotation (2deg)
- Shadow increase
```

**Testimonials to Include**
1. Agent: "Saved $300 per listing on photography"
2. Property Manager: "Tenants inquire 3x more on enhanced listings"
3. Developer: "Sold pre-construction units 40% faster"

---

### SECTION 7 — Pricing Preview

**Structure**
```
BACKGROUND: White
PADDING: 120px 0
LAYOUT: Centered headline, 3-column grid
```

**Section Header**
```
[LABEL] "SIMPLE, TRANSPARENT PRICING"
[HEADLINE] "Pay Only For What You Use. No Subscriptions Required."
[SUBHEAD] "Start free. Scale as you grow. Cancel anytime."
```

**Pricing Cards (3 options)**

**Card 1: Free Trial**
```
BACKGROUND: White
BORDER: 2px solid var(--gray-soft)
BADGE: "START HERE" (top-right, --success color)

CONTENT
- Title: "Free Trial"
- Price: "$0"
- Credits: "5 free credits"
- Features list:
  ✓ All enhancement tools
  ✓ Watermarked downloads
  ✓ 2K resolution
  ✓ Email support
- CTA: "Start Free" (Secondary button)
```

**Card 2: Credit Packs** (POPULAR)
```
BACKGROUND: White
BORDER: 3px solid var(--cyan-bright)
BADGE: "MOST POPULAR" (--highlight background)
BOX-SHADOW: Elevated with cyan glow

CONTENT
- Title: "Credit Packs"
- Price: "From $0.69/image"
- Options dropdown preview: "20, 50, 100, 200 credits"
- Features list:
  ✓ No watermarks
  ✓ 4K resolution
  ✓ Priority processing
  ✓ 1-year validity
- CTA: "Buy Credits" (Primary button with gradient)
```

**Card 3: Unlimited**
```
BACKGROUND: var(--gradient-dusk) (dark gradient)
TEXT-COLOR: White
BADGE: "BEST VALUE" (--highlight)

CONTENT
- Title: "Unlimited Pro"
- Price: "$599/month"
- Credits: "Unlimited edits"
- Features list:
  ✓ Unlimited everything
  ✓ API access
  ✓ Custom branding
  ✓ Dedicated support
- CTA: "Go Unlimited" (White button with dark text)
```

**Interactive Element**
- Toggle switch: "Monthly" / "Annual (Save 20%)"
- Prices update with smooth animation

---

### SECTION 8 — Trust Builders

**Structure**
```
BACKGROUND: var(--cream-warm)
PADDING: 80px 0
LAYOUT: 4-column grid
```

**Trust Elements (Icon + Text)**

```
Element 1: "Fast Processing"
- Icon: Stopwatch
- Text: "2-minute average enhancement time"

Element 2: "Secure & Private"
- Icon: Lock
- Text: "Bank-level encryption. Images deleted after 24h"

Element 3: "No Lock-In"
- Icon: Unlock
- Text: "No subscriptions required. Use when you need"

Element 4: "Real Support"
- Icon: Headset
- Text: "Human support team. Not bots. 12hr response time"

STYLING
- Icons: 56px, outlined style, --teal-deep
- Text: 16px, centered below icon
- Hover: Icon bounces with --ease-snap
```

---

### SECTION 9 — Final CTA (Full-Width)

**Structure**
```
BACKGROUND: var(--gradient-sky)
PADDING: 100px 0
TEXT-COLOR: White
LAYOUT: Centered content
```

**Content**
```
[HEADLINE] "Ready to Transform Your Listings?"
(56px, Clash Display, white, centered)

[SUBHEADLINE] "Join 50,000+ agents creating stunning property photos"
(20px, Inter, white, 80% opacity)

[CTA BUTTON GROUP]
- "Upload Your First Photo" (Large white button with dark text, strong shadow)
- "View Pricing" (Ghost button, white border)

[FINE PRINT] "No credit card required for free trial"
(14px, 70% opacity)
```

**Background Effect**
- Animated gradient shift
- Floating geometric shapes (subtle, white, 10% opacity)

---

### FOOTER

**Structure**
```
BACKGROUND: var(--navy-dark)
COLOR: White
PADDING: 80px 0 40px
```

**Layout (4 columns)**

**Column 1: Brand**
```
- Enhancia logo (white version)
- Tagline: "AI-Powered Property Photo Enhancement"
- Social icons: LinkedIn, Twitter, Instagram, Facebook
  (32px, circular, hover: --cyan-bright background)
```

**Column 2: Product**
```
- Features
- Pricing
- Knowledge Base
- API Docs
- Changelog
```

**Column 3: Company**
```
- About Us
- Our Mission
- Contact
- Careers
- Press Kit
```

**Column 4: Legal**
```
- Privacy Policy
- Terms of Service
- Refund Policy
- Content Policy
- Cookie Settings
```

**Bottom Bar**
```
BORDER-TOP: 1px solid rgba(255, 255, 255, 0.1)
PADDING-TOP: 32px
LAYOUT: Flex, space-between

LEFT: "© 2024 Enhancia. All rights reserved."
RIGHT: "Made with ❤️ for real estate professionals"
```

---

## 🏢 PAGE 2 — ABOUT US

### SECTION 1 — Hero Introduction

**Structure**
```
BACKGROUND: White
PADDING: 140px 0 80px
LAYOUT: Centered, max-width 900px
```

**Content**
```
[LABEL] "ABOUT ENHANCIA"
(14px, --cyan-bright, uppercase, letter-spacing: 2px)

[HEADLINE] "We're Building the Future of Property Photography"
(56px, Clash Display, --navy-dark)

[INTRO PARAGRAPH] 
"Enhancia was born from a simple frustration: Why should stunning property photos cost hundreds of dollars and take days to receive? We believed technology could democratize professional-quality imagery—making it instant, affordable, and accessible to every real estate professional, from independent agents to global firms."
(20px, Inter, --gray-medium, line-height: 1.8)

[DECORATIVE ELEMENT]
- Abstract representation of camera + AI (illustrated, --cyan-bright accents)
```

---

### SECTION 2 — Our Story (Visual Timeline)

**Structure**
```
BACKGROUND: var(--cream-warm)
PADDING: 100px 0
LAYOUT: Vertical timeline (left-aligned text, right-aligned images)
```

**Timeline Events**

**2022 — The Problem**
```
IMAGE: Real estate agent frustrated with blurry photos
TEXT: "Our founders, both former real estate agents, spent thousands on photographers while watching competitors struggle with DIY photos. The industry deserved better."
```

**2023 — The Solution**
```
IMAGE: AI model development screens
TEXT: "Partnering with computer vision researchers, we trained specialized models on 500,000 property images, teaching AI to understand architecture, lighting, and buyer psychology."
```

**2024 — The Launch**
```
IMAGE: Dashboard interface screenshot
TEXT: "Enhancia launched in beta with 100 agents. Within 3 months, we processed 10,000 images. The results spoke for themselves."
```

**Today — The Movement**
```
IMAGE: Global map with pins
TEXT: "Now serving 50,000+ users across 40 countries, we're proving that professional-quality property marketing should be a right, not a luxury."
```

**Visual Treatment**
- Timeline line: Vertical, dashed, --cyan-bright
- Milestone markers: Circles with year labels
- Images: Rounded corners, subtle shadow, hover zoom

---

### SECTION 3 — Vision & Mission (Split Layout)

**Structure**
```
BACKGROUND: White
PADDING: 0 (fullwidth)
LAYOUT: 50/50 split (vertical on mobile)
```

**Left Panel: Vision**
```
BACKGROUND: var(--gradient-sky)
COLOR: White
PADDING: 100px 80px

CONTENT
- Icon: Telescope (white, 80px)
- Label: "OUR VISION"
- Headline: "A World Where Every Property Shines"
(36px, Clash Display)
- Body: "We envision a real estate industry where visual quality is never a barrier to success. Where a first-time agent has the same photographic firepower as a luxury firm. Where technology amplifies human creativity instead of replacing it."
(18px, 90% opacity)
```

**Right Panel: Mission**
```
BACKGROUND: White
PADDING: 100px 80px
BORDER-LEFT: 4px solid var(--cyan-bright)

CONTENT
- Icon: Compass (--teal-deep, 80px)
- Label: "OUR MISSION"
- Headline: "Empower Every Agent With Pro-Level Tools"
(36px, Clash Display)
- Body: "Our daily mission is simple: Make property photo enhancement instant, affordable, and exceptional. We obsess over image quality, user experience, and customer success—because when our users win, we win."
(18px, --gray-medium)
```

---

### SECTION 4 — Our Values (Card Grid)

**Structure**
```
BACKGROUND: var(--cream-warm)
PADDING: 120px 0
LAYOUT: 3-column grid (2-column mobile)
MAX-WIDTH: 1400px
```

**Value Cards (6 total)**

**Card Design**
```
BACKGROUND: White
PADDING: 48px 40px
BORDER-RADIUS: var(--radius-lg)
BORDER-TOP: 6px solid var(--cyan-bright)
BOX-SHADOW: Subtle

STRUCTURE
- Icon (top): 64px, outlined, --teal-deep
- Title: 24px, Clash Display
- Description: 16px, --gray-medium, 4 lines max

HOVER
- Translate up 6px
- Shadow intensifies
- Icon animates (specific to each)
```

**Values**

1. **Innovation First**
   - Icon: Lightbulb
   - "We push boundaries. AI is our medium, but user delight is our measure."

2. **Radical Simplicity**
   - Icon: Minimize symbol
   - "Complexity is lazy design. We make powerful tools feel effortless."

3. **Customer Obsession**
   - Icon: Heart + User
   - "Every feature decision starts with 'Does this help our users win?'"

4. **Transparency**
   - Icon: Window
   - "No hidden fees. No tricks. Just honest pricing and clear communication."

5. **Quality Uncompromised**
   - Icon: Diamond
   - "Good enough isn't. We ship when it's exceptional, not when it's done."

6. **Community Driven**
   - Icon: People network
   - "Our best features come from user feedback. You build this with us."

---

### SECTION 5 — The "Why" (Founder Story)

**Structure**
```
BACKGROUND: White
PADDING: 100px 0
LAYOUT: Centered content, max-width 1000px
```

**Content**
```
[SECTION LABEL] "WHY WE EXIST"

[HEADLINE] "Because Bad Photos Shouldn't Kill Dreams"
(48px, Clash Display)

[STORY CONTENT - 3 paragraphs]
Paragraph 1: The personal story
"In 2021, Sarah, our co-founder, lost a $450,000 listing because her client's competitor had better photos. The property was actually superior—but perception is reality in real estate. That day, she decided something had to change."

Paragraph 2: The industry problem
"The real estate industry has a visual inequality problem. Top-tier firms can afford $500 photo shoots and professional staging. New agents, small brokerages, and independent property managers can't. This creates an uneven playing field where capital matters more than skill."

Paragraph 3: The solution
"Enhancia exists to level that field. To make the visual tools of luxury real estate accessible to everyone. To prove that AI, when built with empathy and expertise, can democratize opportunity instead of concentrating it."

[SIGNATURE ELEMENT]
- Founder photo (circular, 100px)
- Name: "Sarah Chen & Alex Rodriguez"
- Title: "Co-Founders, Enhancia"
- Handwritten-style signature graphic
```

**Visual Treatment**
- Pull quote highlight: Key phrase in larger text, --cyan-bright color
- Background subtle pattern: Repeated E logo watermark, 3% opacity

---

### SECTION 6 — Team Showcase (Optional)

**Structure**
```
BACKGROUND: var(--gradient-overlay)
PADDING: 100px 0
LAYOUT: Grid (responsive: 4/3/2/1 columns)
```

**Team Member Cards**
```
CARD DESIGN
- Photo: Square, grayscale with --cyan-bright overlay on hover
- Border-radius: var(--radius-md)
- Padding-bottom: 24px

CONTENT (Below photo)
- Name: 18px, bold
- Role: 14px, --gray-medium
- One-liner: 14px, italic, personality trait
  Example: "Turns coffee into code" / "Pixel perfectionist"

HOVER
- Photo: Color reveal (transition from grayscale)
- Social links appear: LinkedIn icon
```

---

### SECTION 7 — Join Us CTA

**Structure**
```
BACKGROUND: var(--navy-dark)
COLOR: White
PADDING: 100px 0
LAYOUT: Centered
```

**Content**
```
[HEADLINE] "Want to Join the Mission?"
(48px)

[SUBHEADLINE] "We're always looking for talented people who want to reshape real estate technology."
(20px, 80% opacity)

[CTA BUTTONS]
- "View Open Positions" (Primary button, --cyan-bright background)
- "Send Us Your Ideas" (Ghost button, white border)

[FINE PRINT] "Remote-friendly · Competitive salary · Equity options"
```

---

## ⚖️ PAGE 3 — POLICIES HUB

### SECTION 1 — Policies Landing

**Structure**
```
BACKGROUND: var(--cream-warm)
PADDING: 140px 0 80px
LAYOUT: Centered content
```

**Content**
```
[HEADLINE] "Transparency in Every Pixel"
(56px, Clash Display)

[INTRO] "At Enhancia, we believe trust is earned through clarity. Here's exactly how we handle your data, content, and business relationship."

[POLICY CARDS - 2x2 Grid]

Card 1: Privacy Policy
- Icon: Shield
- Title: "Privacy Policy"
- Description: "How we collect, use, and protect your data"
- Updated: "Last updated: Dec 2024"
- CTA: "Read Full Policy →"

Card 2: Terms of Service
- Icon: Document
- Title: "Terms of Service"
- Description: "User obligations and service guidelines"
- Updated: "Last updated: Dec 2024"
- CTA: "Read Full Terms →"

Card 3: Refund Policy
- Icon: Money back arrow
- Title: "Refund & Cancellation"
- Description: "Our satisfaction guarantee and refund process"
- Updated: "Last updated: Dec 2024"
- CTA: "View Policy →"

Card 4: Content & AI Policy
- Icon: AI brain
- Title: "Content & AI Use"
- Description: "Copyright, ownership, and AI ethics"
- Updated: "Last updated: Dec 2024"
- CTA: "Learn More →"

CARD STYLING
- White background
- Hover: Lift + shadow
- Icon: 64px, --teal-deep, top-center
```

---

### SECTION 2 — Individual Policy Pages

**Common Layout for All Policy Pages**

```
STRUCTURE
HERO:
- Background: White
- Padding: 100px 0 60px
- Title: 48px, Clash Display
- Last updated: 14px, --gray-medium
- Download button: "Download PDF" (ghost button)

CONTENT AREA:
- Max-width: 800px, centered
- Background: White
- Padding: 60px 80px
- Sidebar (sticky, left): Table of contents with anchor links
- Main content (right): Policy text

TYPOGRAPHY:
- Headings: 28px, 24px, 20px (h2, h3, h4)
- Body: 16px, line-height 1.8
- Lists: Proper spacing, --cyan-bright bullets
- Important sections: Light --cyan-bright background highlight

FOOTER:
- "Questions? Contact legal@enhancia.com"
- Back to Policies Hub link
```

**Privacy Policy Structure**
```
1. Introduction
2. Information We Collect
   - Account information
   - Image uploads
   - Usage data
   - Cookies
3. How We Use Your Information
4. Image Storage & Deletion
   - Auto-delete after 24 hours
   - User-controlled deletion
5. Data Sharing (None, except legal requirements)
6. Your Rights (GDPR, CCPA compliance)
7. Security Measures
8. Contact Information
```

**Terms of Service Structure**
```
1. Acceptance of Terms
2. Account Registration
3. Service Description
4. User Obligations
   - Acceptable use
   - Prohibited content
5. Payment Terms
6. Intellectual Property
7. Limitation of Liability
8. Termination
9. Changes to Terms
```

**Refund Policy Structure**
```
1. Satisfaction Guarantee
2. Eligible Refunds
   - Unused credits within 30 days
   - Service failures
3. Non-Refundable Items
4. Subscription Cancellations
5. How to Request Refund
6. Processing Time (5-7 business days)
```

**Content & AI Policy Structure**
```
1. Acceptable Content
2. Prohibited Content
   - Illegal images
   - Copyrighted material without rights
   - Explicit content
3. Copyright & Ownership
   - You retain all rights to your images
   - License granted to Enhancia for processing only
4. AI Training Transparency
   - We DO NOT use customer images for training
   - How our models are trained
5. Output Usage Rights
```

---

## 📚 PAGE 4 — KNOWLEDGE BASE

### SECTION 1 — Knowledge Hub Landing

**Structure**
```
BACKGROUND: var(--gradient-overlay)
PADDING: 120px 0
```

**Hero Search Section**
```
[HEADLINE] "How Can We Help You Today?"
(48px, centered)

[SEARCH BAR]
- Width: 700px (desktop)
- Height: 64px
- Icon: Magnifying glass (left)
- Placeholder: "Search for guides, tutorials, FAQs..."
- Background: White
- Border-radius: var(--radius-full)
- Box-shadow: Large, soft
- Focus: Expand to 720px, stronger shadow

[QUICK LINKS BAR]
Below search, horizontal pills:
- "Getting Started"
- "Photo Tips"
- "Troubleshooting"
- "Billing Help"
- "Feature Guides"

Each pill: Clickable, scrolls to relevant section
```

**Popular Articles (Grid)**
```
LAYOUT: 3-column grid

CARD DESIGN
- Thumbnail: 16:9 ratio, screenshot or illustration
- Category badge: Top-left overlay
- Title: 20px, 2 lines max
- Excerpt: 14px, 3 lines max, --gray-medium
- Read time: "5 min read" with clock icon
- CTA: "Read Guide →"

HOVER
- Thumbnail: Zoom in slightly
- Card: Lift with shadow
```

**Popular Articles**
1. "How to Capture Better Property Photos (Even With Your Phone)"
2. "Complete Guide to Virtual Staging"
3. "Before & After: Real Estate Photo Enhancement Examples"

---

### SECTION 2 — Content Categories (Tab System)

**Structure**
```
BACKGROUND: White
PADDING: 100px 0
LAYOUT: Tabbed interface
```

**Tab Navigation**
```
HORIZONTAL TABS (sticky below header on scroll):
- How-To Guides
- Tutorials
- FAQs
- Troubleshooting
- Product Updates

TAB STYLING
- Active: Border-bottom 3px --cyan-bright, bold text
- Inactive: --gray-medium text
- Hover: --teal-deep text
```

---

### TAB 1: How-To Guides

**Layout: Accordion-style expandable sections**

```
Guide 1: How to Upload a Photo
[EXPAND BUTTON]

Expanded content:
- Step 1: Click "Upload Photo" button
  Screenshot + annotation
- Step 2: Select file or drag & drop
  Animated GIF showing action
- Step 3: Wait for upload confirmation
  Progress bar visual
- Tips: "Supported formats: JPG, PNG, WebP. Max 50MB"

Guide 2: How to Enhance an Image
Guide 3: How to Use Enhancement Tools
Guide 4: How to Remove Background
Guide 5: How to Upscale Images
Guide 6: How to Download Results
Guide 7: How to Fix Common Errors
```

**Visual Treatment**
- Each guide: Numbered steps with connecting line
- Screenshots: Bordered with subtle shadow, annotations in --cyan-bright
- Code snippets (if applicable): Monospace font, dark background

---

### TAB 2: Tutorials

**Layout: Card grid with featured tutorial**

**Featured Tutorial (Full-width)**
```
BACKGROUND: var(--gradient-sky)
COLOR: White
PADDING: 60px
LAYOUT: Image left (40%) + Content right (60%)

CONTENT
- Label: "FEATURED TUTORIAL"
- Title: "Complete Guide to AI Photo Enhancement for Real Estate"
- Description: "Everything you need to know about transforming property photos, from basic enhancements to advanced techniques."
- Stats: "45 min read · 12 examples · Video included"
- CTA: "Start Learning" (White button)
```

**Tutorial Cards (3 columns below)**
```
Card 1: "Property Photography Basics"
- Camera settings guide
- Lighting tips
- Composition rules

Card 2: "Pre-Photography Checklist"
- Property preparation
- Decluttering tips
- Staging basics

Card 3: "AI Copywriting for Property Managers"
- Writing compelling listings
- SEO optimization
- Call-to-action best practices

Card 4: "Day to Dusk Enhancement Guide"
- When to use it
- Best practices
- Before/after examples

Card 5: "Virtual Staging 101"
- Furniture selection
- Style matching
- Common mistakes

Card 6: "Sky Replacement Mastery"
- Choosing right sky
- Seasonal considerations
- Blending techniques
```

**Card Design**
- Thumbnail with play icon (if video)
- Difficulty badge: "Beginner" / "Intermediate" / "Advanced"
- Estimated time
- Format icons: Video, Article, Interactive

---

### TAB 3: FAQs

**Layout: Searchable accordion**

**Search Bar**
```
- Placeholder: "Search FAQs..."
- Filters: "All" · "Technical" · "Pricing" · "Account" · "Features"
```

**FAQ Categories**

**General Questions**
```
Q: What is Enhancia?
A: Enhancia is an AI-powered photo enhancement platform specifically designed for real estate professionals...

Q: How does AI enhancement work?
A: Our computer vision models analyze your image...

Q: Is my data secure?
A: Absolutely. We use bank-level encryption...
```

**Pricing & Billing**
```
Q: What payment methods do you accept?
Q: Do credits expire?
Q: Can I get a refund on unused credits?
Q: What's included in the free trial?
```

**Technical Questions**
```
Q: What file formats are supported?
Q: What's the maximum file size?
Q: How long does processing take?
Q: Can I batch process images?
```

**Feature-Specific**
```
Q: How does virtual staging work?
Q: Can I customize sky replacement colors?
Q: What's the difference between Enhance and Super Enhance?
```

**FAQ Item Design**
```
COLLAPSED
- Question: 18px, bold, --navy-dark
- Arrow icon: Right-facing chevron
- Hover: Background highlight

EXPANDED
- Answer: 16px, --gray-medium, padded
- Arrow: Down-facing
- Related articles: "See also: [links]"
```

---

### TAB 4: Troubleshooting

**Layout: Problem-solution cards**

**Issue Categories**
```
- Upload Issues
- Processing Failures
- Account Problems
- Payment Errors
- Download Issues
- Quality Concerns
```

**Troubleshooting Card Design**
```
STRUCTURE
- Problem icon (warning triangle)
- Problem title: "Image Upload Failing"
- Symptoms: Bulleted list
- Solutions: Numbered steps
- Still stuck?: "Contact Support" CTA

VISUAL
- Border-left: 4px solid --warning color
- Background: Light yellow tint
```

**Example Issues**

```
Issue 1: Upload Failing
Symptoms:
- Error message appears
- Progress bar freezes
- "File too large" notification

Solutions:
1. Check file size (max 50MB)
2. Verify format (JPG, PNG, WebP only)
3. Try different browser
4. Clear cache and cookies

Issue 2: Slow Processing
Issue 3: Login Problems
Issue 4: Payment Declined
Issue 5: Download Not Working
Issue 6: Results Look Blurry
```

---

### TAB 5: Product Updates

**Layout: Timeline blog**

**Update Entry Design**
```
DATE BADGE (left): "Dec 2024"
CONTENT CARD (right):
- Update type badge: "New Feature" / "Improvement" / "Bug Fix"
- Title: "Introducing Custom Branding"
- Description: What changed, why it matters
- Visual: Screenshot or demo GIF
- Learn more link

VISUAL LINE: Connecting timeline dots
```

**Recent Updates**
```
Dec 2024: Custom Branding Feature
Nov 2024: 4K Upscale Enhancement
Oct 2024: Batch Processing Beta
Sep 2024: Mobile App Launch
Aug 2024: API v2 Release
```

---

### SECTION 3 — Contact Support CTA

**Structure**
```
BACKGROUND: var(--cream-warm)
PADDING: 80px 0
LAYOUT: Centered card
```

**Content**
```
[HEADLINE] "Didn't Find What You Need?"

[DESCRIPTION] "Our support team responds in under 12 hours on average. We're here to help."

[CONTACT OPTIONS - 3 columns]

Option 1: Email Support
- Icon: Envelope
- "support@enhancia.com"
- Response: "Within 12 hours"

Option 2: Live Chat
- Icon: Chat bubble
- "Click to start chat"
- Availability: "Mon-Fri 9AM-6PM EST"

Option 3: Schedule Call
- Icon: Phone
- "Book 15-min call"
- Link: "View calendar"

[COMMUNITY LINK]
"Join our community forum" → Link to Discord/Forum
```

---

## 💰 PAGE 5 — PRICING

### SECTION 1 — Pricing Hero

**Structure**
```
BACKGROUND: White
PADDING: 140px 0 60px
LAYOUT: Centered
```

**Content**
```
[LABEL] "FLEXIBLE PRICING FOR EVERY NEED"

[HEADLINE] "Pay Only For What You Use"
(56px, Clash Display)

[SUBHEADLINE] "No hidden fees. No contracts. No complexity."
(20px, --gray-medium)

[TOGGLE SWITCH]
- Credit Packs (Default)
- Unlimited Subscription
STYLING: Pill switch, --cyan-bright for active side
```

---

### SECTION 2 — Pricing Cards (Primary View)

**Structure**
```
BACKGROUND: var(--gradient-overlay)
PADDING: 80px 0 120px
LAYOUT: 4-column grid (responsive)
```

**Card Hierarchy**

**Card 1: Free Trial**
```
SIZE: Standard
BACKGROUND: White
BORDER: 2px solid var(--gray-soft)

HEADER
- Icon: Gift box
- Title: "Free Trial"
- Price: "$0"
- Credits: "5 Credits"

FEATURES
✓ All enhancement tools
✓ 2K resolution max
✓ Watermarked downloads
✓ Email support
✗ API access
✗ Custom branding

CTA: "Start Free Trial" (Secondary button)
FOOTER: "No credit card required"
```

**Card 2: Starter Pack** (Most Popular for individuals)
```
SIZE: Standard
BACKGROUND: White
BORDER: 2px solid var(--cyan-bright)
BADGE: "POPULAR" (--cyan-bright background, top-right)

HEADER
- Icon: Star
- Title: "Starter"
- Price: "$19"
- Credits: "20 Credits"
- Unit cost: "$0.95/image"

FEATURES
✓ All enhancement tools
✓ 4K resolution
✓ No watermarks
✓ Priority processing
✓ 1-year validity
✓ Email support
✗ API access

CTA: "Buy Starter Pack" (Primary button with gradient)
FOOTER: "Most popular for agents"
```

**Card 3: Pro Pack**
```
SIZE: Standard
BACKGROUND: White
BORDER: 2px solid var(--gray-soft)

HEADER
- Icon: Lightning
- Title: "Professional"
- Price: "$69"
- Credits: "100 Credits"
- Unit cost: "$0.69/image"
- Savings badge: "Save 27%"

FEATURES
Same as Starter +
✓ Bulk upload (10 images)
✓ Priority support
✓ Custom presets

CTA: "Buy Pro Pack" (Primary button)
FOOTER: "Best value per image"
```

**Card 4: Unlimited**
```
SIZE: Taller (elevated)
BACKGROUND: var(--gradient-dusk)
TEXT-COLOR: White
GLOW: Box-shadow with cyan tint
BADGE: "BEST VALUE" (--highlight background)

HEADER
- Icon: Infinity symbol
- Title: "Unlimited Pro"
- Price: "$599/month"
- Credits: "Unlimited"
- Highlight: "Or $499/mo billed annually"

FEATURES
✓ Unlimited everything
✓ API access (10k calls/mo)
✓ Custom branding
✓ Dedicated support
✓ Team collaboration (5 users)
✓ White-label option
✓ Priority processing queue

CTA: "Go Unlimited" (White button, dark text, strong shadow)
FOOTER: "For agencies & enterprises"
```

---

### SECTION 3 — Detailed Comparison Table

**Structure**
```
BACKGROUND: White
PADDING: 100px 0
LAYOUT: Full-width table (scrollable on mobile)
```

**Table Design**
```
HEADER ROW
- Column 1: Feature name
- Columns 2-5: Plan names (Free, Starter, Pro, Unlimited)

STYLING
- Header: --navy-dark background, white text
- Rows: Alternating white / light cream
- Checkmarks: --success color
- X marks: --gray-medium
- Hover row: Highlight background

FEATURES TO COMPARE
Basic Features:
- Enhancement tools access
- Resolution (2K/4K/8K)
- Watermark
- Processing speed
- Validity period

Advanced Features:
- API access
- Batch processing
- Custom branding
- Team collaboration
- White-label
- Dedicated support

Limits:
- Credits per month
- Concurrent uploads
- Storage duration
```

---

### SECTION 4 — Pricing FAQs

**Structure**
```
BACKGROUND: var(--cream-warm)
PADDING: 80px 0
LAYOUT: 2-column grid
```

**Common Questions**

```
Q: Do credits expire?
A: Credit packs are valid for 12 months from purchase date. Unlimited plan has no credit system.

Q: Can I upgrade or downgrade?
A: Yes, anytime. Unused credits carry over when upgrading. Downgrades take effect next billing cycle.

Q: What payment methods do you accept?
A: Credit/debit cards (Visa, Mastercard, Amex), PayPal, and wire transfer for annual plans.

Q: Is there a refund policy?
A: Unused credits can be refunded within 30 days. See our refund policy for details.

Q: Can I get a custom plan?
A: For 100+ images/month, contact sales@enhancia.com for custom pricing.

Q: Are there team discounts?
A: Yes! Teams of 5+ get 15% off. Contact us for details.
```

---

### SECTION 5 — Enterprise Inquiry

**Structure**
```
BACKGROUND: var(--navy-dark)
TEXT-COLOR: White
PADDING: 100px 0
LAYOUT: Centered content
```

**Content**
```
[ICON] Building/Enterprise icon (80px)

[HEADLINE] "Need a Custom Solution?"
(48px)

[DESCRIPTION] "We work with large agencies, property management companies, and franchises to create tailored plans."

[BENEFITS LIST]
✓ Volume discounts (200+ images/month)
✓ Custom API limits
✓ Dedicated account manager
✓ White-label branding
✓ Custom integrations
✓ SLA guarantees

[CTA BUTTONS]
- "Contact Sales" (Primary button, --cyan-bright)
- "Schedule Demo" (Ghost button)

[CONTACT INFO]
"Or email enterprise@enhancia.com"
```

---

### SECTION 6 — Savings Calculator (Interactive)

**Structure**
```
BACKGROUND: White
PADDING: 100px 0
LAYOUT: Centered calculator card
```

**Calculator Design**
```
CARD
- Width: 600px
- Background: White with --cyan-bright border
- Padding: 48px
- Box-shadow: Elevated

HEADLINE: "Calculate Your Savings"

INPUTS
Slider 1: "Photos per month"
- Range: 0-500
- Current value display (large number)

Slider 2: "Current photographer cost"
- Range: $50-$500 per shoot
- Default: $200

CALCULATION DISPLAY
Current Monthly Cost: $[calculated]
Enhancia Cost: $[calculated]
Monthly Savings: $[difference] (--success color, large)
Annual Savings: $[difference x 12]

VISUAL
- Animated bar chart comparing costs
- Percentage saved badge

CTA: "Start Saving Today" → Jumps to pricing cards
```

---

## 🔐 PAGE 6 — AUTHENTICATION PAGES

### Sign Up Page

**Structure**
```
LAYOUT: Split screen (50/50 desktop, full-width mobile)
LEFT: Gradient background with branding
RIGHT: Form area
```

**Left Panel**
```
BACKGROUND: var(--gradient-sky)
PADDING: 80px

CONTENT
- Enhancia logo (white version)
- Headline: "Join 50,000+ Real Estate Pros"
- Feature highlights:
  · "5 free credits on signup"
  · "No credit card required"
  · "2-minute setup"
- Testimonial slider
- Background: Animated geometric shapes
```

**Right Panel - Sign Up Form**
```
BACKGROUND: White
PADDING: 80px 60px
MAX-WIDTH: 500px

FORM ELEMENTS

[HEADLINE] "Create Your Account"
(32px)

[SOCIAL SIGNUP]
Buttons (full-width, stacked):
- "Continue with Google" (Google colors, icon)
- "Continue with Facebook" (Facebook colors, icon)

[DIVIDER] "Or sign up with email"
(Horizontal line with centered text)

[INPUTS]
- Full Name (required)
  Icon: User outline
  
- Email Address (required)
  Icon: Envelope
  Validation: Real-time email format check
  
- Password (required)
  Icon: Lock
  Requirements shown below:
  ✓ At least 8 characters
  ✓ One uppercase letter
  ✓ One number
  ✓ One special character
  Show/Hide password toggle (eye icon)

[CHECKBOX]
☐ "I agree to the Terms of Service and Privacy Policy"
(Required, links open in modal)

☐ "Send me product updates and tips" (Optional)

[CTA BUTTON]
"Create Account" (Primary button, full-width)
Loading state: Spinner + "Creating account..."

[FOOTER LINK]
"Already have an account? Log in"

[TRUST BADGES]
- SSL Secure icon
- GDPR Compliant badge
```

**Interaction States**
- Input focus: Cyan border glow
- Error state: Red border + error message below
- Success: Green checkmark animation
- Form submission: Disable all inputs, show loading

---

### Log In Page

**Structure**
```
Same split layout as Sign Up
```

**Right Panel - Login Form**
```
[HEADLINE] "Welcome Back"
(32px)

[SOCIAL LOGIN]
- "Continue with Google"
- "Continue with Facebook"

[DIVIDER] "Or log in with email"

[INPUTS]
- Email Address
- Password (with forgot password link inline)

[CHECKBOX]
☐ "Remember me"

[CTA BUTTON]
"Log In" (Primary button, full-width)

[FOOTER LINKS]
"Don't have an account? Sign up"
"Forgot your password?"

[SECURITY NOTE]
"Your data is encrypted and secure"
```

---

### Forgot Password Page

**Structure**
```
LAYOUT: Centered card on gradient background
BACKGROUND: var(--gradient-overlay) over white
```

**Card Content**
```
[ICON] Lock with arrow (--teal-deep, 80px)

[HEADLINE] "Reset Your Password"
(32px)

[DESCRIPTION] "Enter your email address and we'll send you a link to reset your password."

[INPUT]
- Email Address (full-width)

[CTA BUTTON]
"Send Reset Link" (Primary button)

[STATES]
Success: "Check your email! Reset link sent to [email]"
Error: "Email not found. Try again or sign up."

[BACK LINK]
"← Back to login"

[HELP TEXT]
"Didn't receive email? Check spam or contact support"
```

---

### Reset Password Page (From Email Link)

**Structure**
```
Centered card layout
```

**Content**
```
[HEADLINE] "Create New Password"

[INPUTS]
- New Password
  Password strength meter (below input)
  Visual bar: Red → Yellow → Green
  
- Confirm Password
  Real-time match validation

[REQUIREMENTS CHECKLIST]
Same as signup (8 chars, uppercase, number, special)

[CTA BUTTON]
"Reset Password"

[SUCCESS STATE]
- Green checkmark animation
- Message: "Password reset successfully!"
- Auto-redirect to login (3 seconds)
- Manual link: "Go to login"
```

---

### Email Verification Page

**Structure**
```
Centered content on white background
```

**Content**
```
[ICON] Envelope with checkmark (animated)

[HEADLINE] "Verify Your Email"
(40px)

[MESSAGE] "We sent a verification link to:"
Email display (bold, --cyan-bright)

[INSTRUCTIONS]
"Click the link in your email to activate your account. Can't find it? Check your spam folder."

[RESEND BUTTON]
"Resend Verification Email"
Cooldown timer: "Resend available in 60s"

[CHANGE EMAIL LINK]
"Wrong email? Change it here"

[LOGOUT LINK]
"Log out"
```

---

## 🖼️ PAGE 7 — MAIN DASHBOARD

### Top Navigation Bar (Persistent)

**Structure**
```
HEIGHT: 72px
BACKGROUND: White
BORDER-BOTTOM: 1px solid var(--gray-soft)
BOX-SHADOW: Small, subtle
POSITION: Fixed top
Z-INDEX: 100
```

**Layout (Flex, space-between)**

**Left Section**
```
- Enhancia logo (clickable, returns to dashboard home)
- Main nav links:
  · Dashboard (active state: bold + --cyan-bright underline)
  · Editor
  · AI Ad Copy
  · Knowledge Base
  · Pricing
```

**Right Section**
```
- Credit counter: Pill badge
  Background: --cyan-bright (10% opacity)
  Text: "47 credits" with coin icon
  Hover: Tooltip showing expiry date
  Click: Opens credit purchase modal

- Notifications bell:
  Icon with badge count (if > 0)
  Click: Dropdown with recent notifications

- Profile menu:
  Avatar (circular, 40px)
  Name (if space permits)
  Dropdown arrow
  
  DROPDOWN CONTENT:
  - Account Settings
  - Subscription
  - Billing History
  - Help & Support
  - Divider
  - Log Out (red text)
```

---

### SECTION 1 — Dashboard Home View

**Structure**
```
LAYOUT: Sidebar (left, 240px) + Main content area
BACKGROUND: var(--cream-warm)
```

**Sidebar Navigation**
```
POSITION: Fixed left
BACKGROUND: White
BORDER-RIGHT: 1px solid var(--gray-soft)
PADDING: 24px 0

NAV ITEMS (with icons):
📊 Overview (active)
🖼️ My Images
📝 My Ad Copy
📋 My Plans
⚙️ Settings

ACTIVE STATE:
- Background: --cyan-bright (10%)
- Left border: 4px solid --cyan-bright
- Bold text

BOTTOM SECTION:
- Upgrade banner (if free user)
  "Upgrade to Pro"
  "Unlimited edits from $599/mo"
  Mini CTA button
```

**Main Content Area — Dashboard Widgets**

**Welcome Banner (Top)**
```
BACKGROUND: var(--gradient-sky)
COLOR: White
PADDING: 40px
BORDER-RADIUS: var(--radius-lg)
LAYOUT: Flex, space-between

LEFT
- Greeting: "Good morning, Sarah!" (Dynamic based on time)
- Subtext: "Ready to enhance some property photos?"

RIGHT
- Quick action buttons:
  · "Upload Image" (White button)
  · "Create Ad Copy" (Ghost button, white border)
```

**Quick Stats Row (3 Cards)**
```
CARD DESIGN
- Background: White
- Padding: 32px
- Border-radius: var(--radius-md)
- Box-shadow: Subtle

Card 1: Total Enhanced
- Icon: Image stack
- Number: "1,247" (Large, --teal-deep)
- Label: "Photos Enhanced"
- Trend: "↑ 23 this week" (--success color)

Card 2: Credits Remaining
- Icon: Coin
- Number: "47"
- Label: "Credits Left"
- Action: "Buy More" link

Card 3: This Month
- Icon: Calendar
- Number: "89"
- Label: "Images This Month"
- Comparison: "12% more than last month"
```

**Recent Activity Section**
```
HEADER
- Title: "Recent Activity"
- Filter dropdown: "All" · "Images" · "Ad Copy" · "Plans"

CONTENT AREA
- Mixed feed showing latest actions
- Entry types: Image enhanced, Ad copy created, Plan uploaded

ENTRY DESIGN (List items)
Thumbnail (left, 80px square):
- Image preview or icon representing action type

Content (center):
- Action title: "Sky Replacement - 123 Main St"
- Timestamp: "2 hours ago"
- Status badge: "Completed" / "Processing" / "Failed"

Actions (right):
- Icon buttons: View, Download, Delete
- Hover: Tooltip explaining action
```

**Saved Projects (Grid Below)**
```
HEADER
- Title: "Saved Projects"
- Search bar: "Search by address..."
- View toggle: Grid / List

GRID VIEW (3 columns)

Project Card:
- Thumbnail: Before/after split or main image
- Address: "123 Main Street, Austin, TX"
- Type badges: "Photos" "Ad Copy" "Plans"
- Date: "Created Dec 5, 2024"
- Actions: Edit, Download, Share, Delete icons

HOVER STATE:
- Slight lift
- Actions reveal with fade-in
- Thumbnail zooms

EMPTY STATE:
- Illustration: Empty folder with camera icon
- Text: "No projects yet"
- CTA: "Create Your First Project"
```

---

### SECTION 2 — Editor View (Photo Enhancement)

**Structure**
```
LAYOUT: Full-width, multi-panel
BACKGROUND: var(--gray-soft) (5% opacity)
```

**Top Toolbar**
```
HEIGHT: 64px
BACKGROUND: White
BORDER-BOTTOM: 1px solid var(--gray-soft)

LEFT
- Back arrow: "← Dashboard"
- Project name: "123 Main St Enhancement" (editable on click)

CENTER
- Enhancement status: "Ready" / "Processing..." / "Complete"
- Progress indicator (if processing)

RIGHT
- Undo / Redo buttons (disabled if no history)
- Save button (auto-saves, shows "Saved" confirmation)
- Download button (opens export modal)
```

**Main Layout (3 Panels)**

**LEFT PANEL — Tools Sidebar (280px)**
```
BACKGROUND: White
PADDING: 24px
OVERFLOW: Scroll (if needed)

[UPLOAD SECTION]
If no image:
- Drag & drop zone
  Background: Dashed border, --cyan-bright
  Icon: Cloud upload (large)
  Text: "Drag image here or click to browse"
  Supported formats: "JPG, PNG, WebP (max 50MB)"
  
If image uploaded:
- Thumbnail preview (small, top)
- "Change Image" link

[TOOLS SECTION]
Header: "Enhancement Tools"

Tool Buttons (Stacked, full-width):

1. ✨ Enhance
   Sub-text: "Auto improve lighting & color"
   
2. 🌟 Super Enhance
   Sub-text: "Advanced AI enhancement"
   Badge: "PREMIUM" (if free user)
   
3. 📐 Perspective Correction
   Sub-text: "Fix angles & distortion"
   
4. ☁️ Sky Replacement
   Sub-text: "Change sky appearance"
   Expandable: Sky options (Blue, Sunset, Cloudy, etc.)
   
5. 🌆 Day to Dusk
   Sub-text: "Convert to twilight scene"
   
6. 🧹 Declutter
   Sub-text: "Remove unwanted objects"
   
7. 🛋️ Unfurnish
   Sub-text: "Remove furniture digitally"
   
8. 🎨 Virtual Staging
   Sub-text: "Add virtual furniture"
   Badge: "PREMIUM"
   
9. 📈 4K Upscale
   Sub-text: "Increase resolution"
   
10. 🌿 Green the Grass
    Sub-text: "Enhance lawn appearance"
    
11. 🏠 Facade Upgrade
    Sub-text: "Improve exterior look"
    
12. 🚗 Remove Cars & Wires
    Sub-text: "Clean up driveways & sky"
    
13. 🏷️ Branding
    Sub-text: "Add your logo/watermark"
    Expandable: Logo upload + position selector
    
14. ✏️ Custom Command
    Sub-text: "Describe your changes"
    Expandable: Text input box
    Placeholder: "E.g., 'Make the room brighter'"

BUTTON STYLING
- Background: Transparent
- Hover: --cyan-bright (10%) background
- Active/Selected: --cyan-bright (20%) background, left border 4px
- Disabled (free user on premium): Opacity 50%, lock icon
- Click: Applies enhancement, shows loading state
```

**CENTER PANEL — Image Workspace (Flexible width)**
```
BACKGROUND: Checkerboard pattern (indicates transparency)
PADDING: 40px

[IMAGE DISPLAY]
- Max-width: 100%
- Centered vertically and horizontally
- Shadow: Soft, realistic (simulating paper)
- Border: Optional, 1px white inner border

[VIEWFINDER OVERLAY]
- Corner brackets (L-shapes in all 4 corners)
- Color: --cyan-bright with 50% opacity
- Appears on hover

[ZOOM CONTROLS]
Bottom-right floating toolbar:
- Zoom out (-)
- Zoom percentage (100%, clickable to reset)
- Zoom in (+)
- Fit to screen button

[BEFORE/AFTER TOGGLE]
Top-right floating button:
- Icon: Split view
- Click: Shows slider comparing before/after
- Slider handle: Draggable, --cyan-bright circle with arrows

[LOADING STATE]
- Overlay: Semi-transparent white
- Spinner: Centered, --cyan-bright
- Progress bar: If applicable
- Text: "Enhancing image... 60%"

[ERROR STATE]
- Alert banner top: "Enhancement failed. Try again."
- Icon: Warning triangle
- CTA: "Retry" button
```

**RIGHT PANEL — Enhancement Details (320px)**
```
BACKGROUND: White
PADDING: 24px

[TABS]
- Details
- History

--- TAB: DETAILS ---

[IMAGE INFO]
Section title: "Image Information"
- Filename: "property_123.jpg"
- Dimensions: "4000 x 3000 px"
- File size: "3.2 MB"
- Format: "JPEG"

[APPLIED ENHANCEMENTS]
Section title: "Applied Enhancements"

List of applied tools:
Each entry:
- Tool icon + name: "Sky Replacement"
- Settings used: "Sunset Sky"
- Remove button (X icon)
  Click: Reverts that enhancement

If none applied:
- Text: "No enhancements applied yet"
- Suggestion: "Select a tool from the left panel"

[AI PROMPT SECTION]
(Appears after first enhancement)
Section title: "Refine With AI"
Text input:
- Placeholder: "Describe any additional changes..."
- Example: "Make windows brighter"
- Character limit: 200
- Submit button: "Apply"

--- TAB: HISTORY ---

Timeline of all actions:
- Version thumbnails (small, stacked)
- Timestamp per version
- Click version: Restores that state
- Star icon: Save favorite version

[DOWNLOAD SECTION]
Bottom sticky card:
Background: --gradient-sky (light)
- Format dropdown: "JPG" / "PNG" / "WebP"
- Quality slider: Low / Medium / High / Max
- Resolution dropdown: "Original" / "4K" / "2K" / "Web"
- Watermark toggle (disabled for paid users)
- Download button: "Download Image" (Primary)
  Shows file size estimate: "~2.5 MB"
```

---

### SECTION 3 — AI Ad Copy Writer View

**Structure**
```
LAYOUT: Three-panel horizontal split
BACKGROUND: White
```

**LEFT PANEL — Input Form (360px)**
```
BACKGROUND: var(--cream-warm)
PADDING: 32px
OVERFLOW: Scroll

[SECTION TITLE] "Generate Ad Copy"

[FORM FIELDS]

Address Input:
- Label: "Property Address"
- Icon: Location pin
- Input: Text field
  Placeholder: "123 Main Street, Austin, TX 78701"
  Auto-complete: Address suggestions (Google Places API)
- Required field indicator: Red asterisk

Additional Details (Expandable section):
- Property type: Dropdown (House, Condo, Apartment, Commercial, Land)
- Bedrooms: Number input
- Bathrooms: Number input  
- Square footage: Number input
- Price: Currency input
- Key features: Multi-line text
  Placeholder: "Pool, updated kitchen, mountain views..."

Tone of Voice:
- Label: "Select Tone"
- Button group (single select):
  [Professional] [Friendly] [Luxury] [Bold] [Minimal]
- Active button: --cyan-bright background

Keywords (Optional):
- Label: "Target Keywords"
- Tag input: Enter keywords, press enter to add
- Display as pills: Removable with X
- Placeholder: "E.g., family-friendly, investment, downtown"

Promotion (Optional):
- Checkbox: "Include promotional offer"
- Conditional input: "Enter offer details"
  Placeholder: "Open house Saturday 2-4pm"

[OUTPUT SELECTION]
Label: "Generate:"
Checkboxes (multi-select):
☑ Headlines
☑ Short Copy
☑ Long Copy
☑ Social Media Posts
☑ Call-to-Action

[GENERATE BUTTON]
Full-width, primary button
"Generate Copy"
Loading state: Spinner + "Generating..."

[CREDIT COST]
Small text below button: "Cost: 1 credit"
```

**CENTER PANEL — Generated Copy Display (Flexible)**
```
BACKGROUND: White
PADDING: 40px

[TABS FOR OUTPUT TYPES]
Horizontal tabs (sticky on scroll):
- Headlines
- Short Copy
- Long Copy
- Social Posts
- CTAs

--- TAB: HEADLINES ---

[SECTION HEADER]
- Icon: Text cursor
- Title: "Generated Headlines"
- Regenerate button (circular arrow icon)

[VARIATIONS DISPLAY]
3 headline variations in cards:

Card design per headline:
- Background: White
- Border: 1px solid --gray-soft
- Padding: 24px
- Border-radius: var(--radius-md)

Content:
- Variation label: "Headline 1"
- Headline text: Large (24px), bold
- Character count: "48 characters"

Actions (right side):
- Copy button: Clipboard icon
  Click: Copies text, shows "Copied!" tooltip
- Like button: Thumbs up (for feedback)
- Edit button: Pencil icon (makes text editable)

--- TAB: SHORT COPY ---

[SECTION HEADER] "Short Marketing Copy"

Single card with:
- Copy text: 5-7 sentences, 18px
- Word count: "89 words"
- Reading time: "30 seconds"
- Actions: Copy, Edit, Like

--- TAB: LONG COPY ---

[SECTION HEADER] "Detailed Property Description"

Card with:
- Copy text: Multiple paragraphs, formatted
- Word count: "250 words"
- Best for: "Website listings, emails"
- Actions: Copy, Edit, Like, Download as .txt

--- TAB: SOCIAL POSTS ---

[PLATFORM SELECTOR]
Button group: [Instagram] [Facebook] [Twitter/X]

For each platform, display:
- Platform icon + name
- Post text (formatted for platform)
- Hashtags section (pills)
- Character count (with platform limit indicator)
  Instagram: "240 / 2200"
  Twitter: "280 / 280" (red if over)
- Preview: Shows how post looks on platform
- Actions: Copy, Edit, Schedule (links to social tools)

--- TAB: CTAs ---

[SECTION HEADER] "Call-to-Action Suggestions"

List of 5-7 CTA options:
Each as a button-styled card:
- CTA text: "Schedule Your Private Tour Today!"
- Use case: "Best for: Urgency-driven campaigns"
- Copy button

--- COMMON FEATURES ACROSS TABS ---

[EXPORT ALL BUTTON]
Top-right of each tab:
"Export All" → Downloads .txt or .docx file with all variations

[FEEDBACK PROMPT]
Bottom of each tab:
"Was this helpful?"
[👍 Yes] [👎 No]
If No: Opens feedback form
```

**RIGHT PANEL — Saved Copy Library (360px)**
```
BACKGROUND: var(--cream-warm)
PADDING: 32px
OVERFLOW: Scroll

[SECTION TITLE] "Saved Copy"

[SEARCH BAR]
Input with magnifying glass icon
Placeholder: "Search saved copy..."

[FILTER DROPDOWN]
"All" / "Headlines" / "Short" / "Long" / "Social"

[SAVED ITEMS LIST]
Each item card:
- Address/project name: "123 Main St, Austin"
- Copy type badges: Multiple pills
- Preview: First 60 characters + "..."
- Date saved: "2 days ago"
- Actions: View, Copy, Delete

Hover: Card lifts slightly

[EMPTY STATE]
If no saved copy:
- Illustration: Document with bookmark icon
- Text: "No saved copy yet"
- Sub-text: "Generated copy will appear here"

[PAGINATION]
If > 20 items:
- "Load More" button at bottom
```

---

### SECTION 4 — Plan Enhancement View

**Structure**
```
LAYOUT: Similar to Photo Editor (3-panel)
```

**LEFT PANEL — Plan Upload & Options**
```
[UPLOAD SECTION]
- Drag & drop for plan image/PDF
- Supported: JPG, PNG, PDF
- File size: Max 20MB

[PLAN TYPE SELECTION]
Radio buttons:
○ Floor Plan
○ Site Plan
○ Elevation Drawing

[ENHANCEMENT OPTIONS]
Checkboxes:
☑ Convert to Color
☑ Add Room Labels
☑ Add Dimensions
☑ Add Furniture (if floor plan)
☑ Enhance Line Quality

[STYLE SELECTION]
Dropdown: "Modern" / "Classic" / "Minimalist" / "Luxury"

[COLOR PALETTE]
Color picker for primary accent color
Preset palettes: Cool, Warm, Neutral, Bold

[GENERATE BUTTON]
"Enhance Plan" (Primary)
Cost: "2 credits"
```

**CENTER PANEL — Plan Display**
```
Similar to image editor:
- Plan displayed centrally
- Zoom controls
- Before/after toggle
- Room labels overlay (if selected)

INTERACTIVE FEATURES:
- Click room: Edit label
- Click to add furniture (if staging enabled)
- Drag furniture items
```

**RIGHT PANEL — Plan Details**
```
[PLAN INFORMATION]
- File name
- Dimensions
- Plan type

[ROOM DESCRIPTIONS]
Auto-generated list:
- Room name: "Master Bedroom"
- Size: "14' x 16'"
- Features: Auto-detected (window, closet, etc.)
- Edit button: Make editable

[LEGEND]
Visual key for colors/symbols used

[EXPORT OPTIONS]
- Format: PDF / PNG / SVG
- Size: Letter / A4 / Tabloid
- Include: Descriptions / Legend / Measurements
- Download button
```

---

### SECTION 5 — Settings Page

**Structure**
```
LAYOUT: Sidebar + Content area
BACKGROUND: var(--cream-warm)
```

**Settings Sidebar**
```
Categories:
- Profile
- Account
- Billing
- Notifications
- Integrations
- Security
- Preferences

Active state: Bold, --cyan-bright left border
```

**SETTINGS: Profile**
```
[PROFILE PHOTO]
- Circular avatar (120px)
- Upload/Change button
- Remove button

[FORM FIELDS]
- Full Name
- Email (with verification badge if verified)
- Phone (optional)
- Company Name
- Job Title
- Website

[SAVE BUTTON]
Primary button, bottom-right
```

**SETTINGS: Account**
```
[ACCOUNT TYPE]
Display current plan: "Professional Pack"
CTA: "Upgrade Plan" / "Change Plan"

[CREDITS]
- Current balance: Large number
- Expiry date
- Usage history link
- Buy more credits button

[TEAM MEMBERS] (If applicable)
List of team members with roles
- Add member button
- Remove member action

[DANGER ZONE]
Red-bordered section:
- Delete Account button
  Opens confirmation modal with password verification
```

**SETTINGS: Billing**
```
[PAYMENT METHOD]
- Card display: •••• 4242 (Visa)
- Expiry: 12/25
- Update button

[BILLING HISTORY]
Table:
- Date | Description | Amount | Status | Invoice
- Download invoice links

[SUBSCRIPTION DETAILS] (if applicable)
- Plan name
- Billing cycle: Monthly / Annual
- Next billing date
- Amount
- Cancel subscription button
  Opens retention modal
```

**SETTINGS: Notifications**
```
Toggle switches for each notification type:

Email Notifications:
☑ Order completed
☑ Low credits warning
☐ Product updates
☐ Marketing emails

Push Notifications (if mobile):
☑ Processing complete
☑ Special offers

Frequency:
Radio: Instant / Daily digest / Weekly summary
```

**SETTINGS: Integrations**
```
[CONNECTED APPS]
List of available integrations:
- Zapier (Connect button)
- Google Drive (Connected, green badge)
- Dropbox (Connect button)
- MLS Systems (Coming soon badge)

Each integration:
- Logo
- Description: "Auto-save enhanced images to Google Drive"
- Status: Connected / Disconnected
- Action button: Connect / Disconnect / Configure

[API ACCESS] (Pro users only)
- API Key: •••••••••••• (Show button)
- Generate new key button
- API Documentation link
- Usage stats: "2,340 / 10,000 calls this month"
```

**SETTINGS: Security**
```
[PASSWORD]
- Change password button
  Opens modal with:
  - Current password
  - New password
  - Confirm new password

[TWO-FACTOR AUTH]
- Status: Enabled / Disabled
- Enable button (if disabled)
- QR code generation (if enabling)
- Backup codes (if enabled)

[SESSIONS]
List of active sessions:
- Device: "MacBook Pro - Chrome"
- Location: "Austin, TX"
- Last active: "2 hours ago"
- End session button

[LOGIN HISTORY]
Recent login attempts:
- Date/time
- Location
- Device
- Status: Success / Failed
```

**SETTINGS: Preferences**
```
[LANGUAGE]
Dropdown: English (US) / Spanish / French / etc.

[TIMEZONE]
Dropdown: Auto-detect / Manual selection

[DEFAULT SETTINGS]
- Default enhancement quality: Slider
- Auto-save edits: Toggle
- Default download format: Dropdown (JPG/PNG)

[DISPLAY]
- Theme: Light / Dark / Auto
- Compact view: Toggle (for lists/grids)
- Sidebar position: Left / Right

[ACCESSIBILITY]
- High contrast mode: Toggle
- Font size: Small / Medium / Large
- Reduce animations: Toggle
```

---

## 📱 RESPONSIVE DESIGN NOTES

### Mobile Breakpoints
```
MOBILE: < 768px
TABLET: 768px - 1024px
DESKTOP: > 1024px
```

### Mobile-Specific Adaptations

**Navigation**
- Hamburger menu (all pages)
- Bottom tab bar (dashboard views)
- Drawer-style sidebar panels

**Landing Page**
- Hero: Stacked layout (image below text)
- Features: Single column grid
- Testimonials: Horizontal scroll/swipe
- Before/After: Touch-enabled slider

**Dashboard**
- Sidebar: Collapsible drawer (swipe from left)
- Cards: Full-width, stacked
- Image editor: Vertical tool panel (bottom drawer)
- Multi-panel views: Tabbed interface instead of side-by-side

**Forms**
- Larger touch targets (44px minimum)
- Sticky submit buttons (bottom)
- Collapsed sections (accordions)

---

## 🎭 ANIMATION LIBRARY

### Page Transitions
```
FADE IN: 400ms ease-smooth
SLIDE UP: 300ms ease-smooth, 20px offset
SCALE IN: 350ms ease-snap
```

### Micro-interactions
```
BUTTON HOVER: Scale 1.02, 150ms
BUTTON CLICK: Scale 0.98, 100ms
CARD HOVER: Lift 4px, shadow expand, 250ms
CARD CLICK: Slight bounce, 200ms
```

### Loading States
```
SPINNER: Rotate 360deg, 800ms linear infinite
SKELETON: Shimmer left-to-right, 1.5s
PROGRESS BAR: Width 0-100%, smooth transition
```

### Image Enhancements
```
BEFORE/AFTER SLIDER: Smooth drag, 0 latency
REVEAL EFFECT: Wipe from center, 600ms
ZOOM: Scale + translate, 400ms ease-smooth
```

---

## ♿ ACCESSIBILITY REQUIREMENTS

### ARIA Labels
- All interactive elements have descriptive labels
- Form inputs have associated labels
- Icon buttons have aria-label attributes

### Keyboard Navigation
- Full keyboard support for all interactions
- Visible focus indicators (2px --cyan-bright outline)
- Skip to content links
- Tab order follows logical flow

### Screen Readers
- Semantic HTML5 elements
- Alt text for all images
- Live regions for dynamic content updates
- Form validation announcements

### Color Contrast
- Text on background: Minimum 4.5:1 ratio
- UI elements: Minimum 3:1 ratio
- Links: Additional non-color indicator (underline)

### Motion
- Respect prefers-reduced-motion
- Disable animations if user preference set
- Provide still alternatives to animated content

---

## 🔧 TECHNICAL SPECIFICATIONS

### Performance Targets
```
LIGHTHOUSE SCORES (Minimum)
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+

CORE WEB VITALS
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

### Image Optimization
- Lazy loading for below-fold images
- WebP format with JPG fallback
- Responsive images with srcset
- Compression: 80-85% quality for photos
- SVG for icons and logos

### Code Splitting
- Route-based code splitting
- Dynamic imports for heavy components
- Vendor bundle separation
- Critical CSS inlined

### Caching Strategy
```
STATIC ASSETS: Cache-first, 1 year
API RESPONSES: Network-first, 5 min stale-while-revalidate
IMAGES: Cache-first, 30 days
HTML: Network-first, no cache
```

---

## 🎨 DESIGN ASSET REQUIREMENTS

### Logo Variations Needed
- Full color (primary)
- White version (for dark backgrounds)
- Icon only (square, for favicons)
- Horizontal layout
- Vertical/stacked layout

### Iconography
- Outlined style (consistent with brand)
- 24px base size (scalable)
- 2px stroke width
- Custom icons for all enhancement tools
- System icons: Heroicons or similar

### Illustrations
- Onboarding illustrations (3-4)
- Empty state illustrations (5-6)
- Error state illustrations (3-4)
- Success state celebrations
- Photography-themed spot illustrations

### Photography
- High-quality property photos (before/after pairs)
- Diverse property types (residential, commercial, luxury)
- Real estate agent/team photos
- Lifestyle/contextual photography

---

## 📄 CONTENT REQUIREMENTS

### Copywriting Tone
- Professional but approachable
- Benefit-focused, not feature-focused
- Active voice preferred
- Short sentences (15-20 words max)
- Avoid jargon; explain technical terms

### Microcopy
- Button labels: Action-oriented ("Enhance Photo" not "Submit")
- Error messages: Helpful, specific, suggest solutions
- Success messages: Encouraging, brief
- Placeholder text: Example-based
- Tooltips: Concise explanations (under 15 words)

### SEO Content
- Page titles: 50-60 characters
- Meta descriptions: 150-160 characters
- H1 per page: Single, keyword-rich
- Alt text: Descriptive, under 125 characters
- Internal linking strategy

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-Launch
- [ ] All pages responsive tested (mobile, tablet, desktop)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit passed
- [ ] Performance audit passed
- [ ] All forms functional with validation
- [ ] Payment integration tested (Stripe)
- [ ] Email templates tested
- [ ] Analytics tracking implemented (GA4)
- [ ] SEO metadata complete
- [ ] SSL certificate active
- [ ] CDN configured for assets
- [ ] Error logging setup (Sentry or similar)
- [ ] Legal pages reviewed
- [ ] Privacy policy GDPR compliant
- [ ] Cookie consent banner functional

### Post-Launch Monitoring
- [ ] Monitor Lighthouse scores weekly
- [ ] Track Core Web Vitals
- [ ] Monitor error rates
- [ ] Review user feedback
- [ ] A/B test key conversion paths
- [ ] Track page load times
- [ ] Monitor API response times

---

## 💎 UNIQUE DESIGN ELEMENTS (Differentiators)

### Photography-Inspired UI
1. **Aperture Loader**: Circular loading animation mimicking camera iris
2. **Film Strip Timeline**: Enhancement history shown as film frames
3. **Viewfinder Frames**: Content areas with corner L-brackets
4. **Bokeh Backgrounds**: Soft, blurred circles in hero sections
5. **Lens Flare Accents**: Subtle light leaks on hover states
6. **Exposure Meter**: Credit balance shown as exposure indicator
7. **Golden Ratio Grid**: Layout based on photography composition rules
8. **Depth-of-Field Cards**: Layered cards with blur effect for depth

### Interactive Elements
1. **Draggable Before/After**: Smooth, responsive slider
2. **Parallax Scroll**: Subtle depth on hero sections
3. **Hover Reveals**: Information appears like developing photo
4. **Magnetic Cursor**: Cursor attracts to buttons (desktop)
5. **Animated Gradients**: Slow, organic color shifts
6. **Particle System**: Floating geometric shapes representing pixels
7. **Interactive Stats**: Numbers count up when scrolled into view
8. **Gesture Controls**: Swipe/pinch on mobile for image comparison

### Brand-Specific Patterns
1. **Wave Transitions**: Section dividers use flowing wave shape (from logo)
2. **Layered Stripes**: Three-stripe pattern (matching logo's 3 layers)
3. **Gradient Mesh**: Organic, flowing gradient backgrounds
4. **Corner Accent**: Teal triangle in corner of important elements
5. **Floating Pills**: Feature badges that subtly float/hover

---

**END OF DESIGN DOCUMENT**

This document represents a complete, photography-themed design system for Enhancia that avoids generic AI design patterns through:
- Unique photography-inspired visual language
- Custom micro-interactions and animations  
- Brand-specific design patterns derived from the logo
- Detailed, actionable specifications for every page
- Comprehensive component library
- Accessibility and performance built-in

The design emphasizes Enhancia's core value proposition—transforming property photos—through visual storytelling, intuitive workflows, and a polished, professional aesthetic that builds trust with real estate professionals.
