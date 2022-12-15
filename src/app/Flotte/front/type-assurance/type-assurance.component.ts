import { Component, OnInit } from '@angular/core';
import { TypeAssuranceService } from '../../services/type-assurance.service';

@Component({
  selector: 'app-type-assurance',
  templateUrl: './type-assurance.component.html',
  styleUrls: ['./type-assurance.component.scss']
})
export class TypeAssuranceComponent implements OnInit {

  messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataType_AssuranceVehicule = {
    id: '',
    libelle: '',
    id_compagnie:'',
    montant:''
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
  constructor(private serv: TypeAssuranceService ) {
    
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
    this.dataType_AssuranceVehicule.libelle = libelle,
    this.dataType_AssuranceVehicule.id = id
  }

  

  
  ngOnInit(): void {
  }
}
