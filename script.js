// ======= Simple helpers =======
const $  = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));

// i18n
const SUPPORTED = ['en','ko','es','kk','ru'];
const userLang = (localStorage.getItem('lang') || (navigator.language || 'en').slice(0,2)).toLowerCase();
let LANG = SUPPORTED.includes(userLang) ? userLang : 'en';

const I18N = {
  en:{ brand:'Saule Narynbay · PM',
    nav:{home:'Home', projects:'Projects', leadership:'Leadership'},
    hero:{ tag:'Project Manager · Product-minded · Multilingual', h1_a:'Turning ambiguity into', h1_b:'clarity', h1_c:'& shipping outcomes.' },
    cta:{ viewProjects:'View Projects', resume:'Download résumé', openProjects:'Open Projects',github:'GitHub' },
    projects:{ title:'Projects', sub:'Tap a box — projects will pop out with details.' },
    drawer:{ impact:'Impact', process:'Process', close:'Close' },
    lead:{ title:'Leadership', sub:'Community roles that show ownership, organization, and communication skills.' }
  },
  ko:{ brand:'Saule Narynbay · PM',
    nav:{home:'홈', projects:'프로젝트', leadership:'리더십'},
    hero:{ tag:'프로덕트 지향 PM · 다국어', h1_a:'모호함을', h1_b:'명확함', h1_c:'으로 바꿔 결과를 냅니다.' },
    cta:{ viewProjects:'프로젝트 보기', resume:'이력서 다운로드', openProjects:'프로젝트 열기',github:'GitHub' },
    projects:{ title:'프로젝트', sub:'박스를 클릭하면 상세 내용이 팝업으로 열립니다.' },
    drawer:{ impact:'임팩트', process:'프로세스', close:'닫기' },
    lead:{ title:'리더십', sub:'오너십·조직·커뮤니케이션 역량을 보여주는 활동.' }
  },
  es:{ brand:'Saule Narynbay · PM',
    nav:{home:'Inicio', projects:'Proyectos', leadership:'Liderazgo'},
    hero:{ tag:'PM orientada al producto · Multilingüe', h1_a:'Convierto la ambigüedad en', h1_b:'claridad', h1_c:' y resultados.' },
    cta:{ viewProjects:'Ver proyectos', resume:'Descargar CV', openProjects:'Abrir proyectos',github:'GitHub' },
    projects:{ title:'Proyectos', sub:'Toca una caja: el proyecto se abrirá con detalles.' },
    drawer:{ impact:'Impacto', process:'Proceso', close:'Cerrar' },
    lead:{ title:'Liderazgo', sub:'Roles que muestran ownership, organización y comunicación.' }
  },
  kk:{ brand:'Saule Narynbay· PM',
    nav:{home:'Басты бет', projects:'Жобалар', leadership:'Көшбасшылық'},
    hero:{ tag:'Өнімге бағытталған PM · Көптілді', h1_a:'Түсініксізді', h1_b:'аныққа', h1_c:' айналдырамын.' },
    cta:{ viewProjects:'Жобаларды көру', resume:'Резюме жүктеу', openProjects:'Жобаларды ашу',github:'GitHub' },
    projects:{ title:'Жобалар', sub:'Қорапты басыңыз — толық мәлімет шығады.' },
    drawer:{ impact:'Әсері', process:'Үрдіс', close:'Жабу' },
    lead:{ title:'Көшбасшылық', sub:'Иелік, ұйымдастыру және коммуникация дағдылары.' }
  },
  ru:{ brand:'Saule Narynbay · PM',
    nav:{home:'Главная', projects:'Проекты', leadership:'Лидерство'},
    hero:{ tag:'PM, ориентированный на продукт · Мультиязычная', h1_a:'Превращаю неопределённость в', h1_b:'ясность', h1_c:' и результаты.' },
    cta:{ viewProjects:'Смотреть проекты', resume:'Скачать резюме', openProjects:'Открыть проекты',github:'GitHub' },
    projects:{ title:'Проекты', sub:'Нажмите на карточку — проект откроется с деталями.' },
    drawer:{ impact:'Влияние', process:'Процесс', close:'Закрыть' },
    lead:{ title:'Лидерство', sub:'Роли, показывающие организаторские и коммуникативные навыки.' }
  },
};
const t = (path) => path.split('.').reduce((o,k)=>o?.[k], I18N[LANG]);


const PROFILE_BY_LANG = {
  en:{ 
    title:'Graduation & Roles',
    subtitle:'CSE alumni - leadership & teaching experience',
    roles:[
      'Founder-president, ISCSA (student club, Sogang University)',
      'Sogang University CSE Alumni',
      'Software Lab assistant',
      'Java mentor for international students',
      'Organizing member, KSAK (Kazakhstan Embassy in Korea)',
      'Co-author, Research paper:A Comparative Study of Large Language Models mBART50 and GPT-4o'
    ],
    skillsTitle: 'Skills',
    skills:[
      'Python',
      'Use-case writing',
      'Data visualization & dashboards',
      'Figma & Canva',
      'A/B testing',
      'UML diagrams',
      'Product & data analysis',

    ]
  },

  ko:{ 
    title:'졸업 & 역할',
    subtitle:'CSE 전공 졸업 — 리더십/티칭 경험',
    roles:[
      'ISCSA 회장/파운더 (서강대 학생회)',
      '서강대학교 컴퓨공학과 졸업생',
      '소프트웨어 연구실 보조',
      '유학생 대상 Java 멘토',
      'KSAK 조직위원 (주한 카자흐 대사관)',
      '서강대 논문 공동저자: A Comparative Study of Large Language Models mBART50 and GPT-4o'
     
    
    ],
    skillsTitle: '보유 스킬',
    skills:[
      'Python',
      '유스케이스 작성',
      '데이터 시각화 및 대시보드',
      'Figma, Canva',
      'A/B 테스트',
      'UML 다이어그램',
      '프로덕트/데이터 분석'
    ]
  },

  es:{ 
    title:'Graduación y Roles',
    subtitle:'Egresada de CSE — liderazgo y docencia',
    roles:[
      'Fundadora de ISCSA (Sogang)',
      'Egresada de la Universidad Sogang, especialidad en Ingeniería en Ciencia de la Computación',
      'Asistente de laboratorio de software',
      'Mentora de Java para estudiantes internacionales',
      'Miembro organizadora de KSAK',
      'Investigadora en IA (Coautora del estudio sobre mBART-50 y GPT-4o)'
    ],
    skillsTitle: 'Habilidades',
    skills:[
      'Python',
      'Visualización de datos y dashboards',
      'Figma y Canva',
      'Pruebas A/B',
      'Redacción de casos de uso',
      'Diagramas UML',
      'Análisis de producto y datos'
    ]
  },

  kk:{ 
    title:'Бітіру және Рөлдер',
    subtitle:'CSE түлегі - көшбасшылық және оқыту тәжірибесі',
    roles:[
      'ISCSA негізін қалаушы (Соган университеті)',
      'Sogang University компьютерлік инженерия (CSE) мамандығының түлегі',
      'Бағдарламалық жасақтама зертханасында ассистент',
      'Халықаралық студенттерге Java ментор',
      'KSAK ұйымдастыру комитетінің мүшесі',
      'Жасанды интеллект зерттеушісі (mBART-50 және GPT-4o бойынша зерттеу жұмысының қосалқы авторы)AI мақаласының авторларының бірі',
    
      
    ],
    skillsTitle: 'Дағдылар',
    skills:[
      'Python',
      'Use-case жазу',
      'Деректерді визуализациялау және дашбордтар',
      'Figma және Canva',
      'A/B тестілеу',
      'UML диаграммалары',
      'Өнім және деректер талдауы'
    ]
  },

  ru:{ 
    title:'Выпуск и роли',
    subtitle:'Выпускница CSE — опыт лидерства и преподавания',
    roles:[
      'Основатель ISCSA (Sogang University)',
      'Выпускница Sogang University по специальности Computer Science and Engineering',
      'Ассистент в лаборатории программного обеспечения',
      'Ментор по Java для иностранных студентов',
      'Член оргкомитета KSAK (посольство Казахстана в Корее)',
      'Исследователь в области ИИ (соавтор исследования по mBART-50 и GPT-4o)',
    
    ],
    skillsTitle: 'Навыки',
    skills:[
      'Python',
      'Описание use-case',
      'Визуализация данных и дашборды',
      'Figma и Canva',
      'A/B-тестирование',
      'Диаграммы UML',
      'Анализ продукта и данных'
    ]
  },
};


