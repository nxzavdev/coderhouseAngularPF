import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './pipes/fullname.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';

@NgModule({
  declarations: [FullnamePipe, TitleSizeDirective],
  imports: [CommonModule],
  exports: [FullnamePipe, TitleSizeDirective],
})
export class SharedModule {}
