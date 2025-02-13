import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, enableProdMode} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

enableProdMode()
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient()
  ]
}).catch(err => console.error(err));