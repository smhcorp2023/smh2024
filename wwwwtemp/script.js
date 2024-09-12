// Add event listener to nav links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').replace('#', '');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to service grid items
document.querySelectorAll('.service a').forEach((serviceLink) => {
    serviceLink.addEventListener('click', (e) => {
        e.preventDefault();
        const href = serviceLink.getAttribute('href');
        window.open(href, '_blank');
    });
});
// Get the form element
const form = document.querySelector('.contact form');

// Add event listener to the form submission
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the form data
    const formData = new FormData(form);

    // Send the form data to Formspree
    fetch('https://formspree.io/your-email-address', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        // Display a success message to the user
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error(error);
        // Display an error message to the user
        alert('Error sending message. Please try again.');
    });
});      window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments);};
