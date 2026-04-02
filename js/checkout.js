/**
 * ========================================
 * CALMIONIX - Checkout System
 * ========================================
 * 
 * Handles the checkout flow and payment processing.
 * Ready for integration with Midtrans or Tebex.
 */

// Product Database
const products = {
  // Ranks
  'vip': {
    id: 'vip',
    name: { id: 'Rank VIP', en: 'VIP Rank' },
    category: 'rank',
    price: 25000,
    priceFormatted: 'Rp 25.000',
    icon: '👑'
  },
  'mvp': {
    id: 'mvp',
    name: { id: 'Rank MVP', en: 'MVP Rank' },
    category: 'rank',
    price: 50000,
    priceFormatted: 'Rp 50.000',
    icon: '💠'
  },
  'legend': {
    id: 'legend',
    name: { id: 'Rank Legend', en: 'Legend Rank' },
    category: 'rank',
    price: 100000,
    priceFormatted: 'Rp 100.000',
    icon: '⚡'
  },
  'god': {
    id: 'god',
    name: { id: 'Rank God', en: 'God Rank' },
    category: 'rank',
    price: 200000,
    priceFormatted: 'Rp 200.000',
    icon: '🔱'
  },
  // Shards
  'shards-100': {
    id: 'shards-100',
    name: { id: '100 Shard', en: '100 Shards' },
    category: 'shard',
    price: 10000,
    priceFormatted: 'Rp 10.000',
    icon: '🔷'
  },
  'shards-500': {
    id: 'shards-500',
    name: { id: '500 Shard', en: '500 Shards' },
    category: 'shard',
    price: 45000,
    priceFormatted: 'Rp 45.000',
    icon: '💎'
  },
  'shards-1000': {
    id: 'shards-1000',
    name: { id: '1000 Shard', en: '1000 Shards' },
    category: 'shard',
    price: 85000,
    priceFormatted: 'Rp 85.000',
    icon: '💰'
  },
  'shards-5000': {
    id: 'shards-5000',
    name: { id: '5000 Shard', en: '5000 Shards' },
    category: 'shard',
    price: 400000,
    priceFormatted: 'Rp 400.000',
    icon: '🏆'
  }
};

// Current checkout state
let currentProduct = null;

/**
 * Open checkout modal for a product
 * @param {string} productId - The product ID to purchase
 */
function openCheckout(productId) {
  const product = products[productId];
  
  if (!product) {
    showToast('Produk tidak ditemukan!', 'error');
    return;
  }
  
  // Store current product
  currentProduct = product;
  
  // Get current language
  const lang = document.documentElement.getAttribute('data-lang') || 'id';
  
  // Update modal content
  const iconEl = document.getElementById('checkout-icon');
  const nameEl = document.getElementById('checkout-product-name');
  const priceEl = document.getElementById('checkout-product-price');
  
  if (iconEl) iconEl.textContent = product.icon;
  if (nameEl) nameEl.textContent = product.name[lang];
  if (priceEl) priceEl.textContent = product.priceFormatted;
  
  // Show modal
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // Show toast
  const toastKey = lang === 'id' ? 'Membuka checkout...' : 'Opening checkout...';
  showToast(toastKey, 'info');
  
  // Focus on username input
  setTimeout(() => {
    const usernameInput = document.getElementById('checkout-username');
    if (usernameInput) {
      usernameInput.value = '';
      usernameInput.focus();
    }
  }, 100);
}

/**
 * Close the checkout modal
 */
function closeCheckoutModal(event) {
  // If event is provided, only close if clicking overlay
  if (event && event.target !== event.currentTarget) {
    return;
  }
  
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Clear stored product
  currentProduct = null;
}

/**
 * Proceed to payment
 */
function proceedToPayment() {
  const lang = document.documentElement.getAttribute('data-lang') || 'id';
  const usernameInput = document.getElementById('checkout-username');
  const username = usernameInput ? usernameInput.value.trim() : '';
  
  // Validate username
  if (!username) {
    const errorMsg = lang === 'id' ? 'Masukkan username Minecraft!' : 'Enter Minecraft username!';
    showToast(errorMsg, 'error');
    if (usernameInput) {
      usernameInput.focus();
      usernameInput.style.borderColor = 'var(--accent-error)';
      setTimeout(() => {
        usernameInput.style.borderColor = '';
      }, 2000);
    }
    return;
  }
  
  // Validate username format (3-16 chars, alphanumeric + underscore)
  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  if (!usernameRegex.test(username)) {
    const errorMsg = lang === 'id' ? 'Username tidak valid!' : 'Invalid username!';
    showToast(errorMsg, 'error');
    return;
  }
  
  // Check product
  if (!currentProduct) {
    showToast('Error: Produk tidak ditemukan', 'error');
    return;
  }
  
  // Close modal
  closeCheckoutModal();
  
  // Process payment
  processPayment(currentProduct.id, username);
}

