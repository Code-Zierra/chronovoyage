# ChronoVoyage - Historical Travel Website

![ChronoVoyage Banner](https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 📋 Project Overview

**ChronoVoyage** is a beautifully designed website dedicated to historical and ancient travel experiences. Built with a sophisticated golden-black color scheme, the platform offers curated information about historical destinations, travel services, and educational resources for history enthusiasts and travelers.

**Live Demo:** *[Your Domain Here]*  
**Status:** Production Ready

## ✨ Features

### 🌟 Core Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dynamic Destination Display**: Interactive cards with detailed historical information
- **Modern UI/UX**: Clean, elegant interface with smooth animations and transitions
- **Contact Form**: Functional contact form with server-side processing
- **Modal System**: Interactive modals for detailed destination views
- **Navigation**: Smooth scrolling and intuitive navigation

### 🎯 Technical Features
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Bootstrap 5, Custom CSS with CSS Variables
- **Backend**: PHP for form processing
- **Database**: MySQL-ready with prepared SQL schema
- **Performance**: Optimized images, lazy loading ready
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup, modern structure
- **CSS3**: Custom properties (variables), flexbox, grid, animations
- **JavaScript**: ES6+, DOM manipulation, async operations
- **Bootstrap 5**: Responsive grid, components, utilities
- **Font Awesome**: Icons and UI elements

### Backend
- **PHP 7.4+**: Server-side scripting, form processing
- **MySQL 5.7+**: Database for storing contact information
- **PDO**: Secure database interactions

### Development Tools
- **Git**: Version control
- **VS Code**: Development environment
- **Google Fonts**: Typography (Cinzel, Raleway)
- **Unsplash API**: High-quality placeholder images

## 📁 Project Structure

```
chronovoyage/
│
├── index.php              # Homepage
├── about.php              # About page
├── services.php           # Services page
├── contact.php            # Contact page
│
├── css/
│   └── style.css          # Main stylesheet
│
├── js/
│   └── main.js           # Main JavaScript file
│
├── images/               # Image assets
│   ├── hero-bg.jpg
│   └── default-historical.jpg
│
├── includes/             # Reusable components
│   ├── header.php
│   └── footer.php
│
├── server/
│   └── forms/
│       └── contact.php   # Form processing script
│
├── database.sql          # Database schema
├── README.md            # This file
└── .htaccess            # Apache configuration (optional)
|__ project-structure.md
```

## 🚀 Installation & Setup

### Prerequisites
- Web server (Apache, Nginx, or local development environment)
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Modern web browser

### Step-by-Step Installation

#### 1. Clone/Download the Project
```bash
git clone https://github.com/Code-Zierra/chronovoyage.gi
cd chronovoyage
```

#### 2. Set Up the Database
```sql
-- Option 1: Using MySQL command line
mysql -u root -p
CREATE DATABASE chronovoyage_db;
USE chronovoyage_db;
SOURCE database.sql;

-- Option 2: Using phpMyAdmin
-- Import database.sql file via phpMyAdmin interface
```

#### 3. Configure Database Connection
Edit `server/forms/contact.php`:
```php
// Update these values with your database credentials
$host = 'localhost';
$dbname = 'chronovoyage_db';
$username = 'your_database_username';
$password = 'your_database_password';
```

#### 4. Configure Web Server

**For Apache:**
- Place project in `htdocs` or `www` directory
- Ensure `mod_rewrite` is enabled (for clean URLs)

**For Nginx:**
Add this to your server configuration:
```nginx
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

#### 5. Set File Permissions
```bash
chmod 755 -R chronovoyage/
chmod 644 chronovoyage/*.php
```

#### 6. Test Installation
1. Open browser and navigate to your project URL
2. Visit `http://localhost/chronovoyage/`
3. Test the contact form
4. Check database for submitted data

### Environment Variables (Optional)
Create a `.env` file in the project root:
```
DB_HOST=localhost
DB_NAME=chronovoyage_db
DB_USER=root
DB_PASS=
SITE_URL=http://localhost/chronovoyage
```

## 🎨 Customization Guide

### Changing Colors
Edit `css/style.css` - Color variables at the top:
```css
:root {
    --gold: #D4AF37;        /* Main gold color */
    --dark-gold: #B8860B;   /* Darker gold for hover */
    --light-gold: #F5DEB3;  /* Light gold for text */
    --black: #121212;       /* Background black */
    --dark-gray: #1a1a1a;   /* Card backgrounds */
    /* ... */
}
```

### Adding New Destinations
Edit `js/main.js` - Add to the destinations array:
```javascript
const destinations = [
    // ... existing destinations
    {
        id: 7,
        title: "Your New Destination",
        period: "Historical Period",
        image: "path/to/image.jpg",
        description: "Brief description",
        history: "Detailed history here",
        location: "Country/Region",
        civilization: "Ancient Civilization"
    }
];
```

### Modifying Services
Edit `services.php` - Update the services array:
```php
$services = [
    "Guided Tours" => "Description here",
    "Educational Workshops" => "Description here",
    // Add more services
];
```

## 🔧 Configuration Options

### Email Settings
To enable email notifications from contact form, update `server/forms/contact.php`:
```php
// Add email sending functionality
$to = "your@email.com";
$subject = "New Contact Form Submission";
$headers = "From: " . $email . "\r\n";
mail($to, $subject, $message, $headers);
```

### Image Optimization
Place optimized images in the `images/` directory:
- Hero image: 1920x1080px, compressed
- Destination images: 800x600px, WebP format recommended
- Logo/Favicon: 512x512px PNG

## 📱 Responsive Breakpoints

| Device | Breakpoint | Description |
|--------|------------|-------------|
| Mobile | < 768px | Stacked layout, hamburger menu |
| Tablet | 768px - 992px | 2-column grids, adjusted spacing |
| Desktop | > 992px | Full layout, 3-column grids |
| Large Desktop | > 1200px | Enhanced spacing, larger typography |

## 🧪 Testing

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

### Functional Testing Checklist
1. Navigation links work correctly
2. Contact form submits and saves to database
3. Destination modals open and close properly
4. Mobile menu functions correctly
5. Images load properly
6. Form validation works
7. No JavaScript errors in console

### Performance Testing
- Use Lighthouse in Chrome DevTools
- Target scores:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100

## 🗃️ Database Schema

### Tables Overview

#### `contacts`
Stores contact form submissions:
- `id`: Primary key
- `name`: Visitor's name
- `email`: Visitor's email
- `subject`: Message subject
- `message`: Message content
- `inquiry_type`: Type of inquiry
- `ip_address`: Visitor's IP
- `created_at`: Timestamp

#### `newsletter_subscribers`
Stores newsletter subscribers:
- `id`: Primary key
- `email`: Subscriber email (unique)
- `subscribed_at`: Subscription date
- `is_active`: Subscription status

#### `tour_inquiries`
Stores tour booking inquiries:
- `id`: Primary key
- `name`: Customer name
- `email`: Customer email
- `destination`: Requested destination
- `travel_date`: Preferred travel date
- `people_count`: Number of travelers
- `budget_range`: Budget estimate
- `special_requests`: Additional requests
- `created_at`: Timestamp

## 🔒 Security Considerations

### Implemented Security Measures
1. **Input Validation**: All form inputs are validated
2. **Output Escaping**: HTML special characters are escaped
3. **SQL Injection Prevention**: PDO prepared statements
4. **XSS Protection**: Input sanitization
5. **CSRF Protection**: (To be implemented in production)
6. **File Upload Restrictions**: (If applicable)

### Recommended Security Enhancements
```php
// Add to server/forms/contact.php
session_start();
// Implement CSRF tokens
if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
    die("CSRF token validation failed");
}

