import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  carType: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  returnDate: string;
  additionalDriver: boolean;
  insurance: boolean;
  gps: boolean;
  childSeat: boolean;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingData: BookingData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    carType: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    returnDate: '',
    additionalDriver: false,
    insurance: false,
    gps: false,
    childSeat: false
  };

  carTypes = [
    { value: 'luxury', label: 'Luxury Sedan', price: 24999 },
    { value: 'suv', label: 'SUV', price: 20999 },
    { value: 'sports', label: 'Sports Car', price: 41999 },
    { value: 'economy', label: 'Economy', price: 7499 }
  ];

  locations = [
    'Downtown Office',
    'Airport Terminal 1',
    'Airport Terminal 2',
    'North Station',
    'South Plaza',
    'West Mall'
  ];

  showConfirmationModal = false;
  showSuccessModal = false;
  submitted = false;

  get totalPrice(): number {
    let basePrice = 0;
    const selectedCar = this.carTypes.find(car => car.value === this.bookingData.carType);
    if (selectedCar) {
      basePrice = selectedCar.price;
    }

    let extras = 0;
    if (this.bookingData.additionalDriver) extras += 2099;
    if (this.bookingData.insurance) extras += 2999;
    if (this.bookingData.gps) extras += 1299;
    if (this.bookingData.childSeat) extras += 899;

    return basePrice + extras;
  }

  get numberOfDays(): number {
    if (this.bookingData.pickupDate && this.bookingData.returnDate) {
      const pickup = new Date(this.bookingData.pickupDate);
      const returnDate = new Date(this.bookingData.returnDate);
      const diff = returnDate.getTime() - pickup.getTime();
      return Math.ceil(diff / (1000 * 3600 * 24));
    }
    return 1;
  }

  get grandTotal(): number {
    return this.totalPrice * this.numberOfDays;
  }

  get selectedCarType() {
    return this.carTypes.find(c => c.value == this.bookingData.carType);
  }

  getRandomBookingNumber(): number {
    return Math.floor(Math.random() * 1000000);
  }

  isFormValid(): boolean {
    return (
      this.bookingData.firstName.trim() !== '' &&
      this.bookingData.lastName.trim() !== '' &&
      this.bookingData.email.trim() !== '' &&
      this.bookingData.phone.trim() !== '' &&
      this.bookingData.carType !== '' &&
      this.bookingData.pickupLocation !== '' &&
      this.bookingData.dropoffLocation !== '' &&
      this.bookingData.pickupDate !== '' &&
      this.bookingData.returnDate !== '' &&
      this.isEmailValid() &&
      this.areDatesValid()
    );
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.bookingData.email);
  }

  areDatesValid(): boolean {
    if (this.bookingData.pickupDate && this.bookingData.returnDate) {
      return new Date(this.bookingData.returnDate) > new Date(this.bookingData.pickupDate);
    }
    return true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.isFormValid()) {
      this.showConfirmationModal = true;
    }
  }

  confirmBooking() {
    this.showConfirmationModal = false;
    this.showSuccessModal = true;
  }

  closeConfirmationModal() {
    this.showConfirmationModal = false;
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
    this.resetForm();
  }

  resetForm() {
    this.bookingData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      carType: '',
      pickupLocation: '',
      dropoffLocation: '',
      pickupDate: '',
      returnDate: '',
      additionalDriver: false,
      insurance: false,
      gps: false,
      childSeat: false
    };
    this.submitted = false;
  }
}