// ======= Projects (6 items) =======
const PROJECTS_BY_LANG = {
  en: [
    {
      title: 'Emergency App (ResQ)',
      hero: 'Emergency App · Real-time',
      labels: ['iOS (Swift)', 'Django', 'Twilio VoIP', 'STT/TTS', 'LLM mBART-50'],
      summary:
        'Planned, designed, and led cross-functional development of an AI-powered emergency translation app enabling real-time EN–KO communication via voice, SOS, and GPS integration.',
      impact: [
        'Owned product documentation: PRD, API specs, Figma user flows, and data models in Notion',
        'Designed wireframes and call-flow prototypes in Figma to visualize user journeys and emergency scenarios',
        'Managed database schema for call logs, translations, and GPS data using Django ORM + SQLite',
        'Analyzed voice-to-text accuracy metrics via SQL and Amplitude to improve translation latency',
        'Maintained sprint timelines and roadmap deliverables through Jira and Slack syncs',
        'Created progress dashboards and stakeholder decks in PowerPoint to track milestone achievements',
        'Delivered full MVP within 12-week timeline; achieved 82.56 % translation accuracy using mBART-50'
      ],
      imgs: ['images/resq1.png', 'images/resq2.png', 'images/resq3.png']
    },

    {
      title: 'Smart TV Media Player (LG webOS)',
      hero: 'Smart TV · Player',
      labels: ['webOS', 'Enact React', 'Node.js', 'Streaming'],
      summary:
        'Coordinated product and technical development of a Smart TV media-player for LG webOS, ensuring smooth streaming, stable playback, and intuitive UX design.',
      impact: [
        'Created IA and wireframe prototypes in Figma to define multi-screen playback flow',
        'Led sprint documentation and feature prioritization using Notion and Jira',
        'Managed Node.js data layer and playback analytics dashboard with SQL queries',
        'Benchmarked UI responsiveness and reduced buffer underruns below 1 % using profiling tools',
        'Collaborated across FE/BE teams using Slack + GitHub; maintained versioned API documentation',
        'Presented technical demos and outcome decks using PowerPoint and recorded product videos in Premiere Pro',
        'Delivered full-stack MVP within semester milestone under structured agile plan'
      ],
      imgs: ['images/webos1.png', 'images/webos2.png', 'images/webos3.png']
    },
  {
  title: 'Netflix Strategic Management Report (Data & Market Analysis)',
  hero: 'Strategy · Analytics',
  labels: ['Market Research', 'Data Analysis', 'Strategic Planning', 'Team Leadership'],
  summary:
    'Co-authored a comprehensive strategic management report on Netflix, applying competitive analysis and business intelligence frameworks to evaluate global market trends and product strategy.',
  impact: [
    'Conducted full-scale market analysis using Porter’s Five Forces, SWOT, and competitor mapping methodologies',
    'Analyzed streaming industry data and consumer behavior to identify pricing, retention, and growth opportunities',
    'Interpreted subscription, engagement, and content metrics to propose sustainable revenue models',
    'Developed data-driven recommendations for market expansion, localization strategy, and cross-platform service integration',
    'Synthesized findings into PowerPoint and Excel dashboards; presented conclusions to faculty and peers',
    'Collaborated cross-functionally in a 4-member research team, acting as data analyst and report coordinator',
    'Documented results and recommendations in Notion, ensuring traceable data sources and well-structured insight reports',
    'Strengthened PM decision-making skills through industry trend analysis, KPI tracking, and risk-impact evaluation'
  ],
  imgs: ['images/report1.png','images/report2.png','images/report3.png']
},
 {
      title: 'KAIST AI Research (Behavior / Neuro)',
      hero: 'Research · AI',
      labels: ['PyTorch', 'Deep Learning', 'Experiment Design', 'PM/Research'],
      summary:
        'Coordinated behavioral-AI research at KAIST, managing experiment design, data architecture, and multi-disciplinary collaboration between ML engineers and researchers.',
      impact: [
        'Authored complete technical documentation: hypotheses, data schema, and model architecture diagrams',
        'Developed PyTorch prototypes for behavioral-signal prediction and automated experiment logging',
        'Maintained shared Jupyter environment and tracked results via Google Sheets + Amplitude dashboards',
        'Managed research database for experimental data and ensured reproducibility with SQL + Python scripts',
        'Organized weekly progress reviews with professors; updated milestones in Notion + Slack channels',
        'Prepared presentation decks and publication visuals using PowerPoint + Photoshop',
        'Delivered reproducible results, finalized research documentation, and archive for paper submission'
      ],
      imgs: ['images/int1.png']
    },
    {
      title: 'Korean Learning Platform Backend',
      hero: 'Web · EdTech',
      labels: ['Django', 'DRF', 'SQLite', 'API Design', 'PM/Backend'],
      summary:
        'Directed backend architecture, data pipelines, and progress-tracking APIs for an EdTech platform that supports sequential learning levels and analytics dashboards.',
      impact: [
        'Documented full service flow: IA, use cases, ERD, and API specs in Confluence and Notion',
        'Developed REST APIs with Django DRF and maintained normalized database in SQLite',
        'Used Google Sheets + Amplitude to monitor learner completion metrics and identify drop-offs',
        'Reduced content-upload time 60 % by automating ingestion via Python + SQL scripts',
        'Managed timeline, release checklist, and dev communication via Jira and Slack',
        'Created Figma prototypes for progress dashboards and teacher analytics pages',
        'Delivered backend MVP integrated with frontend within sprint-based release cycle'
      ],
      imgs: ['images/ed1.jpg', 'images/ed2.jpg', 'images/ed3.jpg']
    },

    {
      title: 'IW-FCV 2025 Official Website',
      hero: 'Conference · KCVS',
      labels: ['Web', 'Django', 'Frontend', 'Backend', 'Data Ops'],
      summary:
        'Led full-stack design and launch of the IW-FCV 2025 international conference site, aligning academic stakeholders, developers, and content editors for smooth delivery.',
      impact: [
        'Designed sitemap, IA, and user-flow diagrams using Figma and Miro during planning phase',
        'Created backend schema for submissions, sessions, and participant data in Django + PostgreSQL',
        'Built admin dashboard and automated data updates; reduced manual content ops ≈ 40 %',
        'Managed PRD, API documentation, and change logs in Notion and Confluence',
        'Coordinated weekly deadlines, sprint retros, and cross-team hand-offs through Jira + Slack',
        'Monitored analytics with Google Spreadsheet dashboards and SQL queries',
        'Delivered fully documented deployment package with PowerPoint final presentation'
      ],
      imgs: ['images/conf1.png', 'images/conf2.png', 'images/conf3.png']
    },

    {
      title: 'Fitness Chatbot (LLM, LG Project)',
      hero: 'LLM · Coaching',
      labels: ['Django', 'Rasa', 'STT/TTS', 'LLM', 'Web UI'],
      summary:
        'Planned and executed FitChat — a real-time AI fitness assistant integrating LLMs, Rasa, and STT/TTS — to deliver personalized, voice-enabled workout guidance.',
      impact: [
        'Drafted PRD, use-case map, and data-flow diagrams; documented conversation logic in Notion',
        'Built Django + Rasa backend pipeline and database schema for chat sessions and progress tracking',
        'Managed sprint board and testing checklist using Jira; aligned NLP, UI, and data-teams',
        'Designed prototype conversation interfaces and chat UX in Figma',
        'Analyzed engagement metrics and retention using Amplitude + SQL queries',
        'Presented milestones and product demo decks using PowerPoint + Premiere Pro video edits',
        'Delivered fully functional MVP within 8-week schedule and documented all modules for hand-off'
      ],
      imgs: ['images/fit1.png', 'images/fit2.png', 'images/fit3.png']
    }
  ],


  // Mirror English to other languages for brevity
  ko: [
  {
    title: '긴급 구조 앱 (ResQ)',
    hero: '긴급 앱 · 실시간',
    labels: ['iOS (Swift)', 'Django', 'Twilio VoIP', 'STT/TTS', 'LLM mBART-50'],
    summary:
      'AI 기반 실시간 긴급 통/번역 앱으로, 음성, SOS, GPS를 활용한 EN–KO 양방향 커뮤니케이션 기능을 총괄 기획, 설계를 개발했습니다.',
    impact: [
      'PRD, API 명세서, Figma 사용자 흐름, 데이터 모델 등 전체 제품 문서화 책임',
      '사용자 여정과 긴급 시나리오를 시각화하기 위해 Figma 와이어프레임 및 콜플로우 프로토타입 설계',
      'Django ORM + SQLite를 활용해 통화 기록·번역·GPS 데이터를 위한 DB 스키마 구축 및 관리',
      'SQL 및 Amplitude로 STT 정확도/지연 시간 분석하여 번역 지연 개선',
      'Jira·Slack 기반 스프린트 일정, 로드맵 산출물, PM 커뮤니케이션 관리',
      'PowerPoint로 상태 리포트·대시보드 제작하여 이해관계자와 공유',
      '12주 내 MVP 구축 완료, mBART-50 기반 번역 정확도 82.56% 달성'
    ],
    imgs: ['images/resq1.png','images/resq2.png','images/resq3.png']
  },

  {
    title: '스마트 TV 미디어 플레이어 (LG webOS)',
    hero: 'Smart TV · 플레이어',
    labels: ['webOS', 'Enact React', 'Node.js', 'Streaming'],
    summary:
      'LG webOS 기반 스마트 TV용 미디어 플레이어를 기획·설계·개발하여 안정적인 스트리밍 환경과 직관적 UX를 구현했습니다.',
    impact: [
      '멀티 스크린 재생 흐름을 정의하기 위한 IA, 와이어프레임 설계(Figma)',
      'Notion·Jira로 기능 우선순위 및 스프린트 문서화 관리',
      'Node.js 기반 데이터 레이어 및 SQL 대시보드 구축',
      '프로파일링 도구로 UI 반응성 개선 및 버퍼링 비율 1% 이하로 유지',
      'Slack + GitHub으로 FE/BE 협업, 버전 관리된 API 문서 유지',
      'PowerPoint·Premiere Pro로 데모 및 결과 자료 제작·발표',
      '애자일 프로세스로 학기 내 전체 스택 MVP 인도'
    ],
    imgs: ['images/webos1.png','images/webos2.png','images/webos3.png']
  },

  {
    title: '넷플릭스 전략 경영 보고서 (데이터 & 시장 분석)',
    hero: '전략 · 데이터 분석',
    labels: ['시장 조사', '데이터 분석', '전략 기획', '팀 리더십'],
    summary:
      '넷플릭스의 글로벌 시장 전략을 분석하기 위해 경쟁 분석 및 비즈니스 인텔리전스 기법을 적용한 전략 경영 보고서를 공동 작성했습니다.',
    impact: [
      'Porter의 5 Forces, SWOT, 경쟁사 매핑 등을 활용한 시장 분석',
      '가격·이탈률·성장 기회 파악을 위해 시청자 행동 및 스트리밍 데이터 분석',
      '구독·콘텐츠·참여도 데이터를 해석하여 수익 모델과 전략 개선안 도출',
      'PowerPoint·Excel로 시각화 대시보드 및 분석 리포트 제작',
      '4인 팀에서 데이터 분석·리포트 구조화·협업 PM 역할 수행',
      'Notion을 활용한 데이터 기반 인사이트 문서화 및 소스 관리 최적화',
      'KPI 기반 의사결정 역량 강화 및 리스크–임팩트 분석 경험 축적'
    ],
    imgs: ['images/report1.png','images/report2.png','images/report3.png']
  },

  {
    title: 'KAIST AI 연구 (행동·신경 데이터)',
    hero: '연구 · AI',
    labels: ['PyTorch', 'Deep Learning', 'Experiment Design', 'PM/Research'],
    summary:
      'KAIST에서 행동 기반 AI 연구 프로젝트를 진행하며 실험 설계, 데이터 구조 설계, ML 연구자와 협업을 총괄했습니다.',
    impact: [
      '가설·데이터 스키마·모델 구조도 등 기술 문서 전체 작성',
      'PyTorch로 행동 신호 예측 모델 프로토타입 및 자동 로깅 기능 개발',
      'Jupyter·Google Sheets·Amplitude로 실험 결과 분석 및 추적',
      'SQL + Python으로 연구 DB 관리 및 재현성 보장',
      '교수진과의 주간 리뷰 진행 및 milestone 업데이트',
      'PowerPoint·Photoshop으로 연구 발표 자료 제작',
      '연구 문서 및 데이터셋 정리 후 논문 제출용 아카이브 구축'
    ],
    imgs: ['images/int1.png']
  },

  {
    title: '한국어 학습 플랫폼 백엔드',
    hero: '웹 · 에듀테크',
    labels: ['Django', 'DRF', 'SQLite', 'API Design', 'PM/Backend'],
    summary:
      '레벨 기반 학습 플랫폼의 백엔드 아키텍처, 데이터 파이프라인, 학습 진행도 API를 기획·설계·구축했습니다.',
    impact: [
      'IA, 유스케이스, ERD, API 명세 등 전체 서비스 플로우 문서화',
      'Django DRF로 REST API 개발 및 정규화된 SQLite DB 유지',
      'Google Sheets + Amplitude로 사용자 이탈 지점 분석',
      'Python + SQL 스크립트로 콘텐츠 업로드 시간 60% 단축',
      'Jira·Slack으로 일정 관리 및 개발 커뮤니케이션 조율',
      '교사용 대시보드 및 학습 분석 페이지 Figma 프로토타입 제작',
      '스프린트 기반 릴리즈 사이클 내 FE·BE 통합 MVP 완성'
    ],
    imgs: ['images/ed1.jpg','images/ed2.jpg','images/ed3.jpg']
  },

  {
    title: 'IW-FCV 2025 공식 웹사이트',
    hero: '컨퍼런스 · KCVS',
    labels: ['Web', 'Django', 'Frontend', 'Backend', 'Data Ops'],
    summary:
      '국제 학술대회 IW-FCV 2025 웹사이트의 기획부터 개발·출시까지 풀스택으로 총괄하여 학계 이해관계자와 개발팀을 연결했습니다.',
    impact: [
      'Figma·Miro로 사이트맵, IA, 사용자 흐름 설계',
      'Django + PostgreSQL로 논문 제출·세션·참가자 관리 백엔드 구축',
      '관리자 대시보드 및 콘텐츠 자동 업데이트 기능 제작 → 수작업 40% 감소',
      'PRD·API 문서·변경 로그를 Notion·Confluence에 정리하여 버전 관리',
      'Jira·Slack 기반 스프린트 진행 및 협업 관리',
      'Google Sheets·SQL로 트래픽 및 참여도 분석',
      '최종 발표 자료 및 배포 문서 패키지 구성 후 전달'
    ],
    imgs: ['images/conf1.png','images/conf2.png','images/conf3.png']
  },

  {
    title: '피트니스 챗봇 (LLM, LG 프로젝트)',
    hero: 'LLM · 코칭',
    labels: ['Django', 'Rasa', 'STT/TTS', 'LLM', 'Web UI'],
    summary:
      'LLM, Rasa, STT/TTS를 결합한 실시간 AI 트레이너 FitChat을 기획, 설계를 개발하여 음성 기반 운동 코칭 기능을 구현했습니다.',
    impact: [
      'PRD, 유스케이스 맵, 데이터 플로우 문서화 및 대화 로직 설계',
      'Django + Rasa 기반 백엔드 파이프라인 및 DB 설계·구축',
      'Jira로 스프린트·QA 체크리스트 관리, NLP·UI·데이터팀 간 조율',
      'Figma로 챗 UI 및 UX 프로토타입 제작',
      'Amplitude + SQL로 사용자 참여 지표 및 리텐션 분석',
      'PowerPoint·Premiere Pro로 데모 영상 및 중간 보고 제작',
      '8주 내 MVP 구축 및 모듈 전체 문서화 완료'
    ],
    imgs: ['images/fit1.png','images/fit2.png','images/fit3.png']
  }
],
es: [
  {
    title: 'Aplicación de Emergencia (ResQ)',
    hero: 'Emergency App · En tiempo real',
    labels: ['iOS (Swift)', 'Django', 'Twilio VoIP', 'STT/TTS', 'LLM mBART-50'],
    summary:
      'Planifiqué, diseñé y lideré el desarrollo multifuncional de una aplicación de traducción de emergencia impulsada por IA, permitiendo comunicación EN–KO en tiempo real mediante voz, SOS y GPS.',
    impact: [
      'Responsable de la documentación del producto: PRD, especificaciones API, flujos de usuario en Figma y modelos de datos en Notion',
      'Diseñé wireframes y prototipos de flujo de llamada en Figma para visualizar recorrido del usuario y escenarios de emergencia',
      'Gestioné el esquema de base de datos para registros de llamada, traducciones y datos GPS con Django ORM + SQLite',
      'Analicé métricas de precisión de voz a texto mediante SQL y Amplitude para mejorar latencia de traducción',
      'Administré sprints, roadmap y entregables mediante Jira y Slack',
      'Creé paneles de progreso y presentaciones ejecutivas en PowerPoint para comunicar avances a los stakeholders',
      'Entregué el MVP completo en 12 semanas; logré 82.56% de precisión de traducción usando mBART-50'
    ],
    imgs: ['images/resq1.png','images/resq2.png','images/resq3.png']
  },

  {
    title: 'Reproductor de Medios para Smart TV (LG webOS)',
    hero: 'Smart TV · Reproductor',
    labels: ['webOS', 'Enact React', 'Node.js', 'Streaming'],
    summary:
      'Coordiné el desarrollo funcional y técnico de un reproductor multimedia para LG webOS, asegurando transmisión fluida, reproducción estable y una UX intuitiva.',
    impact: [
      'Diseñé arquitectura de información y wireframes en Figma para definir el flujo de reproducción multiscreen',
      'Lideré documentación de sprints y priorización de funciones usando Notion y Jira',
      'Gestioné la capa de datos en Node.js y el panel analítico de reproducción mediante consultas SQL',
      'Reduje el porcentaje de buffering a menos del 1% mediante herramientas de profiling',
      'Coordiné colaboración entre FE/BE a través de Slack y GitHub; mantuve documentación API versionada',
      'Presenté demos técnicas y reportes visuales usando PowerPoint y videos editados en Premiere Pro',
      'Entregué el MVP full-stack dentro del plazo del semestre bajo un plan ágil estructurado'
    ],
    imgs: ['images/webos1.png','images/webos2.png','images/webos3.png']
  },

  {
    title: 'Informe de Gestión Estratégica de Netflix (Datos y Análisis de Mercado)',
    hero: 'Estrategia · Analítica',
    labels: ['Investigación de mercado', 'Análisis de datos', 'Planificación estratégica', 'Liderazgo de equipo'],
    summary:
      'Co-redacté un informe integral de gestión estratégica sobre Netflix, aplicando análisis competitivo y marcos de inteligencia de negocio para evaluar tendencias globales y estrategia de producto.',
    impact: [
      'Realicé análisis de mercado utilizando Porter’s Five Forces, SWOT y mapeo de competidores',
      'Analicé datos de la industria del streaming y comportamiento del consumidor para identificar oportunidades de precio, retención y crecimiento',
      'Interpreté métricas de suscripción, engagement y desempeño de contenido para proponer modelos de ingresos sostenibles',
      'Desarrollé paneles y reportes visuales en PowerPoint y Excel para presentar insights clave',
      'Colaboré en un equipo de 4 miembros, desempeñando el rol de analista de datos y coordinadora del informe',
      'Documenté resultados y recomendaciones en Notion, asegurando trazabilidad y estructura clara de insights',
      'Fortalecí habilidades de PM en análisis de tendencias, seguimiento de KPIs y evaluación riesgo–impacto'
    ],
    imgs: ['images/report1.png','images/report2.png','images/report3.png']
  },

  {
    title: 'Investigación de IA en KAIST (Comportamiento / Neuro)',
    hero: 'Investigación · IA',
    labels: ['PyTorch', 'Deep Learning', 'Diseño experimental', 'PM/Investigación'],
    summary:
      'Coordinar investigaciones de IA conductual en KAIST, gestionando diseño experimental, arquitectura de datos y colaboración multidisciplinaria entre ingenieros de ML e investigadores.',
    impact: [
      'Redacté documentación técnica completa: hipótesis, esquema de datos y diagramas de arquitectura del modelo',
      'Desarrollé prototipos en PyTorch para predicción de señales conductuales y registro automático de experimentos',
      'Administré entornos compartidos en Jupyter y realicé seguimiento de resultados con Google Sheets + Amplitude',
      'Gestioné base de datos de investigación garantizando reproducibilidad mediante SQL + Python',
      'Organicé revisiones semanales con profesores y actualicé hitos en Notion y Slack',
      'Preparé presentaciones y visuales para publicaciones usando PowerPoint y Photoshop',
      'Entregué resultados reproducibles y archivo final para envío de publicación'
    ],
    imgs: ['images/int1.png']
  },

  {
    title: 'Backend para Plataforma de Aprendizaje de Coreano',
    hero: 'Web · EdTech',
    labels: ['Django', 'DRF', 'SQLite', 'API Design', 'PM/Backend'],
    summary:
      'Dirigí la arquitectura backend, los pipelines de datos y las APIs de seguimiento de progreso para una plataforma EdTech con niveles secuenciales y paneles analíticos.',
    impact: [
      'Documenté el flujo completo del servicio: IA, casos de uso, ERD y especificaciones API en Confluence y Notion',
      'Desarrollé APIs REST con Django DRF y mantuve una base de datos normalizada en SQLite',
      'Monitoreé métricas de avance y puntos de abandono mediante Google Sheets + Amplitude',
      'Reduje el tiempo de carga de contenido en un 60% automatizando ingestión con Python + SQL',
      'Gestioné cronogramas, checklists de lanzamiento y comunicación con devs a través de Jira y Slack',
      'Diseñé prototipos en Figma para paneles docentes y vistas analíticas',
      'Entregué un backend MVP integrado con frontend dentro del ciclo de sprints'
    ],
    imgs: ['images/ed1.jpg','images/ed2.jpg','images/ed3.jpg']
  },

  {
    title: 'Sitio Oficial IW-FCV 2025',
    hero: 'Conferencia · KCVS',
    labels: ['Web', 'Django', 'Frontend', 'Backend', 'Data Ops'],
    summary:
      'Lideré el diseño full-stack y el lanzamiento del sitio oficial de la conferencia internacional IW-FCV 2025, coordinando stakeholders académicos, desarrolladores y editores de contenido.',
    impact: [
      'Diseñé sitemap, IA y diagramas de flujo de usuario en Figma y Miro',
      'Construí el backend para envíos, sesiones y datos de participantes usando Django + PostgreSQL',
      'Creé dashboard administrativo y automatización de actualizaciones, reduciendo operaciones manuales ≈ 40%',
      'Gestioné PRD, documentación API y registros de cambios en Notion y Confluence',
      'Coordiné plazos semanales, retrospectivas de sprint y hand-offs entre equipos vía Jira + Slack',
      'Monitoreé analíticas con paneles de Google Sheets y consultas SQL',
      'Entregué paquete de despliegue completamente documentado junto con presentación final'
    ],
    imgs: ['images/conf1.png','images/conf2.png','images/conf3.png']
  },

  {
    title: 'Chatbot Fitness (LLM, Proyecto LG)',
    hero: 'LLM · Entrenamiento',
    labels: ['Django', 'Rasa', 'STT/TTS', 'LLM', 'Web UI'],
    summary:
      'Planifiqué y ejecuté FitChat — un asistente de fitness basado en IA en tiempo real que integra LLMs, Rasa y STT/TTS para ofrecer orientación personalizada mediante voz.',
    impact: [
      'Redacté PRD, mapa de casos de uso y diagramas de flujo de datos; documenté la lógica conversacional en Notion',
      'Desarrollé pipeline backend Django + Rasa y esquema de base de datos para sesiones y seguimiento',
      'Gestioné tablero de sprints y checklist de pruebas en Jira, alineando equipos de NLP, UI y datos',
      'Diseñé prototipos de chat UI/UX en Figma',
      'Analicé métricas de engagement y retención usando Amplitude + SQL',
      'Presenté hitos y demos del producto mediante PowerPoint y videos editados en Premiere Pro',
      'Entregué un MVP funcional en 8 semanas con documentación completa'
    ],
    imgs: ['images/fit1.png','images/fit2.png','images/fit3.png']
  }
],


kk: [
  {
    title: 'Төтенше жағдай қосымшасы (ResQ)',
    hero: 'Emergency App · Нақты уақыт',
    labels: ['iOS (Swift)', 'Django', 'Twilio VoIP', 'STT/TTS', 'LLM mBART-50'],
    summary:
      'Дауыс, SOS және GPS арқылы EN–KO бағытында нақты уақыттағы аударманы қамтамасыз ететін AI негізіндегі төтенше жағдай қосымшасын толық жоспарлап, жобалап және көпфункционалды топпен бірге әзірледім.',
    impact: [
      'Өнім құжаттамасын басқардым: PRD, API сипаттамалары, Figma пайдаланушы ағымдары, Notion деректер модельдері',
      'Figma-да пайдаланушы жолы мен төтенше жағдай сценарийлерін визуализациялау үшін вайрфреймдер мен call-flow прототиптерін жасадым',
      'Django ORM + SQLite арқылы қоңырау жазбалары, аудармалар және GPS деректері үшін дерекқор схемасын құрдым',
      'Аударманың кідірісін азайту үшін SQL және Amplitude арқылы STT дәлдік метрикаларын талдадым',
      'Jira және Slack арқылы спринт кестелерін, roadmap және deliverable–дерді басқардым',
      'PowerPoint-та прогресс дашбордтары мен stakeholder презентацияларын әзірледім',
      '12 апта ішінде MVP-ді толық әзірлеп, mBART-50 арқылы 82.56% аударма дәлдігіне қол жеткіздім'
    ],
    imgs: ['images/resq1.png','images/resq2.png','images/resq3.png']
  },

  {
    title: 'Smart TV Медиа Плеері (LG webOS)',
    hero: 'Smart TV · Плеер',
    labels: ['webOS', 'Enact React', 'Node.js', 'Streaming'],
    summary:
      'LG webOS үшін Smart TV медиа плеерінің техникалық және өнімдік даму процесін үйлестіріп, тұрақты стриминг, сенімді ойнату және интуитивті UX қамтамасыз еттім.',
    impact: [
      'Көп экранды ойнату ағымын анықтау үшін Figma-да IA және вайрфрейм прототиптерін жасадым',
      'Notion және Jira арқылы спринт құжаттамасын және функциялардың басымдығын басқардым',
      'Node.js негізіндегі деректер қабатын және SQL аналитикалық дашбордын басқардым',
      'UI жауаптылығын арттырып, буферлеу деңгейін 1%-дан төмен түсірдім',
      'Slack + GitHub арқылы FE/BE командаларымен тиімді ынтымақтастық жүргіздім, API құжаттамасын нұсқалық бақылауда ұстадым',
      'PowerPoint және Premiere Pro арқылы техникалық демо және қорытынды презентациялар дайындадым',
      'Семестр мерзімі ішінде толық стек MVP-ді Agile тәсілімен жеткіздім'
    ],
    imgs: ['images/webos1.png','images/webos2.png','images/webos3.png']
  },

  {
    title: 'Netflix Стратегиялық Басқару Есептемесі (Деректер және Нарық талдауы)',
    hero: 'Стратегия · Аналитика',
    labels: ['Нарық зерттеуі', 'Деректер талдауы', 'Стратегиялық жоспарлау', 'Топ лидерлігі'],
    summary:
      'Netflix платформасының жаһандық нарықтағы стратегиясын бағалау үшін бәсекелестік талдау және бизнес-аналитикалық әдістерді қолдана отырып жан-жақты стратегиялық есепті бірге әзірледім.',
    impact: [
      'Porter’s Five Forces, SWOT және бәсекелестер картасын қолдана отырып толық нарық талдауын жүргіздім',
      'Стриминг индустриясы мен қолданушылар мінез-құлқының деректерін талдап, баға, ретеншн және өсу мүмкіндіктерін анықтадым',
      'Жазылым, engagement және контент көрсеткіштерін интерпретациялап, табысты бизнес-модельдер ұсындым',
      'PowerPoint және Excel арқылы визуалды дашбордтар мен талдау есептерін құрдым',
      '4 адамнан тұратын зерттеу тобында деректер аналитигі және есеп үйлестірушісі рөлін атқардым',
      'Notion-да инсайттар мен ұсыныстарды құрылымды форматта құжаттандырдым',
      'KPI, тренд талдауы және тәуекел–әсер (risk–impact) бағалау дағдыларын күшейттім'
    ],
    imgs: ['images/report1.png','images/report2.png','images/report3.png']
  },

  {
    title: 'KAIST AI Зерттеуі (Мінез-құлық / Нейро)',
    hero: 'Зерттеу · AI',
    labels: ['PyTorch', 'Deep Learning', 'Эксперимент дизайны', 'PM/Research'],
    summary:
      'KAIST-та мінез-құлыққа негізделген AI зерттеу жобасын жүргізіп, эксперимент дизайнын, деректер архитектурасын және ML инженерлері мен зерттеушілер арасындағы мультидисциплинарлық жұмысты үйлестірдім.',
    impact: [
      'Гипотезалар, деректер схемасы және модель архитектурасы диаграммаларын қамтитын толық техникалық құжаттаманы жаздым',
      'PyTorch арқылы мінез-құлық сигналдарын болжау модельдерінің прототипін және автоматты лог жүргізу жүйесін әзірледім',
      'Jupyter, Google Sheets және Amplitude арқылы зерттеу нәтижелерін бақылап, талдадым',
      'SQL + Python көмегімен зерттеу деректер қорын басқарып, нәтижелердің қайталанымдылығын қамтамасыз еттім',
      'Профессорлармен апталық кездесу өткізіп, нәтижелер мен milestone–дерді Notion мен Slack-та жаңартып отырдым',
      'PowerPoint және Photoshop арқылы презентация материалдарын дайындадым',
      'Зерттеу нәтижелерін толық құжаттап, мақалаға жіберу үшін архив жасадым'
    ],
    imgs: ['images/int1.png']
  },

  {
    title: 'Корей тілін оқыту платформасының Backend бөлігі',
    hero: 'Web · EdTech',
    labels: ['Django', 'DRF', 'SQLite', 'API Design', 'PM/Backend'],
    summary:
      'Кезең-кезеңімен (level-based) оқыту жүйесі бар EdTech платформасына backend архитектурасын, деректер pipeline–дерін және прогресс-трекинг API-ларын жобалап, іске асырдым.',
    impact: [
      'Қызметтің толық ағымын (IA, юзкейс, ERD, API спецификация) Notion және Confluence-те құжаттандырдым',
      'Django DRF арқылы REST API дамытып, SQLite дерекқорын нормаланған күйде ұстадым',
      'Google Sheets + Amplitude арқылы қолданушылардың оқу көрсеткіштері мен тастап кету (drop-off) нүктелерін талдадым',
      'Python + SQL скрипттері арқылы контент жүктеу уақытын 60% қысқарттым',
      'Jira және Slack көмегімен уақыт кестесін, релиз checklist және dev-коммуникацияны басқардым',
      'Figma-да мұғалімдерге арналған дашборд және аналитикалық беттердің прототиптерін жасадым',
      'Sprint негізіндегі релиз циклында FE және BE толық интеграцияланған MVP әзірледім'
    ],
    imgs: ['images/ed1.jpg','images/ed2.jpg','images/ed3.jpg']
  },

  {
    title: 'IW-FCV 2025 Ресми веб-сайты',
    hero: 'Конференция · KCVS',
    labels: ['Web', 'Django', 'Frontend', 'Backend', 'Data Ops'],
    summary:
      'IW-FCV 2025 халықаралық ғылыми конференциясының ресми веб-сайтын толық жоспарлап, front–back-end әзірлеуді және стейкхолдерлармен жұмыс жүргізуді басқардым.',
    impact: [
      'Figma және Miro арқылы sitemap, IA және пайдаланушы ағымын жобаладым',
      'Django + PostgreSQL көмегімен paper submission, session және participant деректерін басқаратын backend жасадым',
      'Контентті автоматты жаңарту функцияларын енгізіп, қол еңбегін шамамен 40%-ға азайттым',
      'Notion және Confluence-та PRD, API құжаттамасы және change-log жүргіздім',
      'Jira + Slack арқылы апталық мерзімдер мен cross-team hand-off процестерін үйлестірдім',
      'Google Sheets және SQL арқылы трафик пен қатысу аналитикасын бақыладым',
      'PowerPoint-та толық құжатталған deploy-пакет және финалдық презентация дайындадым'
    ],
    imgs: ['images/conf1.png','images/conf2.png','images/conf3.png']
  },

  {
    title: 'Fitness Chatbot (LLM, LG жобасы)',
    hero: 'LLM · Жаттығу',
    labels: ['Django', 'Rasa', 'STT/TTS', 'LLM', 'Web UI'],
    summary:
      'LLM, Rasa және STT/TTS интеграцияланған FitChat атты нақты уақыттағы AI фитнес ассистентін жоспарлап, UX және backend архитектурасын әзірледім.',
    impact: [
      'PRD, юзкейс картасы және data-flow диаграммаларын жасап, диалог логикасын Notion-да құжаттандырдым',
      'Django + Rasa негізінде backend pipeline және чат прогресін бақылауға арналған дерекқор құрастырдым',
      'Jira арқылы спринт тақтасын және тест чеклистін басқарып, NLP, UI және деректер командаларын үйлестірдім',
      'Figma-да чат интерфейсі мен UX прототиптерін жасадым',
      'Amplitude + SQL арқылы пайдаланушы белсенділігі мен retention көрсеткіштерін талдадым',
      'PowerPoint және Premiere Pro арқылы демо-видеолар және milestone презентацияларын дайындадым',
      '8 апта ішінде толық функционалды MVP жасап, барлық модульдерді құжаттандырдым'
    ],
    imgs: ['images/fit1.png','images/fit2.png','images/fit3.png']
  }
],

ru: [
  {
    title: 'Приложение для экстренной помощи (ResQ)',
    hero: 'Emergency App · В реальном времени',
    labels: ['iOS (Swift)', 'Django', 'Twilio VoIP', 'STT/TTS', 'LLM mBART-50'],
    summary:
      'Спланировала, спроектировала и руководила разработкой AI-приложения для экстренного EN–KO перевода, обеспечивающего двустороннюю голосовую коммуникацию, SOS и GPS в реальном времени.',
    impact: [
      'Полностью вела продуктовую документацию: PRD, API-спецификации, пользовательские флоу в Figma и модели данных в Notion',
      'Создала вайрфреймы и прототипы сценариев вызова для визуализации пользовательских путей и экстренных ситуаций',
      'Спроектировала и управляла схемой базы данных (звонки, переводы, GPS) с помощью Django ORM + SQLite',
      'Анализировала точность STT и задержку перевода с помощью SQL и Amplitude, оптимизировала скорость обработки',
      'Вела дорожную карту, спринты и коммуникацию через Jira и Slack',
      'Создала аналитические дашборды и презентации для стейкхолдеров в PowerPoint',
      'Разработала полноценный MVP за 12 недель; достигла 82.56% точности перевода на mBART-50'
    ],
    imgs: ['images/resq1.png','images/resq2.png','images/resq3.png']
  },

  {
    title: 'Медиаплеер для Smart TV (LG webOS)',
    hero: 'Smart TV · Плеер',
    labels: ['webOS', 'Enact React', 'Node.js', 'Streaming'],
    summary:
      'Координировала продуктовую и техническую разработку медиаплеера для LG webOS, обеспечив плавный стриминг, устойчивое воспроизведение и интуитивный UX.',
    impact: [
      'Разработала информационную архитектуру и вайрфреймы в Figma для мультиэкранного сценария воспроизведения',
      'Управляла документацией спринтов и приоритизацией задач через Notion и Jira',
      'Создала слой данных на Node.js и аналитический SQL-дашборд для мониторинга воспроизведения',
      'Оптимизировала UI и снизила уровень буферизации до <1% с помощью инструментов профилирования',
      'Организовала взаимодействие FE/BE команд через Slack + GitHub; вела версионируемую API-документацию',
      'Подготовила технические демо и видео-презентации в PowerPoint и Premiere Pro',
      'Доставила full-stack MVP в рамках семестрового срока, следуя Agile-плану'
    ],
    imgs: ['images/webos1.png','images/webos2.png','images/webos3.png']
  },

  {
    title: 'Стратегический отчет Netflix (Данные и анализ рынка)',
    hero: 'Стратегия · Аналитика',
    labels: ['Маркетинговые исследования', 'Аналитика данных', 'Стратегическое планирование', 'Лидерство в команде'],
    summary:
      'Совместно подготовила стратегический отчет по Netflix, применив методы конкурентного анализа и бизнес-аналитики для оценки глобальных трендов и продуктовой стратегии.',
    impact: [
      'Провела анализ рынка с использованием Porter’s Five Forces, SWOT и картирования конкурентов',
      'Проанализировала данные стриминговой индустрии и пользовательского поведения для выявления возможностей роста, удержания и ценообразования',
      'Интерпретировала метрики подписок, вовлеченности и производительности контента для предложения устойчивых моделей дохода',
      'Создала визуальные дашборды и отчеты в PowerPoint и Excel',
      'Работала в команде из 4 человек как аналитик данных и координатор отчета',
      'Задокументировала инсайты и рекомендации в Notion с полной трассировкой источников',
      'Укрепила навыки продуктового мышления через анализ трендов, KPI и оценку риска–влияния'
    ],
    imgs: ['images/report1.png','images/report2.png','images/report3.png']
  },

  {
    title: 'Исследование ИИ в KAIST (Поведение / Нейро)',
    hero: 'Исследование · AI',
    labels: ['PyTorch', 'Deep Learning', 'Экспериментальный дизайн', 'PM/Research'],
    summary:
      'Координировала исследование поведенческой ИИ-модели в KAIST, управляя экспериментальным дизайном, архитектурой данных и междисциплинарным взаимодействием инженеров и исследователей.',
    impact: [
      'Подготовила полную техническую документацию: гипотезы, схемы данных и диаграммы архитектуры моделей',
      'Создала PyTorch-прототипы для предсказания поведенческих сигналов и автоматического логирования экспериментов',
      'Вела общую среду Jupyter и отслеживала результаты через Google Sheets + Amplitude',
      'Управляла исследовательской базой данных, обеспечивая воспроизводимость (SQL + Python)',
      'Организовывала еженедельные встречи с профессорами и обновляла план работ в Notion + Slack',
      'Подготовила презентационные материалы для публикаций (PowerPoint + Photoshop)',
      'Передала воспроизводимые результаты и структурированную документацию для подачи в журнал'
    ],
    imgs: ['images/int1.png']
  },

  {
    title: 'Backend платформы обучения корейскому языку',
    hero: 'Web · EdTech',
    labels: ['Django', 'DRF', 'SQLite', 'API Design', 'PM/Backend'],
    summary:
      'Разработала backend-архитектуру, data-pipeline и API отслеживания прогресса для EdTech платформы с последовательными уровнями обучения и аналитическими панелями.',
    impact: [
      'Задокументировала весь сервисный поток: IA, use-case, ERD и API-спецификации (Confluence, Notion)',
      'Разработала REST API на Django DRF и поддерживала нормализованную базу SQLite',
      'Анализировала показатели завершения уроков и точки оттока через Google Sheets + Amplitude',
      'Сократила время загрузки контента на 60% с помощью Python + SQL автоматизации',
      'Управляла сроками, релиз-чеклистами и коммуникацией dev-команды (Jira, Slack)',
      'Создала прототипы аналитических панелей для преподавателей в Figma',
      'Доставила интегрированный FE+BE MVP в рамках спринтового цикла'
    ],
    imgs: ['images/ed1.jpg','images/ed2.jpg','images/ed3.jpg']
  },

  {
    title: 'Официальный сайт конференции IW-FCV 2025',
    hero: 'Конференция · KCVS',
    labels: ['Web', 'Django', 'Frontend', 'Backend', 'Data Ops'],
    summary:
      'Руководила проектированием и разработкой full-stack сайта международной конференции IW-FCV 2025, координируя академических стейкхолдеров, разработчиков и редакторов контента.',
    impact: [
      'Разработала sitemap, IA и пользовательские флоу в Figma и Miro',
      'Создала backend для подачи работ, сессий и данных участников на Django + PostgreSQL',
      'Автоматизировала обновление контента и сократила ручные операции примерно на 40%',
      'Вела PRD, API документацию и журналы изменений в Notion и Confluence',
      'Управляла сроками, ретроспективами и взаимодействием команд через Jira + Slack',
      'Анализировала посещаемость и активность через Google Sheets и SQL',
      'Подготовила полный пакет для деплоя вместе с финальной презентацией'
    ],
    imgs: ['images/conf1.png','images/conf2.png','images/conf3.png']
  },

  {
    title: 'Фитнес-чатбот (LLM, проект LG)',
    hero: 'LLM · Коучинг',
    labels: ['Django', 'Rasa', 'STT/TTS', 'LLM', 'Web UI'],
    summary:
      'Спланировала и реализовала FitChat - AI-ассистента для тренировок, работающего в реальном времени на базе LLM, Rasa и STT/TTS, обеспечивая персонализированное голосовое сопровождение.',
    impact: [
      'Разработала PRD, карту use-case и схему потоков данных; документировала логику диалога в Notion',
      'Создала backend-pipeline Django + Rasa и базу данных для сессий и отслеживания прогресса',
      'Управляла доской спринтов и QA-чеклистами в Jira, координируя NLP, UI и data-команды',
      'Разработала прототипы интерфейса чата и UX в Figma',
      'Анализировала показатели вовлеченности и удержания через Amplitude + SQL',
      'Подготовила продуктовые демо и видеопрезентации в PowerPoint + Premiere Pro',
      'Доставила полностью функционирующий MVP за 8 недель, задокументировав все модули'
    ],
    imgs: ['images/fit1.png','images/fit2.png','images/fit3.png']
  }
]

};

