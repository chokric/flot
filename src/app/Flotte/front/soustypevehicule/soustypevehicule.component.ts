import { Component, OnInit } from '@angular/core';
import { SousTypevehiculeService } from '../../services/soustypevehicule.service';
import { TypevehiculeService } from '../../services/typevehicule.service';

@Component({
  selector: 'app-soustypevehicule',
  templateUrl: './soustypevehicule.component.html',
  styleUrls: ['./soustypevehicule.component.scss']
})
export class SoustypevehiculeComponent implements OnInit {

  messageSuccess = ''
  messageErreur = ''
  dataArrayTypeVehicule: any = []
  dataArray: any = []
  dataArrayOriginal: any = []
  dataTypeVehicule = {
    id: '',
    libelle: '',
    IDtypemachine :''
  }
  objectKeys = Object.keys;
  itemsVariable = {
    libelle: "libelle",
  }
  items = {
    libelle: "Libelle"
  }


  constructor(private serv:SousTypevehiculeService , private serv1:TypevehiculeService ) {

    this.serv1.getAlltypevehicule().subscribe(data => {
      this.dataArrayTypeVehicule = data
    })
    this.serv.getAllsoustypevehicule().subscribe(data => {
      this.dataArray = data
      this.dataArrayOriginal = data
    })
   }

  getAllTypeVehicule() {
    this.serv1.getAlltypevehicule().subscribe(data => {
      this.dataArrayTypeVehicule = data
    })
  }
///////////////////////////////////
  getAll() {
    this.serv.getAllsoustypevehicule().subscribe(data => {
      this.dataArray = data
      this.dataArrayOriginal = data
    })
  }
  getsearch(){
     var inputt = (<HTMLInputElement>document.getElementById("rech")).value;
    // this.dataArray = this.dataArrayOriginal.filter(word => word.libelle.includes(inputt) );


    var selectedVal = (<HTMLInputElement>document.getElementById("typ")).value;
    if (selectedVal != ""){
      this.dataArray = this.dataArrayOriginal.filter(word => word.IDtypemachine.includes(selectedVal) && word.libelle.includes(inputt)  );
    }else{
      this.dataArray = this.dataArrayOriginal.filter(word => word.libelle.includes(inputt) );
    }

  }
  notsearch(){
    (<HTMLInputElement>document.getElementById("rech")).value = ''
    this.dataArray = this.dataArrayOriginal
  }

  ngOnInit(): void {
  }

}
