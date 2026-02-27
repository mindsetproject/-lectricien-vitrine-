document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.innerText = "Envoi en cours...";
    btn.style.background = "#27ae60";
    setTimeout(() => {
        alert("Merci ! Je vous recontacte rapidement pour votre projet électrique.");
        btn.innerText = "Demande Envoyée ✅";
    }, 1500);
});
