import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
  features: string[];
}

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent {
  selectedCategory = 'All';
  selectedCar: Car | null = null;
  showModal = false;

  categories = ['All', 'Luxury', 'SUV', 'Sports', 'Economy'];

  cars: Car[] = [
    {
      id: 1,
      name: 'Mercedes S-Class',
      category: 'Luxury',
      price: 24999,
      image: '🚗',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      features: ['GPS Navigation', 'Leather Seats', 'Premium Sound', 'Sunroof']
    },
    {
      id: 2,
      name: 'BMW X7',
      category: 'SUV',
      price: 20999,
      image: '🚙',
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Diesel',
      features: ['4WD', 'Panoramic Roof', 'Heated Seats', '360 Camera']
    },
    {
      id: 3,
      name: 'Porsche 911',
      category: 'Sports',
      price: 41999,
      image: '🏎️',
      seats: 2,
      transmission: 'Manual',
      fuel: 'Petrol',
      features: ['Sport Mode', 'Racing Seats', 'Launch Control', 'Carbon Fiber']
    },
    {
      id: 4,
      name: 'Tesla Model S',
      category: 'Luxury',
      price: 29999,
      image: '🚗',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Electric',
      features: ['Autopilot', 'Long Range', 'Fast Charging', 'Premium Interior']
    },
    {
      id: 5,
      name: 'Range Rover Sport',
      category: 'SUV',
      price: 23999,
      image: '🚙',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: ['Terrain Response', 'Air Suspension', 'Meridian Sound', 'Tow Package']
    },
    {
      id: 6,
      name: 'Toyota Camry',
      category: 'Economy',
      price: 7499,
      image: '🚗',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: ['Fuel Efficient', 'Bluetooth', 'Backup Camera', 'Cruise Control']
    },
    {
      id: 7,
      name: 'Lamborghini Huracan',
      category: 'Sports',
      price: 66999,
      image: '🏎️',
      seats: 2,
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: ['V10 Engine', 'Carbon Ceramic Brakes', 'Launch Control', 'Sport Exhaust']
    },
    {
      id: 8,
      name: 'Audi A8',
      category: 'Luxury',
      price: 27999,
      image: '🚗',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      features: ['Matrix LED', 'Massage Seats', 'Bang & Olufsen', 'Night Vision']
    },
    {
      id: 9,
      name: 'Honda Civic',
      category: 'Economy',
      price: 6599,
      image: '🚗',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: ['Honda Sensing', 'Apple CarPlay', 'Lane Keep Assist', 'Adaptive Cruise']
    }
  ];

  get filteredCars() {
    if (this.selectedCategory === 'All') {
      return this.cars;
    }
    return this.cars.filter(car => car.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  openCarDetails(car: Car) {
    this.selectedCar = car;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCar = null;
  }
}
