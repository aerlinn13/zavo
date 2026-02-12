// ============================================
// POS Demo — Interactive Terminal
// ============================================

(function () {
  'use strict';

  // --- State ---
  const order = {};
  let orderTotal = 0;

  // --- DOM refs ---
  const menuGrid = document.getElementById('pos-menu-grid');
  const orderItems = document.getElementById('pos-order-items');
  const totalAmount = document.getElementById('pos-total-amount');
  const payBtn = document.getElementById('pos-pay-btn');
  const paymentOverlay = document.getElementById('pos-payment-overlay');
  const tapIcon = document.getElementById('pos-tap-icon');
  const approved = document.getElementById('pos-approved');
  const approvedAmount = document.getElementById('pos-approved-amount');
  const aiOverlay = document.getElementById('pos-ai-overlay');
  const aiText = document.getElementById('pos-ai-text');
  const aiDismiss = document.getElementById('pos-ai-dismiss');
  const confettiCanvas = document.getElementById('pos-confetti');

  // --- AI Insights ---
  const insights = [
    '☕ Espresso is trending today. Consider a "Coffee & Cake" combo at £7.50 to boost average order value.',
    '🍔 Burger orders peak between 12–2pm. Pre-prep 20% more patties to cut wait times.',
    '🍝 Pasta is your #1 seller this week. Try a "Pasta + Drink" lunch deal to increase volume.',
    '🥗 Salad orders are up 30% this month. Health-conscious customers might love a smoothie add-on.',
    '☕ Coffee is your #1 seller today. Consider a lunch combo promotion to increase average spend.',
    '🍰 Dessert attach rate is only 15%. Try prompting "Add cake for £4?" at checkout.',
  ];

  function getInsight() {
    // Pick a relevant insight based on what's in the order
    const names = Object.keys(order);
    const relevant = insights.filter(function (i) {
      return names.some(function (n) {
        return i.toLowerCase().includes(n.toLowerCase());
      });
    });
    if (relevant.length > 0) {
      return relevant[Math.floor(Math.random() * relevant.length)];
    }
    return insights[Math.floor(Math.random() * insights.length)];
  }

  // --- Render order ---
  function renderOrder() {
    const names = Object.keys(order);
    if (names.length === 0) {
      orderItems.innerHTML = '<p class="pos-empty">No items yet</p>';
      totalAmount.textContent = '£0.00';
      payBtn.disabled = true;
      return;
    }

    orderItems.innerHTML = '';
    orderTotal = 0;

    names.forEach(function (name) {
      var item = order[name];
      var lineTotal = item.price * item.qty;
      orderTotal += lineTotal;

      var line = document.createElement('div');
      line.className = 'pos-order-line';
      line.innerHTML =
        '<div class="pos-order-line-info">' +
          '<span class="pos-order-line-qty">' + item.qty + '</span>' +
          '<span class="pos-order-line-name">' + name + '</span>' +
        '</div>' +
        '<span class="pos-order-line-price">£' + lineTotal.toFixed(2) + '</span>';
      orderItems.appendChild(line);
    });

    totalAmount.textContent = '£' + orderTotal.toFixed(2);
    payBtn.disabled = false;
  }

  // --- Add item ---
  menuGrid.addEventListener('click', function (e) {
    var btn = e.target.closest('.pos-item');
    if (!btn) return;

    var name = btn.dataset.name;
    var price = parseFloat(btn.dataset.price);

    if (order[name]) {
      order[name].qty += 1;
    } else {
      order[name] = { price: price, qty: 1 };
    }

    // Visual feedback
    btn.style.transform = 'scale(0.93)';
    setTimeout(function () {
      btn.style.transform = '';
    }, 150);

    renderOrder();
  });

  // --- Pay ---
  payBtn.addEventListener('click', function () {
    if (payBtn.disabled) return;

    // Show payment overlay with tap animation
    paymentOverlay.classList.add('active');
    tapIcon.classList.remove('hidden');
    approved.classList.remove('visible');

    // Simulate tap → approved after 1.5s
    setTimeout(function () {
      tapIcon.classList.add('hidden');
      approved.classList.add('visible');
      approvedAmount.textContent = '£' + orderTotal.toFixed(2);

      // Fire confetti
      launchConfetti();

      // Show AI insight after another 2s
      setTimeout(function () {
        paymentOverlay.classList.remove('active');
        aiText.textContent = getInsight();
        aiOverlay.classList.add('active');
      }, 2000);
    }, 1500);
  });

  // --- New Order (dismiss AI) ---
  aiDismiss.addEventListener('click', function () {
    aiOverlay.classList.remove('active');
    // Reset order
    for (var key in order) {
      delete order[key];
    }
    renderOrder();
  });

  // ============================================
  // Confetti
  // ============================================
  function launchConfetti() {
    var canvas = confettiCanvas;
    var ctx = canvas.getContext('2d');
    var parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    var particles = [];
    var colors = ['#4CAF50', '#fff', '#6366f1', '#8b5cf6', '#fbbf24', '#f43f5e'];

    for (var i = 0; i < 80; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12 - 4,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: Math.random() * 0.015 + 0.008,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var alive = false;

      particles.forEach(function (p) {
        if (p.life <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.life -= p.decay;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      if (alive) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
  }

  // ============================================
  // Scroll-triggered Fade-in Animations
  // ============================================
  var fadeEls = document.querySelectorAll('.fade-in');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });

  // ============================================
  // Mobile Nav Toggle
  // ============================================
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });

  // ============================================
  // Smooth scroll for nav links (fallback)
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
