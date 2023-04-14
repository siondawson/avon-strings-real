function sendMail(contactForm) {
    emailjs.send("service_83yeifc", "KensingtonStrings", {
        "from_name": contactForm.name.value,
        "from_number": contactForm.contact-number.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}