// ======= Leadership/Teaching cards data =======
LEAD_CARDS_BY_LANG = {

 en:[ {
    title: 'Founder — ISCSA (Sogang University)',
    hero: 'Community · Organization',
    summary: 'Established an international CS student club; designed programs to improve onboarding, learning, and networking among global students.',
    bullets: [
      'Recruitment & onboarding strategy for international members',
      'Organized peer-learning sessions and knowledge-sharing workshops',
      'Budgeting, sponsorship acquisition, and reporting',
      'Cross-functional coordination between faculty and student leaders'
    ],
    imgs: ['images/iscsa.png'],
    impact: [
      'Scaled community to 40+ active members from 10+ countries',
      'Planned 10+ learning and cultural events per semester',
      'Built internal feedback system and documentation templates for continuity',
      'Created a structured mentoring pipeline for new international students'
    ]
  },
  
  {
    title: 'Organizer/Member — KSAK (Kazakhstan Embassy in Korea)',
    hero: 'Community · Diplomacy',
    summary: 'Supported cultural and educational programs under the Embassy of Kazakhstan; coordinated volunteers, partners, and event logistics with diplomatic stakeholders.',
    bullets: [
      'Program planning & logistics for embassy-affiliated events',
      'Partnership outreach and stakeholder coordination',
      'Volunteer management and communication workflows',
      'Public relations and bilingual documentation'
    ],
    imgs: ['images/ksak1.jpg'],
    impact: [
      'Delivered 8+ embassy events on schedule with full stakeholder alignment',
      'Expanded partner network to 5+ universities and cultural centers',
      'Standardized volunteer onboarding process to ensure consistency',
      'Introduced feedback forms to measure participant engagement post-event'
    ]
  },
  {
    title: 'Java Mentor (Sogang University)',
    hero: 'Teaching · International Students',
    summary: 'Mentored international students in core Java and OOP principles; created structured labs, code reviews, and learning milestones for better retention.',
    bullets: [
      'Led OOP and data structure workshops with real-world examples',
      'Developed assignment templates and test cases for practice',
      'Conducted 1:1 mentoring and code review sessions',
      'Collaborated with faculty to align content with course outcomes'
    ],
    imgs: ['images/mentor.jpg'],
    impact: [
      'Increased average exam performance by 15% through structured mentoring',
      'Reduced drop-out rate for foreign students by implementing guided labs',
      'Introduced peer-learning system improving engagement and collaboration',
      'Documented mentoring curriculum reused by future TAs and mentors'
    ]
  },


 ],
 ko: [
  {
    title: '설립자 - ISCSA (서강대학교)',
    hero: '커뮤니티 · 조직 운영',
    summary:
      '국제 컴퓨터공학 학생들을 위한 동아리를 설립하고, 온보딩, 학습, 네트워킹을 강화하는 프로그램을 기획했습니다.',
    bullets: [
      '국제 학생 대상 리크루팅 및 온보딩 전략 수립',
      '피어 러닝 세션 및 지식 공유 워크숍 기획·운영',
      '예산 관리, 스폰서십 확보 및 결과 보고',
      '교수진·학생 리더 간의 크로스 커뮤니케이션 조율'
    ],
    imgs: ['images/iscsa.png'],
    impact: [
      '10개국 이상에서 40명+의 회원 규모로 성장',
      '학기당 10개 이상의 학습·문화 활동 기획',
      '지속 가능한 운영을 위한 피드백 시스템 및 문서 템플릿 구축',
      '신입 유학생을 위한 체계적 멘토링 파이프라인 설계'
    ]
  },

  {
    title: '조직위원/멤버 - KSAK (주한 카자흐스탄 대사관)',
    hero: '커뮤니티 · 외교',
    summary:
      '주한 카자흐스탄 대사관 산하의 문화·교육 프로그램을 지원하며, 행사 운영, 파트너십, 봉사자 관리를 담당했습니다.',
    bullets: [
      '대사관 행사 기획 및 운영 로지스틱스 관리',
      '파트너 기관 대상 협력 및 이해관계자 커뮤니케이션',
      '봉사자 관리 및 커뮤니케이션 프로세스 운영',
      '홍보 자료 제작 및 이중언어 문서 작성'
    ],
    imgs: ['images/ksak1.jpg'],
    impact: [
      '8회 이상의 대사관 행사를 일정 준수하며 성공적으로 운영',
      '5개 이상의 대학 및 문화기관과 협력 네트워크 확장',
      '봉사자 온보딩 프로세스 표준화로 운영 효율 향상',
      '행사 후 참여도 측정을 위한 피드백 시스템 구축'
    ]
  },

  {
    title: 'Java 멘토 (서강대학교)',
    hero: '티칭 · 국제학생',
    summary:
      '국제 학생들을 대상으로 Java 및 OOP 기초를 멘토링하며, 체계적인 실습, 코드 리뷰, 학습 로드맵을 제공했습니다.',
    bullets: [
      '실제 사례 기반의 OOP, 자료구조 워크숍 운영',
      '과제 템플릿 및 테스트 케이스 개발',
      '1:1 멘토링 및 코드 리뷰 세션 진행',
      '수업 목표에 맞춘 교수진과의 커리큘럼 조율'
    ],
    imgs: ['images/mentor.jpg'],
    impact: [
      '체계적 멘토링으로 평균 시험 점수 15% 향상',
      '가이드 실습 도입으로 외국인 학생 중도 이탈률 감소',
      '피어 러닝 시스템 도입으로 참여율, 협업 증가',
      '후임 TA를 위한 재사용 가능한 멘토링 커리큘럼 문서화'
    ]
  }
],

es: [
  {
    title: 'Fundadora — ISCSA (Universidad Sogang)',
    hero: 'Comunidad · Organización',
    summary:
      'Fundé un club internacional de estudiantes de informática y diseñé programas para mejorar el onboarding, el aprendizaje y la creación de redes entre estudiantes globales.',
    bullets: [
      'Estrategia de reclutamiento y onboarding para estudiantes internacionales',
      'Organización de sesiones de aprendizaje entre pares y talleres de intercambio de conocimientos',
      'Gestión de presupuesto, adquisición de patrocinadores y reportes',
      'Coordinación entre profesores y líderes estudiantiles'
    ],
    imgs: ['images/iscsa.png'],
    impact: [
      'Crecimiento del club a más de 40 miembros activos de 10+ países',
      'Planificación de más de 10 eventos culturales y académicos por semestre',
      'Creación de un sistema de retroalimentación y plantillas de documentación para continuidad',
      'Implementación de un programa estructurado de mentoría para nuevos estudiantes internacionales'
    ]
  },

  {
    title: 'Organizadora/Miembro — KSAK (Embajada de Kazajistán en Corea)',
    hero: 'Comunidad · Diplomacia',
    summary:
      'Apoyé programas culturales y educativos de la Embajada de Kazajistán, coordinando voluntarios, socios y logística de eventos con diferentes actores diplomáticos.',
    bullets: [
      'Planificación de programas y logística para eventos de la embajada',
      'Gestión de alianzas y comunicación con stakeholders',
      'Coordinación de voluntarios y flujos de comunicación',
      'Relaciones públicas y documentación bilingüe'
    ],
    imgs: ['images/ksak1.jpg'],
    impact: [
      'Entrega exitosa de más de 8 eventos diplomáticos dentro del cronograma',
      'Ampliación de la red de socios a más de 5 universidades e instituciones culturales',
      'Estandarización del onboarding de voluntarios para mayor consistencia',
      'Creación de formularios de retroalimentación para medir la participación del público'
    ]
  },

  {
    title: 'Mentora de Java (Universidad Sogang)',
    hero: 'Docencia · Estudiantes Internacionales',
    summary:
      'Guié a estudiantes internacionales en fundamentos de Java y OOP mediante laboratorios estructurados, revisiones de código y metas de aprendizaje claras.',
    bullets: [
      'Talleres de OOP y estructuras de datos con ejemplos reales',
      'Desarrollo de plantillas de tareas y casos de prueba',
      'Sesiones de mentoría 1:1 y revisiones de código',
      'Colaboración con el profesorado para alinear contenido con los objetivos del curso'
    ],
    imgs: ['images/mentor.jpg'],
    impact: [
      'Mejora del 15% en el rendimiento promedio de exámenes',
      'Reducción de la tasa de abandono de estudiantes extranjeros mediante laboratorios guiados',
      'Implementación de aprendizaje entre pares para mejorar la colaboración',
      'Documentación del currículo de mentoría para futuros asistentes docentes'
    ]
  }
],

kk: [
  {
    title: 'Құрылтайшы — ISCSA (Соган университеті)',
    hero: 'Қоғамдастық · Ұйымдастыру',
    summary:
      'Халықаралық КЕ студенттер клубын құрдым; студенттердің бейімделуі, оқу үдерісі және нетворкингін жақсартатын бағдарламалар әзірледім.',
    bullets: [
      'Халықаралық студенттерге арналған рекрутинг және онбординг стратегиясы',
      'Peer-learning сабақтары мен білім алмасу воркшоптарын ұйымдастыру',
      'Бюджет жүргізу, демеушілер табу және есеп беру',
      'Оқытушылар мен студенттік көшбасшылар арасындағы байланысты үйлестіру'
    ],
    imgs: ['images/iscsa.png'],
    impact: [
      '10+ елден 40+ белсенді мүшесі бар қауымдастыққа дейін өсті',
      'Семестр сайын 10+ мәдени және оқу шараларын өткіздім',
      'Тұрақты жұмыс үшін ішкі фидбек жүйесін және құжат шаблондарын құрдым',
      'Жаңа халықаралық студенттерге арналған менторлық жүйе жасадым'
    ]
  },

  {
    title: 'Ұйымдастырушы/Мүше — KSAK (Кореядағы Қазақстан Елшілігі)',
    hero: 'Қоғамдастық · Дипломатия',
    summary:
      'Қазақстан Елшілігінің мәдени-ағартушылық жобаларын қолдап, еріктілерді, серіктестерді және іс-шара логистикасын дипломатиялық органдармен бірге басқардым.',
    bullets: [
      'Елшілік шараларын жоспарлау және логистикалық жұмыстар',
      'Серіктестермен байланыс орнату және стейкхолдерлерді үйлестіру',
      'Еріктілерді басқару және коммуникация процесін жүргізу',
      'PR материалдарын дайындау және екі тілде құжат жүргізу'
    ],
    imgs: ['images/ksak1.jpg'],
    impact: [
      '8+ елшілік шарасын уақытында әрі сәтті өткізу',
      '5+ университет пен мәдени ұйымдармен серіктестік желісін кеңейту',
      'Еріктілерді онбордингтеу процесін стандарттау',
      'Қатысушылардың пікірін өлшеу үшін фидбек формаларын енгізу'
    ]
  },

  {
    title: 'Java ментор (Соган университеті)',
    hero: 'Оқыту · Халықаралық студенттер',
    summary:
      'Халықаралық студенттерге Java және ООП негіздерін үйретіп, құрылымды лабораториялар, код шолу және оқу мақсаттарын әзірледім.',
    bullets: [
      'Нақты мысалдармен OOP және деректер құрылымы бойынша воркшоптар',
      'Тапсырма шаблондарын және тест-кейстер әзірлеу',
      '1:1 менторлық және код шолу сабақтары',
      'Курс мақсаттарына сәйкестендіру үшін оқытушылармен бірлесу'
    ],
    imgs: ['images/mentor.jpg'],
    impact: [
      'Құрылымды менторлық арқылы тест нәтижелері 15% жақсарды',
      'Оқу лабораториялары арқылы шетелдік студенттердің шығу деңгейі төмендетілді',
      'Peer-learning жүйесі енгізіліп, студенттердің қызығушылығы артты',
      'Келесі ассистенттер қолдана алатын менторлық оқу бағдарламасы құрастырылды'
    ]
  }
],
ru: [
  {
    title: 'Основатель — ISCSA (Университет Соган)',
    hero: 'Сообщество · Организация',
    summary:
      'Основала международный клуб студентов CS; разработала программы для улучшения онбординга, обучения и нетворкинга среди иностранных студентов.',
    bullets: [
      'Стратегия рекрутинга и онбординга для международных участников',
      'Организация peer-learning занятий и воркшопов по обмену знаниями',
      'Бюджетирование, поиск спонсоров и отчётность',
      'Координация между преподавателями и студенческими лидерами'
    ],
    imgs: ['images/iscsa.png'],
    impact: [
      'Рост сообщества до 40+ активных участников из 10+ стран',
      'Планирование 10+ культурных и учебных мероприятий за семестр',
      'Создала внутреннюю систему обратной связи и шаблоны документации',
      'Разработала структурированную менторскую программу для новых международных студентов'
    ]
  },

  {
    title: 'Организатор/Участник — KSAK (Посольство Казахстана в Корее)',
    hero: 'Сообщество · Дипломатия',
    summary:
      'Поддерживала культурные и образовательные проекты при Посольстве Казахстана; координировала волонтёров, партнёров и логистику мероприятий.',
    bullets: [
      'Планирование и логистика мероприятий посольства',
      'Работа с партнёрами и коммуникация со стейкхолдерами',
      'Управление волонтёрами и коммуникационными процессами',
      'PR-поддержка и двуязычная документация'
    ],
    imgs: ['images/ksak1.jpg'],
    impact: [
      'Провела более 8 мероприятий посольства строго по срокам',
      'Расширила сеть партнёров до 5+ университетов и культурных центров',
      'Стандартизировала процесс онбординга волонтёров',
      'Внедрила формы обратной связи для оценки вовлечённости участников'
    ]
  },

  {
    title: 'Java Ментор (Университет Соган)',
    hero: 'Обучение · Международные студенты',
    summary:
      'Наставляла иностранных студентов по Java и основам ООП; создала структурированные лабораторные работы, код-ревью и этапы обучения.',
    bullets: [
      'Проводила воркшопы по ООП и структурам данных с реальными примерами',
      'Разработала шаблоны заданий и тест-кейсы',
      'Проводила индивидуальные сессии и код-ревью',
      'Работала с преподавателями для выравнивания содержания курса'
    ],
    imgs: ['images/mentor.jpg'],
    impact: [
      'Повышение среднего балла экзаменов на 15% благодаря менторству',
      'Снижение уровня отчислений иностранных студентов через лаборатории',
      'Внедрение peer-learning системы для повышения вовлечённости',
      'Документировала учебную программу для будущих ассистентов'
    ]
  }
]

}





