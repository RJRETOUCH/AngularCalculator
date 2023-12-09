import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';

  calValue: number = 0;
  funcT: any = 'noFunction';

  calNumber: string = 'noValue';
  fistNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {


    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }


  }

  onNumberClick(val: string) {

    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val
    }
    this.calValue = parseFloat(this.calNumber)
  }

  onFunctionClick(val: string) {
    // call the clear all method when click the button c
    if (val == 'c') { this.clearAll(); }

    else if (this.funcT == 'noFunction') {
      this.fistNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val
    } else if (this.funcT != 'noFunction') {
      this.secondNumber = this.calValue;
      // lets do the calculation
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const total = this.fistNumber + this.secondNumber
      this.totalAssignValues(total, val);

    }
    if (this.funcT == '-') {
      const total = this.fistNumber - this.secondNumber
      this.totalAssignValues(total, val);

    }
    if (this.funcT == '*') {
      const total = this.fistNumber * this.secondNumber
      this.totalAssignValues(total, val);

    }
    if (this.funcT == '/') {
      const total = this.fistNumber / this.secondNumber
      this.totalAssignValues(total, val);

    }
    if (this.funcT == '%') {
      const total = this.fistNumber % this.secondNumber
      this.totalAssignValues(total, val);

    }
  }

  totalAssignValues(total: number, val: string) {
    this.calValue = total;
    this.fistNumber = total;
    this.secondNumber = 0
    this.calNumber = 'noValue';
    this.funcT = val
    if (val == '=') { this.onEqualPress() }
  }

  onEqualPress() {
    this.fistNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue'
  }

  clearAll() {
    this.fistNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue'
  }
}
