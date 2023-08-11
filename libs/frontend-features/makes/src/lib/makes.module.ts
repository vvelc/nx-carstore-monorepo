import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MakesListComponent } from './features/makes-list/makes-list.component';
import { UiModule } from '@nx-carstore-monorepo/shared/ui';
import { RouterModule } from '@angular/router';
import { makesRoutes } from './lib.routes';
import { MakesService } from './services/makes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MakesListComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    HttpClientModule,
    RouterModule.forChild(makesRoutes),
    UiModule,
  ],
  providers: [MakesService],
})
export class MakesModule {}
