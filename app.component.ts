import { Component } from '@angular/core';
import { DataService } from './data.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userForm = {
    name: '',
    email: ''
  }

  constructor(private dataService: DataService){}
  
  onSubmit(){
    this.dataService.saveUser(this.userForm).subscribe(response => {
      console.log('User saved: ', response)
    })
  }
}
