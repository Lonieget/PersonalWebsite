import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      name: '前端開發',
      icon: '',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
      ]
    },
    {
      name: '後端開發',
      icon: '',
      skills: [
        { name: 'Java', level: 70 },
        { name: 'C#', level: 75 },
        { name: 'MySQL', level: 70 }
      ]
    },
    {
      name: '工具與其他',
      icon: '',
      skills: [
        { name: 'Git / GitHub', level: 80 },
        { name: 'SourceTree', level: 70 }
      ]
    }
  ];
}
