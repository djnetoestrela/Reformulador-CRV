document.getElementById('curriculumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const curriculumFile = document.getElementById('curriculumFile').files[0];
    
    if (curriculumFile) {
        // Aqui você pode implementar a lógica para enviar o arquivo para o servidor ou WhatsApp
        alert(`Currículo de ${name} (${email}) enviado com sucesso!`);
    }
});

document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '98985257987'; // seu número
    const message = 'Olá! Gostaria de reformular meu currículo. Aqui estão meus dados.';
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});