// ======= Renderers =======
function applyI18n(){
  $$('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n'); const val = t(key); if(val) el.textContent = val;
  });
  const map = {en:'EN', ko:'KR', es:'ES', kk:'KZ', ru:'RU'}; $('#langBtn').textContent = map[LANG] + ' ▾';
  renderCards();
  renderPhoto();
  renderRolesMini();
  renderLeadership();
}

function renderPhoto(){
  $('#photoCard').innerHTML = `
    <div style="display:grid; gap:14px">
      <img class="avatar" src="images/graduation_pic.JPG" alt="Graduation photo"/>
    </div>`;
}

function renderRolesMini(){
  const C = PROFILE_BY_LANG[LANG] || PROFILE_BY_LANG.en;
  $('#rolesMini').innerHTML = `
    <div class="tag">${C.title}</div>
    <div class="subtitle">${C.subtitle}</div>
    <ul>${C.roles.map(r=>`<li>${r}</li>`).join('')}</ul>
    ${C.skills ? `
      <div class="subtitle" style="margin-top:10px;">${C.skillsTitle}</div>
      <ul>${C.skills.map(s=>`<li>${s}</li>`).join('')}</ul>
    ` : ''}
  `;
}


function renderCards(){
  const PROJECTS = PROJECTS_BY_LANG[LANG] || PROJECTS_BY_LANG.en;
  $('#cards').innerHTML = PROJECTS.map((p,i)=>`
    <article class="card" data-type="proj" data-idx="${i}" tabindex="0" role="button" aria-label="Open ${p.title}">
      <div class="thumb"><div class="chip">${p.hero}</div></div>
      <div class="body">
        <h3>${p.title}</h3>
        <p style="color:var(--muted)">${p.summary}</p>
        <div class="meta">${p.labels?.map(l=>`<span class="tag sm">${l}</span>`).join('')||''}</div>
      </div>
    </article>
  `).join('');
  $$('.card', $('#cards')).forEach(card=>{
    card.addEventListener('click', ()=> openDrawer(+card.dataset.idx, 'proj'));
    card.addEventListener('keypress', (e)=>{ if(e.key==='Enter' || e.key===' ') openDrawer(+card.dataset.idx, 'proj'); });
  });
}


