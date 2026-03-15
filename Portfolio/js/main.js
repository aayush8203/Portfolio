/* =============================================
   AYUSH MISHRA - PORTFOLIO JS
   ============================================= */

/* ---- PAGE LOADER ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1600);
});

/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  highlightNavLink();
});

function highlightNavLink() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active-section');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active-section');
    }
  });
}

/* ---- SMOOTH CLOSE MOBILE NAV ---- */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

/* ---- TYPING ANIMATION ---- */
class TypeWriter {
  constructor(el, words, wait = 2500) {
    this.el = el;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = this.txt;

    let typeSpeed = 80;
    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    new TypeWriter(typedEl, [
      'Full Stack Web Developer',
      'Frontend UI Designer',
      'Backend API Builder',
      'Problem Solver',
      'Engineering Student'
    ], 2200);
  }
});

/* ---- SCROLL REVEAL ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ---- SKILL BARS ---- */
const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target.querySelector('.skill-bar');
      if (bar) {
        const w = bar.getAttribute('data-w');
        bar.style.width = w;
      }
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-card').forEach(card => {
  skillBarObserver.observe(card);
});

/* ---- SKILLS TAB FILTER ---- */
const skillsData = {
  all: [
    { name: 'HTML5', icon: '🌐', level: 'Advanced', w: '90%', color: '#e34f26' },
    { name: 'CSS3', icon: '🎨', level: 'Advanced', w: '88%', color: '#1572b6' },
    { name: 'Bootstrap', icon: '🅱️', level: 'Proficient', w: '82%', color: '#7952b3' },
    { name: 'JavaScript', icon: '⚡', level: 'Proficient', w: '80%', color: '#f7df1e' },
    { name: 'Node.js', icon: '🟢', level: 'Intermediate', w: '72%', color: '#68a063' },
    { name: 'Express.js', icon: '🚀', level: 'Intermediate', w: '70%', color: '#ffffff' },
    { name: 'MongoDB', icon: '🍃', level: 'Intermediate', w: '68%', color: '#47a248' },
    { name: 'GitHub', icon: '🐙', level: 'Proficient', w: '85%', color: '#ffffff' },
    { name: 'Vercel', icon: '▲', level: 'Proficient', w: '80%', color: '#ffffff' },
    { name: 'REST APIs', icon: '🔗', level: 'Intermediate', w: '72%', color: '#00d4ff' },
  ],
  frontend: [
    { name: 'HTML5', icon: '🌐', level: 'Advanced', w: '90%' },
    { name: 'CSS3', icon: '🎨', level: 'Advanced', w: '88%' },
    { name: 'Bootstrap', icon: '🅱️', level: 'Proficient', w: '82%' },
    { name: 'JavaScript', icon: '⚡', level: 'Proficient', w: '80%' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢', level: 'Intermediate', w: '72%' },
    { name: 'Express.js', icon: '🚀', level: 'Intermediate', w: '70%' },
    { name: 'REST APIs', icon: '🔗', level: 'Intermediate', w: '72%' },
  ],
  database: [
    { name: 'MongoDB', icon: '🍃', level: 'Intermediate', w: '68%' },
  ],
  tools: [
    { name: 'GitHub', icon: '🐙', level: 'Proficient', w: '85%' },
    { name: 'Vercel', icon: '▲', level: 'Proficient', w: '80%' },
    { name: 'REST APIs', icon: '🔗', level: 'Intermediate', w: '72%' },
  ]
};

function renderSkills(category) {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  const skills = skillsData[category] || skillsData.all;
  grid.innerHTML = '';
  skills.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.style.transitionDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <span class="skill-icon">${skill.icon}</span>
      <span class="skill-name">${skill.name}</span>
      <span class="skill-level">${skill.level}</span>
      <div class="skill-bar-bg">
        <div class="skill-bar" data-w="${skill.w}"></div>
      </div>
    `;
    grid.appendChild(card);
    // Trigger reveal & bar
    setTimeout(() => {
      card.classList.add('visible');
      const bar = card.querySelector('.skill-bar');
      if (bar) bar.style.width = skill.w;
    }, 100 + i * 60);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSkills('all');
  document.querySelectorAll('.skill-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderSkills(tab.dataset.category);
    });
  });
});

/* ---- COUNTER ANIMATION ---- */
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + '+';
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

/* ---- CONTACT FORM ---- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill all fields.');
      return;
    }
    // Simulate sending
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✅ Message Sent!';
      contactForm.reset();
      showToast('🎉 Message sent successfully! I\'ll respond soon.');
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }, 3000);
    }, 1800);
  });
}

/* ---- TOAST NOTIFICATION ---- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ---- PARTICLE CURSOR TRAIL ---- */
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'cursorTrail';
  canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9990;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const particles = [];
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (Math.random() > 0.6) {
      particles.push({
        x: mouseX, y: mouseY,
        size: Math.random() * 4 + 1,
        alpha: 0.8,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: Math.random() > 0.5 ? '#00d4ff' : '#a855f7'
      });
    }
  });

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.alpha -= 0.03;
      p.x += p.vx;
      p.y += p.vy;
      p.size *= 0.96;
      if (p.alpha <= 0) { particles.splice(i, 1); continue; }
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
});

/* ---- PROJECT CARD GLOW ON HOVER ---- */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

/* ---- BACK TO TOP ---- */
const backBtn = document.getElementById('backToTop');
if (backBtn) {
  window.addEventListener('scroll', () => {
    backBtn.style.opacity = window.scrollY > 400 ? '1' : '0';
    backBtn.style.pointerEvents = window.scrollY > 400 ? 'all' : 'none';
  });
  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---- SERVICE CARD TILT ---- */
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

console.log('%c⚡ Ayush Mishra | Portfolio', 'color:#00d4ff;font-size:20px;font-weight:900;');
console.log('%cFull Stack Web Developer | Built with HTML, CSS & JavaScript', 'color:#a855f7;font-size:13px;');
