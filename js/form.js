document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adoption-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        alert("Merci pour votre demande d'adoption ! Nous vous contacterons rapidement.");
        form.reset(); 
    });
});