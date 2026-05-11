/* ===== RISHI KUMAR SONI PORTFOLIO — script.js ===== */

// ── DATA ───────────────────────────────────────────────
const DATA = {
  titles: [
    "Software & DevOps Engineer",
    "Cloud & Automation Specialist",
    "AI-Augmented Developer",
    "Full Stack Engineer",
    "BDD & CI/CD Architect"
  ],

  skills: [
    {
      icon: "💻",
      name: "Programming & Scripting",
      tags: ["Java", "TypeScript", "JavaScript", "Python", "Shell (Bash)"]
    },
    {
      icon: "⚙️",
      name: "Backend & APIs",
      tags: ["Spring Boot", "Microservices", "RESTful APIs", "Event-driven Systems"]
    },
    {
      icon: "☁️",
      name: "Cloud & Platform Engineering",
      tags: ["AWS EC2", "AWS S3", "AWS Lambda", "SNS", "SQS", "IAM", "RDS", "VPC", "CloudWatch"]
    },
    {
      icon: "🛠️",
      name: "DevOps & SRE",
      tags: ["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes", "CI/CD", "Observability", "SonarQube"]
    },
    {
      icon: "🧪",
      name: "Automation & QA Engineering",
      tags: ["BDD", "Cucumber", "Gherkin", "TDD", "Selenium", "API Automation", "Test Framework Design", "Shell Automation"]
    },
    {
      icon: "🗄️",
      name: "Data & Distributed Systems",
      tags: ["SQL", "PostgreSQL", "Oracle", "SQL Server", "Data Validation", "Large-scale Data Processing"]
    },
    {
      icon: "🔐",
      name: "Security & Compliance",
      tags: ["HashiCorp Vault", "CyberArk", "IAM Policies", "Secrets Management", "Secure DevOps"]
    },
    {
      icon: "🤖",
      name: "AI-Augmented Development",
      tags: ["Claude API", "Groq API", "Llama 3.3 70B", "LLM Agent Architecture", "Prompt Engineering", "Streamlit", "GitHub Copilot"]
    },
    {
      icon: "🧰",
      name: "Tools & Version Control",
      tags: ["Git", "Maven", "Gradle", "SonarQube", "Google Apps Script", "Postman"]
    }
  ],

  proficiency: [
    { name: "Java / Spring Boot", pct: 90 },
    { name: "BDD — Cucumber / Gherkin", pct: 88 },
    { name: "AWS Cloud Services", pct: 86 },
    { name: "CI/CD — Jenkins Pipelines", pct: 85 },
    { name: "TypeScript / JavaScript", pct: 83 },
    { name: "Terraform / Ansible (IaC)", pct: 82 },
    { name: "Docker / Kubernetes", pct: 80 },
    { name: "SQL / PostgreSQL / Oracle", pct: 83 },
    { name: "Claude API / LLM Agents", pct: 80 },
    { name: "Python / Shell Scripting", pct: 75 }
  ],

  experience: [
    {
      employer: "Cognizant",
      employerLogo: "logo-cognizant.svg",
      client: "Capital One",
      clientLogo: "logo-capitalone.svg",
      role: "DevOps & Automation Engineer",
      period: "Apr 2024 – Present",
      startDate: "2024-04",
      endDate: null,
      current: true,
      bullets: [
        "Engineered scalable data validation and reconciliation frameworks to process high-volume transactional datasets, improving data integrity across financial systems.",
        "Designed and implemented BDD-based automation frameworks using Cucumber/Gherkin — slashed end-to-end test execution from 1 week to 1 day, enabling same-day feedback across dev, QA, and business teams.",
        "Integrated automated testing pipelines into CI/CD workflows via Jenkins, enabling continuous validation and early defect detection — cutting regression turnaround by 85%.",
        "Architected an event-driven notification pipeline using Shell scripting and AWS (S3, SNS) to automatically trigger stakeholder email alerts post-test execution.",
        "Automated infrastructure provisioning using Terraform and Ansible, improving deployment consistency and eliminating manual configuration steps.",
        "Implemented secure secrets management using HashiCorp Vault and CyberArk — zero hardcoded credentials across all automation pipelines.",
        "Optimized cloud infrastructure across AWS S3, Lambda, SNS, IAM, and VPC for scalability, fault tolerance, and cost-efficiency.",
        "Enabled observability and production monitoring using CloudWatch — performed root cause analysis and incident resolution in high-availability financial systems."
      ],
      aiNotes: [
        "Used Claude to design the end-to-end notification pipeline architecture, evaluate SNS vs SQS vs Lambda trigger patterns, and generate Shell scripts.",
        "Leveraged Claude to generate Terraform module templates, compare IaC patterns, and review scripts for security misconfigurations before deployment.",
        "Consulted Claude to evaluate AWS architecture alternatives and generate IAM policy documents with least-privilege access controls."
      ],
      tech: ["Java", "Cucumber", "Gherkin", "BDD", "Jenkins", "CI/CD", "AWS S3", "Lambda", "SNS", "Terraform", "Ansible", "HashiCorp Vault", "CyberArk", "PostgreSQL", "Oracle", "CloudWatch"]
    },
    {
      employer: "Cognizant",
      employerLogo: "logo-cognizant.svg",
      client: "Ford Motor Company",
      clientLogo: "logo-ford.svg",
      role: "Full Stack Developer",
      period: "Aug 2021 – Mar 2024",
      startDate: "2021-08",
      endDate: "2024-03",
      current: false,
      bullets: [
        "Developed scalable microservices and backend systems using Java and Spring Boot for complex enterprise vehicle configuration and business logic.",
        "Built and optimized RESTful APIs for high-throughput data exchange across distributed systems supporting real-time vehicle feature configuration.",
        "Designed dynamic front-end modules using JavaScript frameworks enabling business teams to toggle vehicle features without code changes.",
        "Improved application performance by optimizing database queries and schema design in SQL Server, reducing query execution time on critical reporting endpoints.",
        "Implemented TDD and automated testing strategies, reducing regression defects in production deployments.",
        "Collaborated with DevOps teams to integrate applications into containerized environments (Docker, Kubernetes) for improved horizontal scaling.",
        "Contributed to CI/CD adoption — enabling automated builds, testing, and deployment pipelines, reducing manual release steps and deployment risk."
      ],
      aiNotes: [],
      tech: ["Java", "Spring Boot", "JavaScript", "REST APIs", "SQL Server", "Microservices", "Docker", "Kubernetes", "TDD", "CI/CD"]
    }
  ],

  projects: [
    {
      title: "Agentic AI Chatbot",
      icon: "🤖",
      tech: ["Python", "Groq API", "Llama 3.3 70B", "Streamlit"],
      github: "https://github.com/rishisoni90/agentic-agent",
      live: null,
      bullets: [
        "Built a full-stack AI chatbot agent using Llama 3.3 70B via Groq API, deployed live on Streamlit Cloud at zero infrastructure cost.",
        "Designed a custom agent architecture with decision logic, conversation memory, and multi-tool integration (calculator, place search) across 5 modular components.",
        "Implemented context-aware conversations by maintaining full message history passed to the LLM on every request — production-grade ChatGPT-style memory.",
        "Engineered message sanitization logic to handle Groq API strict role-alternation constraints for robust production-grade reliability.",
        "Deployed end-to-end at $0 cost using Groq free tier and Streamlit Community Cloud with secrets-based API key management."
      ],
      aiNote: "Used Claude throughout development: to architect the agent loop, compare tool-calling patterns, review sanitization edge cases, and stress-test conversation memory logic."
    },
    {
      title: "AI Resume Analyzer",
      icon: "📄",
      tech: ["Python", "Claude API", "Anthropic SDK", "Streamlit"],
      github: "https://github.com/rishisoni90/resume-analyzer",
      live: null,
      bullets: [
        "Built an AI-powered resume analyzer using Anthropic's Claude API to parse, evaluate, and score resumes against job descriptions in real time.",
        "Designed a multi-prompt pipeline that extracts skills, detects gaps, and generates actionable improvement suggestions using structured Claude outputs.",
        "Integrated PDF parsing and text extraction to support real resume uploads feeding directly into Claude for contextual and semantic analysis.",
        "Implemented a multi-dimensional scoring system rating resume–job description alignment across skills match, experience relevance, and keyword density.",
        "Deployed as an interactive Streamlit app enabling users to upload resumes and receive instant AI-generated feedback."
      ],
      aiNote: "Claude was the core AI engine — used both as the analysis model inside the app AND as the development assistant for designing prompt templates and debugging SDK integrations."
    },
    {
      title: "Automated Post-Execution Notification Pipeline",
      icon: "🔔",
      tech: ["Shell Script", "AWS S3", "AWS SNS", "Jenkins", "CI/CD"],
      github: null,
      live: null,
      bullets: [
        "Designed and built an event-driven notification pipeline that automatically triggers stakeholder email alerts after long-running Jenkins jobs complete.",
        "Implemented a Shell script that captures job start timestamp into a text file, establishing a precise timer baseline for downstream trigger logic.",
        "Engineered a time-based S3 trigger mechanism — checks for a timer file in S3 after a 50-minute interval, ensuring notifications only fire when the full window elapses.",
        "Integrated AWS SNS for automated email dispatch, routing post-execution alerts to stakeholders with zero manual intervention.",
        "Built with production-grade reliability — safe trigger logic prevents duplicate or premature notifications under retry or re-run scenarios."
      ],
      aiNote: "Used Claude to architect the pipeline, generate the Shell script, and evaluate multiple trigger approaches (SNS vs SQS vs Lambda) before landing on the optimal S3 timer-file pattern."
    }
  ]
};