function renderLeadership(){
  const container = $('#leadCards');
  if (!container) return;

  const CARDS = LEAD_CARDS_BY_LANG[LANG] || LEAD_CARDS_BY_LANG.en;

  container.innerHTML = CARDS.map((c,i)=>{
    const bullets = Array.isArray(c.bullets) ? c.bullets : [];
    const bulletsHtml = bullets.length
      ? `<ul class="bullets" style="margin:10px 0 0; padding-left:18px; color:var(--muted)">
           ${bullets.map(b=>`<li>${b}</li>`).join('')}
         </ul>`
      : '';

    return `
      <article class="card" data-type="lead" data-idx="${i}" tabindex="0"
               role="button" aria-label="Open ${c.title}">
        <div class="thumb"><div class="chip">${c.hero}</div></div>
        <div class="body">
          <h3>${c.title}</h3>
          <p style="color:var(--muted)">${c.summary}</p>
          ${bulletsHtml}
        </div>
      </article>
    `;
  }).join('');

  $$('.card', container).forEach(card=>{
    card.addEventListener('click', ()=> openDrawer(+card.dataset.idx, 'lead'));
    card.addEventListener('keypress', (e)=>{
      if(e.key === 'Enter' || e.key === ' ') openDrawer(+card.dataset.idx, 'lead');
    });
  });
}


