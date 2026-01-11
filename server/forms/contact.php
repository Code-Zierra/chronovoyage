<!-- server/forms/contact.php -->
<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
  exit;
}

// Database configuration
$host = 'localhost';
$dbname = 'chronovoyage_db';
$username = 'root';
$password = '';

// Create connection
try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  error_log("Database connection failed: " . $e->getMessage());

  // For demo purposes, we'll simulate success without database
  handleContactForm($_POST);
  exit;
}

function handleContactForm($data)
{
  // Validate required fields
  $required = ['name', 'email', 'subject', 'message'];
  foreach ($required as $field) {
    if (empty($data[$field])) {
      http_response_code(400);
      echo json_encode(['success' => false, 'message' => 'All fields are required']);
      exit;
    }
  }

  // Validate email
  if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
  }

  // Sanitize inputs
  $name = htmlspecialchars($data['name']);
  $email = htmlspecialchars($data['email']);
  $subject = htmlspecialchars($data['subject']);
  $message = htmlspecialchars($data['message']);
  $inquiry_type = htmlspecialchars($data['inquiry_type'] ?? 'general');

  // Here you would typically:
  // 1. Save to database
  // 2. Send email notification
  // 3. Send confirmation email to user

  // For demo, we'll simulate saving to database
  $timestamp = date('Y-m-d H:i:s');
  $ip_address = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

  // Log the contact (in real app, save to database)
  $log_entry = [
    'timestamp' => $timestamp,
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'inquiry_type' => $inquiry_type,
    'ip_address' => $ip_address
  ];

  error_log("Contact form submission: " . print_r($log_entry, true));

  // Return success response
  echo json_encode([
    'success' => true,
    'message' => 'Thank you for your message. We will get back to you within 24 hours.',
    'data' => [
      'name' => $name,
      'email' => $email,
      'subject' => $subject,
      'inquiry_type' => $inquiry_type
    ]
  ]);
}

// Handle the form data
handleContactForm($_POST);
?>