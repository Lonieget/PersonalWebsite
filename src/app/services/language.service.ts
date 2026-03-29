import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'zh';

export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _currentLanguage = signal<Language>('en');
  
  readonly currentLanguage = this._currentLanguage.asReadonly();

  readonly translations: Translations = {
    // Header
    'nav.home': { en: 'Home', zh: '首頁' },
    'nav.portfolio': { en: 'Portfolio', zh: '作品集' },
    'nav.about': { en: 'About', zh: '關於我' },
    'nav.skills': { en: 'Skills', zh: '技能' },
    'nav.contact': { en: 'Contact', zh: '聯絡我' },

    // Hero
    'hero.greeting': { en: "Hello, I'm", zh: '您好，我是' },
    'hero.name': { en: 'Zheng Yu-Xiang', zh: '鄭宇翔' },
    'hero.title': { en: 'Full-stack Developer & Software Engineer', zh: '全端開發者 & 軟體工程師' },
    'hero.description': { 
      en: 'Starting from a background in animation and game design, I focus on system logic and full-stack web development. I love solving problems and continuous learning, dedicated to creating high-quality user experiences and system architectures.', 
      zh: '從動畫與遊戲設計背景出發，專注於系統邏輯與網站全端開發。熱愛解決問題並持續學習，致力於打造優質的使用者體驗與系統架構。' 
    },
    'hero.cta.portfolio': { en: 'View Portfolio', zh: '查看作品集' },
    'hero.cta.about': { en: 'About Me', zh: '關於我' },

    // Portfolio
    'portfolio.label': { en: 'Portfolio', zh: 'Portfolio' },
    'portfolio.heading': { en: 'Featured Projects', zh: '作品集' },
    
    // Project 1
    'project.quiz.title': { en: 'Dynamic Questionnaire System', zh: '動態問卷系統' },
    'project.quiz.desc': { 
      en: 'Designed and developed system functions, built frontend interfaces, and integrated APIs for questionnaire creation, submission, and data visualization.', 
      zh: '負責系統功能設計與開發，建立前端介面與互動功能，並透過 API 進行資料串接，實作問卷建立、填寫與資料顯示等功能。' 
    },
    
    // Project 2
    'project.pos.title': { en: 'Pet Restaurant POS System', zh: '寵物餐廳 POS 系統' },
    'project.pos.desc': { 
      en: 'Developed login modules and HR system features, responsible for frontend implementation, backend API integration, and testing using Git for team collaboration.', 
      zh: '參與登入模組與人資系統功能開發，負責前端畫面實作、後端 API 串接與測試，並透過 Git 進行團隊協作。' 
    },
    
    // Project 3
    'project.vr.title': { en: 'VR Puzzle Game', zh: 'VR 解謎遊戲' },
    'project.vr.desc': { 
      en: 'University graduation project. Implemented game interaction logic, designed puzzle flows and mechanisms, fostering problem-solving and modular architecture skills.', 
      zh: '大學畢業專題。負責遊戲互動邏輯實作，設計解謎流程與機制，培養問題分析與模組化架構概念。' 
    },

    // About
    'about.label': { en: 'About Me', zh: 'About Me' },
    'about.heading': { en: 'My Story', zh: '關於我' },
    'about.photo.name': { en: 'Zheng Yu-Xiang', zh: '鄭宇翔' },
    'about.photo.role': { en: 'Full-stack Developer & Software Engineer', zh: '全端開發者 & 軟體工程師' },
    'about.p1': { 
      en: 'During university, I participated in a VR puzzle game project made with Unreal Engine. Over time, I developed a strong interest in programming and system logic, establishing software engineering as my future career path.', 
      zh: '在大學期間，我參與了以 Unreal Engine 製作的 VR 解謎遊戲專題。逐漸對程式設計與系統邏輯產生濃厚興趣，並確立以軟體工程師作為未來的職涯發展方向。' 
    },
    'about.p2': { 
      en: "In my graduation project, I was primarily responsible for game interaction logic and implementation, designing puzzle flows and player interaction mechanisms using Unreal Engine's Blueprint system. This project taught me how to plan system flows, break down functional requirements, and cultivate debugging and problem-analysis skills through repeated testing.", 
      zh: '在畢業專題中，我主要負責遊戲互動邏輯與功能實作，透過 Unreal Engine 的 Blueprint 系統設計解謎流程與玩家互動機制。此專題讓我學習如何規劃系統流程、拆解功能需求，並在反覆測試與調整中培養除錯能力與問題分析能力，也讓我對大型專案架構與模組化設計建立初步概念。' 
    },
    'about.p3': { 
      en: 'After completing my military service, I took some time to explore my future direction. During this period, I discovered my passion for programming and enrolled in the Full-stack Engineer training program at Wan-Shih Technology. The course was project-oriented, during which I completed a personal project "Dynamic Questionnaire System" and a group POS system project, focusing on login modules and HR system functions.', 
      zh: '服完兵役後，我給自己一段時間探索未來方向。在這段期間，我發現自己對程式設計的興趣與熱情，因此報名參加產業新尖兵計畫的万十科技全端工程師培訓。培訓課程採專案導向學習方式，期間完成個人專題「動態問卷系統」，以及團體專題 POS 系統中的登入模組與人資系統功能。' 
    },
    'about.p4': { 
      en: 'In the "Dynamic Questionnaire System" project, I was responsible for system design and development, using Angular to build the frontend interface and interact with backend services via APIs. In the group POS project, I participated in developing login and HR modules, handling frontend UI, backend API integration, testing, and debugging using Git for version control and team collaboration.', 
      zh: '在「動態問卷系統」專題中，我負責系統功能設計與開發，使用 Angular 建立前端介面與互動功能，並透過 API 與後端服務進行資料串接，實作問卷建立、填寫與資料顯示等功能。在團體 POS 系統專案中，我參與登入模組與人資系統的功能開發，負責前端畫面實作、後端 API 串接以及系統測試與除錯，並透過 Git 進行版本控制與團隊協作，使我更加熟悉完整的軟體開發流程。' 
    },
    'about.p5': { 
      en: 'Regarding technical skills, I have experience in Angular frontend development and a foundation in Java and C# for backend processing and system logic. I value code maintainability and development standards, habitually understanding the system architecture before making changes, and improving problem-solving efficiency through documentation and team discussions.', 
      zh: '在技術能力方面，我具備 Angular 前端開發經驗，能設計使用者操作流程並實作互動介面；後端方面具備 Java 與 C# 的基礎，理解資料處理流程、系統邏輯設計以及前後端資料串接的基本架構。同時我也重視程式可維護性與開發規範，習慣在理解系統架構後再進行修改，並透過查閱官方文件與與團隊討論來提升問題解決效率。' 
    },
    'about.p6': { 
      en: 'Looking ahead, I hope to continue accumulating practical experience in software engineering, deepening my full-stack capabilities, and advancing toward becoming a full-stack engineer who can independently manage functional modules. I believe that with my steady learning ability, logical thinking, and passion for software development, I can grow rapidly and bring substantial technical contributions to any team.', 
      zh: '未來，我希望能持續在軟體工程領域累積實務經驗，逐步深化前後端開發能力，並朝能獨立負責功能模組的全端工程師邁進。我相信憑藉穩定的學習能力、良好的邏輯思維以及對軟體開發的熱情，能在新鮮人階段快速成長，並為團隊帶來實質的技術貢獻。' 
    },
    'about.skill.frontend': { en: 'Front-end', zh: '前端開發' },
    'about.skill.backend': { en: 'Back-end', zh: '後端開發' },
    'about.skill.tools': { en: 'Tools & Others', zh: '工具與其他' },

    // Skills
    'skills.label': { en: 'Skills', zh: 'Skills' },
    'skills.heading': { en: 'Technical Expertise', zh: '專業技能' },
    'skills.category.frontend': { en: 'Frontend', zh: '前端開發' },
    'skills.category.backend': { en: 'Backend', zh: '後端開發' },
    'skills.category.tools': { en: 'Tools & Others', zh: '工具與其他' },

    // Contact
    'contact.label': { en: 'Contact', zh: 'Contact' },
    'contact.heading': { en: "Get In Touch", zh: '聯絡我' },
    'contact.desc': { 
      en: 'I am currently looking for opportunities as a full-stack or backend engineer.\nIf you\'re interested in my background or would like to connect, please feel free to reach out to me!', 
      zh: '目前我正在尋求全端或後端工程師的相關職缺。\n如果您對我的經歷有興趣，或是想進一步交流，歡迎隨時與我聯絡！' 
    },
    'contact.email': { en: 'Email', zh: '電子郵件' },
    'contact.phone': { en: 'Phone', zh: '聯絡電話' },
    'contact.github': { en: 'GitHub', zh: 'GitHub' },
    'contact.linkedin': { en: 'LinkedIn', zh: 'LinkedIn' },

    // Footer
    'footer.copy': { 
      en: "Yu-Xiang Zheng's Personal Website, showcasing backend and full-stack development projects and experience. All rights reserved.", 
      zh: '鄭宇翔的個人網站，展示後端與全端開發作品與經歷。版權所有。' 
    },
  };

  setLanguage(lang: Language) {
    this._currentLanguage.set(lang);
  }

  translate(key: string): string {
    return this.translations[key] ? this.translations[key][this._currentLanguage()] : key;
  }
}
