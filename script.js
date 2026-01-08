/***********************
 * Academic Portal JS
 * - Renders Notes, PYQs, Updates
 * - Search and Filters
 * - Smooth scroll with fixed header offset
 ***********************/

/* ========== Data Section ========== */
const notesData = [
    { 
        id: 1, 
        title: "Mathematics-1 Notes", 
        subject: "mathematics-1", 
        semester: 1, 
        description: "Limits, differentiation, integration, and series with examples.", 
        downloadUrl: "https://drive.google.com/drive/folders/15AjBdZI7flmx6GDwMIlUjoYcf2Y1eTSU?usp=drive_link", 
        viewUrl: "https://drive.google.com/drive/folders/15AjBdZI7flmx6GDwMIlUjoYcf2Y1eTSU?usp=drive_link",
        uploadDate: "2025-07-15",
        fileSize: "1.2 MB"
    },
    {
        id: 2,
        title: "Physics-1 Notes",
        subject: "Physics-1",
        semester: 1,
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
        semester: 1,
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
        semester: 1,
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
        semester: 1,
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
        semester: 1,
        description: "Semiconductors, diodes, transistors, basic circuits and applications.",
        downloadUrl: "https://drive.google.com/drive/folders/1-VeW2ymPHykaVmDkz_BzwofkfM39zAfv?usp=drive_link",
        viewUrl: "https://drive.google.com/drive/folders/1-VeW2ymPHykaVmDkz_BzwofkfM39zAfv?usp=drive_link",
        uploadDate: "2025-07-20",
        fileSize: "950 KB"
    },
    {
        id: 9,
        title: "Microprocessor",
        subject: "Microprocessor",
        semester: 2,
        description: "Architecture, instruction set, addressing modes, and interfacing basics.",
        downloadUrl: "#",
        viewUrl: "#",
        uploadDate: "2025-08-10",
        fileSize: "1.5 MB"
    },
    {
        id: 10,
        title: "Advance Excel",
        subject: "Advance Excel",
        semester: 2,
        description: "Formulas, pivot tables, charts, Power Query, and automation tips.",
        downloadUrl: "#",
        viewUrl: "#",
        uploadDate: "2025-08-11",
        fileSize: "1.0 MB"
    }
];

const pyqData = [
    {
        id: 1,
        title: "Sem 1 Final Paper",
        subject: "Common Subjects",
        semester: 1,
        year: "2024",
        exam: "First Sem",
        description: "Complete First Semester PYQ set.",
        downloadUrl: "https://drive.google.com/file/d/1-AEYzkwqN6NbFngJloTwdwAasBGkFMZ2/view?usp=drive_link",
        viewUrl: "https://drive.google.com/file/d/1-AEYzkwqN6NbFngJloTwdwAasBGkFMZ2/view?usp=drive_link"
    }
];

const updatesData = [
    { id: 1, title: "Semester Registration", content: "Registration open until Oct 15, 2025.", date: "2025-09-23", priority: "high" }
];

/* ========== DOM References ========== */
let hamburger, navMenu, searchInput, searchBtn, notesGrid, pyqGrid, updatesGrid, yearSelect;
let activeNoteSemester = 'all';
let activePyqSemester = 'all';

/* ========== Initialization ========== */
document.addEventListener('DOMContentLoaded', () => {
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('nav-menu');
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    notesGrid = document.getElementById('notesGrid');
    pyqGrid = document.getElementById('pyqGrid');
    updatesGrid = document.getElementById('updatesGrid');
    yearSelect = document.getElementById('yearSelect');

    setupEventListeners();
    renderNotes(notesData);
    renderPYQs(pyqData);
    renderUpdates(updatesData);
    addBackToTop();
});

/* ========== Event Listeners ========== */
function setupEventListeners() {
    // Semester Filtering for Notes and PYQs
    document.querySelectorAll('.seg-controls').forEach(group => {
        const target = group.dataset.target;
        group.querySelectorAll('.seg-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                group.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const sem = btn.dataset.sem === 'all' ? 'all' : parseInt(btn.dataset.sem);
                
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

    // Mobile Navigation
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Search Logic
    if (searchInput) {
        searchInput.addEventListener('input', debounce(() => handleSearch(), 300));
    }

    // Category Tabs for Notes
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            applyAllFiltersAndRenderNotes();
        });
    });

    attachSmoothScroll();
}

