/**
 * ========================================
 * CALMIONIX - Language System
 * ========================================
 * 
 * Dual language support: Indonesia (default) & English
 * Usage: data-lang="key" attribute on HTML elements
 */

const translations = {
  id: {
    // Navigation
    nav_home: 'Beranda',
    nav_shop: 'Toko',
    nav_tutorial: 'Tutorial',
    nav_discord: 'Discord',
    
    // Hero
    hero_title: 'Calmionix Server',
    hero_subtitle: 'Beli Rank & Shard untuk meningkatkan pengalaman bermainmu',
    btn_buy_rank: 'Beli Rank',
    btn_buy_shard: 'Beli Shard',
    
    // Server Info
    server_info_title: 'Info Server',
    server_ip_label: 'IP Server',
    server_port_label: 'Port',
    btn_copy_ip: 'Salin IP',
    toast_ip_copied: 'IP berhasil disalin!',
    
    // Highlights
    section_popular: 'Paling Populer',
    section_value: 'Paling Worth It',
    
    // Discord CTA
    discord_title: 'Butuh bantuan atau ingin bertanya?',
    discord_btn: 'Gabung Discord',
    
    // Shop
    shop_title: 'Toko Server',
    shop_subtitle: 'Pilih produk yang ingin kamu beli',
    category_all: 'Semua',
    category_rank: 'Rank',
    category_shard: 'Shard',
    
    // Product Cards
    tag_popular: 'Terlaris',
    tag_value: 'Paling Worth It',
    tag_ultimate: 'Ultimate',
    btn_buy_now: 'Beli Sekarang',
    
    // Products - Ranks
    rank_vip_name: 'Rank VIP',
    rank_vip_desc: 'Akses dasar untuk pemain premium',
    rank_mvp_name: 'Rank MVP',
    rank_mvp_desc: 'Lebih banyak fitur eksklusif',
    rank_legend_name: 'Rank Legend',
    rank_legend_desc: 'Pengalaman bermain terbaik',
    rank_god_name: 'Rank God',
    rank_god_desc: 'Akses penuh semua fitur',
    
    // Products - Shards
    shard_100_name: '100 Shard',
    shard_100_desc: 'Paket kecil untuk pemula',
    shard_500_name: '500 Shard',
    shard_500_desc: 'Bonus 50 shard',
    shard_1000_name: '1000 Shard',
    shard_1000_desc: 'Bonus 150 shard',
    shard_5000_name: '5000 Shard',
    shard_5000_desc: 'Bonus 1000 shard + title',
    
    // Features
    feature_fly: 'Command /fly',
    feature_hat: 'Command /hat',
    feature_chat: 'Chat berwarna',
    feature_prefix: 'Prefix khusus',
    feature_heal: 'Command /heal',
    feature_feed: 'Command /feed',
    feature_god: 'Command /god',
    feature_vanish: 'Command /vanish',
    feature_particles: 'Efek partikel',
    feature_priority: 'Support prioritas',
    feature_all_commands: 'Semua command',
    feature_unlimited: 'Unlimited homes',
    feature_beta: 'Akses beta',
    
    // Checkout
    checkout_title: 'Selesaikan Pembelian',
    checkout_username_label: 'Username Minecraft',
    checkout_username_placeholder: 'Masukkan username Minecraft kamu',
    checkout_username_hint: 'Pastikan username sudah benar',
    checkout_product_label: 'Produk',
    checkout_price_label: 'Harga',
    btn_continue_payment: 'Lanjut Pembayaran',
    btn_cancel: 'Batal',
    toast_opening_checkout: 'Membuka checkout...',
    
    // Tutorial - Public
    tutorial_public_title: 'Cara Membeli Rank & Shard',
    tutorial_step1: 'Pilih produk (Rank / Shard)',
    tutorial_step2: 'Klik "Beli Sekarang"',
    tutorial_step3: 'Masukkan username Minecraft',
    tutorial_step4: 'Lanjutkan ke pembayaran',
    tutorial_step5: 'Setelah pembayaran berhasil, reward otomatis masuk',
    tutorial_help_text: 'Jika mengalami masalah, silakan tanya di Discord',
    
    // Tutorial - Admin
    admin_mode_btn: 'Mode Admin',
    user_mode_btn: 'Mode User',
    admin_title: 'Panduan Integrasi Payment',
    admin_intro: 'Bagian ini berisi panduan teknis untuk mengintegrasikan sistem pembayaran.',
    admin_step1_title: '1. Lokasi Integrasi',
    admin_step1_text: 'Semua logic pembayaran ada di file checkout.js pada fungsi processPayment().',
    admin_step2_title: '2. Metode Tebex',
    admin_step2_text: 'Tebex adalah solusi all-in-one untuk Minecraft server store. Plugin otomatis memberikan reward setelah pembayaran.',
    admin_step3_title: '3. Metode Midtrans',
    admin_step3_text: 'Midtrans adalah payment gateway lokal Indonesia. Memerlukan backend untuk handle webhook.',
    admin_step4_title: '4. Integrasi Minecraft',
    admin_step4_text: 'Gunakan LuckPerms untuk memberikan rank. Gunakan RCON atau plugin untuk eksekusi command.',
    admin_step5_title: '5. Alur Lengkap',
    admin_step5_text: 'User → Pilih Produk → Pembayaran → Webhook → Server → Reward',
    
    // Footer
    footer_copyright: 'Hak Cipta 2024 Calmionix. Tidak berafiliasi dengan Mojang Studios.',
    
    // Misc
    loading: 'Memuat...',
    close: 'Tutup',
    error: 'Terjadi kesalahan',
    success: 'Berhasil'
  },
  
  en: {
    // Navigation
    nav_home: 'Home',
    nav_shop: 'Shop',
    nav_tutorial: 'Tutorial',
    nav_discord: 'Discord',
    
    // Hero
    hero_title: 'Calmionix Server',
    hero_subtitle: 'Buy Ranks & Shards to enhance your gameplay experience',
    btn_buy_rank: 'Buy Rank',
    btn_buy_shard: 'Buy Shard',
    
    // Server Info
    server_info_title: 'Server Info',
    server_ip_label: 'Server IP',
    server_port_label: 'Port',
    btn_copy_ip: 'Copy IP',
    toast_ip_copied: 'IP copied successfully!',
    
    // Highlights
    section_popular: 'Most Popular',
    section_value: 'Best Value',
    
    // Discord CTA
    discord_title: 'Need help or have questions?',
    discord_btn: 'Join Discord',
    
    // Shop
    shop_title: 'Server Store',
    shop_subtitle: 'Choose the product you want to buy',
    category_all: 'All',
    category_rank: 'Ranks',
    category_shard: 'Shards',
    
    // Product Cards
    tag_popular: 'Popular',
    tag_value: 'Best Value',
    tag_ultimate: 'Ultimate',
    btn_buy_now: 'Buy Now',
    
    // Products - Ranks
    rank_vip_name: 'VIP Rank',
    rank_vip_desc: 'Basic access for premium players',
    rank_mvp_name: 'MVP Rank',
    rank_mvp_desc: 'More exclusive features',
    rank_legend_name: 'Legend Rank',
    rank_legend_desc: 'Best gameplay experience',
    rank_god_name: 'God Rank',
    rank_god_desc: 'Full access to all features',
    
    // Products - Shards
    shard_100_name: '100 Shards',
    shard_100_desc: 'Small pack for beginners',
    shard_500_name: '500 Shards',
    shard_500_desc: 'Bonus 50 shards',
    shard_1000_name: '1000 Shards',
    shard_1000_desc: 'Bonus 150 shards',
    shard_5000_name: '5000 Shards',
    shard_5000_desc: 'Bonus 1000 shards + title',
    
    // Features
    feature_fly: '/fly command',
    feature_hat: '/hat command',
    feature_chat: 'Colored chat',
    feature_prefix: 'Custom prefix',
    feature_heal: '/heal command',
    feature_feed: '/feed command',
    feature_god: '/god command',
    feature_vanish: '/vanish command',
    feature_particles: 'Particle effects',
    feature_priority: 'Priority support',
    feature_all_commands: 'All commands',
    feature_unlimited: 'Unlimited homes',
    feature_beta: 'Beta access',
    
    // Checkout
    checkout_title: 'Complete Purchase',
    checkout_username_label: 'Minecraft Username',
    checkout_username_placeholder: 'Enter your Minecraft username',
    checkout_username_hint: 'Make sure the username is correct',
    checkout_product_label: 'Product',
    checkout_price_label: 'Price',
    btn_continue_payment: 'Continue to Payment',
    btn_cancel: 'Cancel',
    toast_opening_checkout: 'Opening checkout...',
    
    // Tutorial - Public
    tutorial_public_title: 'How to Buy Rank & Shard',
    tutorial_step1: 'Select product (Rank / Shard)',
    tutorial_step2: 'Click "Buy Now"',
    tutorial_step3: 'Enter Minecraft username',
    tutorial_step4: 'Proceed to payment',
    tutorial_step5: 'After successful payment, reward is automatically delivered',
    tutorial_help_text: 'If you encounter any issues, please ask on Discord',
    
    // Tutorial - Admin
    admin_mode_btn: 'Admin Mode',
    user_mode_btn: 'User Mode',
    admin_title: 'Payment Integration Guide',
    admin_intro: 'This section contains technical guide for integrating payment systems.',
    admin_step1_title: '1. Integration Location',
    admin_step1_text: 'All payment logic is in checkout.js file inside processPayment() function.',
    admin_step2_title: '2. Tebex Method',
    admin_step2_text: 'Tebex is an all-in-one solution for Minecraft server stores. Plugin automatically delivers rewards after payment.',
    admin_step3_title: '3. Midtrans Method',
    admin_step3_text: 'Midtrans is a local Indonesian payment gateway. Requires backend to handle webhooks.',
    admin_step4_title: '4. Minecraft Integration',
    admin_step4_text: 'Use LuckPerms to give ranks. Use RCON or plugin to execute commands.',
    admin_step5_title: '5. Complete Flow',
    admin_step5_text: 'User → Select Product → Payment → Webhook → Server → Reward',
    
    // Footer
    footer_copyright: 'Copyright 2024 Calmionix. Not affiliated with Mojang Studios.',
    
    // Misc
    loading: 'Loading...',
    close: 'Close',
    error: 'An error occurred',
    success: 'Success'
  }
};

