import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TypevehiculeService } from '../../services/typevehicule.service';

@Component({
  selector: 'app-typevehicule',
  templateUrl: './typevehicule.component.html',
  styleUrls: ['./typevehicule.component.scss']
})
export class TypevehiculeComponent implements OnInit {

  messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataTypeVehicule = {
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
  constructor(private serv: TypevehiculeService ) {
    this.serv.getAlltypevehicule().subscribe(data => {
      this.dataArray = data
      this.dataArrayOriginal = data
    })
  }
  changeCroissante(key){

  }
  getAll() {
    this.serv.getAlltypevehicule().subscribe(data => {
      this.dataArray = data
      this.dataArrayOriginal = data
    })
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
    this.dataTypeVehicule.libelle = libelle,
    this.dataTypeVehicule.id = id
  }

  supprimertypevehicule(id:any , i:number){
    this.serv.deletetypevehicule(id).subscribe(req => {
      this.dataArray.splice(i, 1)
      this.getAll()
    })
  }

  modifdata(f: any) {
    this.messageSuccess = ""
    this.messageErreur = ""

    let data = f.value
    if (data.libelle == '') {
      this.messageErreur = "libelle obligatoire "
    } else {
      this.serv.updatetypevehicule(this.dataTypeVehicule.id, data).subscribe(res => {
        let indexID = this.dataArray.findIndex((obj: any) => obj._id == this.dataTypeVehicule.id)
        let indexIDorig = this.dataArrayOriginal.findIndex((obj: any) => obj._id == this.dataTypeVehicule.id)
        this.dataArray[indexID].libelle = data.libelle
        this.dataArrayOriginal[indexIDorig].libelle = data.libelle
        this.messageSuccess = `la leasing ${this.dataArray[indexID].libelle} est mofidier`
      },
        (err: HttpErrorResponse) => {
          this.messageErreur = "libelle existe déjà "
          console.log(err)
        })
    }
  }

  ajoutdata(f: any) {
    let data = f.value
    if (data.libelle == '') {
      this.messageErreur = "libelle obligatoire "
    } else {
      this.messageErreur = ""
      this.serv.addtypevehicule(data).subscribe(rep => {
        console.log(rep)
        let response: any = rep
        if (!response.status) {
          this.messageErreur = "libelle existe déjà"
        } else {
          this.serv.getAlltypevehicule().subscribe(data => {
            this.dataArray = data
            this.messageSuccess = `leasing ajouter avec succee`

          })
        }
      }, (err: HttpErrorResponse) => {
        console.log(err.message)
      })
    }
  }


  ngOnInit(): void {
  }

}
