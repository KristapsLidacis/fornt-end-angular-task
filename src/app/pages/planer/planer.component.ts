import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planer',
  templateUrl: './planer.component.html',
  styleUrls: ['./planer.component.scss']
})
export class PlanerComponent {
  tasks = [
    {
      'name': 'tes',
      'isFinished':false
    },
  ];
  inputValue='';
  addTask(): void {
    if(this.inputValue){
      this.tasks.push({name: this.inputValue, isFinished: false})
      this.inputValue='';
    }
  }

  deleteTask(index: number):void{
    this.tasks.splice(index,1)
  }

  deleteAll():void{
    this.tasks = [];
  }

  isFinished(index: number):void{
    this.tasks[index].isFinished = !this.tasks[index].isFinished
  }
}
