import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      img: 'assets/images/quiz.png',
      title: '動態問卷系統',
      tech: 'Angular / API',
      description: '負責系統功能設計與開發，建立前端介面與互動功能，並透過 API 進行資料串接，實作問卷建立、填寫與資料顯示等功能。',
      link: 'https://lonieget.github.io/QuizAngular/login'
    },
    {
      img: 'assets/images/pos.png',
      title: '寵物餐廳 POS 系統',
      tech: 'Angular / Java / Git',
      description: '參與登入模組與人資系統功能開發，負責前端畫面實作、後端 API 串接與測試，並透過 Git 進行團隊協作。',
      link: 'https://lonieget.github.io/PetRestaurant/login'
    },
    {
      img: 'assets/images/vr.png',
      title: 'VR 解謎遊戲',
      tech: 'Unreal Engine',
      description: '大學畢業專題。負責遊戲互動邏輯實作，設計解謎流程與機制，培養問題分析與模組化架構概念。'
    }
  ];
}
