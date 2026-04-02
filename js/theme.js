/**
 * ========================================
 * CALMIONIX - Theme Manager
 * ========================================
 * 
 * Handles dark/light mode switching with smooth transitions.
 */

class ThemeManager {
  constructor() {
    this.currentTheme = this.loadThemePreference() || 'dark';
    this.init();
  }
  
  init() {
    this.applyTheme(this.currentTheme);
    
    document.addEventListener('DOMContentLoaded', () => {
      this.setupListeners();
    });
  }
  
  setupListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggle());
    }
  }
  
  toggle() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    this.saveThemePreference(newTheme);
    return newTheme;
  }
  
  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeButton();
  }
  
  updateThemeButton() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
      themeToggle.title = this.currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
  }
  
  saveThemePreference(theme) {
    try {
      localStorage.setItem('calmionix_theme', theme);
    } catch (e) {
      console.warn('Could not save theme preference');
    }
  }
  
  loadThemePreference() {
    try {
      return localStorage.getItem('calmionix_theme');
    } catch (e) {
      return null;
    }
  }
}

// Create global instance
const themeManager = new ThemeManager();

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeManager;
}
