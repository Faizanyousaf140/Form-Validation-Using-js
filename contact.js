document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        // Here you can add code to send the form data to your server
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});