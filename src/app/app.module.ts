import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import {MatCardModule} from '@angular/material/card';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DashboardComponent } from './pages/blogger/dashboard/dashboard.component';
import { SidebarComponent } from './pages/blogger/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    PostBlogComponent,
    PageNotFoundComponent,
    PostCardComponent,
    ImageCarouselComponent,
    BlogListComponent,
    BlogDetailComponent,
    SidenavComponent,
    ContactUsComponent,
    AboutUsComponent,
    PaginationComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CKEditorModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
