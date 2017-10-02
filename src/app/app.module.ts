import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectoriesComponent } from './directories/directories.component';
import { DirectoryListComponent } from './directories/directory-list/directory-list.component';
import { DirectoryDetailComponent } from './directories/directory-detail/directory-detail.component';
import { DirectoryItemComponent } from './directories/directory-list/directory-item/directory-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectoriesComponent,
    DirectoryListComponent,
    DirectoryDetailComponent,
    DirectoryItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
