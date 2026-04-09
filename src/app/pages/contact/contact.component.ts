import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;
  showSuccessModal = false;

  contactInfo = [
    {
      icon: '📞',
      title: 'Call Us',
      detail: '+91 98765 43210',
      subtitle: 'Mon-Sat 9AM-8PM'
    },
    {
      icon: '📧',
      title: 'Email Us',
      detail: 'info@luxedrive.in',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      detail: 'Mumbai, Maharashtra',
      subtitle: 'Multiple locations across India'
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      detail: '9:00 AM - 8:00 PM',
      subtitle: 'Monday to Saturday'
    }
  ];

  locations = [
    { city: 'Mumbai', address: 'Andheri East, Mumbai - 400069' },
    { city: 'Delhi', address: 'Connaught Place, New Delhi - 110001' },
    { city: 'Bangalore', address: 'Koramangala, Bangalore - 560034' },
    { city: 'Pune', address: 'Hinjewadi, Pune - 411057' }
  ];

  isFormValid(): boolean {
    return (
      this.contactForm.name.trim() !== '' &&
      this.contactForm.email.trim() !== '' &&
      this.contactForm.phone.trim() !== '' &&
      this.contactForm.subject.trim() !== '' &&
      this.contactForm.message.trim() !== '' &&
      this.isEmailValid()
    );
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.contactForm.email);
  }

  onSubmit() {
    this.submitted = true;
    if (this.isFormValid()) {
      this.showSuccessModal = true;
    }
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.submitted = false;
  }
}
