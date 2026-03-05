/* ============================================
   薬物動態アカデミー - Main Application
   localStorage prefix: pk-
   ============================================ */
const App = {
    levels: [],
    allModules: [],
    progress: {},
    quizResults: {},
    currentModuleId: null,

    init() {
        this.levels = [
            typeof LEVEL1_DATA !== 'undefined' ? LEVEL1_DATA : null,
            typeof LEVEL2_DATA !== 'undefined' ? LEVEL2_DATA : null,
            typeof LEVEL3_DATA !== 'undefined' ? LEVEL3_DATA : null,
            typeof LEVEL4_DATA !== 'undefined' ? LEVEL4_DATA : null,
            typeof LEVEL5_DATA !== 'undefined' ? LEVEL5_DATA : null,
            typeof LEVEL6_DATA !== 'undefined' ? LEVEL6_DATA : null
        ].filter(Boolean);

        this.allModules = [];
        this.levels.forEach(level => {
            if (level.modules) {
                level.modules.forEach(m => this.allModules.push(m));
            }
        });

        this.loadProgress();
        this.loadQuizResults();
        this.loadDarkMode();
        this.renderSidebar();
        this.showDashboard();
        this.updateGlobalProgress();
    },

    // ---- Dark Mode ----
    loadDarkMode() {
        const dark = localStorage.getItem('pk-darkmode');
        if (dark === 'true') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    },

    toggleDarkMode() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('pk-darkmode', 'false');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('pk-darkmode', 'true');
        }
    },

    // ---- Progress ----
    loadProgress() {
        try {
            const saved = localStorage.getItem('pk-progress');
            this.progress = saved ? JSON.parse(saved) : {};
        } catch (e) {
            this.progress = {};
        }
    },

    saveProgress() {
        localStorage.setItem('pk-progress', JSON.stringify(this.progress));
    },

    loadQuizResults() {
        try {
            const saved = localStorage.getItem('pk-quiz-results');
            this.quizResults = saved ? JSON.parse(saved) : {};
        } catch (e) {
            this.quizResults = {};
        }
    },

    saveQuizResult(moduleId, result) {
        this.quizResults[moduleId] = result;
        localStorage.setItem('pk-quiz-results', JSON.stringify(this.quizResults));
    },

    completeModule(moduleId) {
        this.progress[moduleId] = true;
        this.saveProgress();
        this.renderSidebar();
        this.updateGlobalProgress();
    },

    resetProgress() {
        if (!confirm('全ての学習進捗をリセットしますか？')) return;
        this.progress = {};
        this.quizResults = {};
        localStorage.removeItem('pk-progress');
        localStorage.removeItem('pk-quiz-results');
        this.renderSidebar();
        this.updateGlobalProgress();
        this.showDashboard();
    },

    // ---- Global Progress ----
    updateGlobalProgress() {
        const total = this.allModules.length;
        if (total === 0) return;
        const completed = this.allModules.filter(m => this.progress[m.id]).length;
        const pct = Math.round((completed / total) * 100);
        const fill = document.getElementById('globalProgressFill');
        const text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = pct + '% 完了';
    },

    // ---- Sidebar ----
    renderSidebar() {
        const nav = document.getElementById('sidebarNav');
        if (!nav) return;
        let html = '';
        this.levels.forEach((level, idx) => {
            const levelModules = level.modules || [];
            const completedCount = levelModules.filter(m => this.progress[m.id]).length;
            const isExpanded = levelModules.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-section">
                <div class="sidebar-level-header" onclick="App.toggleLevel(${idx})">
                    <div class="level-info">
                        <span class="level-icon">${level.icon || '📘'}</span>
                        <span>${level.title}</span>
                    </div>
                    <span class="chevron ${isExpanded ? 'expanded' : ''}" id="chevron-${idx}">▶</span>
                </div>
                <div class="sidebar-modules ${isExpanded ? 'expanded' : ''}" id="level-modules-${idx}">`;
            levelModules.forEach(m => {
                const isActive = m.id === this.currentModuleId;
                const isCompleted = this.progress[m.id];
                html += `<div class="sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" onclick="App.showModule(${m.id})">
                    <span class="status-dot ${isCompleted ? 'completed' : (isActive ? 'in-progress' : '')}"></span>
                    <span>${m.title}</span>
                </div>`;
            });
            html += `</div></div>`;
        });
        nav.innerHTML = html;
    },

    toggleLevel(idx) {
        const modules = document.getElementById(`level-modules-${idx}`);
        const chevron = document.getElementById(`chevron-${idx}`);
        if (modules) modules.classList.toggle('expanded');
        if (chevron) chevron.classList.toggle('expanded');
    },

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('open');
    },

    // ---- Views ----
    hideAllViews() {
        ['dashboardView', 'moduleView', 'quizView', 'referenceView'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
    },

    showDashboard() {
        this.currentModuleId = null;
        this.hideAllViews();
        document.getElementById('dashboardView').style.display = 'block';
        this.renderDashboard();
        this.renderSidebar();
    },

    renderDashboard() {
        const total = this.allModules.length;
        const completed = this.allModules.filter(m => this.progress[m.id]).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const quizCount = Object.keys(this.quizResults).length;
        const avgScore = quizCount > 0
            ? Math.round(Object.values(this.quizResults).reduce((sum, r) => sum + r.percentage, 0) / quizCount)
            : 0;

        let html = `<div class="fade-in">
            <div class="dashboard-hero">
                <h2>薬物動態アカデミーへようこそ</h2>
                <p>ADME（吸収・分布・代謝・排泄）の基礎から臨床応用まで、薬物動態学を体系的に学べる総合学習プラットフォームです。</p>
                ${completed === total && total > 0 ? '<p style="margin-top:10px;font-weight:700;">🎉 薬物動態の全範囲を学習しました。</p>' : ''}
            </div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${total}</div><div class="stat-label">総モジュール数</div></div>
                <div class="stat-card"><div class="stat-value">${completed}</div><div class="stat-label">完了モジュール</div></div>
                <div class="stat-card"><div class="stat-value">${pct}%</div><div class="stat-label">全体進捗</div></div>
                <div class="stat-card"><div class="stat-value">${avgScore > 0 ? avgScore + '%' : '-'}</div><div class="stat-label">平均スコア</div></div>
            </div>
            <h3 style="margin-bottom:16px;font-size:1.15rem;">学習レベル一覧</h3>`;

        this.levels.forEach(level => {
            const modules = level.modules || [];
            const lCompleted = modules.filter(m => this.progress[m.id]).length;
            const lPct = modules.length > 0 ? Math.round((lCompleted / modules.length) * 100) : 0;
            html += `<div class="level-card" onclick="App.showModule(${modules.length > 0 ? modules[0].id : 0})">
                <h3>${level.icon || '📘'} ${level.title}</h3>
                <p>${level.description || ''}</p>
                <div class="level-progress-bar"><div class="level-progress-fill" style="width:${lPct}%"></div></div>
                <div class="level-meta"><span>${lCompleted} / ${modules.length} 完了</span><span>${lPct}%</span></div>
            </div>`;
        });

        html += '</div>';
        document.getElementById('dashboardView').innerHTML = html;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId);
        if (!mod) return;
        this.currentModuleId = moduleId;
        this.hideAllViews();
        document.getElementById('moduleView').style.display = 'block';
        this.renderModule(mod);
        this.renderSidebar();
    },

    renderModule(mod) {
        const level = this.levels.find(l => l.modules && l.modules.some(m => m.id === mod.id));
        const levelTitle = level ? level.title : '';
        const prevMod = this.allModules[this.allModules.indexOf(mod) - 1];
        const nextMod = this.allModules[this.allModules.indexOf(mod) + 1];

        let html = `<div class="fade-in">
            <div class="module-header">
                <div class="module-breadcrumb">
                    <a onclick="App.showDashboard()">ホーム</a> / ${levelTitle} / ${mod.title}
                </div>
                <h1 class="module-title">${mod.title}</h1>
            </div>
            <div class="module-body">${mod.content || ''}</div>
            <div class="module-nav">
                <div>${prevMod ? `<button class="btn btn-outline" onclick="App.showModule(${prevMod.id})">← ${prevMod.title}</button>` : ''}</div>
                <div>
                    ${mod.quiz && mod.quiz.length > 0 ? `<button class="btn btn-primary" onclick="App.startQuiz(${mod.id})">理解度チェック →</button>` : ''}
                    ${!mod.quiz || mod.quiz.length === 0 ? (nextMod ? `<button class="btn btn-primary" onclick="App.completeAndNext(${mod.id})">完了して次へ →</button>` : `<button class="btn btn-success" onclick="App.completeModule(${mod.id}); App.showDashboard();">完了</button>`) : ''}
                </div>
            </div>
        </div>`;
        document.getElementById('moduleView').innerHTML = html;
    },

    completeAndNext(moduleId) {
        this.completeModule(moduleId);
        this.goToNextModule(moduleId);
    },

    startQuiz(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId);
        if (!mod || !mod.quiz) return;
        this.hideAllViews();
        document.getElementById('quizView').style.display = 'block';
        Quiz.start(moduleId, mod.quiz);
    },

    goToNextModule(currentModuleId) {
        const currentIdx = this.allModules.findIndex(m => m.id === currentModuleId);
        if (currentIdx >= 0 && currentIdx < this.allModules.length - 1) {
            this.showModule(this.allModules[currentIdx + 1].id);
        } else {
            this.showDashboard();
        }
    },

    // ---- Reference / Glossary ----
    showReference() {
        this.currentModuleId = null;
        this.hideAllViews();
        document.getElementById('referenceView').style.display = 'block';
        this.renderReference();
        this.renderSidebar();
    },

    renderReference(filter = '') {
        const glossary = [
            {
                category: '基礎概念',
                terms: [
                    { term: 'ADME', def: '薬物の体内動態を表す4つのプロセス：吸収（Absorption）、分布（Distribution）、代謝（Metabolism）、排泄（Excretion）の頭文字。' },
                    { term: '薬物動態学（PK）', def: '薬物が体内でどのように移動・変化するかを時間経過とともに定量的に解析する学問分野。' },
                    { term: '薬力学（PD）', def: '薬物が生体に及ぼす効果やその作用機序を研究する学問分野。PK/PD解析では薬物動態と薬力学を統合的に評価する。' },
                    { term: 'コンパートメントモデル', def: '体内を1つまたは複数の均一な区画（コンパートメント）に分けて薬物動態を数学的にモデル化する手法。' }
                ]
            },
            {
                category: '吸収・分布',
                terms: [
                    { term: 'バイオアベイラビリティ', def: '投与された薬物が全身循環に到達する割合。経口投与では初回通過効果により低下することがある。F値として表される。' },
                    { term: '初回通過効果', def: '経口投与された薬物が全身循環に入る前に、消化管壁や肝臓で代謝を受けて薬物量が減少する現象。' },
                    { term: '分布容積（Vd）', def: '体内の薬物総量を血中濃度で割った見かけの容積。薬物が体内でどの程度広く分布するかの指標。' },
                    { term: '血漿タンパク結合', def: '薬物が血漿中のアルブミンやα1-酸性糖タンパクなどに結合すること。結合型は薬理活性を持たず、遊離型のみが作用を発揮する。' }
                ]
            },
            {
                category: '代謝・排泄',
                terms: [
                    { term: 'CYP450', def: 'シトクロムP450酵素群。肝臓に多く存在し、薬物代謝のPhase I反応を主に担当する。CYP3A4, CYP2D6, CYP2C9などのアイソザイムがある。' },
                    { term: 'Phase I反応', def: '酸化・還元・加水分解により薬物を修飾する代謝反応。主にCYP450酵素が関与する。' },
                    { term: 'Phase II反応', def: 'グルクロン酸抱合、硫酸抱合、アセチル化などにより薬物の水溶性を高める代謝反応。' },
                    { term: '腎クリアランス', def: '単位時間あたりに腎臓によって薬物が除去される血漿の容量。糸球体ろ過、尿細管分泌、再吸収のバランスで決まる。' },
                    { term: '腸肝循環', def: '胆汁中に排泄された薬物が腸管で再吸収され、門脈を経て肝臓に戻る循環。薬物の作用持続時間を延長させる。' }
                ]
            },
            {
                category: 'PKパラメータ',
                terms: [
                    { term: 'AUC', def: '血中濃度-時間曲線下面積（Area Under the Curve）。薬物の全身曝露量を表す重要なパラメータ。' },
                    { term: 'Cmax', def: '最高血中濃度。投与後に到達する薬物の血中濃度の最大値。' },
                    { term: 'Tmax', def: '最高血中濃度到達時間。投与後にCmaxに到達するまでの時間。吸収速度の指標。' },
                    { term: '消失半減期（t1/2）', def: '血中の薬物濃度が半分に低下するまでの時間。投与間隔の設定に重要。' },
                    { term: 'クリアランス（CL）', def: '単位時間あたりに薬物が除去される血漿の見かけの容量。薬物排泄能力の指標。' },
                    { term: '定常状態', def: '反復投与において薬物の投与速度と消失速度が等しくなり、血中濃度が一定範囲で推移する状態。通常、半減期の4〜5倍の時間で到達。' }
                ]
            },
            {
                category: '臨床応用',
                terms: [
                    { term: 'TDM', def: '治療薬物モニタリング（Therapeutic Drug Monitoring）。血中薬物濃度を測定し、個々の患者に最適な投与量を設定する手法。' },
                    { term: '生物学的同等性', def: '後発医薬品（ジェネリック）と先発医薬品の間でAUCやCmaxが統計学的に同等であることを示す試験。' },
                    { term: 'ポピュレーションPK', def: '患者集団における薬物動態パラメータのばらつきを統計学的に解析する手法。個体間変動や個体内変動を定量化する。' },
                    { term: '薬物相互作用', def: '複数の薬物を併用した際に、一方の薬物が他方の薬物動態や薬力学に影響を与える現象。CYP阻害・誘導が主な原因。' }
                ]
            }
        ];

        const lower = filter.toLowerCase();
        let html = `<div class="fade-in">
            <h2 style="margin-bottom:16px;">用語集・リファレンス</h2>
            <div class="reference-search">
                <input type="text" placeholder="用語を検索..." value="${filter}" oninput="App.renderReference(this.value)">
            </div>`;

        glossary.forEach(cat => {
            const filtered = cat.terms.filter(t =>
                !lower || t.term.toLowerCase().includes(lower) || t.def.toLowerCase().includes(lower)
            );
            if (filtered.length === 0) return;
            html += `<div class="reference-category"><h3>${cat.category}</h3>`;
            filtered.forEach(t => {
                html += `<dl class="reference-term"><dt>${t.term}</dt><dd>${t.def}</dd></dl>`;
            });
            html += '</div>';
        });

        html += '</div>';
        document.getElementById('referenceView').innerHTML = html;
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
