import { Routes } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
    },
    {
        path: 'ejercicios',
        component: EjerciciosComponent
    },
    {
        path: 'peliculas',
        component: MoviesComponent
    },
    {
        path: 'episodios',
        component: SeriesComponent
    }
];
