import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanerComponent} from './pages/planer/planer.component';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {CharactersComponent} from "./pages/characters/characters.component";
import {LocationsComponent} from "./pages/locations/locations.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planer',
    pathMatch: 'full'
  },
  {
    path: 'planer',
    component: PlanerComponent
  },
  {
    path: 'register',
    component: RegistrationPageComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
