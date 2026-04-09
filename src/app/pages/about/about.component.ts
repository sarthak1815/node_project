import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stats = [
    { icon: '🚗', value: '500+', label: 'Premium Vehicles' },
    { icon: '👥', value: '10,000+', label: 'Happy Customers' },
    { icon: '🏆', value: '15+', label: 'Years Experience' },
    { icon: '🌍', value: '50+', label: 'Locations' }
  ];

  team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      avatar: '👨‍💼',
      description: 'Visionary leader with 15+ years in automotive industry'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Director',
      avatar: '👩‍💼',
      description: 'Expert in fleet management and customer service'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Head',
      avatar: '👨‍💻',
      description: 'Driving innovation in car rental technology'
    }
  ];

  values = [
    {
      icon: '✨',
      title: 'Quality First',
      description: 'We maintain the highest standards in vehicle maintenance and customer service'
    },
    {
      icon: '🤝',
      title: 'Trust & Transparency',
      description: 'No hidden fees, clear pricing, and honest communication'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Leveraging technology to provide seamless rental experiences'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and electric vehicles'
    }
  ];
}
