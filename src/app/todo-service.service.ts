import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  public todolist = [
    {"sno":1,"Task":"Morning Walk"},
    {"sno":2,"Task":"BreakFast"},
    {"sno":3,"Task":"Class"},
    {"sno":4,"Task":"lunch"},
    {"sno":5,"Task":"Submisssion"},
  ]
  getlist(){
    return this.todolist
  }

  constructor() { }
}
