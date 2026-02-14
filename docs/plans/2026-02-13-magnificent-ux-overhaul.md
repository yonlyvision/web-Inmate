# Goal
Transform the INM8TE website into a "magnificent, smooth, and fun" experience by implementing advanced motion, refined typography, and magnetic interactions.

# Architecture
- **Global Layout**: Updated `AnimatePresence` with custom overlay transitions.
- **Components**: Framer Motion for magnetic pull, staggered reveals, and parallax images.
- **Styling**: Tailwind CSS for a cohesive "Modern Noir Editorial" look, aligning with brand identity tokens.

# Tech Stack
- React / Vite
- Framer Motion
- Tailwind CSS
- Lucide React

# Bite-sized Tasks

### Task 1: Resolve Type Blocks
- **Files**: `modify: pages/Home.tsx`, `modify: pages/Lifestyle.tsx`, `modify: pages/Connections.tsx`, `modify: components/Layout.tsx`
- **Action**: Ensure all `ease` settings are typed correctly (using `as any` or named easings like "circOut") to prevent build failures.
- **Verification**: Run `npm run build` (or check IDE for lint errors).

### Task 2: Magnificent Page Transitions
- **Files**: `modify: components/Layout.tsx`
- **Action**: Implement a color-wipe or overlay transition using a dedicated motion div that runs before the content reveals.
- **Verification**: Navigate Between pages and check for the "wipe" effect.

### Task 3: Magnetic Interaction Component
- **Files**: `new: components/Magnetic.tsx`
- **Action**: Create a wrapper component that uses `framer-motion` to create a magnetic pull effect on children based on mouse position.
- **modify: components/Header.tsx, pages/Home.tsx**: Apply to main CTA buttons.
- **Verification**: Hover over buttons and verify they "pull" toward the cursor.

### Task 4: Editorial Typography & Gradients
- **Files**: `modify: index.css`, `modify: index.html`
- **Action**: Standardize fonts (Playfair Display for headings, Inter for body). Add custom multi-stop gradients as background utilities.
- **Verification**: Visually inspect the hero and section backgrounds.

### Task 5: Scroll-Triggered Parallax & Stagger
- **Files**: `modify: pages/Home.tsx`, `modify: pages/Lifestyle.tsx`
- **Action**: Add subtle scroll-parallax to background icons. Implement staggered reveals for all list items (Books, Recipes).
- **Verification**: Scroll down the home page and observe the staggered entry.

### Task 6: Final Browser Shoot
- **Action**: Run the dev server and use the browser tool to capture the "Magnificent" experience.
- **Verification**: High-resolution screenshot/recording of the live site.
