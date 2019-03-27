import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  formation1:Formation = new Formation("JEE", "Formation JEE :)", 26000, new Date('December 17, 2018'), new Date('February 17, 2019'));
  formation2:Formation = new Formation("Angular", "Formation Angular :)", 2600, new Date('2019-3-28'), new Date('2019-5-2'));
  formation3:Formation = new Formation("Spring", "Formation Spring :)", 260, new Date('2019-3-28'), new Date('2019-5-2'));

  prenom:string= "lette lette lette";
  nom:string= "Paupaupau";
  formationJS:Formation;
  isHidden:boolean= !true;
  isColor:string= "green";
  isColorReverse:string = "red";
  pHidden:boolean= false;
  bouton:string = "Pas pouet :'(";
  formations:Formation[] = [this.formation1, this.formation2, this.formation3];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.formationJS= new Formation('Module JavaScript', "EC6", 2600, new Date('2019-3-28'), new Date('2019-5-2'));
    }, 3000)
    setInterval(() =>{
      if(this.isColor==="red"){
        this.isColorReverse = "red";
        this.isColor = "green";
      }else{
        this.isColorReverse = "green";
        this.isColor = "red";
      }
    }, 300)
    /*setInterval(() =>{
      this.isHidden = !this.isHidden;
    }, 1500)*/
  }

  getFullName():string {
    return this.nom + " " + this.prenom;
  }

  handleClick() {
    this.pHidden = !this.pHidden;
    if(this.bouton==="Pouet!!!!!"){
      this.bouton="Pas pouet :'("
    }else{
      this.bouton="Pouet!!!!!"
    }
  }

  mouseOver(){
    console.log("Dessus =D");
  }

  mouseOut(){
    console.log("Pas dessus :'(");
  }

  getColorByElement(isFirst:boolean = false, isLast:boolean = false){
      if(isFirst){
        return true;
      }else if(isLast){
        return false;
      }

  }

  getBackgroundbyElement(isEven:boolean = false){
    return isEven? "lightgrey" : "white";
  }

  red(isFirst:boolean = false, isLast:boolean = false){
    if(isFirst){
      if(this.isColor==="red"){
        return true;
      }else{
        return false;
      }
    }else if(isLast){
      if(this.isColor==="red"){
        return false;
      }else{
        return true;
      }
    }else{
      return false;

    }

  }

  green(isFirst:boolean = false, isLast:boolean = false){
    if(isFirst){
      if(this.isColor==="red"){
        return false;
      }else{
        return true;
      }
    }else if(isLast){
      if(this.isColor==="red"){
        return true;
      }else{
        return false;
      }
    }else{
      return false;

    }

  }

  black(isFirst:boolean = false, isLast:boolean = false){
    if(isFirst || isLast){
        return false;
    }else{
        return true;
    }

  }

  handleFormationSelected(formation) {
    window.alert('Formation selected ' + formation.nom);
  }

}
