import { Component, OnInit } from '@angular/core';
import { CompagnieAssuranceService } from '../../services/compagnie-assurance.service';

@Component({
  selector: 'app-compagnie-assurance',
  templateUrl: './compagnie-assurance.component.html',
  styleUrls: ['./compagnie-assurance.component.scss']
})
export class CompagnieAssuranceComponent implements OnInit {

  messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataCompagnie_AssuranceVehicule = {
    id: '',
    raison_sociale: '',
    matricule:'',
   
  }
  objectKeys = Object.keys;
  itemsVariable = {
    raison_sociale: "raison_sociale",
    matricule:"matricule"
  }
  items = {
    raison_sociale: "raison_sociale",
    matricule:"matricule"
  }
  constructor(private serv: CompagnieAssuranceService ) {
    
  }
  changeCroissante(key){

  }
  
  getsearch(){
    var inputt = (<HTMLInputElement>document.getElementById("rech")).value;
    this.dataArray = this.dataArrayOriginal.filter(word => word.libelle.includes(inputt));
  }
  notsearch(){
    (<HTMLInputElement>document.getElementById("rech")).value = ''
    this.dataArray = this.dataArrayOriginal
  }

  getdata(libelle: any, id: any) {
    this.messageSuccess = ""
    this.messageErreur = ""
    
    this.dataCompagnie_AssuranceVehicule.id = id
  }

  

  
  ngOnInit(): void {
  }

}
