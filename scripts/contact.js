// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let button1 = document.getElementById("submit-button");
let contact = document.getElementById("contact-page");

button1.onclick = function() {
    contact.innerHTML = "Thank you for your message"
    contact.style.fontSize = "24px"
};