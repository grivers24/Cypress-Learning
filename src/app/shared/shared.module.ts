import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { NextStepsComponent } from './components/next-steps/next-steps.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { LinksComponent } from './components/links/links.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    HighlightCardComponent,
    ResourcesComponent,
    NextStepsComponent,
    TerminalComponent,
    LinksComponent,
    FooterComponent,
  ],
  exports: [
    ToolbarComponent,
    HighlightCardComponent,
    ResourcesComponent,
    NextStepsComponent,
    TerminalComponent,
    LinksComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
