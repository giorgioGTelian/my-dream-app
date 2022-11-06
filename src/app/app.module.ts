import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//app components 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//services
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
