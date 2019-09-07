import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';

// Modules
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { HeaderComponent } from './components/header/header.component';
import { PrimengServiceModule } from './components/primeng/primeng.module';
// Routing Module
import { AppRoutingModule } from './app.routing';

// Interceptor
import { CommonHttpInterceptor } from './interceptor/common.interceptor';

// Redux
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

// Services
import { ConfigService } from './services/config-service/config.service';
import { HelperService } from './services/helper-service/helper.service';
import { ApiService } from './services/api-service/api.service';
import { PagerService } from './services/page-service/page.service';

// Directives

// Components
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    PrimengServiceModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [
    ConfigService,
    HelperService,
    AuthGuard,

    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [ConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: CommonHttpInterceptor,
    },
    ApiService,
    FormBuilder,
    PagerService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

export function appConfigFactory(config: ConfigService) {
  return () => config.load();
}
