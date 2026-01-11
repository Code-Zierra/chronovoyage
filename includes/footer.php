<!-- includes/footer.php -->
<footer class="footer py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-4">
        <h4 class="gold-text mb-4">ChronoVoyage</h4>
        <p>Specializing in curated historical travel experiences that transport you through time.</p>
        <div class="social-links mt-3">
          <a href="#" class="me-3"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="me-3"><i class="fab fa-twitter"></i></a>
          <a href="#" class="me-3"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <h5 class="gold-text mb-4">Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="index.php" class="footer-link">Home</a></li>
          <li><a href="about.php" class="footer-link">About Us</a></li>
          <li><a href="services.php" class="footer-link">Our Services</a></li>
          <li><a href="contact.php" class="footer-link">Contact</a></li>
        </ul>
      </div>
      <div class="col-lg-4 mb-4">
        <h5 class="gold-text mb-4">Newsletter</h5>
        <p>Subscribe to receive updates on new destinations and special offers.</p>
        <form id="newsletterForm" class="mt-3">
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Your email" required>
            <button class="btn btn-gold" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <hr class="gold-hr">
    <div class="text-center pt-3">
      <p>&copy; 2023 ChronoVoyage. All rights reserved.</p>
    </div>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/main.js"></script>

<script>
  // Newsletter subscription
  document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    if (validateEmail(email)) {
      // Save to localStorage for demo
      localStorage.setItem('newsletter_subscription', email);
      alert('Thank you for subscribing to our newsletter!');
      this.reset();
    } else {
      alert('Please enter a valid email address.');
    }
  });
</script>
</body>

</html>