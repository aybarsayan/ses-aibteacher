// Ses verileri
const sounds = [
    {
        id: 1,
        name: "YAĞMUR",
        icon: "🌧️",
        file: "sounds/1_yagmur.mp3",
        duration: 30,
        drawTime: 300 // 5 dakika çizim süresi (saniye)
    },
    {
        id: 2,
        name: "ŞELALE",
        icon: "🌊",
        file: "sounds/2_selale.mp3",
        duration: 20,
        drawTime: 300
    },
    {
        id: 3,
        name: "ARILAR",
        icon: "🐝",
        file: "sounds/3_arilar.mp3",
        duration: 53,
        drawTime: 300
    },
    {
        id: 4,
        name: "DALGALAR",
        icon: "🌊",
        file: "sounds/4_dalgalar.mp3",
        duration: 22,
        drawTime: 300
    },
    {
        id: 5,
        name: "OKUL TENEFFÜSÜçalışma kağıdı oluştur",
        icon: "🏫",
        file: "sounds/5_okul_teneffusu.mp3",
        duration: 59,
        drawTime: 300
    },
    {
        id: 6,
        name: "HAVAALANI",
        icon: "✈️",
        file: "sounds/6_havaalani.mp3",
        duration: 24,
        drawTime: 300
    },
    {
        id: 7,
        name: "DAVUL ÇEMBERİ",
        icon: "🥁",
        file: "sounds/7_davul_cemberi.mp3",
        duration: 74,
        drawTime: 300
    },
    {
        id: 8,
        name: "KORO",
        icon: "🎤",
        file: "sounds/8_koro.mp3",
        duration: 38,
        drawTime: 300
    }
];

// Global değişkenler
let currentSoundIndex = 0;
let isPlaying = false;
let isPaused = false;
let currentAudio = null;
let drawTimer = null;
let drawTimeRemaining = 0;
let completedSounds = 0;

// DOM elementleri
const soundGrid = document.getElementById('soundGrid');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

// Ses kartlarını oluştur
function createSoundCards() {
    soundGrid.innerHTML = '';
    sounds.forEach((sound, index) => {
        const card = document.createElement('div');
        card.className = 'sound-card';
        card.id = `sound-${sound.id}`;
        card.innerHTML = `
            <div class="sound-icon">${sound.icon}</div>
            <h3>${sound.id}. ${sound.name}</h3>
            <div class="sound-duration">Ses: ${sound.duration}sn | Çizim: ${Math.floor(sound.drawTime / 60)} dk</div>
            <div class="timer" id="timer-${sound.id}"></div>
            <div class="status waiting" id="status-${sound.id}">Bekliyor...</div>
        `;
        soundGrid.appendChild(card);
    });
}

// Zamanlayıcıyı formatla
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// İlerleme çubuğunu güncelle
function updateProgress() {
    const progress = (completedSounds / sounds.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${completedSounds} / ${sounds.length} ses tamamlandı`;
}

// Ses çal
function playSound(index) {
    if (index >= sounds.length) {
        finishActivity();
        return;
    }

    currentSoundIndex = index;
    const sound = sounds[index];
    const card = document.getElementById(`sound-${sound.id}`);
    const timer = document.getElementById(`timer-${sound.id}`);
    const status = document.getElementById(`status-${sound.id}`);

    // Kartı aktif yap
    document.querySelectorAll('.sound-card').forEach(c => c.classList.remove('active', 'playing'));
    card.classList.add('active', 'playing');
    status.className = 'status active';
    status.textContent = '🎵 Dinliyor...';

    // Ses dosyasını çal
    currentAudio = new Audio(sound.file);
    currentAudio.play();

    // Ses bittiğinde çizim süresini başlat
    currentAudio.onended = () => {
        startDrawTime(index);
    };
}

// Çizim süresini başlat
function startDrawTime(index) {
    const sound = sounds[index];
    const card = document.getElementById(`sound-${sound.id}`);
    const timer = document.getElementById(`timer-${sound.id}`);
    const status = document.getElementById(`status-${sound.id}`);

    drawTimeRemaining = sound.drawTime;
    status.textContent = '✏️ Çizim Zamanı!';
    card.classList.remove('playing');

    drawTimer = setInterval(() => {
        if (isPaused) return;

        drawTimeRemaining--;
        timer.textContent = formatTime(drawTimeRemaining);

        if (drawTimeRemaining <= 0) {
            clearInterval(drawTimer);
            completeSound(index);
        }
    }, 1000);
}

// Sesi tamamla
function completeSound(index) {
    const sound = sounds[index];
    const card = document.getElementById(`sound-${sound.id}`);
    const timer = document.getElementById(`timer-${sound.id}`);
    const status = document.getElementById(`status-${sound.id}`);

    card.classList.remove('active', 'playing');
    card.classList.add('completed');
    status.className = 'status completed';
    status.textContent = '✅ Tamamlandı';
    timer.textContent = '';

    completedSounds++;
    updateProgress();

    // Bir sonraki sese geç
    setTimeout(() => {
        playSound(index + 1);
    }, 2000);
}

// Etkinliği başlat
function startActivity() {
    if (isPlaying && !isPaused) return;

    if (isPaused) {
        isPaused = false;
        pauseBtn.textContent = '⏸️ Duraklat';
        if (currentAudio && currentAudio.paused) {
            currentAudio.play();
        }
    } else {
        isPlaying = true;
        playSound(0);
    }

    startBtn.disabled = true;
    pauseBtn.disabled = false;
}

// Duraklat
function pauseActivity() {
    if (!isPlaying) return;

    isPaused = !isPaused;

    if (isPaused) {
        pauseBtn.textContent = '▶️ Devam Et';
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
        }
    } else {
        pauseBtn.textContent = '⏸️ Duraklat';
        if (currentAudio && currentAudio.paused) {
            currentAudio.play();
        }
    }
}

// Sıfırla
function resetActivity() {
    // Onay iste
    if (isPlaying && !confirm('Etkinliği yeniden başlatmak istediğinizden emin misiniz?')) {
        return;
    }

    // Ses ve zamanlayıcıyı durdur
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    if (drawTimer) {
        clearInterval(drawTimer);
        drawTimer = null;
    }

    // Değişkenleri sıfırla
    currentSoundIndex = 0;
    isPlaying = false;
    isPaused = false;
    drawTimeRemaining = 0;
    completedSounds = 0;

    // UI'ı sıfırla
    createSoundCards();
    updateProgress();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    pauseBtn.textContent = '⏸️ Duraklat';
}

// Etkinliği bitir
function finishActivity() {
    isPlaying = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;

    alert('🎉 Tebrikler! Tüm sesleri dinlediniz ve çizimlerinizi tamamladınız!\n\nŞimdi çizimlerinizi sınıfla paylaşabilirsiniz.');
}

// Event listener'lar
startBtn.addEventListener('click', startActivity);
pauseBtn.addEventListener('click', pauseActivity);
resetBtn.addEventListener('click', resetActivity);

// Sayfa yüklendiğinde kartları oluştur
createSoundCards();
updateProgress();
