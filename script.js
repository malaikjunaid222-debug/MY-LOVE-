function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    
    // YAHAN APNI GIRLFRIEND KA NAAM LIKHO (jese "sara", "aliya", etc)
    if (password.toLowerCase() === "kashmala") { 
        document.getElementById('passwordScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        document.getElementById('errorMessage').innerHTML = '❌ Galat password! Sirf meri jaan ka chalta hai';
    }
}

function showLove() {
    document.getElementById('hiddenMessage').classList.add('show');
    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 }
        });
    }, 250);
    
    document.getElementById('message').innerHTML = 'I Love You Too Meri Jaan! 💕';
}
