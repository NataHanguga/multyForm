import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', children: [
            {
                path: 'pay-constant',
                loadChildren: () => import('./components/pay-constant/pay-constant.module').then(m => m.PayConstantModule)
            },
            {
                path: 'grade',
                loadChildren: () => import('./components/grade/grade.module').then(m => m.PositionModule)
            },
            {
                path: 'education',
                loadChildren: () => import('./components/education/education.module').then(m => m.EducationModule)
            },
            {
                path: 'percent',
                loadChildren: () => import('./components/percent/percent.module').then(m => m.PercentModule)
            },
            {
                path: 'position',
                loadChildren: () => import('./components/position/position.module').then(m => m.PositionModule)
            },
            {
                path: 'rank',
                loadChildren: () => import('./components/rank/rank.module').then(m => m.RankModule)
            },
            {
                path: 'category',
                loadChildren: () => import('./components/category/category.module').then(m => m.CategoryModule)
            },
            {
                path: 'add-position',
                loadChildren: () =>
                    import('./components/additional-position/additional-position.module').then(m => m.AdditionalPositionModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingRoutingModule { }
