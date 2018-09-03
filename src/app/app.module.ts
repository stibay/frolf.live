import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthProvider } from "../providers/auth/auth";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";

import { firebaseConfig } from "../environments/firebase.config";

import { Firebase } from "@ionic-native/firebase";
import { Facebook } from "@ionic-native/facebook";
import { Camera } from "@ionic-native/camera";
import { AdMobFree } from "@ionic-native/admob-free";

import { ComponentsModule } from "../components/components.module";
import { DatabaseProvider } from "../providers/database/database";
import { FcmProvider } from "../providers/fcm/fcm";
import { AnalyticsProvider } from "../providers/analytics/analytics";
import { RemoteConfigProvider } from "../providers/remote-config/remote-config";
import { DirectivesModule } from "../directives/directives.module";
import { StarProvider } from "../providers/star/star";

@NgModule({
  declarations: [MyApp, TabsPage, LoginPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ComponentsModule,
    DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage, LoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    Firebase,
    Facebook,
    DatabaseProvider,
    Camera,
    AdMobFree,
    FcmProvider,
    AnalyticsProvider,
    RemoteConfigProvider,
    StarProvider
  ]
})
export class AppModule {}
