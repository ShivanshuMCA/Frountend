import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NormalGuard } from './guard/normal.guard';
import { AdminGuard } from './guard/admin.guard';
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () =>
            import('./auth/login/login.module').then((m) => m.LoginModule),
    },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