/**
 * ========================================
 * PAYMENT PROCESSING
 * ========================================
 * 
 * THIS IS THE MAIN INTEGRATION POINT
 * Replace with real payment gateway
 */
function processPayment(productId, username) {
  const product = products[productId];
  const lang = document.documentElement.getAttribute('data-lang') || 'id';
  
  console.log('Processing payment:', {
    product: product.name[lang],
    price: product.price,
    username: username,
    timestamp: new Date().toISOString()
  });
  
  // ========================================
  // PAYMENT INTEGRATION AREA
  // ========================================
  // 
  // 1. Connect to Midtrans / Tebex
  // 2. Send transaction data to backend
  // 3. Handle success response
  // 4. Trigger Minecraft reward (rank/shard)
  //
  
  // ========================================
  // MIDTRANS INTEGRATION EXAMPLE:
  // ========================================
  // 
  // // Create transaction on backend
  // fetch('/api/create-transaction', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     product_id: productId,
  //     username: username,
  //     amount: product.price
  //   })
  // })
  // .then(res => res.json())
  // .then(data => {
  //   // Open Midtrans Snap
  //   window.snap.pay(data.token, {
  //     onSuccess: function(result) {
  //       handlePaymentSuccess(result, productId, username);
  //     },
  //     onPending: function(result) {
  //       showToast('Payment pending...', 'info');
  //     },
  //     onError: function(result) {
  //       showToast('Payment failed!', 'error');
  //     }
  //   });
  // });
  
  // ========================================
  // TEBEX INTEGRATION EXAMPLE:
  // ========================================
  //
  // // Redirect to Tebex checkout
  // window.location.href = `https://checkout.tebex.io/your-store/${productId}?username=${username}`;
  
  // ========================================
  // FOR NOW: Show demo message
  // ========================================
  showDemoModal(product, username);
}

/**
 * Show demo payment modal (for development)
 */
function showDemoModal(product, username) {
  const lang = document.documentElement.getAttribute('data-lang') || 'id';
  
  const title = lang === 'id' ? 'Demo Pembayaran' : 'Demo Payment';
  const message = lang === 'id' 
    ? 'Ini adalah demo checkout. Sistem pembayaran belum terhubung.'
    : 'This is a demo checkout. Payment system not connected.';
  const productLabel = lang === 'id' ? 'Produk' : 'Product';
  const priceLabel = lang === 'id' ? 'Harga' : 'Price';
  const userLabel = lang === 'id' ? 'Username' : 'Username';
  const closeText = lang === 'id' ? 'Tutup' : 'Close';
  const simulateText = lang === 'id' ? 'Simulasi Sukses' : 'Simulate Success';
  
  // Create modal
  const modalHTML = `
    <div id="demo-modal" class="modal-overlay active">
      <div class="modal">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="modal-close" onclick="closeDemoModal()">&times;</button>
        </div>
        <div style="text-align: center; padding: var(--space-4) 0;">
          <div style="font-size: 3rem; margin-bottom: var(--space-4);">🚧</div>
          <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">${message}</p>
          
          <div style="background: var(--bg-glass); border-radius: var(--radius-lg); padding: var(--space-4); margin-bottom: var(--space-6); text-align: left;">
            <p style="margin-bottom: var(--space-2);"><strong>${productLabel}:</strong> ${product.name[lang]}</p>
            <p style="margin-bottom: var(--space-2);"><strong>${priceLabel}:</strong> ${product.priceFormatted}</p>
            <p><strong>${userLabel}:</strong> ${username}</p>
          </div>
          
          <div class="modal-actions">
            <button class="btn btn-secondary" onclick="closeDemoModal()">${closeText}</button>
            <button class="btn btn-primary" onclick="simulateSuccess('${productId}', '${username}')">${simulateText}</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove existing
  const existing = document.getElementById('demo-modal');
  if (existing) existing.remove();
  
  // Add new
  const container = document.createElement('div');
  container.innerHTML = modalHTML;
  document.body.appendChild(container.firstElementChild);
}

/**
 * Close demo modal
 */
function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) modal.remove();
}

/**
 * Simulate successful payment
 */
function simulateSuccess(productId, username) {
  closeDemoModal();
  
  const product = products[productId];
  const lang = document.documentElement.getAttribute('data-lang') || 'id';
  
  const successMsg = lang === 'id' 
    ? `Pembayaran berhasil! ${product.name[lang]} akan ditambahkan ke akun ${username}.`
    : `Payment successful! ${product.name[lang]} will be added to ${username}'s account.`;
  
  showToast(successMsg, 'success');
}

/**
 * Handle successful payment callback
 */