// ── PARTICLES ──────────────────────────────────────────
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.resize();
    this.init();
    this.bindEvents();
    this.loop();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.particles = [];
    const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 14000));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  bindEvents() {
    window.addEventListener("resize", () => { this.resize(); this.init(); });
    window.addEventListener("mousemove", e => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
    window.addEventListener("mouseleave", () => { this.mouse.x = null; this.mouse.y = null; });
  }

  loop() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const color = "108,99,255";

    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${color},${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(() => this.loop());
  }
}

// ── TYPED TEXT ─────────────────────────────────────────
class Typer {
  constructor(el, words) {
    this.el = el;
    this.words = words;
    this.wi = 0;
    this.ci = 0;
    this.deleting = false;
    this.pause = false;
    this.tick();
  }

  tick() {
    const word = this.words[this.wi];
    if (!this.deleting) {
      this.el.textContent = word.slice(0, ++this.ci);
      if (this.ci === word.length) {
        this.pause = true;
        setTimeout(() => { this.pause = false; this.deleting = true; this.schedule(); }, 1800);
        return;
      }
    } else {
      this.el.textContent = word.slice(0, --this.ci);
      if (this.ci === 0) {
        this.deleting = false;
        this.wi = (this.wi + 1) % this.words.length;
      }
    }
    this.schedule();
  }