// ======= Drawer with gallery + lightbox =======
const drawerBackdrop = $('#drawerBackdrop');
const drawerTitle    = $('#drawerTitle');
const drawerContent  = $('#drawerContent');

function galleryHtml(imgs){
  if(!imgs || !imgs.length) return '';
  return `
    <div class="gallery" data-gallery>
      ${imgs.map((src,i)=>`<figure><img src="${src}" alt="Project image ${i+1}"></figure>`).join('')}
    </div>`;
}

function setupGallery(scopeEl){
  const g = scopeEl.querySelector('[data-gallery]');
  if(!g) return;
  let lb = document.getElementById('lightboxBackdrop');
  if(!lb){
    lb = document.createElement('div');
    lb.id = 'lightboxBackdrop';
    lb.className = 'lb-backdrop';
    lb.innerHTML = `<img alt="Preview">`;
    document.body.appendChild(lb);
    lb.addEventListener('click', ()=> lb.classList.remove('show'));
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') lb.classList.remove('show'); });
  }
  g.querySelectorAll('img').forEach(img=>{
    img.addEventListener('click', ()=>{
      lb.querySelector('img').src = img.src;
      lb.classList.add('show');
    });
  });
}

function openDrawer(idx, type){
  const PSET = type === 'lead'
    ? LEAD_CARDS
    : (PROJECTS_BY_LANG[LANG] || PROJECTS_BY_LANG.en);
  const P = PSET[idx];
  if(!P) return;

  drawerTitle.textContent = P.title || 'Details';

  const gallery = (P.imgs && P.imgs.length)
    ? `<div class="gallery" data-gallery>
         ${P.imgs.map((src,i)=>`<figure><img src="${src}" alt="Image ${i+1} of ${P.title}"></figure>`).join('')}
       </div>`
    : '';

  const impactList = (P.impact && P.impact.length)
    ? `<h4>${t('drawer.impact')}</h4><ul>${P.impact.map(x=>`<li>${x}</li>`).join('')}</ul>`
    : '';

 
  const summaryText = P.summary || (P.bullets ? P.bullets.join(' · ') : '');

  drawerContent.innerHTML = `
    <div class="tag" style="margin-bottom:10px">${P.hero || ''}</div>
    ${gallery}
    <p style="color:var(--muted)">${summaryText}</p>
    ${impactList}
    <h4>${t('drawer.process')}</h4>
    <p>Problem framing → prioritization → MVP cut → instrumentation → usability tests → iteration.</p>
  `;

  setupGallery(drawerContent);
  drawerBackdrop.classList.add('show');
  drawerBackdrop.setAttribute('aria-hidden','false');
  history.pushState({drawer:true, idx, type}, '', location.href);
}