function handlePaymentSuccess(result, productId, username) {
  console.log('Payment successful:', result);
  
  // TODO: Verify payment with backend
  // TODO: Trigger Minecraft reward via RCON or plugin
  // TODO: Send notification to user
  
  const lang = document.documentElement.getAttribute('data-lang') || 'id';
  const msg = lang === 'id' 
    ? 'Pembayaran berhasil! Reward akan segera dikirim.'
    : 'Payment successful! Reward will be delivered shortly.';
  
  showToast(msg, 'success');
}

/**
 * Filter products by category
 */
function filterProducts(category) {
  // Update active tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });
  
  // Filter cards
  document.querySelectorAll('.product-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.3s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * Show toast notification
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: '✓',
    info: 'ℹ',
    error: '✕'
  };
  
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ'}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/**
 * Copy text to clipboard
 */
async function copyToClipboard(text, toastKey) {
  try {
    await navigator.clipboard.writeText(text);
    
    // Get translated message
    let message = toastKey;
    if (typeof translations !== 'undefined') {
      const lang = document.documentElement.getAttribute('data-lang') || 'id';
      message = translations[lang][toastKey] || toastKey;
    }
    
    showToast(message, 'success');
  } catch (err) {
    console.error('Failed to copy:', err);
    showToast('Gagal menyalin', 'error');
  }
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// Enter key support for checkout
document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('checkout-username');
  if (usernameInput) {
    usernameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        proceedToPayment();
      }
    });
  }
});

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { openCheckout, closeCheckoutModal, processPayment, products };
}
nt">
          <div class="demo-icon">🚧</div>
          <h4>Payment System Not Connected</h4>
          <p>This is a demo checkout. In production, this would connect to:</p>
          
          <div class="demo-options">
            <div class="demo-option">
              <span class="demo-option-icon">💳</span>
              <span>Midtrans Payment Gateway</span>
            </div>
            <div class="demo-option">
              <span class="demo-option-icon">🛒</span>
              <span>Tebex Store Integration</span>
            </div>
          </div>
          
          <div class="demo-details">
            <p><strong>Product:</strong> ${product.name}</p>
            <p><strong>Price:</strong> ${product.priceFormatted}</p>
            <p><strong>Username:</strong> ${username}</p>
          </div>
          
          <div class="demo-actions">
            <button class="btn btn-secondary" onclick="closeDemoModal()">Close</button>
            <button class="btn btn-primary" onclick="simulateSuccess('${product.id}', '${username}')">
              Simulate Success
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove existing demo modal
  const existingModal = document.getElementById('demo-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Add new modal
  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer.firstElementChild);
}

/**
 * Close demo modal
 */
function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.remove();
  }
}

/**
 * Simulate successful payment (for testing)
 */
function simulateSuccess(productId, username) {
  closeDemoModal();
  
  const product = products[productId];
  
  // Show success message
  showToast(`Payment successful! ${product.name} will be added to ${username}'s account.`, 'success');
  
  // In production, this would:
  // 1. Verify payment with gateway
  // 2. Send command to Minecraft server
  // 3. Log transaction to database
  // 4. Send confirmation email/Discord message
}

/**
 * Handle successful payment callback
 */
function handlePaymentSuccess(result, productId, username) {
  console.log('Payment successful:', result);
  
  // TODO: Verify payment with backend
  // TODO: Trigger Minecraft reward
  // TODO: Send notification to user
  
  showToast('Payment successful! Your items will be delivered shortly.', 'success');
}

/**
 * ========================================
 * UTILITY FUNCTIONS
 * ========================================
 */

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type: success, info, warning, error
 */
function showToast(message, type = 'info') {
  // Create toast container if it doesn't exist
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: '✓',
    info: 'ℹ',
    warning: '⚠',
    error: '✕'
  };
  
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ'}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'toastSlide 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/**
 * Show/hide loading overlay
 */
function showLoading(show) {
  let overlay = document.querySelector('.loading-overlay');
  
  if (show) {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'loading-overlay';
      overlay.innerHTML = '<div class="loading-spinner"></div>';
      document.body.appendChild(overlay);
    }
    overlay.classList.remove('hidden');
  } else if (overlay) {
    overlay.classList.add('hidden');
  }
}

/**
 * Copy text to clipboard
 */
async function copyToClipboard(text, successMessage = 'Copied!') {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage, 'success');
    
    if (typeof soundManager !== 'undefined') {
      soundManager.playClick();
    }
  } catch (err) {
    console.error('Failed to copy:', err);
    showToast('Failed to copy', 'error');
  }
}

/**
 * Filter products by category
 */
function filterProducts(category) {
  // Update active tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });
  
  // Filter product cards
  document.querySelectorAll('.product-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      card.style.animation = 'fadeIn 0.3s ease';
    } else {
      card.style.display = 'none';
    }
  });
  
  // Play sound
  if (typeof soundManager !== 'undefined') {
    soundManager.playClick();
  }
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    openCheckout, 
    closeCheckoutModal, 
    processPayment,
    products,
    showToast,
    copyToClipboard
  };
}