  schedule() {
    if (this.pause) return;
    const speed = this.deleting ? 50 : 80;
    setTimeout(() => this.tick(), speed + Math.random() * 30);
  }
}

// ── SCROLL SPY ─────────────────────────────────────────
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");
  const nav = document.querySelector("nav");
  const backTop = document.querySelector(".back-top");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    nav.classList.toggle("scrolled", scrollY > 50);
    backTop.classList.toggle("visible", scrollY > 400);

    let current = "";
    sections.forEach(s => {
      if (scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
  }, { passive: true });
}

// ── SCROLL REVEAL ──────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        const fills = e.target.querySelectorAll(".skill-bar-fill[data-pct]");
        fills.forEach(f => {
          setTimeout(() => { f.style.width = f.dataset.pct + "%"; }, 200);
        });
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => observer.observe(el));
}

// ── THEME TOGGLE ───────────────────────────────────────
function initTheme() {
  const btn = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", saved);
  btn.textContent = saved === "dark" ? "☀️" : "🌙";

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    btn.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

// ── MOBILE NAV ─────────────────────────────────────────
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    }
  });
}

// ── CONTACT FORM ───────────────────────────────────────
function initContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = form.querySelector(".form-submit");
    btn.textContent = "Sending…";
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        form.reset();
        toast.textContent = "✅ Message sent! I'll get back to you soon.";
        toast.style.borderColor = "var(--accent-3)";
      } else {
        toast.textContent = "❌ Something went wrong. Please email me directly.";
        toast.style.borderColor = "var(--accent-2)";
      }
    } catch {
      toast.textContent = "❌ Network error. Please try again.";
      toast.style.borderColor = "var(--accent-2)";
    }

    btn.textContent = "Send Message";
    btn.disabled = false;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
  });
}

// ── DURATION HELPER ────────────────────────────────────
function calcDuration(startStr, endStr) {
  const [sy, sm] = startStr.split("-").map(Number);
  let ey, em;
  if (endStr) {
    [ey, em] = endStr.split("-").map(Number);
  } else {
    const now = new Date();
    ey = now.getFullYear();
    em = now.getMonth() + 1;
  }
  let months = (ey - sy) * 12 + (em - sm) + 1;
  const years = Math.floor(months / 12);
  const rem   = months % 12;
  let out = "";
  if (years > 0) out += `${years} yr${years > 1 ? "s" : ""}`;
  if (rem  > 0) out += `${out ? " " : ""}${rem} mo${rem > 1 ? "s" : ""}`;
  return out || "< 1 mo";
}

