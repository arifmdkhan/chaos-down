import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SidebarComponent } from './pages/blogger/sidebar/sidebar.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path:'landing-page',component:LandingPageComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'post-blog',component:PostBlogComponent},
  {path:'post-card',component:PostCardComponent},
  {path:'blog-list',component: BlogListComponent},
  {path:'blog-detail',component:BlogDetailComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
