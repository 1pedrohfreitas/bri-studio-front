import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./pages/pessoas/pessoas.module').then((m) => m.PessoasModule),
      }
];