// ── RENDER SKILLS ──────────────────────────────────────
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = DATA.skills.map((cat, i) => `
    <div class="skill-category reveal" style="transition-delay:${i * 0.06}s">
      <div class="skill-cat-header">
        <div class="skill-cat-icon">${cat.icon}</div>
        <span class="skill-cat-name">${cat.name}</span>
      </div>
      <div class="skill-tags">
        ${cat.tags.map(t => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");

  const profGrid = document.getElementById("proficiency-grid");
  profGrid.innerHTML = DATA.proficiency.map((s, i) => `
    <div class="skill-bar-item reveal" style="transition-delay:${i * 0.05}s">
      <div class="skill-bar-header">
        <span class="skill-bar-name">${s.name}</span>
        <span class="skill-bar-pct">${s.pct}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-pct="${s.pct}"></div>
      </div>
    </div>
  `).join("");
}

// ── RENDER EXPERIENCE ──────────────────────────────────
function renderExperience() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = DATA.experience.map((job, i) => {
    const aiBlock = job.aiNotes.length ? `
      <div class="ai-notes">
        <div class="ai-notes-header"><span class="ai-icon">⚡</span> Claude AI Contributions</div>
        ${job.aiNotes.map(n => `<div class="ai-note-item">${n}</div>`).join("")}
      </div>
    ` : "";

    const cardHTML = `
      <div class="timeline-content ${i % 2 === 0 ? "reveal-right" : "reveal-left"}">
        <div class="timeline-role">${job.role}</div>
        <div class="employer-client-badge">
          <img src="${job.employerLogo}" alt="${job.employer}" class="badge-logo badge-logo--employer" />
          <span class="client-arrow">›</span>
          <span class="client-label">Client:</span>
          <img src="${job.clientLogo}" alt="${job.client}" class="badge-logo badge-logo--client" />
          ${job.current ? '<span class="current-badge">● NOW</span>' : ""}
        </div>
        <ul class="timeline-bullets">
          ${job.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
        ${aiBlock}
        <div class="timeline-tech-tags">
          ${job.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `;

    const duration = calcDuration(job.startDate, job.endDate);
    const metaHTML = `
      <div class="timeline-meta ${i % 2 === 0 ? "reveal-left" : "reveal-right"}">
        <div class="timeline-period">${job.period}</div>
        <div class="timeline-duration">${duration}</div>
        <div class="timeline-meta-logos">
          <img src="${job.employerLogo}" alt="${job.employer}" class="meta-logo meta-logo--employer" />
          <img src="${job.clientLogo}" alt="${job.client}" class="meta-logo meta-logo--client" />
        </div>
      </div>
    `;

    if (i % 2 === 0) {
      return `<div class="timeline-item">${metaHTML}<div class="timeline-dot"><div class="dot-outer"><div class="dot-inner"></div></div></div>${cardHTML}</div>`;
    } else {
      return `<div class="timeline-item">${cardHTML}<div class="timeline-dot"><div class="dot-outer"><div class="dot-inner"></div></div></div>${metaHTML}</div>`;
    }
  }).join("");
}

// ── RENDER PROJECTS ────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = DATA.projects.map((p, i) => `
    <div class="project-card reveal" style="transition-delay:${i * 0.1}s">
      <div class="project-card-header">
        <span class="project-icon">${p.icon}</span>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>` : ""}
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="project-link" title="Live Demo">🔗</a>` : ""}
        </div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <div class="project-tech-tags">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
      <ul class="project-bullets">
        ${p.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
      <div class="project-ai-note">
        <span class="ai-icon">⚡</span> <em>${p.aiNote}</em>
      </div>
    </div>
  `).join("");
}

// ── COUNTER ANIMATION ──────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll(".stat-number[data-target]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(timer);
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ── BACK TO TOP ────────────────────────────────────────
function initBackTop() {
  document.querySelector(".back-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── DOWNLOAD RESUME ────────────────────────────────────
function downloadResume() {
  const link = document.createElement("a");
  link.href = "RISHI_KUMAR_SONI_Resume_v3.docx";
  link.download = "Rishi_Kumar_Soni_Resume.docx";
  link.click();
}

// ── INIT ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particles-canvas");
  if (canvas) new ParticleSystem(canvas);

  const typedEl = document.getElementById("typed-text");
  if (typedEl) new Typer(typedEl, DATA.titles);

  renderSkills();
  renderExperience();
  renderProjects();

  initTheme();
  initScrollSpy();
  initMobileNav();
  initReveal();
  initCounters();
  initContactForm();
  initBackTop();

  // Set Cognizant total tenure dynamically
  const tenureEl = document.getElementById("cognizant-tenure");
  if (tenureEl) {
    tenureEl.textContent = `Aug 2021 – Present · ${calcDuration("2021-08", null)}`;
  }
});
