# Project Screenshots Directory

This directory contains screenshots and mockups for each project in the portfolio.

## Structure

Each project has its own folder named after its ID from the `PROJECTS` array in `constants.ts`:

```
projects_ss/
├── 1/    # Healthcare Data Integration & Automation
├── 2/    # Point of Sale System - POSX
├── 3/    # Queue Management System - CMS
├── 4/    # Medical Archiving Program
├── 5/    # Barcode Scanners App
```

## Adding Images

1. Place your screenshots and mockups in the corresponding project folder (based on project ID)
2. Supported formats: `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`
3. Images will be automatically detected and displayed in a 3D carousel on the project detail page
4. Images are sorted alphabetically by filename, so use numeric prefixes for ordering (e.g., `01-screenshot.png`, `02-mockup.png`)

## Features

- **3D Carousel**: Interactive 3D carousel with smooth transitions
- **Zoom**: Click any image to zoom in, use mouse wheel to adjust zoom level (50% - 300%)
- **Navigation**: 
  - Use arrow buttons or keyboard arrows (← →) to navigate
  - ESC key to close zoom view
- **Auto-rotation**: Carousel automatically rotates every 5 seconds (when not zoomed)

## Example

For project with ID `1`:
- Place images in: `projects_ss/1/`
- Files: `projects_ss/1/screenshot1.png`, `projects_ss/1/mockup1.jpg`, etc.
- These will automatically appear in the project detail page carousel