/* ========== Search & Filters ========== */
function handleSearch() {
    const q = searchInput.value.toLowerCase().trim();
    
    const filteredNotes = notesData.filter(n => {
        const matchesSearch = n.title.toLowerCase().includes(q) || n.subject.toLowerCase().includes(q);
        const matchesSem = activeNoteSemester === 'all' || n.semester === activeNoteSemester;
        return matchesSearch && matchesSem;
    });

    renderNotes(filteredNotes);
}

function applyAllFiltersAndRenderNotes() {
    const activeTab = document.querySelector('.tab-btn.active');
    const category = activeTab ? activeTab.dataset.category : 'all';
    
    let filtered = notesData;
    if (category !== 'all') filtered = filtered.filter(n => n.subject === category);
    if (activeNoteSemester !== 'all') filtered = filtered.filter(n => n.semester === activeNoteSemester);
    
    renderNotes(filtered);
}

function applyAllFiltersAndRenderPyqs() {
    let filtered = pyqData;
    if (activePyqSemester !== 'all') filtered = filtered.filter(p => p.semester === activePyqSemester);
    renderPYQs(filtered);
}

/* ========== Renderers ========== */
function renderNotes(notes) {
    if (!notesGrid) return;
    if (notes.length === 0) {
        notesGrid.innerHTML = emptyState("No notes found", "Try another filter.");
        return;
    }

    notesGrid.innerHTML = notes.map(note => `
        <div class="note-card">
            <div class="card-header">
                <div class="card-icon"><i class="fas fa-book-open"></i></div>
                <div>
                    <h3 class="card-title">${escapeHtml(note.title)}</h3>
                    <div class="card-meta">
                        <span><i class="fas fa-calendar"></i> ${formatDate(note.uploadDate)}</span>
                        <span>Sem ${note.semester}</span>
                    </div>
                </div>
            </div>
            <p class="card-description">${escapeHtml(note.description)}</p>
            <div class="card-actions">
                <a href="${note.downloadUrl}" target="_blank" class="btn-small btn-download ${note.downloadUrl === '#' ? 'disabled' : ''}">
                    <i class="fas fa-download"></i> ${note.downloadUrl === '#' ? 'Coming Soon' : 'Download'}
                </a>
                <a href="${note.viewUrl}" target="_blank" class="btn-small btn-view ${note.viewUrl === '#' ? 'disabled' : ''}">
                    <i class="fas fa-eye"></i> Preview
                </a>
            </div>
        </div>
    `).join('');
    animateCards('.note-card');
}

function renderPYQs(pyqs) {
    if (!pyqGrid) return;
    pyqGrid.innerHTML = pyqs.map(pyq => `
        <div class="pyq-card">
            <div class="card-header">
                <div class="card-icon"><i class="fas fa-file-alt"></i></div>
                <div>
                    <h3 class="card-title">${escapeHtml(pyq.title)}</h3>
                    <div class="card-meta">
                        <span>${pyq.year}</span> | <span>Sem ${pyq.semester}</span>
                    </div>
                </div>
            </div>
            <div class="card-actions">
                <a href="${pyq.downloadUrl}" target="_blank" class="btn-small btn-download"><i class="fas fa-download"></i> Download</a>
            </div>
        </div>
    `).join('');
}

function renderUpdates(updates) {
    if (!updatesGrid) return;
    updatesGrid.innerHTML = updates.map(u => `
        <div class="update-card">
            <h4>${u.title}</h4>
            <p>${u.content}</p>
        </div>
    `).join('');
}

/* ========== Utilities ========== */
function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function debounce(fn, wait) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function animateCards(selector) {
    document.querySelectorAll(selector).forEach((card, i) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease';
            card.style.opacity = '1';
        }, i * 50);
    });
}

function emptyState(title, message) {
    return `<div class="no-results"><h3>${title}</h3><p>${message}</p></div>`;
}

function attachSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });
}

function addBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'back-to-top';
    Object.assign(btn.style, { position: 'fixed', bottom: '20px', right: '20px', display: 'none', padding: '10px 15px', borderRadius: '50%', cursor: 'pointer', zIndex: '1000' });
    document.body.appendChild(btn);
    window.onscroll = () => btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}
