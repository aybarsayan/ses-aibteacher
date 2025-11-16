# 🎵 Seslerden Hayal Gücüne - Web Sitesi

## 📦 İçerik

Bu paket, yapay zeka dersi için hazırlanmış **8 sesli etkinlik web sitesi**ni içerir.

### Dosya Yapısı

```
ses_etkinlik_sitesi/
├── index.html          # Ana sayfa
├── style.css           # Stil dosyası
├── script.js           # JavaScript kodu
├── sounds/             # Ses dosyaları klasörü
│   ├── 1_yagmur.mp3
│   ├── 2_selale.mp3
│   ├── 3_arilar.mp3
│   ├── 4_dalgalar.mp3
│   ├── 5_okul_teneffusu.mp3
│   ├── 6_havaalani.mp3
│   ├── 7_davul_cemberi.mp3
│   └── 8_koro.mp3
└── README.md           # Bu dosya
```

---

## 🚀 Nasıl Kullanılır?

### Yöntem 1: Doğrudan Tarayıcıda Açma (En Kolay)

1. ZIP dosyasını çıkartın
2. `index.html` dosyasına çift tıklayın
3. Web tarayıcınızda açılacaktır
4. **"Etkinliği Başlat"** butonuna tıklayın

### Yöntem 2: Web Sunucusuna Yükleme

1. Tüm klasörü bir web sunucusuna yükleyin (örn. GitHub Pages, Netlify, Vercel)
2. Tarayıcıda sitenizi açın
3. Öğrencilere linki paylaşın

### Yöntem 3: Yerel Sunucu ile Test (Geliştiriciler İçin)

```bash
# Python ile basit sunucu
python3 -m http.server 8000

# Tarayıcıda aç: http://localhost:8000
```

---

## 🎯 Özellikler

✅ **Otomatik Ses Çalma** - Her ses sırayla otomatik çalar  
✅ **Çizim Zamanlayıcısı** - Her ses için 5 dakika çizim süresi  
✅ **İlerleme Takibi** - Hangi seste olduğunuzu gösterir  
✅ **Duraklat/Devam** - İstediğiniz zaman duraklatabilirsiniz  
✅ **Yeniden Başlat** - Etkinliği baştan başlatabilirsiniz  
✅ **Responsive Tasarım** - Mobil, tablet ve bilgisayarda çalışır  
✅ **Görsel Geri Bildirim** - Renkli kartlar ve animasyonlar

---

## 📱 Kullanım Senaryoları

### Senaryo 1: Sınıf İçi Kullanım
- Projeksiyon ile siteyi açın
- Öğrencilere çalışma kağıdını dağıtın
- "Etkinliği Başlat" butonuna tıklayın
- Sesler otomatik çalar, öğrenciler çizer

### Senaryo 2: Bireysel Kullanım
- Her öğrenci kendi cihazında siteyi açar
- Kendi hızında ilerler
- Kulaklık ile dinleyebilir

### Senaryo 3: Uzaktan Eğitim
- Siteyi web sunucusuna yükleyin
- Öğrencilere linki paylaşın
- Zoom/Teams üzerinden etkinliği yönetin

---

## 🎮 Kontroller

| Buton | İşlev |
|-------|-------|
| **▶️ Etkinliği Başlat** | Etkinliği başlatır, sesler sırayla çalmaya başlar |
| **⏸️ Duraklat** | Mevcut sesi veya çizim süresini duraklatır |
| **▶️ Devam Et** | Duraklatılan yerden devam eder |
| **🔄 Yeniden Başlat** | Tüm etkinliği sıfırlar ve baştan başlar |

---

## 🎨 Ses Kartları Renk Kodları

- **Gri** - Henüz başlanmadı (Bekliyor)
- **Yeşil** - Şu anda aktif (Ses çalıyor)
- **Sarı** - Çizim zamanı (Zamanlayıcı çalışıyor)
- **Mavi** - Tamamlandı

---

## ⚙️ Teknik Detaylar

- **HTML5** - Semantik yapı
- **CSS3** - Modern tasarım ve animasyonlar
- **Vanilla JavaScript** - Bağımlılık yok, hızlı ve hafif
- **HTML5 Audio API** - Ses çalma
- **Responsive Grid** - Mobil uyumlu

---

## 🔧 Özelleştirme

### Çizim Süresini Değiştirme

`script.js` dosyasında `drawTime` değerini değiştirin:

```javascript
drawTime: 300  // 300 saniye = 5 dakika
```

### Ses Ekle/Çıkar

`script.js` dosyasında `sounds` dizisini düzenleyin:

```javascript
const sounds = [
    {
        id: 1,
        name: "YENİ SES",
        icon: "🎵",
        file: "sounds/yeni_ses.mp3",
        duration: 30,
        drawTime: 300
    },
    // ...
];
```

---

## 🐛 Sorun Giderme

### Sesler çalmıyor?
- Tarayıcınızın ses izni verdiğinden emin olun
- Ses dosyalarının `sounds/` klasöründe olduğunu kontrol edin
- Dosya isimlerinin doğru olduğundan emin olun

### Site düzgün görünmüyor?
- Modern bir tarayıcı kullanın (Chrome, Firefox, Safari, Edge)
- Tarayıcı önbelleğini temizleyin (Ctrl+F5)

### Mobilde çalışmıyor?
- Mobil tarayıcılar otomatik ses çalmayı engelleyebilir
- Kullanıcı etkileşimi (buton tıklama) sonrası sesler çalacaktır

---

## 📋 Sistem Gereksinimleri

- **Tarayıcı:** Chrome 60+, Firefox 55+, Safari 11+, Edge 79+
- **İşletim Sistemi:** Windows, macOS, Linux, iOS, Android
- **İnternet:** Gerekli değil (tüm dosyalar yerel)

---

## 📄 Lisans

Bu proje eğitim amaçlı kullanım için serbesttir.  
Ses dosyaları Pixabay'den alınmıştır ve ücretsiz lisansa sahiptir.

---

## 🎓 Eğitim Notları

- Etkinlik öncesi siteyi test edin
- Hoparlör sesini uygun seviyede ayarlayın
- Öğrencilere çizim malzemelerini önceden hazırlatın
- İlk kez kullanıyorsanız, öğrencilere kısa bir demo yapın

---

## 💡 İpuçları

✅ Projeksiyon ile gösterirken tam ekran modunu kullanın (F11)  
✅ Öğrencilere her sesin ne kadar süreceğini önceden söyleyin  
✅ Çizim süresi bittiğinde "Tamamlandı" yazısı çıkar, endişelenmeyin  
✅ "Yeniden Başlat" butonu ile istediğiniz zaman baştan başlayabilirsiniz

---

**İyi Dersler! 🎨🤖🎵**
