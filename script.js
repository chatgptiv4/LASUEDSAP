// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loader = submitBtn.querySelector('.btn-loader');
    const messageContainer = document.querySelector('.form-message');
    
    // Show loading state
    btnText.style.display = 'none';
    loader.style.display = 'block';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual AJAX call)
    setTimeout(() => {
        // Hide loader
        btnText.style.display = 'block';
        loader.style.display = 'none';
        submitBtn.disabled = false;
        
        // Show success message
        messageContainer.textContent = 'Your message has been sent successfully!';
        messageContainer.classList.add('success');
        messageContainer.style.display = 'block';
        
        // Clear form after successful submission
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageContainer.style.display = 'none';
            messageContainer.classList.remove('success');
        }, 5000);
    }, 2000);
});
