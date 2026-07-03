/* ==========================================================================
   Sew U - Interactive Scripts & CMS Content Loader
   ========================================================================== */

// Default database structure mapping matching index.html hardcoded texts
const defaultPageData = {
  meta_title: "Sew U - Platform Digital Bisnis Jahit Anda",
  meta_description: "Sew U adalah platform SaaS yang membantu penjahit mengelola pesanan, menampilkan portfolio, membuat website toko instan, dan mengembangkan bisnis jahit secara digital.",
  logo_text: "Sew U",
  logo_subtext: "Stitch Your Business",
  btn_login: "Masuk",
  btn_signup: "Mulai Gratis",
  hero_badge: "SEMUA FITUR YANG PENJAHIT BUTUHKAN",
  hero_title_main: "Platform Digital Untuk Mengembangkan ",
  hero_title_span: "Bisnis Jahit Anda",
  hero_subtitle: "Sew U adalah platform SaaS yang membantu Anda membuat website toko, mengelola pesanan, menampilkan portfolio, dan menjangkau lebih banyak pelanggan.",
  btn_hero_start: "Mulai Gratis Sekarang",
  btn_hero_demo: "Lihat Demo",
  stat_num_1: "500+",
  stat_lbl_1: "Penjahit Bergabung",
  stat_num_2: "10K+",
  stat_lbl_2: "Pesanan Dikelola",
  stat_num_3: "99%",
  stat_lbl_3: "Pelanggan Puas",
  stat_num_4: "24/7",
  stat_lbl_4: "Support Aktif",
  img_hero_mockup: "asset/image/hero_mockup.jpg",
  glass_float_1_title: "+45% Pendapatan",
  glass_float_1_desc: "Rata-rata kenaikan omset",
  glass_float_2_title: "Sistem Otomatis",
  glass_float_2_desc: "Bebas salah catat pesanan",
  manual_title_main: "Masih Mengelola Bisnis Jahit Secara ",
  manual_title_span: "Manual?",
  manual_card_1_title: "Pesanan tercecer di banyak chat",
  manual_card_1_desc: "Sulit melacak status pesanan, detail ukuran, dan riwayat chat pelanggan secara manual.",
  manual_card_2_title: "Sulit menampilkan portfolio",
  manual_card_2_desc: "Hasil jahitan tidak tersusun rapi, membuat calon pelanggan ragu dengan kualitas jahitan Anda.",
  manual_card_3_title: "Pencatatan manual memakan waktu",
  manual_card_3_desc: "Buku catatan rentan hilang atau salah tulis ukuran, membuang waktu produksi yang berharga.",
  manual_card_4_title: "Promosi kurang maksimal",
  manual_card_4_desc: "Jangkauan promosi toko fisik sangat terbatas, bisnis jahit jadi sulit untuk bertumbuh.",
  features_section_badge: "FITUR UTAMA",
  features_section_title: "Sew U Hadir Dengan Fitur Lengkap",
  features_section_subtitle: "Semua yang Anda butuhkan untuk mengembangkan bisnis jahit dalam satu platform terintegrasi.",
  feature_1_title: "Website Toko Instan",
  feature_1_desc: "Buat website profesional untuk brand jahit Anda dalam hitungan menit, tanpa coding sama sekali.",
  feature_2_title: "Portfolio Digital",
  feature_2_desc: "Tampilkan galeri foto hasil jahitan terbaik Anda untuk meyakinkan calon pelanggan baru.",
  feature_3_title: "Kelola Pesanan",
  feature_3_desc: "Pantau antrean pesanan, status fitting, hingga pembayaran dari satu dashboard terpusat.",
  feature_4_title: "Manajemen Pelanggan",
  feature_4_desc: "Simpan riwayat ukuran badan (lingkar dada, pinggang, dll) pelanggan agar jahit berikutnya lebih cepat.",
  feature_5_title: "Smart Outfit Matching",
  feature_5_desc: "Rekomendasikan kombinasi warna atasan dan bawahan yang paling cocok untuk pelanggan Anda.",
  feature_6_title: "Laporan & Analitik",
  feature_6_desc: "Pantau laporan omset bulanan, performa jahit, dan tren produk jahit terpopuler dengan mudah.",
  dashboard_section_title_main: "Semua Data Bisnis Anda Dalam ",
  dashboard_section_title_span: "Satu Dashboard",
  dashboard_section_subtitle: "Pantau pesanan, pelanggan, pendapatan, dan perkembangan bisnis jahit Anda secara real-time dari mana saja dan kapan saja.",
  dashboard_benefit_1: "Ringkasan bisnis dalam satu tampilan bersih",
  dashboard_benefit_2: "Laporan pendapatan otomatis dan akurat",
  dashboard_benefit_3: "Kelola basis data pelanggan dengan riwayat lengkap",
  dashboard_benefit_4: "Akses multi-device kapan saja, di mana saja",
  btn_dashboard_start: "Mulai Sekarang",
  pricing_section_title: "Paket Fleksibel Untuk Anda",
  pricing_section_subtitle: "Pilih paket sesuai dengan skala kebutuhan usaha jahit Anda.",
  price_1_name: "FREE",
  price_1_amount: "Rp0",
  price_1_feature_1: "Website Toko Dasar",
  price_1_feature_2: "Upload 10 Portfolio",
  price_1_feature_3: "Kelola Pesanan Dasar",
  price_1_feature_4: "Support Email",
  btn_price_1: "Mulai Gratis",
  price_2_name: "PRO",
  price_2_amount: "Rp49.000",
  price_2_feature_1: "Semua fitur FREE",
  price_2_feature_2: "Unlimited Portfolio",
  price_2_feature_3: "Dashboard & Laporan Lengkap",
  price_2_feature_4: "Domain Custom",
  price_2_feature_5: "Priority Support",
  btn_price_2: "Pilih Paket Pro",
  price_3_name: "BUSINESS",
  price_3_amount: "Rp99.000",
  price_3_feature_1: "Semua fitur PRO",
  price_3_feature_2: "Multi Admin (3 User)",
  price_3_feature_3: "Integrasi WhatsApp Business",
  price_3_feature_4: "Fitur Promosi & Diskon",
  price_3_feature_5: "Support Prioritas 24/7",
  btn_price_3: "Pilih Paket Business",
  testimoni_section_title: "Dipercaya Oleh Penjahit di Seluruh Indonesia",
  testimoni_section_subtitle: "Cerita sukses penjahit yang bertransformasi bersama Sew U.",
  testimoni_quote_text: "Semenjak pakai Sew U, pengelolaan pesanan pelanggan jadi jauh lebih teratur. Pelanggan juga merasa lebih percaya karena bisa melihat riwayat ukuran badan dan portfolio jahitan kami dengan mudah di link toko kami sendiri.",
  testimoni_user_name: "Melati Sari",
  testimoni_user_role: "Owner Melati Tailor, Bandung",
  img_testimoni_user: "asset/image/melati_sari.jpg",
  img_testimoni_user_avatar: "asset/image/melati_sari.jpg",
  cta_title: "Siap Mengembangkan Bisnis Jahit Anda?",
  cta_subtitle: "Bergabunglah dengan ribuan penjahit yang telah merasakan kemudahan mengelola bisnis jahit secara modern dengan Sew U.",
  btn_cta_start: "Mulai Gratis Sekarang",
  btn_cta_demo: "Lihat Demo",
  img_cta_bg: "asset/image/cta_sewing_machine.jpg",
  cta_badge_1: "Gratis 14 Hari Tanpa Kartu Kredit",
  cta_badge_2: "Bisa Digunakan Tanpa Coding",
  cta_badge_3: "Aman & Terpercaya Data Terlindungi",
  footer_desc: "Platform digital terintegrasi untuk membantu penjahit di Indonesia mengembangkan bisnis, mengelola toko, dan menjangkau lebih banyak pelanggan secara daring.",
  contact_phone: "0812-3456-7890",
  contact_email: "hello@sewu.com",
  contact_instagram: "@sew.u_official",
  contact_address: "Jl. Fashion No. 123, Bandung"
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. CMS CONTENT LOADER
  loadCMSContent();

  function loadCMSContent() {
    let storedData = localStorage.getItem("sewu_page_data");
    let pageData = {};

    if (storedData) {
      try {
        pageData = JSON.parse(storedData);
      } catch(e) {
        console.error("Error parsing JSON", e);
        return;
      }
    } else {
      // First load, save defaults to localStorage
      pageData = {...defaultPageData};
      localStorage.setItem("sewu_page_data", JSON.stringify(pageData));
      return; // Use default hardcoded markup
    }

    // Apply values to elements with data-cms-key
    const cmsElements = document.querySelectorAll("[data-cms-key]");
    cmsElements.forEach(element => {
      const key = element.getAttribute("data-cms-key");
      const val = pageData[key];

      if (val !== undefined && val !== null) {
        if (element.tagName === "IMG") {
          element.src = val;
        } else if (key === "meta_title") {
          document.title = val;
        } else if (key === "meta_description") {
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute("content", val);
        } else {
          element.textContent = val;
        }
      }
    });
  }

  // 2. MOBILE NAVBAR TOGGLE
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("mobile-active");
      const icon = menuToggle.querySelector("i");
      if (navbar.classList.contains("mobile-active")) {
        icon.className = "bi bi-x-lg";
      } else {
        icon.className = "bi bi-list";
      }
    });
  }

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-menu a, .btn-login, .btn-signup");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("mobile-active")) {
        navbar.classList.remove("mobile-active");
        menuToggle.querySelector("i").className = "bi bi-list";
      }
    });
  });

  // 3. ACTIVE NAV LINK ON SCROLL
  const sections = document.querySelectorAll("section[id], footer[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    const menuItems = document.querySelectorAll(".nav-menu a");
    menuItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // 4. SMART OUTFIT MATCHING LOGIC
  const topColors = document.querySelectorAll("#top-colors .color");
  const bottomColors = document.querySelectorAll("#bottom-colors .color");
  const btnCalculate = document.getElementById("btn-matching-calculate");

  const topPreview = document.getElementById("top-preview-layer");
  const bottomPreview = document.getElementById("bottom-preview-layer");
  const topPreviewText = document.getElementById("top-preview-text");
  const bottomPreviewText = document.getElementById("bottom-preview-text");

  const miniTop = document.getElementById("mini-top");
  const miniBottom = document.getElementById("mini-bottom");
  const recommendTitle = document.getElementById("recommend-title");
  const recommendDesc = document.getElementById("recommend-description");

  // Selection states
  let selectedTopColorName = "Hitam";
  let selectedTopColorValue = "#000000";
  let selectedBottomColorName = "Beige";
  let selectedBottomColorValue = "#e5d6c1";

  // Recommendation tips mapping
  const styleTips = {
    "Hitam_Beige": {
      title: "Hitam & Beige (Look Modern)",
      desc: "Kombinasi kontras tinggi namun lembut ini menciptakan impresi clean, elegan, modern, dan sangat profesional."
    },
    "Hitam_Soft Cream": {
      title: "Hitam & Soft Cream (Gaya Kasual)",
      desc: "Menawarkan transisi warna yang manis, membuat penampilan harian Anda santai namun tetap rapi."
    },
    "Hitam_Hitam": {
      title: "Monokrom Hitam (Gaya Bold)",
      desc: "Tampilan serba hitam yang ramping dan tegas. Memberikan kesan misterius, profesional, dan menonjolkan siluet tubuh."
    },
    "Putih_Navy": {
      title: "Putih & Navy (Gaya Smart)",
      desc: "Look bergaya nautical dan smart-casual. Terkesan bersih, segar, ramah, dan sangat cocok untuk rapat kerja maupun santai."
    },
    "Putih_Abu-abu": {
      title: "Putih & Abu-abu (Gaya Minimalis)",
      desc: "Kombinasi warna netral yang sangat tenang dan minimalis. Cocok dipadukan dengan aksesoris logam keemasan."
    },
    "Krem_Cokelat Tua": {
      title: "Krem & Cokelat Tua (Earthy Tone)",
      desc: "Menghasilkan kehangatan visual yang selaras dan tenang. Sangat modis dan memberikan aura intelektual yang matang."
    },
    "Krem_Beige": {
      title: "Krem & Beige (Look Estetik)",
      desc: "Kombinasi warna senada (tone-on-tone) yang lembut. Memberikan nuansa estetik ala minimalis Jepang/Korea."
    },
    "Cokelat_Soft Cream": {
      title: "Cokelat & Soft Cream (Warm Classic)",
      desc: "Perpaduan warna kopi dan susu yang hangat dan klasik. Memberikan impresi ramah, bersahabat, dan dapat dipercaya."
    },
    "Cokelat_Cokelat Tua": {
      title: "Gradasi Cokelat (Gaya Vintage)",
      desc: "Warna earthy bergradasi yang memberikan sentuhan retro-vintage yang mewah dan berkelas."
    },
    "Biru_Abu-abu": {
      title: "Biru & Abu-abu (Gaya Kontemporer)",
      desc: "Perpaduan warna dingin yang tenang dan modern. Memancarkan aura damai, andal, dan sangat pas untuk seragam semi-formal."
    },
    "Biru_Hitam": {
      title: "Biru & Hitam (Look Kasual)",
      desc: "Kombinasi warna gelap yang aman namun stylish. Memberikan kesan maskulin/feminin yang santai."
    },
    "Olive_Soft Cream": {
      title: "Olive & Soft Cream (Gaya Natural)",
      desc: "Membawa kesan petualangan alam yang lembut dan rileks. Sangat cocok untuk pakaian luar (outer) atau kemeja santai."
    },
    "Olive_Cokelat Tua": {
      title: "Olive & Cokelat (Look Militer)",
      desc: "Kombinasi warna safari/militer yang kokoh. Terlihat sangat tangguh, berkarakter, dan menawan."
    }
  };

  function updateVisuals() {
    // 1. Update preview layers backgrounds
    if (topPreview) {
      topPreview.style.backgroundColor = selectedTopColorValue;
      topPreviewText.textContent = `Atasan ${selectedTopColorName}`;
    }
    if (bottomPreview) {
      bottomPreview.style.backgroundColor = selectedBottomColorValue;
      bottomPreviewText.textContent = `Bawahan ${selectedBottomColorName}`;
    }

    // 2. Update mini color preview indicators
    if (miniTop) miniTop.style.backgroundColor = selectedTopColorValue;
    if (miniBottom) miniBottom.style.backgroundColor = selectedBottomColorValue;

    // 3. Retrieve styling recommendations
    const key = `${selectedTopColorName}_${selectedBottomColorName}`;
    const tip = styleTips[key] || {
      title: `${selectedTopColorName} & ${selectedBottomColorName}`,
      desc: "Kombinasi warna kustom pilihan Anda. Perpaduan unik ini menciptakan style pakaian yang berani, personal, dan khas untuk brand Anda."
    };

    if (recommendTitle) recommendTitle.textContent = tip.title;
    if (recommendDesc) recommendDesc.textContent = tip.desc;
  }

  // Set Top Color click listeners
  topColors.forEach(colorSpan => {
    colorSpan.addEventListener("click", (e) => {
      topColors.forEach(c => c.classList.remove("active"));
      colorSpan.classList.add("active");
      
      selectedTopColorName = colorSpan.getAttribute("data-color");
      selectedTopColorValue = colorSpan.style.backgroundColor;
      
      updateVisuals();
    });
  });

  // Set Bottom Color click listeners
  bottomColors.forEach(colorSpan => {
    colorSpan.addEventListener("click", (e) => {
      bottomColors.forEach(c => c.classList.remove("active"));
      colorSpan.classList.add("active");
      
      selectedBottomColorName = colorSpan.getAttribute("data-color");
      selectedBottomColorValue = colorSpan.style.backgroundColor;
      
      updateVisuals();
    });
  });

  // Calculate button action (shows a mini loading effect)
  if (btnCalculate) {
    btnCalculate.addEventListener("click", () => {
      const originalText = btnCalculate.textContent;
      btnCalculate.textContent = "Menganalisis Kombinasi...";
      btnCalculate.disabled = true;
      btnCalculate.style.opacity = "0.7";

      setTimeout(() => {
        btnCalculate.textContent = "Selesai! ✓";
        updateVisuals();
        
        setTimeout(() => {
          btnCalculate.textContent = originalText;
          btnCalculate.disabled = false;
          btnCalculate.style.opacity = "1";
        }, 1000);
      }, 800);
    });
  }

  // 5. TESTIMONIAL SLIDER INTERACTIVITY
  const testDots = document.querySelectorAll(".testimonial-dots span");
  const testQuote = document.querySelector(".testimonial-quote-text");
  const testUserName = document.querySelector(".testimonial-user-meta h4");
  const testUserRole = document.querySelector(".testimonial-user-meta span");
  const testUserPhoto = document.querySelector(".testimonial-user-photo");

  // Read current user photos dynamically in case admin updated the photo
  const testimonials = [
    {
      quote: "Semenjak pakai Sew U, pengelolaan pesanan pelanggan jadi jauh lebih teratur. Pelanggan juga merasa lebih percaya karena bisa melihat riwayat ukuran badan dan portfolio jahitan kami dengan mudah di link toko kami sendiri.",
      name: "Melati Sari",
      role: "Owner Melati Tailor, Bandung",
      photo: "asset/image/melati_sari.jpg"
    },
    {
      quote: "Fitur pencatatan ukuran badan digital sangat membantu kami. Tidak ada lagi kertas ukuran yang hilang atau tertukar. Pelanggan baru naik pesat berkat portofolio digital gratis dari Sew U!",
      name: "Hendra Wijaya",
      role: "Founder Wijaya Tailor, Jakarta",
      photo: "asset/image/user1.webp"
    },
    {
      quote: "Sangat mudah digunakan bahkan untuk penjahit senior di tim kami. Integrasi WhatsApp memudahkan pengiriman status pesanan otomatis ke pelanggan ketika fitting atau selesai dijahit.",
      name: "Dinda Larasati",
      role: "Owner House of Laras, Surabaya",
      photo: "asset/image/user2.webp"
    }
  ];

  if (testDots.length > 0 && testQuote && testUserName) {
    testDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        // Update active dot
        testDots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");

        // Fade out animation transition
        testQuote.style.opacity = "0";
        testUserName.style.opacity = "0";
        testUserRole.style.opacity = "0";
        testUserPhoto.style.opacity = "0";

        setTimeout(() => {
          // Change data
          const data = testimonials[index];
          
          // If first testimonial, check if CMS updated photo/texts
          if (index === 0) {
            let storedData = localStorage.getItem("sewu_page_data");
            if (storedData) {
              const pageData = JSON.parse(storedData);
              if (pageData.testimoni_quote_text) data.quote = pageData.testimoni_quote_text;
              if (pageData.testimoni_user_name) data.name = pageData.testimoni_user_name;
              if (pageData.testimoni_user_role) data.role = pageData.testimoni_user_role;
              if (pageData.img_testimoni_user) data.photo = pageData.img_testimoni_user;
            }
          }
          
          testQuote.textContent = data.quote;
          testUserName.textContent = data.name;
          testUserRole.textContent = data.role;
          testUserPhoto.src = data.photo;

          // Fade in
          testQuote.style.opacity = "1";
          testUserName.style.opacity = "1";
          testUserRole.style.opacity = "1";
          testUserPhoto.style.opacity = "1";
        }, 300);
      });
    });

    // Add transitions for smooth text changing
    testQuote.style.transition = "opacity 0.3s ease";
    testUserName.style.transition = "opacity 0.3s ease";
    testUserRole.style.transition = "opacity 0.3s ease";
    testUserPhoto.style.transition = "opacity 0.3s ease";
  }
});