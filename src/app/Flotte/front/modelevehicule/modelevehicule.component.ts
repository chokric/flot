import { Component, OnInit } from '@angular/core';
import { ModeleVehiculeService } from '../../services/modele-vehicule.service';
@Component({
  selector: 'app-modelevehicule',
  templateUrl: './modelevehicule.component.html',
  styleUrls: ['./modelevehicule.component.scss']
})
export class ModelevehiculeComponent implements OnInit {

  messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataModeleVehicule = {
    id: '',
    libelle: '',
    marqueVehicule:''
  }
  objectKeys = Object.keys;
  itemsVariable = {
    libelle: "libelle",
    marqueVehicule:"marqueVehicule"
  }
  items = {
    libelle: "Libelle",
    marqueVehicule:"marqueVehicule"
  }
  constructor(private serv: ModeleVehiculeService ) {
    
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
    this.dataModeleVehicule.libelle = libelle,
    this.dataModeleVehicule.id = id
  }

  

  
  ngOnInit(): void {
  }

}
