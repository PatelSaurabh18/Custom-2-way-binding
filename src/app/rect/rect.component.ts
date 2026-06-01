import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  // @Input({required:true})  size!: {width:string;height:string};
  // @Output() sizeChange = new EventEmitter<{width:string;height:string}>();
  /*
    Old way of 2 way binding with input & output decorators angular < 16
  */

  size = model<{width:string;height:string}>();
  /*
    New way of 2 way binding with signal angular >= 16
  */
  
  onReset() {
    // this.sizeChange.emit({
    //   width:'200',
    //   height:'100'
    // })
   this.size.set({
    width:'200',
    height:'100'
   });
  };
}
