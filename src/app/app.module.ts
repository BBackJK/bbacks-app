import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '@env';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@layout/layout.module';
import { PagesModule } from '@modules/pages/pages.module';
import { ComponentsModule, DirectivesModule } from '@shared/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule
    , BrowserModule.withServerTransition({ appId: 'serverApp' })
    , NgxsModule.forRoot([
      // in your states
    ], { developmentMode: !environment.production })
    , NgxsLoggerPluginModule.forRoot()
    , NgxsReduxDevtoolsPluginModule.forRoot()
    , LayoutModule
    , PagesModule
    , ComponentsModule
    , DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
