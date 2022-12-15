import { Component, OnInit } from '@angular/core';
import { ServiceMinesService } from '../../services/service-mines.service';
@Component({
  selector: 'app-service-mines',
  templateUrl: './service-mines.component.html',
  styleUrls: ['./service-mines.component.scss']
})
export class ServiceMinesComponent implements OnInit {

  messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataService_MinesVehicule = {
    id: '',
    libelle: '',
    adresse:"",
    telephone:""
  }
  objectKeys = Object.keys;
  itemsVariable = {
    libelle: "libelle",
    adresse:"adresse",
    telephone:"telephone"
  }
  items = {
    libelle: "libelle",
    adresse:"adresse",
    telephone:"telephone"
  }
  constructor(private serv: ServiceMinesService ) {
    
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
    this.dataService_MinesVehicule.libelle = libelle,
    this.dataService_MinesVehicule.id = id
  }

  

  

  
  ngOnInit(): void {
  }


}
