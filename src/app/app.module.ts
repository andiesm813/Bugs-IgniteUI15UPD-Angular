import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { IgxButtonModule, IgxRippleModule, IgxTabsModule, IgxCardModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxDatePickerModule, IgxListModule, IgxAvatarModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { TestingComponentsComponent } from './testing-components/testing-components.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieAppComponent,
    TestingComponentsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxTabsModule,
    IgxCardModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxListModule,
    IgxAvatarModule,
    FormsModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
