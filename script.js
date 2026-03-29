/* Purpleguy © 2026 - tablet power */

function badTime() {
    const audio = document.getElementById('megalovania');
    const btn = document.getElementById('start-btn');
    const body = document.body;
    const text = document.querySelector('.glitch');
    const smileys = document.querySelectorAll('.smiley');

    // 1. Müziği Başlat
    if (audio) {
        audio.play().catch(err => console.log("Müzik çalma hatası: ", err));
    }

    // 2. Butonu Gizle
    if (btn) {
        btn.style.display = 'none';
    }

    // 3. Tablette Tam Ekran Moduna Geç
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log("Tam ekran hatası: ", err);
        });
    }

    // 4. Kaos Döngüsü (Hızlı ve Sert)
    setInterval(() => {
        // Ekran Sallanma Efektini Tetikle
        body.classList.toggle('shake-screen');

        // Nostaljik Renk Çakmaları (Siyah - Beyaz - Mavi)
        const colors = ['#000000', '#ffffff', '#0000ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.backgroundColor = randomColor;

        // Yazı Rengini Kontrast Yap
        if (text) {
            text.style.color = (randomColor === '#ffffff') ? '#000000' : '#ffffff';
        }

        // Gülen Yüzleri de Renklerle Oynat
        smileys.forEach(smiley => {
            smiley.style.color = (randomColor === '#000000') ? '#ff0000' : '#000000';
        });

    }, 100); // 100ms hızında kaos
}

// Service Worker (PWA) Kaydı Kontrolü
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(reg => {
            console.log('PWA hazır aga!');
        }).catch(err => {
            console.log('PWA hatası: ', err);
        });
    });
}
