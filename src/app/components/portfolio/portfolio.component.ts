import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(public langService: LanguageService) {}
  projects = [
    {
      img: 'assets/images/quiz.png',
      titleKey: 'project.quiz.title',
      tech: 'Angular / API',
      descriptionKey: 'project.quiz.desc',
      link: 'https://lonieget.github.io/QuizAngular/login'
    },
    {
      img: 'assets/images/pos.png',
      titleKey: 'project.pos.title',
      tech: 'Angular / Java / Git',
      descriptionKey: 'project.pos.desc',
      link: 'https://lonieget.github.io/PetRestaurant/login'
    },
    {
      img: 'assets/images/vr.png',
      titleKey: 'project.vr.title',
      tech: 'Unreal Engine',
      descriptionKey: 'project.vr.desc'
    }
  ];
}
