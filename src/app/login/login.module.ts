import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// // import { SalesSummaryComponent } from './dashboard-components/sales-summary/sales-summary.component';
// import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
// import { TopSellingComponent } from './dashboard-components/top-selling/top-selling.component';
// import { RecentCommentsComponent } from './dashboard-components/recent-comments/recent-comments.component';
// import { TempGuideComponent } from './dashboard-components/temp-guide/temp-guide.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login',
      urls: [
        { title: 'Login', url: '/login' },
        { title: 'Login' }
      ]
    },
    component: LoginComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes), HttpClientModule],
  declarations: [LoginComponent]
})

export class LoginModule {

}
