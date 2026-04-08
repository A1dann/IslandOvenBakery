document.addEventListener("DOMContentLoaded", function() {
    // Select the form and phone input elements from the DOM
    const form = document.getElementById("contact-form");
    const phoneInput = document.getElementById("phone");

    // Safety check: Exit if the form elements aren't found on the page
    if (!form || !phoneInput) {
        console.error("Form or Phone Input not found. Check your HTML IDs.");
        return;
    }

    function validatePhone() {
        // Validates the specific format required for the assignment: (868) 123-4567
        const pattern = /^\(\d{3}\) \d{3}-\d{4}$/;
        return pattern.test(phoneInput.value.trim());
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Capture all values
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = phoneInput.value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        //Custom Validation Logic
        if (firstName === "") { 
            alert("Please enter your First Name."); 
            return; 
        }
        
        if (lastName === "") { 
            alert("Please enter your Last Name."); 
            return; 
        }

        if (email === "") { 
            alert("Please enter your Email Address."); 
            return; 
        }

        // Custom check for valid email structure (requires an @ and a dot)
        if (email !== "" && (!email.includes("@") || !email.includes("."))) {
            alert("Please enter a valid Email Address. format: john@email.com");
            return;
        }

        if (phone === "") { 
            alert("Please enter your Phone Number."); 
            return; 
        }

        // Trigger the phone pattern validation function
        if (!validatePhone()) {
            alert("Please enter a valid Phone Number. format: (868) 123-4567");
            return;
        }

        if (subject === "") { 
            alert("Please enter a Subject."); 
            return; 
        }
        if (message === "") { 
            alert("Please enter your Message."); 
            return; 
        }

        // If the code reaches this point, all validations have passed.
        alert("Thank you! Your message has been sent to Island Oven Bakery.");
        
        // Reset the form fields after a successful "submission"
        form.reset(); 
    });
});