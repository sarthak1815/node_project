# 🚗 LuxeDrive - Premium Car Rental Website

A modern, responsive car rental website built with **Angular 17**, **Bootstrap 5**, and **TypeScript**. Features a stunning black, purple, and orange color scheme with full responsiveness, modals, tooltips, data binding, and form validation.

## ✨ Features

### 🎨 Design & UI
- **Color Scheme**: Professional black, purple, and orange theme
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **No-Scroll Pages**: Each page is designed to fit the viewport (with scrollable content areas)
- **Animations**: Smooth transitions, hover effects, and fade-in animations
- **Grid System**: Bootstrap grid layout for perfect responsiveness

### 📄 Three Main Pages

#### 1. **Home Page** 🏠
- Hero section with call-to-action buttons
- Statistics showcase (500+ cars, 10K+ clients, 50+ locations)
- Features section with 6 feature cards
- Customer testimonials with clickable cards
- Interactive modal for testimonial details
- CTA (Call-to-Action) section

#### 2. **Fleet Page** 🚙
- Dynamic car catalog with 9+ vehicles
- Category filter (All, Luxury, SUV, Sports, Economy)
- Desktop: Filter buttons | Mobile: Dropdown menu
- Car cards with specifications (seats, transmission, fuel type)
- Tooltips on hover for additional information
- Modal with detailed car information
- Price display per vehicle

#### 3. **Booking Page** 📝
- Comprehensive booking form with validation
- **Data Binding**: Two-way data binding with Angular forms
- **Directives**: *ngFor, *ngIf, *ngModel, class binding
- Personal information section
- Car type dropdown selection
- Location dropdowns (pickup/drop-off)
- Date pickers with validation
- Checkbox options for add-ons (Additional Driver, Insurance, GPS, Child Seat)
- Real-time price calculation
- Sticky summary sidebar showing booking details
- Confirmation modal before submission
- Success modal with booking reference

### 🎯 Angular Features

#### Data Binding
- **Two-way binding**: `[(ngModel)]` for form inputs
- **Property binding**: `[class.active]`, `[attr.title]`
- **Event binding**: `(click)`, `(submit)`
- **Interpolation**: `{{ variable }}`

#### Directives
- **Structural Directives**: `*ngIf`, `*ngFor`
- **Attribute Directives**: `[class]`, `[style]`, `[attr]`
- **Built-in Directives**: `ngModel`, `ngClass`

#### Forms
- Template-driven forms with `FormsModule`
- Form validation (required fields, email validation, date comparison)
- Error messages with conditional display
- Form reset functionality

### 🎭 Bootstrap Components

- **Navbar**: Sticky navigation with dropdown menu
- **Cards**: Custom styled cards throughout the site
- **Modals**: Multiple modals (testimonial, car details, booking confirmation, success)
- **Tooltips**: Hover tooltips on buttons and interactive elements
- **Dropdowns**: Navigation dropdown and filter dropdown
- **Grid System**: Responsive col-lg, col-md, col-sm classes
- **Buttons**: Various button styles with custom classes
- **Forms**: Form controls, select dropdowns, checkboxes, date inputs

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd car-rental
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📁 Project Structure

```
car-rental/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── navbar/
│   │   │       ├── navbar.component.ts
│   │   │       ├── navbar.component.html
│   │   │       └── navbar.component.css
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.css
│   │   │   ├── fleet/
│   │   │   │   ├── fleet.component.ts
│   │   │   │   ├── fleet.component.html
│   │   │   │   └── fleet.component.css
│   │   │   └── booking/
│   │   │       ├── booking.component.ts
│   │   │       ├── booking.component.html
│   │   │       └── booking.component.css
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Color Scheme

```css
--primary-black: #0a0a0a
--secondary-black: #1a1a1a
--primary-purple: #8b2fc9
--secondary-purple: #a855f7
--primary-orange: #ff6b35
--secondary-orange: #ff8c61
--text-light: #f0f0f0
--text-gray: #b0b0b0
```

## 🛠️ Technologies Used

- **Angular 17**: Modern web framework with standalone components
- **TypeScript 5.2**: Type-safe JavaScript
- **Bootstrap 5.3**: Responsive CSS framework
- **HTML5 & CSS3**: Modern web standards
- **RxJS**: Reactive programming
- **Angular Router**: Client-side routing
- **Angular Forms**: Template-driven forms

## 📱 Responsive Breakpoints

- **Desktop**: > 991px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

## 🎯 Key Features Demonstrated

### Bootstrap Features ✅
- ✅ Grid System (container, row, col-*)
- ✅ Cards with custom styling
- ✅ Modals (multiple instances)
- ✅ Tooltips (hover information)
- ✅ Dropdowns (navigation and filters)
- ✅ Buttons (various styles)
- ✅ Forms (inputs, selects, checkboxes)
- ✅ Navbar (sticky, responsive)
- ✅ Responsive utilities

### Angular Features ✅
- ✅ Data Binding (two-way, one-way, event)
- ✅ Directives (*ngIf, *ngFor, *ngModel)
- ✅ Forms with validation
- ✅ Component architecture
- ✅ Routing (3 pages)
- ✅ Standalone components
- ✅ TypeScript interfaces

### Design Features ✅
- ✅ Black, Purple, Orange color scheme
- ✅ No-scroll page design
- ✅ Responsive on all devices
- ✅ Smooth animations
- ✅ Custom button styles
- ✅ Gradient text effects
- ✅ Card hover effects

## 📝 Usage Guide

### Navigation
- Click on **Home**, **Fleet**, or **Booking** in the navbar
- Use the **More** dropdown for additional options
- Hover over menu items to see tooltips

### Browsing Fleet
- Filter cars by category using buttons (desktop) or dropdown (mobile)
- Click on any car card to view detailed information
- Click "View Details" to open the modal
- Click "Book This Car" to navigate to booking

### Making a Booking
1. Fill in personal information
2. Select a car type from dropdown
3. Choose pickup and drop-off locations
4. Select dates
5. Add optional extras (checkboxes)
6. View real-time price calculation in the summary
7. Click "Proceed to Confirmation"
8. Review details in confirmation modal
9. Confirm booking to see success message

## 🚀 Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎓 Learning Points

This project demonstrates:
- Modern Angular development with standalone components
- Bootstrap integration in Angular
- Responsive design principles
- Form handling and validation
- Component communication
- Angular routing
- TypeScript best practices
- CSS custom properties (variables)
- Mobile-first design approach

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Built with ❤️ using Angular and Bootstrap

---

**Happy Coding! 🚗💨**