// Language Manager Class
class LanguageManager {
  constructor() {
    this.currentLang = this.loadLanguagePreference() || 'id';
    this.init();
  }
  
  init() {
    this.applyLanguage(this.currentLang);
    this.setupListeners();
  }
  
  setupListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      const langToggle = document.getElementById('lang-toggle');
      if (langToggle) {
        langToggle.addEventListener('click', () => this.toggle());
      }
      this.updateLangButton();
    });
  }
  
  toggle() {
    const newLang = this.currentLang === 'id' ? 'en' : 'id';
    this.applyLanguage(newLang);
    this.saveLanguagePreference(newLang);
    return newLang;
  }
  
  applyLanguage(lang) {
    this.currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      const translation = this.getTranslation(key);
      if (translation) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });
    
    this.updateLangButton();
  }
  
  getTranslation(key) {
    return translations[this.currentLang][key] || translations['id'][key] || key;
  }
  
  updateLangButton() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.textContent = this.currentLang === 'id' ? '🇮🇩' : '🇺🇸';
      langToggle.title = this.currentLang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia';
    }
  }
  
  saveLanguagePreference(lang) {
    try {
      localStorage.setItem('calmionix_lang', lang);
    } catch (e) {
      console.warn('Could not save language preference');
    }
  }
  
  loadLanguagePreference() {
    try {
      return localStorage.getItem('calmionix_lang');
    } catch (e) {
      return null;
    }
  }
}

// Create global instance
const langManager = new LanguageManager();

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LanguageManager, translations };
}
