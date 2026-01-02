 const notesData = [
   
    {
      id: 1,
      title: "Mathematics-1",
      subject: "Mathematics-1",
      semester: "1",
      description: "Limits, differentiation, integration, and series with examples.",
      downloadUrl: "https://drive.google.com/drive/folders/15AjBdZI7flmx6GDwMIlUjoYcf2Y1eTSU?usp=drive_link",
      viewUrl: "https://drive.google.com/drive/folders/15AjBdZI7flmx6GDwMIlUjoYcf2Y1eTSU?usp=drive_link",
      uploadDate: "2025-07-15",
      fileSize: "1.2 MB"
    },
    {
      id: 2,
      title: "Physics-1",
      subject: "Physics-1",
      semester: "1",
      description: "Mechanics, waves, optics basics with derivations and numericals.",
      downloadUrl: "https://drive.google.com/drive/folders/18wTiyF310vpw6zlWxPxec8hpNNcC-k3E?usp=drive_link",
      viewUrl: "https://drive.google.com/drive/folders/18wTiyF310vpw6zlWxPxec8hpNNcC-k3E?usp=drive_link",
      uploadDate: "2025-07-16",
      fileSize: "1.0 MB"
    },
    {
      id: 3,
      title: "Fundamentals of Programming",
      subject: "Fundamentals of Programming",
      semester: "1",
      description: "Variables, control flow, functions, arrays, and simple problems.",
      downloadUrl: "https://drive.google.com/drive/folders/1MexdJhE10cOxlcESGd7llKuNSdlL0RRD?usp=drive_link",
      viewUrl: "https://drive.google.com/drive/folders/1MexdJhE10cOxlcESGd7llKuNSdlL0RRD?usp=drive_link",
      uploadDate: "2025-07-17",
      fileSize: "900 KB"
    },
    {
      id: 4,
      title: "Descriptive Statistics",
      subject: "Descriptive Statistics",
      semester: "1",
      description: "Mean, median, mode, variance, visualization, and data summaries.",
      downloadUrl: "https://drive.google.com/drive/folders/1-oXkJACVUtBf0-PNAuzruc8XP9hVHj_e?usp=drive_link",
      viewUrl: "https://drive.google.com/drive/folders/1-oXkJACVUtBf0-PNAuzruc8XP9hVHj_e?usp=drive_link",
      uploadDate: "2025-07-18",
      fileSize: "800 KB"
    },
    {
      id: 5,
      title: "Introduction to Computer Science",
      subject: "Introduction to Computer Science",
      semester: "1",
      description: "Computers, OS, networks, algorithms, data, and real-world applications.",
      downloadUrl: "https://drive.google.com/drive/folders/1SckE3hbwwyGiviOCImzYVsDSI715_BuT?usp=drive_link",
      viewUrl: "https://drive.google.com/drive/folders/1SckE3hbwwyGiviOCImzYVsDSI715_BuT?usp=drive_link",
      uploadDate: "2025-07-19",
      fileSize: "1.1 MB"
    },
    {
      id: 6,
      title: "Fundamentals of Electronics",
      subject: "Fundamentals of Electronics",
      semester: "1",
      description: "Semiconductors, diodes, transistors, basic circuits and applications.",
      downloadUrl: "https://drive.google.com/drive/folders/1-VeW2ymPHykaVmDkz_BzwofkfM39zAfv?usp=drive_link",
      uploadDate: "2025-07-20",
      fileSize: "950 KB"
    },
   
    {
      id: 9,
      title: "Microprocessor",
      subject: "Microprocessor",
      semester: "2",
      description: "Architecture, instruction set, addressing modes, and interfacing basics.",
      downloadUrl: "",
      viewUrl: "",
      uploadDate: "2025-08-10",
      fileSize: "1.5 MB"
    },
    {
      id: 10,
      title: "Advance Excel",
      subject: "Advance Excel",
      semester: "2",
      description: "Formulas, pivot tables, charts, Power Query, and automation tips.",
      downloadUrl: "",
      viewUrl: "",
      uploadDate: "2025-08-11",
      fileSize: "1.0 MB"
    },
    {
      id: 11,
      title: "Communication skills",
      subject: "Communication skills",
      semester: "2",
      description: "Written, verbal, presentation, and professional etiquette essentials.",
      downloadUrl: "",
      viewUrl: "",
      uploadDate: "2025-08-12",
      fileSize: "700 KB"
    },
    {
      id: 12,
      title: "Mathematics-II",
      subject: "Mathematics-II",
      semester: "2",
      description: "Differential equations, Laplace transforms, and vector calculus.",
      downloadUrl: "",
      viewUrl: "",
      uploadDate: "2025-08-13",
      fileSize: "1.3 MB"
    },
    {
      id: 13,
      title: "Physics-II",
      subject: "Physics-II",
      semester: "2",
      description: "Electricity, magnetism, modern physics, and semiconductor basics.",
      downloadUrl: "",
      viewUrl: "",
      uploadDate: "2025-08-14",
      fileSize: "1.1 MB"
    },
    {
      id: 14,
      title: "Indian Knowledge system",
      subject: "Indian Knowledge system",
      semester: "2",
      description: "Overview of traditional knowledge frameworks and applications.",
      downloadUrl: "",
      viewUrl: "",
      uploadDate: "2025-08-15",
      fileSize: "600 KB"
    }
  ];
  
  const pyqData = [
    {
      id: 1,
      title: "Sem 1",
      subject: "Sem 1",
      semester: "1",
      year: "2024",
      exam: "Firt Sem",
      description: "First Semester PYQ'a",
      downloadUrl: "https://drive.google.com/file/d/1-AEYzkwqN6NbFngJloTwdwAasBGkFMZ2/view?usp=drive_link",
      viewUrl: "https://drive.google.com/file/d/1-AEYzkwqN6NbFngJloTwdwAasBGkFMZ2/view?usp=drive_link"
      }
  ];
  
  const updatesData = [
    {
      id: 1,
      title: "New Semester Registration Open",
      content: "Complete course registration by Oct 15, 2025. Late fee applies after the deadline.",
      date: "2025-09-23",
      priority: "high"
    },
    {
      id: 2,
      title: "Lab Timetable Published",
      content: "Updated lab slots for CSE and ECE are now available on the notice board.",
      date: "2025-09-20",
      priority: "medium"
    },
    {
      id: 3,
      title: "Library Extended Hours",
      content: "Library open 24/7 during exam week with extra group study rooms.",
      date: "2025-09-18",
      priority: "low"
    }
  ];
  
  let hamburger, navMenu, searchInput, searchBtn, notesGrid, pyqGrid, updatesGrid, yearSelect;
  let activeNoteSemester = 'all';
  let activePyqSemester = 'all';
  
  document.addEventListener('DOMContentLoaded', () => {
   
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('nav-menu');
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    notesGrid = document.getElementById('notesGrid');
    pyqGrid = document.getElementById('pyqGrid');
    updatesGrid = document.getElementById('updatesGrid');
    yearSelect = document.getElementById('yearSelect');
  
   
    console.log('script loaded, DOM ready');
    console.log('containers:', { notesGrid, pyqGrid, updatesGrid });
  
    setupEventListeners();
    renderNotes(notesData);
    renderPYQs(pyqData);
    renderUpdates(updatesData);
    observeSections();
    addBackToTop();

    
    const highlightCards = document.querySelectorAll('#highlights .highlight-card');
    highlightCards.forEach(card => {
      const ensureToast = () => {
        let toast = card.querySelector('.highlight-toast');
        if (!toast) {
          toast = document.createElement('div');
          toast.className = 'highlight-toast';
          card.appendChild(toast);
        }
        return toast;
      };

      card.addEventListener('mouseenter', () => {
        
        card.classList.remove('blinking');
        
        card.offsetHeight;
        card.classList.add('blinking');

        const titleEl = card.querySelector('h3');
        const message = titleEl ? titleEl.textContent : '';
        const toast = ensureToast();
        toast.textContent = message;
        toast.classList.add('show');
      });

      card.addEventListener('mouseleave', () => {
        const toast = card.querySelector('.highlight-toast');
        if (toast) toast.classList.remove('show');
        card.classList.remove('blinking');
      });
    });
  });
  
 
  function setupEventListeners() {
    
    document.querySelectorAll('.seg-controls').forEach(group => {
      const target = group.dataset.target;
      group.querySelectorAll('.seg-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          group.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const sem = btn.dataset.sem || 'all';
          if (target === 'notes') {
            activeNoteSemester = sem;
            applyAllFiltersAndRenderNotes();
          } else if (target === 'pyqs') {
            activePyqSemester = sem;
            applyAllFiltersAndRenderPyqs();
          }
        });
      });
    });
  
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
    }
  
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu && navMenu.classList.remove('active');
        hamburger && hamburger.classList.remove('active');
      });
    });
  
     
   
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const category = e.currentTarget.dataset.category || 'all';
        filterNotes(category);
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
      });
    });
  
    if (yearSelect) {
      yearSelect.addEventListener('change', e => {
        filterPYQs(e.target.value);
      });
    }
  
   
    attachSmoothScroll();
  }
  
 
  function getHeaderOffset() {
    const header = document.querySelector('.header');
    return header ? header.offsetHeight : 0;
  }
  
  function smoothScrollTo(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const offset = getHeaderOffset();
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = rect.top + scrollTop - offset;
  
    window.scrollTo({ top, behavior: 'smooth' });
  }
  
  function attachSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) {
          e.preventDefault();
          smoothScrollTo(href);
        }
      });
    });
  
    // Handle direct hash on load
    if (location.hash && document.querySelector(location.hash)) {
      setTimeout(() => smoothScrollTo(location.hash), 0);
    }
  }
  
  /* ========== Search and Filters ========== */
  function handleSearch() {
    if (!searchInput) return;
    const q = searchInput.value.toLowerCase().trim();
  
    let baseNotes = notesData;
    if (activeNoteSemester !== 'all') {
      baseNotes = baseNotes.filter(n => n.semester === activeNoteSemester);
    }
    const filteredNotes = q
      ? baseNotes.filter(n =>
          n.title.toLowerCase().includes(q) ||
          n.description.toLowerCase().includes(q) ||
          n.subject.toLowerCase().includes(q)
        )
      : baseNotes;
  
    let basePyqs = pyqData;
    if (activePyqSemester !== 'all') {
      basePyqs = basePyqs.filter(p => p.semester === activePyqSemester);
    }
    const filteredPYQs = q
      ? basePyqs.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.subject.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        )
      : basePyqs;
  
    renderNotes(filteredNotes);
    renderPYQs(filteredPYQs);
  }
  
  function filterNotes(category) {
    let list = notesData;
    if (category !== 'all') list = list.filter(n => n.subject === category);
    if (activeNoteSemester !== 'all') list = list.filter(n => n.semester === activeNoteSemester);
    renderNotes(list);
  }
  
  function filterPYQs(year) {
    let list = pyqData;
    if (year !== 'all') list = list.filter(p => p.year === year);
    if (activePyqSemester !== 'all') list = list.filter(p => p.semester === activePyqSemester);
    renderPYQs(list);
  }

  function applyAllFiltersAndRenderNotes() {
    const activeTab = document.querySelector('.tab-btn.active');
    const cat = activeTab ? (activeTab.dataset.category || 'all') : 'all';
    filterNotes(cat);
  }

  function applyAllFiltersAndRenderPyqs() {
    const year = yearSelect ? (yearSelect.value || 'all') : 'all';
    filterPYQs(year);
  }
  
  /* ========== Renderers ========== */
  function renderNotes(notes) {
    if (!notesGrid) return;
    if (!notes || notes.length === 0) {
      notesGrid.innerHTML = emptyState("No notes found", "Try adjusting your search or filters.");
      return;
    }
  
    notesGrid.innerHTML = notes.map(note => `
      <div class="note-card" data-subject="${note.subject}">
        <div class="card-header">
          <div class="card-icon"><i class="fas fa-book-open"></i></div>
          <div>
            <h3 class="card-title">${escapeHtml(note.title)}</h3>
            <div class="card-meta">
              <span><i class="fas fa-calendar"></i> ${formatDate(note.uploadDate)}</span>
              <span><i class="fas fa-file-alt"></i> ${escapeHtml(note.fileSize)}</span>
            </div>
          </div>
        </div>
        <p class="card-description">${escapeHtml(note.description)}</p>
        <div class="card-actions">
          <a href="${note.downloadUrl}" class="btn-small btn-download"><i class="fas fa-download"></i> Download</a>
          <a href="${note.viewUrl}" class="btn-small btn-view"><i class="fas fa-eye"></i> Preview</a>
        </div>
      </div>
    `).join('');
  
    animateCards('.note-card');
  }
  
  function renderPYQs(pyqs) {
    if (!pyqGrid) return;
    if (!pyqs || pyqs.length === 0) {
      pyqGrid.innerHTML = emptyState("No question papers found", "Try selecting a different year or search term.");
      return;
    }
  
    pyqGrid.innerHTML = pyqs.map(pyq => `
      <div class="pyq-card">
        <div class="card-header">
          <div class="card-icon"><i class="fas fa-file-alt"></i></div>
          <div>
            <h3 class="card-title">${escapeHtml(pyq.title)}</h3>
            <div class="card-meta">
              <span><i class="fas fa-graduation-cap"></i> ${escapeHtml(pyq.subject)}</span>
              <span><i class="fas fa-calendar-alt"></i> ${escapeHtml(pyq.year)} - ${escapeHtml(pyq.exam)}</span>
            </div>
          </div>
        </div>
        <p class="card-description">${escapeHtml(pyq.description)}</p>
        <div class="card-actions">
          <a href="${pyq.downloadUrl}" class="btn-small btn-download"><i class="fas fa-download"></i> Download</a>
          <a href="${pyq.viewUrl}" class="btn-small btn-view"><i class="fas fa-eye"></i> View</a>
        </div>
      </div>
    `).join('');
  
    animateCards('.pyq-card');
  }
  
  function renderUpdates(updates) {
    if (!updatesGrid) return;
    if (!updates || updates.length === 0) {
      updatesGrid.innerHTML = emptyState("No updates yet", "Check back later for announcements.");
      return;
    }
  
    updatesGrid.innerHTML = updates.map(update => `
      <div class="update-card">
        <div class="update-date"><i class="fas fa-clock"></i> ${formatDate(update.date)}</div>
        <h3 class="update-title">${escapeHtml(update.title)}</h3>
        <p class="update-content">${escapeHtml(update.content)}</p>
        <span class="update-priority priority-${update.priority}">${update.priority.toUpperCase()} PRIORITY</span>
      </div>
    `).join('');
  
    animateCards('.update-card');
  }
  
 
  function formatDate(dateString) {
    const date = new Date(dateString);
    const opts = { year: 'numeric', month: 'long', day: 'numeric' };
    return isNaN(date) ? dateString : date.toLocaleDateString('en-US', opts);
  }
  
  function debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }
  
  function animateCards(selector) {
    document.querySelectorAll(selector).forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 80);
    });
  }
  
  function emptyState(title, message) {
    return `
      <div class="no-results" style="text-align:center;padding:2rem;background:#fff;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,0.06);">
        <h3 style="margin-bottom:0.5rem;">${escapeHtml(title)}</h3>
        <p style="color:#666;">${escapeHtml(message)}</p>
      </div>
    `;
  }
  
  function escapeHtml(s) {
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
  

  function observeSections() {
    const sections = document.querySelectorAll('.section');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
    sections.forEach(sec => {
      sec.style.opacity = '0';
      sec.style.transform = 'translateY(30px)';
      sec.style.transition = 'all 0.8s ease';
      obs.observe(sec);
    });
  }
  
  function addBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'back-to-top';
    btn.style.cssText = `
      position: fixed; bottom: 20px; right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white; border: none; border-radius: 50%;
      width: 50px; height: 50px; font-size: 20px; cursor: pointer;
      opacity: 0; transition: all 0.3s ease; z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(btn);
  
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        btn.style.opacity = '1';
        btn.style.transform = 'scale(1)';
      } else {
        btn.style.opacity = '0';
        btn.style.transform = 'scale(0.8)';
      }
    });
  
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
