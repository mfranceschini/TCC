import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
// import { Auth } from '@ionic/cloud-angular';

import { MyApp } from './app.component';

import { TextMaskModule } from 'angular2-text-mask';

import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ListMasterPage } from '../pages/list-master/list-master';
import { LoginPage } from '../pages/login/login'; 
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LostPage } from '../pages/lost/lost';
import { FoundPage } from '../pages/found/found';
import { PlacePage } from '../pages/place/place';
import { ComplaintPage } from '../pages/complaint/complaint';
import { FirstCarePage } from '../pages/first-care/first-care';
import { AnimalRegisterPage } from '../pages/animal-register/animal-register';
import { LostRegisterPage } from '../pages/lost-register/lost-register';
import { FoundRegisterPage } from '../pages/found-register/found-register';
import { WelcomePage } from '../pages/welcome/welcome';
import { PlaceRegisterPage } from '../pages/place-register/place-register';
import { ComplaintRegisterPage } from '../pages/complaint-register/complaint-register';

import { Api } from '../providers/api';
// import { Items } from '../mocks/providers/items';
import { Animals } from '../providers/animals';
import { LostAnimals } from '../providers/lost-animals';
import { FoundAnimals } from '../providers/found-animals';
import { Settings } from '../providers/settings';
import { UserPage } from '../providers/user';
import { Places } from '../providers/places';
import { Complaints } from '../providers/complaints';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { EmailComposer } from '@ionic-native/email-composer';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { OneSignal } from '@ionic-native/onesignal'
import { Device } from '@ionic-native/device';
import { CallNumber } from '@ionic-native/call-number';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '6206b079'
  }
};

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
  MyApp,
  CardsPage,
  ContentPage,
  ItemCreatePage,
  ItemDetailPage,
  ListMasterPage,
  LoginPage,
  MapPage,
  MenuPage,
  SearchPage,
  SettingsPage,
  SignupPage,
  TabsPage,
  TutorialPage,
  LostPage,
  FoundPage,
  FirstCarePage,
  AnimalRegisterPage,
  LostRegisterPage,
  FoundRegisterPage,
  WelcomePage,
  PlaceRegisterPage,
  PlacePage,
  ComplaintPage,
  ComplaintRegisterPage,
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    Api,
    Animals,
    LostAnimals,
    FoundAnimals,
    Places,
    Complaints,
    UserPage,
    Geolocation,
    NativeGeocoder,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    Facebook,
    EmailComposer,
    OneSignal,
    Device,
    CallNumber,

    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    TextMaskModule,
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule { }
