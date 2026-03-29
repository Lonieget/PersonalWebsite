import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  constructor(public langService: LanguageService) {}

  skillCategories = [
    {
      nameKey: 'skills.category.frontend',
      icon: '💻',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
      ]
    },
    {
      nameKey: 'skills.category.backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', level: 70 },
        { name: 'C#', level: 75 },
        { name: 'MySQL', level: 70 }
      ]
    },
    {
      nameKey: 'skills.category.tools',
      icon: '🛠️',
      skills: [
        { name: 'Git / GitHub', level: 80 },
        { name: 'SourceTree', level: 70 }
      ]
    }
  ];
}
