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
import { ApiService } from './services/api-service/api.service';

// Directives

// Components
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { reducers, metaReducers } from './reducer/reducer';
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
    // StoreModule.provideStore(reducer),
    // EffectsModule.run(UserEffects),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([UserEffects]),
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [
    AuthGuard,

    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: CommonHttpInterceptor,
    },
    ApiService,
    FormBuilder,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

