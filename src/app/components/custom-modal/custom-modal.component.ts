import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custom-modal',
   templateUrl:"./custom-modal.component.html" ,
  styles: []
})
export class CustomModalComponent implements OnInit {

  constructor() { }
@Input()
Content: string;
;
@Input()
modalTitle: string;
@Output()
buttonClick:EventEmitter<boolean>=new EventEmitter<boolean>();
@Output()
actionButtonClick:EventEmitter<boolean>=new EventEmitter<boolean>();
  ngOnInit() {
  }
toggleModal(){
  this.buttonClick.emit(true);
}
processAction(){
  this.actionButtonClick.emit(true);
}
}
