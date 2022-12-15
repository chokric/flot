import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MarqueVehiculeModule } from './marque-vehicule.module';
@Component({
  selector: 'app-marque-vehicule',
  templateUrl: './marque-vehicule.component.html',
  styleUrls: ['./marque-vehicule.component.scss']
})
export class MarqueVehiculeComponent implements OnInit {

  messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataMarqueVehicule = {
    id: '',
    libelle: ''
  }
  objectKeys = Object.keys;
  itemsVariable = {
    libelle: "libelle",
  }
  items = {
    libelle: "Libelle"
  }
  constructor(private serv: MarqueVehiculeModule ) {
    
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
    this.dataMarqueVehicule.libelle = libelle,
    this.dataMarqueVehicule.id = id
  }

  

  

  
  ngOnInit(): void {
  }

}
