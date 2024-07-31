import { Component, Input, Output,EventEmitter } from '@angular/core';
import {type User } from '../user.model';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required:true}) user!:User;
  @Output() select=new EventEmitter();
  @Input({required:true}) selected!:boolean;
 get imagepath(){
  return 'assets/'+this.user.avatar;
 }
onSelectUser(){
  this.select.emit(this.user.id);
  
}

}
