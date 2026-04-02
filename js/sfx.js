/**
 * ========================================
 * CALMIONIX - Sound Effects System (SFX)
 * ========================================
 * 
 * This file handles all sound effects for the website:
 * - Click sounds on buttons
 * - Hover sounds on interactive elements
 * - Sound toggle functionality
 * 
 * Sounds needed in /assets/sounds/:
 * - click.mp3  (short click sound)
 * - hover.mp3  (subtle hover sound)
 */

class SoundManager {
  constructor() {
    // Sound enabled state (saved to localStorage)
    this.enabled = this.loadSoundPreference();
    
    // Audio elements
    this.sounds = {
      click: null,
      hover: null
    };
    
    // Preload status
    this.preloaded = false;
    
    // Initialize
    this.init();
  }
  
  /**
   * Initialize the sound manager
   */
  init() {
    this.preloadSounds();
    this.attachGlobalListeners();
    this.updateSoundButton();
  }
  
  /**
   * Preload all sound files
   */
  preloadSounds() {
    // Create audio elements
    this.sounds.click = new Audio('assets/sounds/click.mp3');
    this.sounds.hover = new Audio('assets/sounds/hover.mp3');
    
    // Set volume levels
    this.sounds.click.volume = 0.4;
    this.sounds.hover.volume = 0.2;
    
    // Preload
    Object.values(this.sounds).forEach(sound => {
      if (sound) {
        sound.load();
        sound.preload = 'auto';
      }
    });
    
    this.preloaded = true;
  }
  
  /**
   * Attach global event listeners for sound effects
   */
  attachGlobalListeners() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupListeners());
    } else {
      this.setupListeners();
    }
  }
  
  /**
   * Setup click and hover listeners
   */
  setupListeners() {
    // Click sounds for all buttons
    document.querySelectorAll('button, .btn, .btn-icon, a').forEach(el => {
      el.addEventListener('click', () => this.playClick());
    });
    
    // Hover sounds for interactive elements
    document.querySelectorAll('button, .btn, .btn-icon, a, .card, .product-card').forEach(el => {
      el.addEventListener('mouseenter', () => this.playHover());
    });
    
    // Sound toggle button
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => this.toggle());
    }
  }
  
  /**
   * Play click sound
   */
  playClick() {
    if (!this.enabled || !this.sounds.click) return;
    
    // Clone and play for overlapping sounds
    const clickClone = this.sounds.click.cloneNode();
    clickClone.volume = 0.4;
    clickClone.play().catch(err => {
      // Ignore autoplay errors (browser policy)
      console.log('Sound play blocked by browser policy');
    });
  }
  
  /**
   * Play hover sound
   */
  playHover() {
    if (!this.enabled || !this.sounds.hover) return;
    
    // Throttle hover sounds to prevent spam
    const now = Date.now();
    if (this.lastHoverTime && now - this.lastHoverTime < 100) return;
    this.lastHoverTime = now;
    
    // Clone and play
    const hoverClone = this.sounds.hover.cloneNode();
    hoverClone.volume = 0.2;
    hoverClone.play().catch(err => {
      // Ignore autoplay errors
    });
  }
  
  /**
   * Toggle sound on/off
   */
  toggle() {
    this.enabled = !this.enabled;
    this.saveSoundPreference();
    this.updateSoundButton();
    
    // Play a click sound when enabling
    if (this.enabled) {
      this.playClick();
    }
    
    return this.enabled;
  }
  
  /**
   * Enable sound
   */
  enable() {
    this.enabled = true;
    this.saveSoundPreference();
    this.updateSoundButton();
  }
  
  /**
   * Disable sound
   */
  disable() {
    this.enabled = false;
    this.saveSoundPreference();
    this.updateSoundButton();
  }
  
  /**
   * Check if sound is enabled
   */
  isEnabled() {
    return this.enabled;
  }
  
  /**
   * Update sound toggle button icon
   */
  updateSoundButton() {
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
      soundToggle.innerHTML = this.enabled ? '🔊' : '🔇';
      soundToggle.classList.toggle('active', this.enabled);
      soundToggle.title = this.enabled ? 'Sound On' : 'Sound Off';
    }
  }
  
  /**
   * Save sound preference to localStorage
   */
  saveSoundPreference() {
    try {
      localStorage.setItem('calmionix_sound_enabled', JSON.stringify(this.enabled));
    } catch (e) {
      console.warn('Could not save sound preference');
    }
  }
  
  /**
   * Load sound preference from localStorage
   */
  loadSoundPreference() {
    try {
      const saved = localStorage.getItem('calmionix_sound_enabled');
      return saved !== null ? JSON.parse(saved) : true;
    } catch (e) {
      return true;
    }
  }
}

// Create global sound manager instance
const soundManager = new SoundManager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SoundManager;
}
