import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { GucciComponent} from './examples/gucci/gucci.component';
import { LVComponent } from './examples/lv/lv.component';
import { DiorComponent } from './examples/dior/dior.component';
import { ChanlComponent } from './examples/chanl/chanl.component';
import { BalenciagaComponent } from './examples/balenciaga/balenciaga.component';
import { DolcegabanaComponent } from './examples/dolcegabana/dolcegabana.component';
import { ChromeheartsComponent } from './examples/chromehearts/chromehearts.component';
import { PradaComponent } from './examples/prada/prada.component';
import { ValidateComponent } from './components/validate/validate.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';






const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'gucci',            component: GucciComponent},
    { path: 'lv',               component: LVComponent},
    { path: 'dior',             component: DiorComponent},
    { path: 'chanl',            component: ChanlComponent},
    { path: 'balenciaga',       component: BalenciagaComponent},
    { path: 'dolcegabana',      component: DolcegabanaComponent},
    { path: 'chromehearts',     component: ChromeheartsComponent},
    { path: 'prada',            component: PradaComponent},
    { path: 'validate',         component: ValidateComponent},
    { path: 'product/:id',      component: ProductDetailComponent},
    { path: 'search',           component: SearchComponent},
    { path: 'detail',           component: DetailComponent},


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
