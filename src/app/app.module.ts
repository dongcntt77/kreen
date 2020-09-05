import { MainComponent } from './main/main.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'chitiet/:id',
    component: ChitietComponent,
  },
  {
    path: 'danhmuc',
    component: DanhmucComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
