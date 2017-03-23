import { Component } from '@angular/core';


@Component({
  selector: 'page-uno',
  templateUrl: 'uno.html'
})
export class UnoPage{
    public txxt;

    constructor(){
      this.txxt = "";
    }

    mudarCor(cor : String){
      document.getElementById('borda').style.borderColor = cor.toString();
    }
}