// Rate limiting
$ip = $_SERVER['REMOTE_ADDR'];
$max_requests = 5;
$time_window = 3600; // 1 hour
```

## 📈 SEO Optimization

### On-Page SEO Elements
- Semantic HTML5 tags
- Meta descriptions and titles
- Schema.org markup (to be implemented)
- Optimized images with alt text
- Clean, descriptive URLs
- Mobile-friendly design
- Fast loading speed

### SEO Best Practices Implemented
1. **Page Titles**: Descriptive and keyword-rich
2. **Meta Descriptions**: 150-160 characters, compelling
3. **Heading Hierarchy**: Proper H1-H6 structure
4. **Image Optimization**: Compressed with descriptive alt text
5. **Mobile Responsiveness**: Mobile-first design
6. **Page Speed**: Optimized CSS/JS, compressed images

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

### Code Standards
- Follow PSR-12 coding standards for PHP
- Use meaningful variable and function names
- Comment complex logic
- Maintain consistent indentation (4 spaces)
- Validate HTML using W3C Validator

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2023 ChronoVoyage

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👥 Team

**Project Lead**: [Your Name]  
**Design**: [Designer Name]  
**Development**: [Developer Name]  
**Content**: [Content Writer Name]

## 📞 Support

- **Documentation**: [Link to detailed docs]
- **Issue Tracker**: [GitHub Issues Link]
- **Email Support**: support@chronovoyage.com
- **Community Forum**: [Link to forum]

## 🔄 Changelog

### Version 1.0.0 (Current)
- Initial release
- Complete website with all core features
- Responsive design
- Contact form functionality
- Database integration

### Planned Features
- [ ] User authentication system
- [ ] Booking and payment integration
- [ ] Multilingual support
- [ ] Blog/Articles section
- [ ] Advanced search functionality
- [ ] Social media integration
- [ ] Newsletter system
- [ ] Admin dashboard

## 🌐 Deployment

### Traditional Hosting
1. Upload files via FTP/SFTP
2. Import database
3. Update configuration files
4. Set proper file permissions

### Cloud Deployment (AWS, DigitalOcean)
```bash
# Example deployment script
git clone https://github.com/Code-Zierra/chronovoyage.git
sudo apt-get update
sudo apt-get install apache2 mysql-server php libapache2-mod-php
sudo mysql_secure_installation
# Configure virtual host
# Restart services
```

### Docker Deployment
```dockerfile
# Sample Dockerfile
FROM php:7.4-apache
COPY . /var/www/html/
RUN docker-php-ext-install pdo pdo_mysql
EXPOSE 80
```

---

## 🎯 Quick Start for Developers

```bash
# 1. Clone repository
git clone https://github.com/Code-Zierra/chronovoyage.git

# 2. Navigate to project
cd chronovoyage

# 3. Set up local environment (using XAMPP/WAMP/MAMP)
# 4. Configure database
# 5. Update credentials in server/forms/contact.php
# 6. Open in browser: http://localhost/chronovoyage
```

**Happy coding!** 🚀

*Last Updated: November 2023*
