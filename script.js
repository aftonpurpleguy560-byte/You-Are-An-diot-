function badTime() {
    const audio = document.getElementById('megalovania');
    const btn = document.getElementById('start-btn');
    const body = document.body;
    
    // Müziği oynat
    audio.play();
    
    // Butonu gizle
    btn.style.display = 'none';

    // Kaos Döngüsü: Renkler ve Sallanma
    setInterval(() => {
        body.classList.toggle('shake-screen');
        
        // Nostaljik renk çakmaları
        const colors = ['#000', '#fff', '#0000ff', '#ff0000'];
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 100);
}

