# 🚀 Quick Start Guide - LuxeDrive Car Rental

## Step 1: Install Dependencies

Open your terminal in the `car-rental` folder and run:

```bash
npm install
```

This will install:
- Angular 17
- Bootstrap 5.3
- TypeScript 5.2
- All required dependencies

## Step 2: Start Development Server

```bash
npm start
```

Or alternatively:

```bash
ng serve
```

## Step 3: Open in Browser

Navigate to: **http://localhost:4200**

The application will automatically reload when you make changes to the source files.

## 🎯 What You'll See

### Home Page (/)
- Modern hero section with gradient text
- Feature cards showcasing 6 benefits
- Customer testimonials (click to view in modal)
- Call-to-action section

### Fleet Page (/fleet)
- 9+ luxury vehicles
- Filter by category (Luxury, SUV, Sports, Economy)
- Hover tooltips on each card
- Click "View Details" to see modal with full specifications

### Booking Page (/booking)
- Complete booking form with validation
- Real-time price calculator
- Multiple dropdown menus
- Checkbox add-ons
- Confirmation and success modals

## 🎨 Features to Test

### Bootstrap Components
✅ **Tooltips**: Hover over any button or link
✅ **Modals**: Click testimonial cards, car details, booking confirmation
✅ **Dropdowns**: "More" menu in navbar, category filter (mobile), location selects
✅ **Cards**: Present throughout all pages
✅ **Grid System**: Resize browser to see responsive behavior
✅ **Forms**: Try the booking form with validation

### Angular Features
✅ **Data Binding**: Watch price update as you select options
✅ **Directives**: 
   - *ngFor: Car lists, features, testimonials
   - *ngIf: Conditional content display
   - *ngModel: Two-way form binding
✅ **Forms**: Complete validation and error messages
✅ **Routing**: Navigate between three pages

### Responsive Design
✅ Desktop (>991px): Full layout with side-by-side columns
✅ Tablet (768-991px): Adjusted layout
✅ Mobile (<768px): Stacked layout with mobile menu

## 🐛 Troubleshooting

### Port Already in Use
If port 4200 is busy, use:
```bash
ng serve --port 4201
```

### Dependencies Not Installing
Try:
```bash
npm cache clean --force
npm install
```

### Browser Not Opening
Manually navigate to: http://localhost:4200

## 📋 Project Checklist

This project includes ALL requested features:

✅ HTML5 + CSS3 + Bootstrap 5 + Angular 17
✅ Tooltips (hover over buttons and links)
✅ Modals (4 different modals across pages)
✅ Fully responsive design
✅ Custom buttons with hover effects
✅ Cards throughout the site
✅ Bootstrap grid system (container, row, col-*)
✅ Angular data binding (two-way with ngModel)
✅ Angular directives (*ngIf, *ngFor, *ngModel)
✅ Forms with validation
✅ 3 different pages (Home, Fleet, Booking)
✅ No-scroll page design
✅ Dropdowns in navbar and filters
✅ Black, Purple, Orange color scheme
✅ Cards with hover effects

## 🎓 Code Highlights

### Data Binding Example
```typescript
// Two-way binding
[(ngModel)]="bookingData.firstName"

// Property binding
[class.is-invalid]="submitted && !isEmailValid()"

// Event binding
(click)="openModal(car)"

// Interpolation
{{ car.price }}
```

### Directives Example
```html
<!-- *ngFor -->
<div *ngFor="let car of filteredCars">

<!-- *ngIf -->
<div *ngIf="showModal">

<!-- ngModel -->
<input [(ngModel)]="bookingData.email">
```

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📞 Need Help?

Check the main README.md for full documentation.

---

**Enjoy your LuxeDrive experience! 🚗💨**
