import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmation',
  templateUrl: './programmation.component.html',
  styleUrls: ['./programmation.component.scss']
})
export class ProgrammationComponent implements OnInit {
para!:string ;
paraall!:string;

  constructor() { 

   
  }
  

  ngOnInit(): void {
    this.paraall=`L'informatique est un domaine d'activité scientifique, technique,
    et industriel concernant le traitement automatique de l'information
     numérique par l'exécution de programmes informatiques hébergés par des dispositifs électriques-électroniques 
    : des systèmes embarqués, des ordinateurs, des robots, des automates, etc.oumaymaaaa`
    this.para=this.paraall.slice(0,331)
    console.log(this.paraall.length)
   }
  getall(){
    this.para=this.paraall
    console.log(this.paraall)
     
  }

}
