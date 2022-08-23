import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  para!:string ;
  paraall!:string;
  constructor() { }

  ngOnInit(): void {
    this.paraall=`le webdesigner est la personne en charge de creer les interfaces graphique d'un site ou service web .le webdesign est un metier qui necessite
    la maitrise de plusieurs pratique :l'ergonomie,l'accessibilite et le desgine d'elemnts graphique adaptes aux interface web en soit le webdesigner est un creatif en puissance .BAYOUDH`
    this.para=this.paraall.slice(0,321)
    console.log(this.paraall.length)
  }
  getall(){
    this.para=this.paraall
    console.log(this.paraall)
     
  }
}
