import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { EmpresasComponent } from '../empresas/empresas.component';
import { GrugComponent } from '../grug/grug.component';
import { ProdutosComponent } from '../produtos/produtos.component';

const routes: Routes = [
  {path:'', redirectTo:'empresas', pathMatch:'full'},
  {
    path:'',
    component: LayoutComponent,
    children: [
      {path:'empresas', component: EmpresasComponent},
      {path:'grug', component: GrugComponent},
      {path:'produtos', component: ProdutosComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
