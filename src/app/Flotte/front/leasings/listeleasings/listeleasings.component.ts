import { Component, OnInit } from '@angular/core';

import { LeasingService } from '../../../services/leasing.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listeleasings',
  templateUrl: './listeleasings.component.html',
  styleUrls: ['./listeleasings.component.scss']
})

export class ListeleasingsComponent implements OnInit {
  messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataLeasing = {
    id: '',
    libelle: '',
    RaisonFisc:'',
    MatriculeFisc:''
  }

  //private modalRef: NgbModalRef;
  public modal:NgbActiveModal;

  //, public modal:NgbActiveModal
  constructor(private serv: LeasingService ) {
    this.serv.getAllleasings().subscribe(data => {
      this.dataArray = data
      this.dataArrayOriginal = data
    })
  }

  items = {
    libelle: "Libelle"
  }
  request = {
    search: {
      libelle: ""

    },
    orderBy: {
      libelle: 0
    },
    limit: 10,
    page: 1,
    societe: ""
  }

  oldRequest = {
    search: {
      libelle: ""

    },
    orderBy: {
      libelle: 0
    },
    limit: 10,
    page: 1,
    societe: ""
  }
  activationCroissante(buttons1, buttons2) {
    var buttons = document.getElementsByClassName("croissante");

    for (let i = 0; i < buttons.length; i++) {
      var classList = buttons[i].getAttribute("class")
      classList = classList.replace("active-buttons-croissante", "")
      buttons[i].setAttribute("class", classList)
    }

    classList = buttons2.getAttribute("class")
    classList = classList.replace("active-buttons-croissante", "")
    classList += " active-buttons-croissante"
    buttons2.setAttribute("class", classList)
  }
  changeCroissante(key) {
    var classStyle = key + "-croissante";
    var buttons = document.getElementsByClassName(classStyle);
    if (this.request.orderBy[key] == 1) {
      this.request.orderBy[key] = -1
      this.activationCroissante(buttons[0], buttons[1])
    } else {
      this.request.orderBy[key] = 1
      this.activationCroissante(buttons[1], buttons[0])
    }

    for (let varkey in this.request.orderBy) {
      if (key != varkey) {
        this.request.orderBy[varkey] = 0
      }
    }

  }
  objectKeys = Object.keys;
  itemsVariable = {
    libelle: "libelle",
  }

  getdata(libelle: any, id: any) {
    this.messageSuccess = ""
    this.messageErreur = ""
    this.dataLeasing.libelle = libelle,
      this.dataLeasing.id = id
  }

  getAll() {
    this.serv.getAllleasings().subscribe(data => {
      this.dataArray = data
      this.dataArrayOriginal = data
    })
  }

  getsearch() {
    var inputt = (<HTMLInputElement>document.getElementById("rech")).value;
    this.dataArray = this.dataArrayOriginal.filter(word => word.libelle.includes(inputt));
  }
  notsearch() {
    (<HTMLInputElement>document.getElementById("rech")).value = ''
    this.dataArray = this.dataArrayOriginal
  }

  supprimerleasing(id: any, i: number) {
    this.serv.deleteleasing(id).subscribe(req => {
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
      this.serv.updateleasing(this.dataLeasing.id, data).subscribe(res => {
        let indexID = this.dataArray.findIndex((obj: any) => obj._id == this.dataLeasing.id)
        let indexIDorig = this.dataArrayOriginal.findIndex((obj: any) => obj._id == this.dataLeasing.id)
        this.dataArray[indexID].libelle = data.libelle
        this.dataArrayOriginal[indexIDorig].libelle = data.libelle
        this.messageSuccess = `la leasing ${this.dataArray[indexID].libelle} est mofidier`

        this.modal.close();

        // document.getElementById('save').setAttribute('modalsave','modal');
        //f.hide()
        //document.getElementById('modalDefault').click();
        // $('#modalDefault').moda('hide');
        // modalDefault.close()
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
    } 

    else if(  data.RaisonFisc==''){
      this.messageErreur = "Raison fiscale obligatoire "
    }
    
    else if( data.MatriculeFisc=='' ){
      this.messageErreur = "Matricule fiscale obligatoire "
    }

    
    else {
      this.messageErreur = ""
      this.serv.addleasing(data).subscribe(rep => {
        console.log(rep)
        let response: any = rep
        if (!response.status) {
          this.messageErreur = "libelle existe déjà"
        } else {
          this.serv.getAllleasings().subscribe(data => {
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