function closeDrawer(){ drawerBackdrop.classList.remove('show'); drawerBackdrop.setAttribute('aria-hidden','true'); }
$('#closeDrawer').addEventListener('click', (e)=>{ e.preventDefault(); closeDrawer(); });
drawerBackdrop.addEventListener('click', (e)=>{ if(e.target===drawerBackdrop) closeDrawer(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeDrawer(); });

// ======= Router, pill, language switch =======
function showView(id){ $$('.view').forEach(v=>v.classList.remove('active')); const target = $('#'+id) || $('#home'); target.classList.add('active'); }
function navigate(hash){ const id = (hash || '#home').replace('#',''); document.body.classList.add('transitioning'); setTimeout(()=>{ showView(id); document.body.classList.remove('transitioning'); }, 340); }
document.addEventListener('click', (e)=>{ const a = e.target.closest('[data-link]'); if(!a) return; e.preventDefault(); const href = a.getAttribute('href'); history.pushState({view:href}, '', href); navigate(href); });
window.addEventListener('popstate', ()=>{ closeDrawer(); navigate(location.hash || '#home'); });

const pill = $('#projectsPill');
const io = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ pill.classList.toggle('show', !e.isIntersecting); }); },{ threshold:.15 });
io.observe($('.hero'));

const langWrap = $('#lang'); const langBtn = $('#langBtn'); const langMenu = $('#langMenu');
langBtn.addEventListener('click', ()=>{ const open = langWrap.classList.toggle('open'); langBtn.setAttribute('aria-expanded', String(open)); });
langMenu.addEventListener('click', (e)=>{ const li = e.target.closest('li[data-lang]'); if(!li) return; LANG = li.dataset.lang; localStorage.setItem('lang', LANG); langWrap.classList.remove('open'); langBtn.setAttribute('aria-expanded','false'); applyI18n(); });
document.addEventListener('click', (e)=>{ if(!langWrap.contains(e.target)) { langWrap.classList.remove('open'); langBtn.setAttribute('aria-expanded','false'); } });


document.getElementById('y').textContent = new Date().getFullYear();
applyI18n();
navigate(location.hash || '#home');
