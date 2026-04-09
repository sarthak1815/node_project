import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      icon: '🚗',
      title: 'Premium Fleet',
      description: 'Choose from luxury sedans, SUVs, and sports cars'
    },
    {
      icon: '💳',
      title: 'Best Prices',
      description: 'Competitive rates with no hidden charges'
    },
    {
      icon: '🛡️',
      title: 'Fully Insured',
      description: 'Complete coverage for peace of mind'
    },
    {
      icon: '⚡',
      title: 'Instant Booking',
      description: 'Book your car in just a few clicks'
    },
    {
      icon: '🌍',
      title: 'Multiple Locations',
      description: 'Pick up and drop off at your convenience'
    },
    {
      icon: '⭐',
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service! The car was spotless and the process was seamless.',
      avatar: '👩'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best car rental experience. Highly recommend LuxeDrive!',
      avatar: '👨'
    },
    {
      name: 'Emma Williams',
      rating: 5,
      comment: 'Professional staff and excellent vehicle selection.',
      avatar: '👱‍♀️'
    }
  ];

  faqs = [
    {
      question: 'What documents do I need to rent a car?',
      answer: 'You need a valid driving license (at least 1 year old), Aadhaar card/PAN card for identity proof, and a credit/debit card for payment.',
      isOpen: false
    },
    {
      question: 'What is the minimum age requirement?',
      answer: 'The driver must be at least 21 years old for economy cars and 25 years old for luxury and sports cars.',
      isOpen: false
    },
    {
      question: 'Is insurance included in the rental price?',
      answer: 'Basic insurance is included in all our rental packages. You can opt for additional comprehensive coverage at the time of booking.',
      isOpen: false
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Yes, you can extend your rental period subject to vehicle availability. Please contact us at least 24 hours before your return date.',
      isOpen: false
    },
    {
      question: 'What is your fuel policy?',
      answer: 'We provide cars with a full tank. You can return the car with a full tank or pay for the fuel used at market rates.',
      isOpen: false
    },
    {
      question: 'Are there any mileage restrictions?',
      answer: 'We offer unlimited mileage on all our rentals. Drive as much as you want without any extra charges!',
      isOpen: false
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, free cancellation is available up to 24 hours before pickup. Cancellations within 24 hours are subject to a 50% charge.',
      isOpen: false
    },
    {
      question: 'Do you offer delivery and pickup services?',
      answer: 'Yes, we offer doorstep delivery and pickup services in select cities. Additional charges may apply based on distance.',
      isOpen: false
    }
  ];

  // Modal
  showModal = false;
  selectedTestimonial: any = null;

  openModal(testimonial: any) {
    this.selectedTestimonial = testimonial;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  toggleFAQ(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
