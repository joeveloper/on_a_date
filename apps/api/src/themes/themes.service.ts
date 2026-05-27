import { Injectable } from '@nestjs/common';

@Injectable()
export class ThemesService {
  listThemes() {
    return [
      {
        id: 'default-midnight',
        name: 'Midnight Neon',
        gradientFrom: '#0F172A',
        gradientTo: '#581C87',
      },
    ];
  }
}
