import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Importe o components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HelloComponent } from './components/hello/hello.component';
import { ButtonComponent } from './components/button/button.component';
import { EntryDataComponent } from './components/entry-data/entry-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HelloComponent,
    ButtonComponent,
    EntryDataComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
