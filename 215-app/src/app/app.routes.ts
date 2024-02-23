import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CourseTableComponent } from './transcript-module/course-table/course-table.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routeGuardGuard } from './route-guard.guard';

export const routes: Routes = [
    { path: 'profile', component: ProfilePageComponent, title: 'Profile'},
    { path: 'detail', component: DetailPageComponent, title: 'Detail', canActivate: [routeGuardGuard] },
    { path: 'transcript', component: CourseTableComponent, title: 'Transcript' },
    { path: '', component: ProfilePageComponent},
    { path: '**', component: NotFoundComponent },
];