import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DetailsPage} from '../pages/details/details';
import { HorariosPage } from '../pages/horarios/horarios';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { HorariospProvider } from '../providers/horariosp/horariosp';
import { HttpClientModule } from '@angular/common/http'; 
import { Http,HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    HorariosPage,
    PagamentoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCkCodEybf7SdFymlNNTnDKOXwlS_9eyZI",
      authDomain: "agendamento-dc22e.firebaseapp.com",
      databaseURL: "https://agendamento-dc22e.firebaseio.com",
      projectId: "agendamento-dc22e",
      storageBucket: "agendamento-dc22e.appspot.com",
      messagingSenderId: "399155032605"
  
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    HorariosPage,
    PagamentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HorariospProvider
  ]
})
export class AppModule {}
