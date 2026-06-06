// ==========================================
    // 1. DATA CONFIGURATION (Bisa diedit dengan mudah)
    // ==========================================
    const CONFIG = {
      // Nama Pasangan & Pengirim
      partnerName: "Puji Rahmawati",
      senderName: "Afzal",
      anniversaryDate: "2024-06-06T00:00:00", // Format YYYY-MM-DDTHH:MM:SS (Tanggal Jadian)
      
      // Playlist Lagu Background (Bisa diganti URL mp3 langsung dari internet)
      bgMusicUrl: "assets/lagu/chanyeol.mp3", // Ganti dengan lagu favorit Anda
      
      // Foto-foto Utama (Gunakan Unsplash default atau paste url gambar kamu sendiri)
      mostTouchingPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
      boyfriendImg: "assets/img/mypct.jpg", // Ganti dengan URL foto wajahmu sendiri
      
      // Level 4 Quiz Data (Minimal 10 Pertanyaan)
      quizQuestions: [
        { q: "Kapan tanggal jadian kita?", a: "6 Juni", opt: ["5 Juni", "6 Juni", "7 Juni", "8 Juni"] },
        { q: "Di mana kita pertama kali nge-date?", a: "Nicoles Rivers Park", opt: ["Bioskop", "Nicoles Rivers Park", "Taman Kota", "Mall"] },
        { q: "Siapa yang paling sering ngambek kalau telat balas chat?", a: "Aku!", opt: ["Aku!", "Dia lah", "Dua-duanya", "Nggak ada"] },
        { q: "Makanan apa yang paling kita sering beli bareng?", a: "Semua Di beli", opt: ["Bakso", "Sate Ayam", "Semua Di beli", "Seafood"] },
        { q: "Apa warna kesukaan pacar kamu ini?", a: "Biru", opt: ["Merah", "Biru", "Hitam", "Hijau"] },
        { q: "Siapa yang nembak duluan?", a: "Si Cowok", opt: ["Si Cewek", "Si Cowok", "Saling ngode", "Tiba-tiba jadian"] },
        { q: "Kemana destinasi liburan impian kita?", a: "Keliling Indonesia dan Dunia", opt: ["Bandung", "Jogja", "Keliling Indonesia dan Dunia", "Lombok"] },
        { q: "Apa nama panggilan sayang yang paling sering dipake?", a: "Sayang", opt: ["Baby", "Sayang", "Beb", "Chubby"] }
      ],

      // Level 5 Puzzle Image (Foto berdua yang akan dipotong 4x4)
      puzzleImgUrl: "assets/img/berdua.jpg",

      // Timeline Perjalanan Cinta
      timeline: [
        { date: "14 April 2024", title: "Pertama Ketemu", desc: "Awal mula kita bertemu secara langsung walaupun hanya sebentar.", img: "assets/img/first.jpg" },
        { date: "6 Juni 2024", title: "Date Pertama Kita", desc: "Pertemuan canggung tapi bikin deg-degan setengah mati di Nikoles Rivers Park.", img: "assets/img/date.jpg" },
        { date: "6 Juni 2024", title: "Momen Jadian", desc: "Hari resmi di mana aku mengumpulkan segenap keberanian untuk memintamu jadi duniaku.", img: "assets/img/jadian.jpg" },
        { date: "15 Oktober 2024", title: "Liburan Berdua", desc: "Momen seru saat kita jalan-jalan menikmati indahnya pemandangan bersama walaupun awal dan akhirnya kehujanan.", img: "assets/img/liburan.jpg" },
      ],

      // Polaroid Wall of Memories (Caption lucu & estetik)
      polaroids: [
        { img: "assets/img/pusing.jpg", cap: "Sayangku lagi pucing karena capek kerjaan😜" },
        { img: "assets/img/pasrah.jpg", cap: "Komuk aku yang pasrah di dandanin" },
        { img: "assets/img/bunga.jpg", cap: "Hadiah bunga pertama dari mas pacar" },
        { img: "assets/img/berenang.jpg", cap: "Berenang bareng pertama kali" },
        { img: "assets/img/angkringan.webp", cap: "ngedate di angkringan" },
        { img: "assets/img/date2.jpg", cap: "Tempat main yang sering dikunjungi" },
        { img: "assets/img/he.jpg", cap: "Bonus hehe" }
      ],

      // Surat Cinta Isi Bebas
      loveLetter: `Dear Puji Sayang,

      Hari ini tepat dua tahun sejak kita memutuskan untuk melangkah di jalan yang sama. Dua tahun bukanlah waktu yang sebentar, tapi bersamamu, waktu rasanya berjalan secepat kedipan mata. Kita sudah melewati begitu banyak tawa, tangis, salah paham kecil, hingga pelukan hangat yang menenangkan segalanya.

      Aku bersyukur untuk setiap detik bersamamu. Terima kasih sudah sabar menghadapi kekonyolanku, terima kasih sudah selalu ada saat duniaku terasa berat, dan terima kasih sudah mencintaiku dengan tulus apa adanya.

      Semoga kita bisa terus melangkah bersama, saling menguatkan, dan merajut lebih banyak kenangan indah hingga kita tua nanti.

      Selamat Anniversary ke-2, Sayangku. I love you more than words can say. ❤️`,

      // Pilihan Hadiah (Bisa diisi link shopee atau e-commerce kamu)
      gifts: [
        { name: "Cermin yang ada fotonya", desc: "Cermin yang sangat cantik dan bisa ada foto kita berdua.", img: "assets/img/kaca.jpeg", link: "https://vt.tokopedia.com/t/ZS92pNrDWbj1N-RgJXo" },
        { name: "Puzzle lucu dari foto kita berdua", desc: "Puzzle dari foto kita berdua agar bisa di susun bareng.", img: "assets/img/puzzle.jpeg", link: "https://vt.tokopedia.com/t/ZS92pNUCBkAxS-eCSei/" },
        { name: "Pilih make up atau skincare sendiri", desc: "Pilih make up atau skincare sendiri yang mau di beli atau lagi dibutuhkan.", img: "assets/img/makeup.PNG", link: "https://shopee.co.id" },
        { name: "Cari sendiri hadiahnya", desc: "Cari sendiri hadiahnya di shoppe atau tiktok shop.", img: "assets/img/shoppe.PNG", link: "https://shopee.co.id" }
      ],

      // 100 Alasan Aku Sayang Kamu (Dibuat dinamis agar performa aman)
      reasons: [
        "Kamu selalu dengerin keluh kesahku.",
        "Senyuman manis kamu bisa bikin hari burukku mendadak cerah.",
        "Kamu selalu sabar ngadepin sifat kekanak-kanakanku.",
        "Kamu adalah orang pertama yang kuingat saat bangun tidur.",
        "Cara kamu tertawa lepas sangat menular dan bikin aku bahagia.",
        "Kamu selalu percaya dengan mimpi-mimpiku.",
        "Kamu paling kuat.",
        "Kamu punya mata yang indah dan menenangkan.",
        "Kamu tidak pernah malu bertingkah konyol bersamaku.",
        "Kamu adalah pendengar terbaik untuk semua keluh kesahku.",
        "Cara kamu mencemaskan kesehatanku bikin aku merasa sangat dipedulikan.",
        "Kamu selalu berusaha mengerti sudut pandangku.",
        "Kehangatan pelukanmu tak tergantikan oleh apa pun.",
        "Kamu adalah rumah tempatku selalu ingin kembali.",
        "Kamu selalu jujur dan terbuka padaku.",
        "Selera humormu yang aneh tapi serasi sama denganku.",
        "Kamu menghormati orang tuaku.",
        "Kamu membuatku ingin menjadi pria yang lebih baik setiap hari.",
        "Kehadiranmu melengkapi kekosongan di hatiku.",
        "Kamu suka mengelus rambutku pas aku lagi capek.",
        "Kamu selalu mendukung hobi dan passionku.",
        "Kamu tidak menuntutku menjadi orang lain.",
        "Cara kamu cemberut gemesin kalau lagi cemburu kecil.",
        "Kamu adalah partner terbaik untuk berpetualang kuliner.",
        "Kita bisa saling nyambung saat ngomongin hal random.",
        "Karena kamu menerima kekuranganku dengan senyuman.",
        "Kamu adalah inspirasiku saat menulis atau berkarya.",
        "Cara kamu menyemangatiku lewat chat singkat di pagi hari.",
        "Kamu selalu membuatku merasa istimewa.",
        "Kita punya sejuta memori manis yang ga akan habis dibahas.",
        "Dan 70 alasan lainnya yang tak muat ditulis kata, karena mencintaimu tak butuh alasan tapi butuh seumur hidup bersamamu."
      ],

      // Pesan Masa Depan
      futureMessage: `Hai Puji di masa depan,

      Aku menulis pesan ini ketika kita sedang merayakan hari jadi yang ke-2. Aku harap, saat kamu membaca ini nanti—entah di tahun ke-5, ke-10, atau saat kita sudah memiliki anak dan cucu—kamu membaca ini dengan senyuman yang sama manisnya.

      Aku harap kita tetap menjadi sepasang sahabat yang gemar bercanda, saling mengalah saat ego meninggi, dan tetap saling berpegangan tangan erat melewati badai kehidupan. Ingatlah perjuangan kita untuk sampai di titik ini. Jangan pernah lelah untuk saling mencintai ya.

      Aku di masa lalu selalu dan akan tetap mencintaimu di masa depanmu.`
    };


    // ==========================================
    // 2. STATE MANAGEMENT & INIT
    // ==========================================
    let currentLevel = parseInt(localStorage.getItem('anniversary_level')) || 1;
    let isMusicPlaying = false;
    let clickSpamCount = 0;
    let heartCatchCount = 0;
    let activeQuizIndex = 0;
    let puzzleTiles = [];
    const totalLevels = 10;

    // Background Twinkling Stars
    function generateStars() {
      const container = document.getElementById('stars-container');
      container.innerHTML = '';
      for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
        container.appendChild(star);
      }
    }

    // Audio Player Init
    const bgMusic = document.getElementById('bg-music');
    bgMusic.src = CONFIG.bgMusicUrl;

    function toggleMusic() {
      const icon = document.getElementById('music-icon');
      if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
        icon.className = "fa-solid fa-volume-xmark text-lg animate-none";
      } else {
        bgMusic.play().catch(() => {});
        isMusicPlaying = true;
        icon.className = "fa-solid fa-volume-high text-lg animate-pulse text-pink-500";
      }
    }

    // Custom Alert Logic
    function triggerCustomAlert(emoji, title, msg) {
      document.getElementById('alert-emoji').innerText = emoji;
      document.getElementById('alert-title').innerText = title;
      document.getElementById('alert-msg').innerText = msg;
      const modal = document.getElementById('custom-alert');
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.querySelector('.glass-card').classList.add('scale-100');
      }, 50);
    }

    function closeCustomAlert() {
      const modal = document.getElementById('custom-alert');
      modal.querySelector('.glass-card').classList.remove('scale-100');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 200);
    }

    // Custom Success Modal
    function triggerSuccessModal(msg) {
      document.getElementById('success-dialog-msg').innerText = msg;
      const modal = document.getElementById('success-level-dialog');
      modal.classList.remove('hidden');
      confettiEffect();
    }

    // Sparkle trail on click
    window.addEventListener('click', (e) => {
      createSparkle(e.clientX, e.clientY);
    });

    function createSparkle(x, y) {
      for (let i = 0; i < 5; i++) {
        const p = document.createElement('div');
        p.className = 'sparkle';
        const size = Math.random() * 12 + 6;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${x + (Math.random() * 30 - 15)}px`;
        p.style.top = `${y + (Math.random() * 30 - 15)}px`;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 800);
      }
    }

    // Glow effect tracker
    window.addEventListener('mousemove', (e) => {
      const glow = document.getElementById('cursor-glow');
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    });

    // Floating Hearts spawner
    setInterval(() => {
      spawnFloatingHeart();
    }, 1500);

    function spawnFloatingHeart() {
      const heart = document.createElement('div');
      heart.className = 'floating-heart text-pink-400/60 text-2xl';
      heart.innerHTML = ['❤️','💖','💝','🌸'][Math.floor(Math.random()*4)];
      heart.style.left = `${Math.random() * 90}vw`;
      heart.style.animationDuration = `${Math.random() * 4 + 4}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }


    // ==========================================
    // 3. LEVEL LOGIC ENGINE
    // ==========================================
    const levelConfigs = {
      1: {
        badge: "Pemula Sayang",
        cupid: "Coba jawab pertanyaan gampang ini... Sayang aku nggak? 😝",
        render: () => {
          return `
            <div class="text-center py-6 w-full flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <h3 class="text-lg font-bold text-brandRoseGold mb-2">Pertanyaan Tersimpel</h3>
                <p class="text-slate-600 text-sm mb-6">Kamu sayang nggak sama aku?</p>
              </div>
              <div class="relative flex justify-center gap-4 w-full h-32 items-center" id="btn-escape-container">
                <button onclick="handleLvl1Answer(true)" class="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300">
                  ❤️ Aku Sayang Kamu
                </button>
                <button id="btn-escape" onmouseover="escapeButton()" onclick="escapeButton()" class="absolute bg-slate-300 hover:bg-slate-400 text-slate-700 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow">
                  Nggak 😝
                </button>
              </div>
            </div>
          `;
        }
      },
      2: {
        badge: "Uji Kesetiaan",
        cupid: "Sekarang tes kesetiaan yang hakiki! Jawab dengan jujur ya, awas aja salah!",
        render: () => {
          return `
            <div class="text-center py-4 w-full">
              <h3 class="text-lg font-bold text-brandRoseGold mb-2">Andai Aku Berubah...</h3>
              <p class="text-slate-600 text-sm mb-6">"Kalau besok pagi aku mendadak berubah jadi ulat bulu kecil, apakah kamu masih sayang sama aku?" 🐛</p>
              <div class="flex flex-col gap-3 max-w-xs mx-auto">
                <button onclick="handleLvl2Answer('sangat')" class="w-full bg-white hover:bg-pink-50 border-2 border-pink-200 text-brandRoseGold font-bold py-3 px-4 rounded-xl transition duration-300 shadow-sm text-sm">
                  Sangat Sayang Banget! ❤️
                </button>
                <button onclick="handleLvl2Answer('tetap')" class="w-full bg-white hover:bg-pink-50 border-2 border-pink-200 text-brandRoseGold font-bold py-3 px-4 rounded-xl transition duration-300 shadow-sm text-sm">
                  Tetap Sayang Dong, Kan Pacarku! 🥰
                </button>
                <button onclick="handleLvl2Answer('geli')" class="w-full bg-white hover:bg-pink-50 border-2 border-pink-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition duration-300 shadow-sm text-sm">
                  Agak geli sih, tapi tetep disuapin daun ulatnya 🍃
                </button>
                <button onclick="handleLvl2Answer('buang')" class="w-full bg-white hover:bg-pink-50 border-2 border-pink-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition duration-300 shadow-sm text-sm">
                  Aku buang ke tong sampah tetangga biar aman 😂
                </button>
              </div>
            </div>
          `;
        }
      },
      3: {
        badge: "Pemanasan Jempol",
        cupid: "Ayo tangkap hatiku! Kamu harus cepat, kumpulkan minimal 15 cinta ya!",
        render: () => {
          heartCatchCount = 0;
          setTimeout(initHeartCatcher, 100);
          return `
            <div class="text-center py-2 w-full flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <h3 class="text-lg font-bold text-brandRoseGold mb-1">Tangkap Hati Cinta ❤️</h3>
                <p class="text-xs text-slate-500 mb-3">Klik hati yang berjatuhan! Target: 15. Skor Kamu: <span id="heart-score" class="text-pink-500 font-bold">0</span>/15</p>
              </div>
              <div id="heart-catcher-area" class="relative w-full h-64 bg-pink-50/50 rounded-2xl overflow-hidden border border-pink-100 cursor-crosshair">
                <!-- Hearts spawn here dynamically -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none" id="tap-to-start-msg">
                  <span class="text-xs text-pink-400 animate-bounce">Ketuk di sini untuk mulai memunculkan hati!</span>
                </div>
              </div>
            </div>
          `;
        }
      },
      4: {
        badge: "Ujian Memori Cinta",
        cupid: "Waktunya kuis memori hubungan kita! Tunjukkan kalau kamu nggak pernah lupa!",
        render: () => {
          activeQuizIndex = 0;
          setTimeout(renderQuizItem, 100);
          return `
            <div class="w-full py-2">
              <h3 class="text-base font-bold text-brandRoseGold mb-1 text-center">Asah Otak Romantis</h3>
              <p class="text-[11px] text-slate-400 text-center mb-4">Soal: <span id="quiz-num">1</span> dari ${CONFIG.quizQuestions.length}</p>
              <div id="quiz-workspace" class="w-full bg-white/60 p-4 rounded-2xl border border-pink-100 shadow-sm">
                <!-- Quiz dynamically rendered -->
              </div>
            </div>
          `;
        }
      },
      5: {
        badge: "Satukan Jiwa Kita",
        cupid: "Foto kita terpecah jadi 16 bagian! Susun biar aku bisa lihat wajah manismu lagi ❤️",
        render: () => {
          setTimeout(initPuzzle, 100);
          return `
            <div class="w-full py-1">
              <h3 class="text-base font-bold text-brandRoseGold mb-1 text-center">Super Puzzle 4x4</h3>
              <p class="text-[11px] text-slate-400 text-center mb-3">Tap potongan lalu tap kotak tujuan, atau drag & drop kalau nyaman di HP kamu.</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <div class="flex flex-col items-center">
                  <span class="text-xs font-semibold text-pink-400 mb-2">Foto Acuan</span>
                  <div class="w-full max-w-[15rem] aspect-square rounded-2xl overflow-hidden border border-pink-200 shadow-md">
                    <img src="${CONFIG.puzzleImgUrl}" class="w-full h-full object-cover blur-[1px] scale-105" alt="Foto acuan puzzle">
                  </div>
                </div>

                <div class="flex flex-col items-center">
                  <span class="text-xs font-semibold text-brandRoseGold mb-2">Papan Puzzle 16 Kotak</span>
                  <div id="puzzle-board" class="grid grid-cols-4 gap-1 w-full max-w-[15rem] aspect-square bg-slate-200 p-1 rounded-2xl border border-white/50 shadow-inner">
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="0"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="1"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="2"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="3"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="4"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="5"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="6"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="7"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="8"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="9"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="10"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="11"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="12"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="13"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="14"></div>
                    <div class="puzzle-slot aspect-square bg-white border border-dashed border-pink-300 rounded-lg overflow-hidden" data-idx="15"></div>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex flex-col items-center gap-2">
                <span class="text-[11px] text-slate-500 text-center">Kalau di HP, cukup tap keping lalu tap slot yang pas. Selesai 1 per 1, manis banget.</span>
                <div id="puzzle-pieces-container" class="grid grid-cols-4 gap-2 w-full max-w-[18rem]">
                  <!-- Draggable Pieces -->
                </div>
              </div>
            </div>
          `;
        }
      },
      6: {
        badge: "Kerja Keras Cinta",
        cupid: "Katanya mau berjuang demi aku? Buktikan dengan spam tombol ini 100 kali! Cepetan!",
        render: () => {
          clickSpamCount = 0;
          return `
            <div class="text-center py-6 w-full flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <h3 class="text-lg font-bold text-brandRoseGold mb-2">Spam Tombol Perjuangan</h3>
                <p class="text-slate-600 text-sm mb-6">Ayo ketuk tombol ini secepat mungkin sampai 100 kali!</p>
              </div>
              <div class="flex flex-col items-center">
                <div class="text-3xl font-black text-brandPink mb-4" id="spam-counter">0 / 100</div>
                <div class="w-full bg-pink-100 h-3 rounded-full overflow-hidden mb-6 max-w-xs">
                  <div id="spam-bar" class="w-0 h-full bg-brandPink transition-all duration-150"></div>
                </div>
                <button onclick="handleSpamClick()" class="bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-95 text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg transform active:scale-90 transition duration-100">
                  💖 KETUK AKU! 💖
                </button>
              </div>
            </div>
          `;
        }
      },
      7: {
        badge: "Temukan Jodohmu",
        cupid: "Di antara 15 meme nyebelin ini, bisakah kamu menemukan foto ganteng yang asli? 😎",
        render: () => {
          setTimeout(initCardFinder, 100);
          return `
            <div class="w-full py-2">
              <h3 class="text-base font-bold text-brandRoseGold mb-1 text-center">Find Your Boyfriend</h3>
              <p class="text-xs text-slate-400 text-center mb-2">Klik meme yang salah = kena modal nyebelin. Klik foto yang benar = lanjut.</p>
              <p class="text-[11px] text-slate-500 text-center mb-4">Ganti foto di <span class="font-bold text-brandPink">CONFIG.boyfriendImg</span> untuk memasukkan wajahmu sendiri.</p>
              <div class="grid grid-cols-4 gap-2" id="card-finder-grid">
                <!-- 16 cards dynamic -->
              </div>
            </div>
          `;
        }
      },
      8: {
        badge: "Lindungi Hati Kita",
        cupid: "Bahaya! Ada emoji patah hati berkeliaran! Hancurkan dia, tapi jangan sentuh cinta kita!",
        render: () => {
          setTimeout(initWhackLove, 100);
          return `
            <div class="w-full py-2">
              <h3 class="text-base font-bold text-brandRoseGold mb-1 text-center">Whack A Broken Heart</h3>
              <p class="text-xs text-slate-400 text-center mb-3">Ketuk hanya 💔 patah hati! Jangan ketuk ❤️ hati! Target: 10 poin.</p>
              <div class="flex justify-between items-center px-4 mb-3 text-sm">
                <span class="text-slate-600">Skor: <strong id="whack-score" class="text-brandPink">0</strong>/10</span>
                <span class="text-slate-600">Nyawa: <strong id="whack-lives" class="text-red-500">❤️❤️❤️</strong></span>
              </div>
              <div class="grid grid-cols-3 gap-2 max-w-xs mx-auto" id="whack-grid">
                <div class="whack-hole h-20 rounded-2xl flex items-center justify-center relative overflow-hidden" data-idx="0"></div>
                <div class="whack-hole h-20 rounded-2xl flex items-center justify-center relative overflow-hidden" data-idx="1"></div>
                <div class="whack-hole h-20 rounded-2xl flex items-center justify-center relative overflow-hidden" data-idx="2"></div>
                <div class="whack-hole h-20 rounded-2xl flex items-center justify-center relative overflow-hidden" data-idx="3"></div>
                <div class="whack-hole h-20 rounded-2xl flex items-center justify-center relative overflow-hidden" data-idx="4"></div>
                <div class="whack-hole h-20 rounded-2xl flex items-center justify-center relative overflow-hidden" data-idx="5"></div>
              </div>
            </div>
          `;
        }
      },
      9: {
        badge: "Mesin Kebenaran Mutlak",
        cupid: "Mesin kejujuran mendeteksi tingkat ketampanan pacarmu. Silakan pilih fakta paling mutlak!",
        render: () => {
          return `
            <div class="text-center py-6 w-full flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <h3 class="text-lg font-bold text-brandRoseGold mb-2">Siapa Cowok Terganteng di Dunia?</h3>
                <p class="text-slate-500 text-xs mb-6">Mesin kebenaran mendeteksi kecurangan jika kamu salah pilih!</p>
              </div>
              <div class="flex flex-col gap-3 max-w-xs mx-auto w-full">
                <button onclick="handleLvl9Answer()" class="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition transform active:scale-95 text-sm">
                  Pacarku yang paling manis dan ganteng ❤️
                </button>
                <button onclick="handleLvl9Answer()" class="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition transform active:scale-95 text-sm">
                  Si cowok konyol yang buat website ini 😜
                </button>
                <button onclick="handleLvl9Answer()" class="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition transform active:scale-95 text-sm">
                  Afzal, ga ada lawan gantengnya pokoknya 🏆
                </button>
              </div>
            </div>
          `;
        }
      },
      10: {
        badge: "Sumpah Setia Terakhir",
        cupid: "Ini pertanyaan pamungkas demi membuka semua kado berharga kamu. Pikirkan baik-baik!",
        render: () => {
          return `
            <div class="text-center py-6 w-full flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <h3 class="text-lg font-bold text-brandRoseGold mb-2">Komitmen Cinta Sejati</h3>
                <p class="text-slate-600 text-sm mb-6">Kamu mau bersamaku sampai kapan, Sayang?</p>
              </div>
              <div class="flex flex-col gap-3 max-w-xs mx-auto w-full">
                <button onclick="handleLvl10Answer(false)" class="w-full bg-white hover:bg-red-50 border border-slate-200 text-slate-700 py-2.5 px-4 rounded-xl text-xs transition">
                  Sampai Besok Pagi Aja Ah 😂
                </button>
                <button onclick="handleLvl10Answer(false)" class="w-full bg-white hover:bg-red-50 border border-slate-200 text-slate-700 py-2.5 px-4 rounded-xl text-xs transition">
                  Sampai Minggu Depan Pas Gajian 😝
                </button>
                <button onclick="handleLvl10Answer(false)" class="w-full bg-white hover:bg-red-50 border border-slate-200 text-slate-700 py-2.5 px-4 rounded-xl text-xs transition">
                  Sampai Lupa Rasanya Marahan
                </button>
                <button onclick="handleLvl10Answer(true)" class="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-105 transition text-sm">
                  💖 Sampai Kita Jadi Nenek Kakek & Menua Bersama 💖
                </button>
              </div>
            </div>
          `;
        }
      }
    };

    // Main Engine Level Changer
    function loadLevel(lvl) {
      if (lvl > totalLevels) {
        completeAllLevels();
        return;
      }
      currentLevel = lvl;
      localStorage.setItem('anniversary_level', lvl);

      const percent = Math.floor(((lvl - 1) / totalLevels) * 100);
      document.getElementById('progress-percent').innerText = `${percent}%`;
      document.getElementById('progress-inner-bar').style.width = `${percent}%`;
      document.getElementById('level-badge').innerText = `LEVEL ${lvl}: ${levelConfigs[lvl].badge}`;
      document.getElementById('cupid-bubble').innerText = `"${levelConfigs[lvl].cupid}"`;

      const viewContainer = document.getElementById('level-content');
      viewContainer.classList.remove('fade-in');
      viewContainer.classList.add('fade-out');

      setTimeout(() => {
        viewContainer.innerHTML = levelConfigs[lvl].render();
        viewContainer.className = "w-full h-full fade-in";
      }, 220);
    }

    function goToNextLevel() {
      document.getElementById('success-level-dialog').classList.add('hidden');
      loadLevel(currentLevel + 1);
    }

    function skipCurrentLevel() {
      triggerSuccessModal("Kamu melewati rintangan ini dengan kekuatan cinta sakti! 🦸‍♀️");
    }

    // ==========================================
    // LEVEL IMPLEMENTATION DETAILED EVENTS
    // ==========================================

    // Level 1: Escape Button
    function escapeButton() {
      const btn = document.getElementById('btn-escape');
      if (!btn) return;
      const x = Math.random() * 150 - 75; // Rentang acak posisi x
      const y = Math.random() * 100 - 50; // Rentang acak posisi y
      btn.style.transform = `translate(${x}px, ${y}px) scale(${Math.max(0.5, Math.random())})`;
      
      const phrases = [
        "Nggak bisa diklik wleee 😝",
        "Eits mau kabur kemana? 🏃‍♀️",
        "Coba tangkap aku! 🤪",
        "Salah pencet dong! 😂"
      ];
      document.getElementById('cupid-bubble').innerText = `"${phrases[Math.floor(Math.random()*phrases.length)]}"`;
    }

    function handleLvl1Answer(love) {
      if (love) {
        triggerSuccessModal("Aku tahu kok kamu sayang banget sama aku! Misi berhasil ❤️");
      }
    }

    // Level 2: Ulat Bulu
    function handleLvl2Answer(type) {
      if (type === 'buang') {
        triggerCustomAlert("😤", "ZhalBot Kesal!", "Heh! Kok dibuang sih? Tega banget kamu ya sama ulat bulu ganteng ini!");
      } else if (type === 'geli' || type === 'tetap' || type === 'sangat') {
        triggerSuccessModal("Aww manis banget sih! Kamu memang jodoh sejati ulat bulu romantis ini 🐛❤️");
      }
    }

    // Level 3: Catch Heart
    let spawnInterval;
    function initHeartCatcher() {
      const area = document.getElementById('heart-catcher-area');
      if (!area) return;
      
      area.addEventListener('click', function startTrigger() {
        const startMsg = document.getElementById('tap-to-start-msg');
        if (startMsg) startMsg.remove();
        area.removeEventListener('click', startTrigger);
      });

      // Spawn heart inside area
      spawnInterval = setInterval(() => {
        if (currentLevel !== 3) {
          clearInterval(spawnInterval);
          return;
        }
        if (heartCatchCount >= 15) {
          clearInterval(spawnInterval);
          return;
        }

        const heart = document.createElement('div');
        heart.innerText = "❤️";
        heart.className = "absolute text-3xl cursor-pointer select-none transform hover:scale-125 transition-all";
        heart.style.left = `${Math.random() * 85 + 5}%`;
        heart.style.top = `-30px`;
        heart.style.transition = "top 3s linear";
        
        area.appendChild(heart);

        // Falling movement
        setTimeout(() => {
          heart.style.top = "100%";
        }, 50);

        // Click event listener to catch heart
        heart.addEventListener('click', (e) => {
          e.stopPropagation();
          heartCatchCount++;
          document.getElementById('heart-score').innerText = heartCatchCount;
          createSparkle(e.clientX, e.clientY);
          heart.remove();

          if (heartCatchCount >= 15) {
            clearInterval(spawnInterval);
            triggerSuccessModal("Refleks jarimu secepat deg-degan jantungku pas deket kamu! Luar biasa! 😍");
          }
        });

        // Remove if missed
        setTimeout(() => {
          if (heart && heart.parentNode) {
            heart.remove();
          }
        }, 3200);

      }, 800);
    }

    // Level 4: Quiz
    function renderQuizItem() {
      const workspace = document.getElementById('quiz-workspace');
      if (!workspace) return;
      const data = CONFIG.quizQuestions[activeQuizIndex];
      
      let optionsHtml = '';
      data.opt.forEach(opt => {
        optionsHtml += `
          <button onclick="handleQuizAnswer('${opt.replace(/'/g, "\\'")}')" class="w-full bg-white/80 hover:bg-pink-100 border border-pink-200 text-slate-800 font-medium py-3 px-4 rounded-xl text-left text-xs transition duration-200">
            📍 ${opt}
          </button>
        `;
      });

      workspace.innerHTML = `
        <div class="fade-in">
          <p class="font-bold text-slate-800 text-sm mb-4">${data.q}</p>
          <div class="flex flex-col gap-2">
            ${optionsHtml}
          </div>
        </div>
      `;
      document.getElementById('quiz-num').innerText = activeQuizIndex + 1;
    }

    function handleQuizAnswer(answer) {
      const correct = CONFIG.quizQuestions[activeQuizIndex].a;
      if (answer === correct) {
        activeQuizIndex++;
        if (activeQuizIndex >= CONFIG.quizQuestions.length) {
          triggerSuccessModal("Luar biasa! Ingatan kamu memang tajam bagai panah asmara Zhal! 🎯");
        } else {
          renderQuizItem();
        }
      } else {
        triggerCustomAlert("🤔", "Jawaban Kurang Tepat", "Aduh, coba diingat-ingat lagi masa masa indah itu...");
      }
    }

    // Level 5: Puzzle
    let selectedPiece = null;
    function initPuzzle() {
      const container = document.getElementById('puzzle-pieces-container');
      if (!container) return;
      container.innerHTML = '';
      selectedPiece = null;

      const total = 16;
      const cols = 4;
      const rows = 4;

      const makeSlice = (index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const piece = document.createElement('button');
        piece.type = 'button';
        piece.className = "relative aspect-square w-full overflow-hidden rounded-lg border-2 border-brandPink bg-pink-50 shadow-md cursor-grab active:cursor-grabbing transition-transform duration-200 touch-manipulation select-none";
        piece.draggable = true;
        piece.setAttribute('data-idx', String(index));
        piece.setAttribute('aria-label', `Puzzle piece ${index + 1}`);

        const img = document.createElement('img');
        img.src = CONFIG.puzzleImgUrl;
        img.alt = `Potongan puzzle ${index + 1}`;
        img.className = "absolute inset-0 w-[400%] h-[400%] object-cover max-w-none pointer-events-none";
        img.style.left = `${-col * 100}%`;
        img.style.top = `${-row * 100}%`;

        piece.appendChild(img);

        const setSelected = () => {
          selectedPiece = piece;
          document.querySelectorAll('#puzzle-pieces-container button').forEach(btn => {
            btn.classList.remove('ring-4', 'ring-pink-300', 'scale-105');
          });
          piece.classList.add('ring-4', 'ring-pink-300', 'scale-105');
        };

        piece.addEventListener('click', (e) => {
          e.preventDefault();
          setSelected();
        });

        piece.addEventListener('touchstart', (e) => {
          e.preventDefault();
          setSelected();
        }, { passive: false });

        piece.addEventListener('dragstart', (e) => {
          selectedPiece = piece;
          piece.classList.add('ring-4', 'ring-pink-300', 'scale-105');
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', String(index));
        });

        return piece;
      };

      const pieces = Array.from({ length: total }, (_, i) => i).sort(() => Math.random() - 0.5);
      pieces.forEach(idx => container.appendChild(makeSlice(idx)));

      const slots = document.querySelectorAll('.puzzle-slot');
      const tryPlacePiece = (slot) => {
        if (!selectedPiece) return;
        const pIdx = selectedPiece.getAttribute('data-idx');
        const sIdx = slot.getAttribute('data-idx');

        if (pIdx === sIdx) {
          slot.innerHTML = '';
          slot.appendChild(selectedPiece);
          selectedPiece.draggable = false;
          selectedPiece.classList.remove('ring-4', 'ring-pink-300', 'scale-105', 'cursor-grab', 'bg-pink-50');
          selectedPiece.classList.add('cursor-default', 'border-emerald-400');
          selectedPiece = null;
          checkPuzzleComplete();
        } else {
          triggerCustomAlert("🧩", "Kurang Pas", "Potongan itu belum cocok. Coba geser ke kotak yang lain ya!");
          selectedPiece.classList.remove('ring-4', 'ring-pink-300', 'scale-105');
        }
      };

      slots.forEach(slot => {
        slot.addEventListener('dragover', (e) => {
          e.preventDefault();
          slot.classList.add('ring-4', 'ring-pink-200');
        });

        slot.addEventListener('dragleave', () => {
          slot.classList.remove('ring-4', 'ring-pink-200');
        });

        slot.addEventListener('drop', (e) => {
          e.preventDefault();
          slot.classList.remove('ring-4', 'ring-pink-200');
          if (selectedPiece) {
            tryPlacePiece(slot);
          }
        });

        slot.addEventListener('click', () => tryPlacePiece(slot));
        slot.addEventListener('touchend', (e) => {
          e.preventDefault();
          tryPlacePiece(slot);
        }, { passive: false });
      });
    }

    function checkPuzzleComplete() {
      const slots = document.querySelectorAll('.puzzle-slot');
      let correctCount = 0;
      slots.forEach(slot => {
        const piece = slot.querySelector('button');
        if (piece && piece.getAttribute('data-idx') === slot.getAttribute('data-idx')) {
          correctCount++;
        }
      });

      if (correctCount === 16) {
        triggerSuccessModal("❤️ Puzzle 4x4 selesai sempurna! Foto kita akhirnya utuh lagi! ❤️");
      }
    }

    // Level 6: Click Spam
    function handleSpamClick() {
      if (clickSpamCount >= 100) return;
      clickSpamCount++;
      document.getElementById('spam-counter').innerText = `${clickSpamCount} / 100`;
      document.getElementById('spam-bar').style.width = `${clickSpamCount}%`;

      if (clickSpamCount === 50) {
        document.getElementById('cupid-bubble').innerText = '"Ayo setengah jalan lagi! Jari kamu ga pegel kan demi cinta? 😝"';
      }

      if (clickSpamCount >= 100) {
        triggerSuccessModal("Hebat! Kalau disuruh klik aku 1000 kali juga kamu pasti rela kan? 😝");
      }
    }

    // Level 7: Card Finder
    const LEVEL_7_FAIL_MESSAGES = [
      "Aduh, itu malah meme. Aku hampir tersinggung, sumpah 😭",
      "Duh, kamu tebak yang salah. Aku bukan receh beginian yaa 🙄",
      "Heh, itu bukan aku. Yang ini cuma bahan bercandaan internet 😤",
      "Tega banget aku disamain sama yang begitu... sakit hati kecil nih 😭",
      "Coba lagi dong, masa wajah ganteng segini ketuknya yang meme? 😅",
      "Kamu salah klik! Itu mah komik sedih berkedok lucu 🤏",
      "Aku protes! Wajah asli aku jauh lebih menawan dari itu 😎",
      "Waduh, salah sasaran. Cinta kamu lagi ngelipir ke meme 😵‍💫",
      "Jangan kasar dong, itu cuma meme biasa bukan aku 😭",
      "Gagal manis! Yuk fokus ke foto asli, bukan ke bahan ketawa 😂"
    ];

    function initCardFinder() {
      const grid = document.getElementById('card-finder-grid');
      if (!grid) return;
      grid.innerHTML = '';

      const cards = [];
      for (let i = 0; i < 15; i++) {
        cards.push({
          type: 'meme',
          icon: ['🐱','🐶','🦁','🐼','🐷','🐵'][Math.floor(Math.random() * 6)]
        });
      }
      cards.push({ type: 'boy', icon: '👦' });
      cards.sort(() => Math.random() - 0.5);

      cards.forEach((c) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = "relative h-16 overflow-hidden bg-white hover:bg-pink-50 border-2 border-pink-200 rounded-xl flex items-center justify-center text-xl transition-all duration-300 transform active:scale-90 font-bold shadow-sm touch-manipulation";
        card.innerText = "❓";

        card.onclick = () => {
          if (c.type === 'boy') {
            card.innerHTML = `
              <img src="${CONFIG.boyfriendImg}" alt="Foto pasangan" class="absolute inset-0 w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/35 via-transparent to-transparent"></div>
              <span class="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white bg-emerald-500/85 px-2 py-0.5 rounded-full shadow">
                FOUND!
              </span>
            `;
            card.className = "relative h-16 overflow-hidden bg-emerald-100 border-emerald-400 rounded-xl flex items-center justify-center transition-all duration-300 transform active:scale-90 font-bold shadow-md";
            triggerSuccessModal("Ketemu! Foto wajah aslimu berhasil ditemukan. Ganteng dan resmi lolos 😎❤️");
          } else {
            card.innerText = c.icon;
            card.className = "relative h-16 overflow-hidden bg-rose-50 border-rose-300 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 transform active:scale-90 font-bold shadow-sm";
            const msg = LEVEL_7_FAIL_MESSAGES[Math.floor(Math.random() * LEVEL_7_FAIL_MESSAGES.length)];
            triggerCustomAlert("😵‍💫", "Salah Klik!", msg);
          }
        };

        grid.appendChild(card);
      });
    }

    // Level 8: Whack a Love
    let whackTimer;
    let whackScore = 0;
    let whackLives = 3;
    function initWhackLove() {
      const holes = document.querySelectorAll('.whack-hole');
      whackScore = 0;
      whackLives = 3;
      document.getElementById('whack-score').innerText = whackScore;
      document.getElementById('whack-lives').innerText = "❤️❤️❤️";

      function popUp() {
        if (currentLevel !== 8 || whackScore >= 10 || whackLives <= 0) {
          clearTimeout(whackTimer);
          return;
        }

        // Pick random hole
        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        if (randomHole.innerHTML !== '') {
          popUp();
          return;
        }

        const isGood = Math.random() > 0.45; // 45% bad heart, 55% good heart
        const item = document.createElement('div');
        item.className = "text-3xl cursor-pointer absolute transition-all duration-300 transform scale-0 select-none";
        item.innerText = isGood ? "❤️" : "💔";
        
        randomHole.appendChild(item);
        setTimeout(() => item.classList.remove('scale-0'), 50);

        item.onclick = (e) => {
          e.stopPropagation();
          if (isGood) {
            // Mistake
            whackLives--;
            updateLivesUI();
            triggerSparkleRed(e.clientX, e.clientY);
            if (whackLives <= 0) {
              triggerCustomAlert("🤕", "Game Over", "Nyawa kamu habis! Coba lindungi hati kita dengan lebih teliti ya!");
              initWhackLove(); // Reset game
            }
          } else {
            // Hit broken heart
            whackScore++;
            document.getElementById('whack-score').innerText = whackScore;
            createSparkle(e.clientX, e.clientY);
            if (whackScore >= 10) {
              triggerSuccessModal("Pertahanan cinta kita sempurna! Hati yang patah berhasil dihancurkan! 🛡️");
            }
          }
          item.remove();
        };

        // Auto collapse after some time
        setTimeout(() => {
          if (item && item.parentNode) {
            item.remove();
          }
        }, 1200);

        whackTimer = setTimeout(popUp, 900);
      }

      popUp();
    }

    function updateLivesUI() {
      let livesText = "";
      for (let i = 0; i < whackLives; i++) {
        livesText += "❤️";
      }
      document.getElementById('whack-lives').innerText = livesText || "💔";
    }

    function triggerSparkleRed(x, y) {
      const p = document.createElement('div');
      p.className = 'sparkle';
      p.style.background = "red";
      p.style.width = "20px";
      p.style.height = "20px";
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }

    // Level 9: Mesin Kebenaran
    function handleLvl9Answer() {
      triggerSuccessModal("Jawabanmu 100% akurat dan ilmiah! Mesin kejujuran mendeteksi ketampananku tiada tara! 😂");
    }

    // Level 10: Akhir Komitmen
    function handleLvl10Answer(correct) {
      if (correct) {
        triggerSuccessModal("Sumpah suci diterima! Kunci peti hadiah cinta telah sepenuhnya terbuka! 💖🔐");
      } else {
        triggerCustomAlert("😭", "Hati Tersakiti", "Masa cuma segitu doang sih cintanya? Pilih yang romantis dikit dong!");
      }
    }


    // ==========================================
    // 4. TRANSISI SPEKTAKULER & FINALE ENGINE
    // ==========================================
    function completeAllLevels() {
      // Sembunyikan main game area
      document.querySelector('main').classList.add('hidden');
      
      // Tampilkan Grand Finale
      const finale = document.getElementById('grand-finale-screen');
      finale.classList.remove('hidden');
      
      // Auto Play Music
      if (!isMusicPlaying) {
        toggleMusic();
      }

      // Jalankan confetti megah
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99999 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, animate a bit higher than they would
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

      // Jalankan Firework & Bintang Twinkle Finale
      generateFinaleParticles();

      // Render All Dynamic Modules
      renderLoveCounter();
      renderTimeline();
      initCinema();
      initPolaroidBoard();
      initLoveLetterTyping();
      renderGiftsList();
    }

    function confettiEffect() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 999999
      });
    }

    // Finale stars background generator
    function generateFinaleParticles() {
      const container = document.getElementById('finale-bg-particles');
      container.innerHTML = '';
      for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = "absolute bg-white rounded-full opacity-60 animate-pulse";
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 4 + 2}s`;
        container.appendChild(particle);
      }
    }


    // ==========================================
    // 5. LOVE COUNTER REALTIME
    // ==========================================
    function renderLoveCounter() {
      const display = document.getElementById('counter-display');
      
      function update() {
        const diffMs = Math.abs(new Date() - new Date(CONFIG.anniversaryDate));
        
        // Perhitungan waktu rinci
        const totalSeconds = Math.floor(diffMs / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        // Menghitung Tahun, Bulan, Hari tersisa secara akurat
        const startDate = new Date(CONFIG.anniversaryDate);
        const endDate = new Date();
        
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
        let days = endDate.getDate() - startDate.getDate();

        if (days < 0) {
          months--;
          const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
          days += prevMonth.getDate();
        }
        if (months < 0) {
          years--;
          months += 12;
        }

        const hrs = totalHours % 24;
        const mins = totalMinutes % 60;
        const secs = totalSeconds % 60;

        display.innerHTML = `
          <div class="bg-white/10 rounded-xl p-3 border border-pink-400/30">
            <div class="text-2xl md:text-3xl font-black text-brandPink font-mono">${years}</div>
            <div class="text-[10px] text-slate-300 font-bold uppercase">Tahun</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 border border-pink-400/30">
            <div class="text-2xl md:text-3xl font-black text-brandPink font-mono">${months}</div>
            <div class="text-[10px] text-slate-300 font-bold uppercase">Bulan</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 border border-pink-400/30">
            <div class="text-2xl md:text-3xl font-black text-brandPink font-mono">${days}</div>
            <div class="text-[10px] text-slate-300 font-bold uppercase">Hari</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 border border-pink-400/30">
            <div class="text-2xl md:text-3xl font-black text-brandPink font-mono">${hrs}</div>
            <div class="text-[10px] text-slate-300 font-bold uppercase">Jam</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 border border-pink-400/30">
            <div class="text-2xl md:text-3xl font-black text-brandPink font-mono">${mins}</div>
            <div class="text-[10px] text-slate-300 font-bold uppercase">Menit</div>
          </div>
          <div class="bg-white/10 rounded-xl p-3 border border-pink-400/30">
            <div class="text-2xl md:text-3xl font-black text-brandPink font-mono">${secs}</div>
            <div class="text-[10px] text-slate-300 font-bold uppercase">Detik</div>
          </div>
        `;
      }

      update();
      setInterval(update, 1000);
    }


    // ==========================================
    // 6. TIMELINE PERJALANAN CINTA
    // ==========================================
    function renderTimeline() {
      const container = document.getElementById('timeline-container');
      container.innerHTML = '';
      
      CONFIG.timeline.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = "mb-8 ml-6 relative fade-in";
        
        card.innerHTML = `
          <!-- Dot Indicator -->
          <span class="absolute flex items-center justify-center w-6 h-6 bg-brandPink rounded-full -left-[35px] ring-8 ring-slate-900 border border-white">
            <i class="fa-solid fa-heart text-[10px] text-white"></i>
          </span>
          <div class="glass-card-dark rounded-2xl p-5 border border-white/10 shadow-lg transform hover:scale-[1.02] transition duration-300">
            <span class="bg-pink-100 text-brandRoseGold text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">
              ${item.date}
            </span>
            <h3 class="text-lg font-bold text-white mb-2">${item.title}</h3>
            
            <div class="w-full h-40 rounded-xl overflow-hidden mb-3 border border-white/10 bg-slate-800">
              <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover ken-burns" loading="lazy">
            </div>
            
            <p class="text-slate-300 text-xs leading-relaxed">${item.desc}</p>
          </div>
        `;
        container.appendChild(card);
      });
    }


    // ==========================================
    // 7. MEMORY CINEMA (AUTOMATIC SLIDESHOW)
    // ==========================================
    let cinemaIndex = 0;
    let cinemaTimer;
    
    function initCinema() {
      showCinemaItem();
    }

    function showCinemaItem() {
      const frame = document.getElementById('cinema-frame');
      const caption = document.getElementById('cinema-caption');
      
      const item = CONFIG.timeline[cinemaIndex];
      frame.innerHTML = `
        <img src="${item.img}" class="w-full h-full object-cover ken-burns absolute inset-0 opacity-0 transition-opacity duration-1000" id="cinema-img">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
      `;

      // Fade-in effect trigger
      setTimeout(() => {
        const img = document.getElementById('cinema-img');
        if (img) img.style.opacity = '1';
      }, 50);

      caption.innerText = `${item.title} (${item.date})`;

      // Auto rotation every 6 seconds
      clearTimeout(cinemaTimer);
      cinemaTimer = setTimeout(() => {
        nextCinema();
      }, 6000);
    }

    function nextCinema() {
      cinemaIndex = (cinemaIndex + 1) % CONFIG.timeline.length;
      showCinemaItem();
    }

    function prevCinema() {
      cinemaIndex = (cinemaIndex - 1 + CONFIG.timeline.length) % CONFIG.timeline.length;
      showCinemaItem();
    }


    // ==========================================
    // 8. WALL OF MEMORIES (POLAROID BOARD)
    // ==========================================
    function initPolaroidBoard() {
      const board = document.getElementById('polaroid-board');
      board.innerHTML = '';

      CONFIG.polaroids.forEach((item, idx) => {
        const pol = document.createElement('div');
        pol.className = "polaroid absolute cursor-pointer rounded overflow-hidden select-none";
        
        // Random positioning within board boundaries
        const randomX = Math.random() * 50 + 5; // 5% - 55%
        const randomY = Math.random() * 60 + 5; // 5% - 65%
        const randomRot = Math.random() * 30 - 15; // -15deg - 15deg

        pol.style.left = `${randomX}%`;
        pol.style.top = `${randomY}%`;
        pol.style.transform = `rotate(${randomRot}deg)`;
        pol.style.width = "110px";

        pol.innerHTML = `
          <img src="${item.img}" class="w-full h-20 object-cover rounded-sm pointer-events-none" loading="lazy">
          <p class="text-[8px] text-slate-700 mt-2 font-semibold line-clamp-2 text-center pointer-events-none">
            ${item.cap}
          </p>
        `;

        // Click to view large image
        pol.onclick = (e) => {
          e.stopPropagation();
          openImageViewer(item.img, item.cap);
        };

        board.appendChild(pol);
        makeDraggable(pol);
      });
    }

    // Touch and Drag implementation for Polaroid
    function makeDraggable(elem) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      
      elem.onmousedown = dragMouseDown;
      elem.ontouchstart = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos3 = e.clientX || (e.touches && e.touches[0].clientX);
        pos4 = e.clientY || (e.touches && e.touches[0].clientY);
        
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        pos1 = pos3 - clientX;
        pos2 = pos4 - clientY;
        pos3 = clientX;
        pos4 = clientY;
        
        // limit offset inside board
        const rect = document.getElementById('polaroid-board').getBoundingClientRect();
        const nextX = elem.offsetLeft - pos1;
        const nextY = elem.offsetTop - pos2;

        if (nextX > 0 && nextX < rect.width - 120) {
          elem.style.left = `${nextX}px`;
        }
        if (nextY > 0 && nextY < rect.height - 120) {
          elem.style.top = `${nextY}px`;
        }
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
      }
    }

    function openImageViewer(imgSrc, caption) {
      const viewer = document.getElementById('image-viewer');
      document.getElementById('viewer-img').src = imgSrc;
      document.getElementById('viewer-caption').innerText = caption;
      viewer.classList.remove('hidden');
    }

    function closeImageViewer() {
      document.getElementById('image-viewer').classList.add('hidden');
    }


    // ==========================================
    // 9. SURAT CINTA TYPING EFFECT
    // ==========================================
    let letterInterval;
    function initLoveLetterTyping() {
        const target = document.getElementById('love-letter-text');
        const text = CONFIG.loveLetter;

        let index = 0;

        target.textContent = '';

        clearInterval(letterInterval);

        letterInterval = setInterval(() => {
            if (index < text.length) {
                target.textContent += text[index];
                index++;
            } else {
                clearInterval(letterInterval);
            }
        }, 40);
    }


    // ==========================================
    // 10. DAFTAR PILIHAN HADIAH
    // ==========================================
    function renderGiftsList() {
      const container = document.getElementById('gifts-list-container');
      container.innerHTML = '';

      CONFIG.gifts.forEach((gift, idx) => {
        const item = document.createElement('div');
        item.className = "bg-slate-900/40 rounded-2xl p-4 flex flex-col justify-between border border-white/5 shadow-md text-left transform hover:-translate-y-1 transition duration-300";
        
        item.innerHTML = `
          <div>
            <div class="w-full h-32 rounded-xl overflow-hidden mb-3 border border-white/10 bg-slate-800">
              <img src="${gift.img}" alt="${gift.name}" class="w-full h-full object-cover" loading="lazy">
            </div>
            <h4 class="font-bold text-white text-base mb-1">${gift.name}</h4>
            <p class="text-xs text-slate-300 mb-4 leading-relaxed">${gift.desc}</p>
          </div>
          <button onclick="chooseGift('${gift.name}', '${gift.link}')" class="w-full bg-brandPink hover:bg-pink-600 text-white font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow">
            <i class="fa-solid fa-gift"></i> Pilih Kado Ini!
          </button>
        `;
        container.appendChild(item);
      });
    }

    function chooseGift(name, url) {
      triggerCustomAlert("🎁", "Pilihan Hadiah Disimpan!", `Pilihan Kado: "${name}" adalah keputusan yang hebat! Pesan keinginanmu telah tersampaikan ke duniaku. Menuju Toko Kasih Sayang...`);
      setTimeout(() => {
        window.open(url, '_blank');
      }, 3000);
    }


    // ==========================================
    // 11. FITUR RAHASIA (100 ALASAN AKU SAYANG KAMU)
    // ==========================================
    function revealSecretReasons() {
      const sec = document.getElementById('secret-reasons-section');
      sec.classList.toggle('hidden');
      if (!sec.classList.contains('hidden')) {
        const scroller = document.getElementById('reasons-scroller');
        scroller.innerHTML = '';
        
        // Render 100 reasons dynamically
        CONFIG.reasons.forEach((r, idx) => {
          const item = document.createElement('div');
          item.className = "p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/5 text-xs flex gap-2 items-start";
          item.innerHTML = `
            <span class="text-brandPink font-bold">#${idx + 1}</span>
            <span class="text-slate-200 leading-relaxed">${r}</span>
          `;
          scroller.appendChild(item);
        });

        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      }
    }


    // ==========================================
    // 12. PESAN MASA DEPAN DISCLOSURE
    // ==========================================
    function openFutureMessage() {
      const box = document.getElementById('future-message-box');
      const btn = document.getElementById('btn-future-message');
      
      btn.classList.add('hidden');
      box.classList.remove('hidden');
      box.className += " fade-in";
      box.innerText = CONFIG.futureMessage;
      
      confetti({
        particleCount: 30,
        spread: 40,
        origin: { y: 0.9 }
      });
    }


    // ==========================================
    // 13. BOOTSTRAP SYSTEM & INITIALIZER
    // ==========================================
    window.onload = function() {
      generateStars();
      
      // Update footer sender dynamically
      document.getElementById('sender-footer').innerText = CONFIG.senderName;
      document.getElementById('most-touching-photo').src = CONFIG.mostTouchingPhoto;
      document.getElementById('letter-signature').innerText = `- Pacarmu, ${CONFIG.senderName} ❤️`;

      // Simulative loading bar process (Memories, Happiness, Love, Story)
      let progress = 0;
      const progressSteps = [
        "Loading Memories...",
        "Loading Happiness...",
        "Loading Love...",
        "Loading Our Story...",
        "Preparing ZHalBot...",
        "Semua Kenangan Siap! ❤️"
      ];

      const bar = document.getElementById('loading-bar');
      const percentText = document.getElementById('loading-percentage');
      const statusText = document.getElementById('loading-text');

      const loaderInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 3;
        if (progress > 100) progress = 100;
        
        bar.style.width = `${progress}%`;
        percentText.innerText = `${progress}%`;
        
        // Dynamic labels based on loading percentage
        const labelIdx = Math.floor((progress / 100) * (progressSteps.length - 1));
        statusText.innerText = progressSteps[labelIdx];

        if (progress >= 100) {
          clearInterval(loaderInterval);
          
          // Animate and destroy loading screen
          setTimeout(() => {
            const screen = document.getElementById('loading-screen');
            screen.style.opacity = '0';
            setTimeout(() => {
              screen.remove();
              // Load level from state
              loadLevel(currentLevel);
            }, 1000);
          }, 400);
        }
      }, 100);
    };
