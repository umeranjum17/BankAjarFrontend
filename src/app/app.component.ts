import { Component, OnInit, ViewChild } from "@angular/core";

import { FormControl, FormGroup } from "@angular/forms";
import { BaseChartDirective } from "ng2-charts";
import { interval } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { IbanService } from "./services/iban.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: false })
  public chart: BaseChartDirective;

  paymentForm: FormGroup;
  displayIban: string;
  colorScheme;
  doughnutChartLabels: string[];
  doughnutChartData: number[];
  totalBalance: number = 100000;
  flag: string = "";
  doughnutChartColors: { backgroundColor: string[]; borderColor: string }[];
  chartOptions: { responsive: boolean };
  currency: string;
  validIbanCharachter: number;
  remainingIbanCharachters: number;
  isIbanValid: boolean;
  logo: any;
  bank: any;
  showModal: boolean;
  loaderContent: string;
  showLoader: boolean;

  constructor(private ibanService: IbanService) { }

  pollInterval = 5000;
  ngOnInit(): void {
    this.ibanService.getBalance().subscribe((val: any) => {
      this.totalBalance = val.balance;
      this.doughnutChartData = [this.totalBalance, 0];
      this.chart.chart.update();
    })
    setInterval(() => {
      this.ibanService.getBalance().subscribe((val: any) => {
        this.totalBalance = val.balance;
        const value = this.paymentForm.controls["amount"].value
        const difference=value?value:0;
        this.doughnutChartData = [this.totalBalance-difference, difference];
        this.chart.chart.update();
      })
    }, 5000)



    this.paymentForm = new FormGroup({
      iban: new FormControl(""),
      amount: new FormControl(""),
    });

    this.paymentForm.controls["iban"].valueChanges.subscribe((val) => {
      if (val.length >= 2) {
        this.flag = val.slice(0, 2).toLowerCase();
        this.ibanService.getCountryDetails(this.flag).subscribe((data: any) => {
          this.currency = data.details[0];

          this.validIbanCharachter = data.details[1];
        });
      }
      if (this.validIbanCharachter) {
        this.remainingIbanCharachters = this.validIbanCharachter - val.length;
      }
      if (val.length == this.validIbanCharachter) {
        this.showLoader = true;
        this.loaderContent = "Please Wait We are validatating your IBAN number..."
        this.ibanService.validateIBAN(val).subscribe((data: any) => {
          this.logo = data.logo;
          this.isIbanValid=true;
          this.bank = data.bank;
          this.showLoader = false;
        }, error => {
          this.showLoader = false;
          this.bank = "Invalid IBAN Please try again...";
          this.logo = null;
        })
      }
    });
    this.paymentForm.controls["amount"].valueChanges.subscribe((val) => {
      console.log(val);
      this.doughnutChartData = [this.totalBalance - val, val];
      this.chart.chart.update();
    });
    this.colorScheme = {
      domain: ["#5AA454"],
    };
    this.doughnutChartLabels = ["Remaining", "To Be Transfered"];
    this.doughnutChartData = [this.totalBalance, 0];

    this.doughnutChartColors = [
      {
        backgroundColor: ["green", "red"],
        borderColor: "rgba(106,185,236,1)",
      },
    ];
    this.chartOptions = {
      responsive: true,
    };
  }



  processTransfer() {

    this.showModal = false;
    this.ibanService.processTransfer(this.paymentForm.controls['amount'].value, this.currency, this.paymentForm.controls['iban'].value).subscribe()
    this.paymentForm.controls['amount'].reset('')
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
