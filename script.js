/* Purpleguy © 2026 - tablet power */

function badTime() {
    const audio = document.getElementById('megalovania');
    const btn = document.getElementById('start-btn');
    const body = document.body;
    const smileys = document.querySelectorAll('.smiley');

    audio.play();
    btn.style.display = 'none';

    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }

    // Kaos Döngüsü
    setInterval(() => {
        body.classList.toggle('shake-screen');
        
        // Rastgele Arkaplan Çakması
        const colors = ['#000', '#fff', '#0000ff'];
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Gülen Yüzleri Ekranda Rastgele Zıplat
        smileys.forEach(smiley => {
            smiley.style.position = 'absolute';
            smiley.style.left = Math.random() * 80 + 'vw';
            smiley.style.top = Math.random() * 80 + 'vh';
        });
    }, 150);
}
