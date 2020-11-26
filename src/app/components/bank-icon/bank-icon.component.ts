import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-icon',
  template: `
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <defs>
          <style>
            .cls-1 {
              fill: #141f38;
            }

          </style>
        </defs>
        <title>bank-glyph</title>
        <path class="cls-1"
          d="M166.41,243.21v128a12.8,12.8,0,0,1,12.8,12.8v25.6h-128V384A12.8,12.8,0,0,1,64,371.2v-128a12.8,12.8,0,0,1-12.8-12.8v-25.6h128v25.6A12.8,12.8,0,0,1,166.41,243.21Zm294.38-12.8v-25.6h-128v25.6a12.8,12.8,0,0,0,12.8,12.8v128a12.8,12.8,0,0,0-12.8,12.8v25.6h128V384A12.8,12.8,0,0,0,448,371.2v-128A12.8,12.8,0,0,0,460.78,230.41ZM1.1,154.76c-3.83-15,2.55-29.93,15.87-37.22L210.32,11.74a94.76,94.76,0,0,1,91.36,0L495,117.53c13.32,7.29,19.7,22.25,15.87,37.22-3.74,14.62-16.18,24.45-31,24.45H32.06C17.28,179.21,4.84,169.38,1.1,154.76ZM217.6,89.61A38.4,38.4,0,1,0,256,51.21,38.4,38.4,0,0,0,217.6,89.61ZM448,435.2H64a64.07,64.07,0,0,0-64,64V512H512V499.2A64.07,64.07,0,0,0,448,435.2ZM320,230.41v-25.6H192v25.6a12.8,12.8,0,0,0,12.8,12.8v128A12.8,12.8,0,0,0,192,384v25.6H320V384a12.8,12.8,0,0,0-12.8-12.8v-128A12.8,12.8,0,0,0,320,230.41Z" />
      </svg>
  `,
  styles: []
})
export class BankIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
