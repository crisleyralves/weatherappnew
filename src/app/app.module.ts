import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule {  }