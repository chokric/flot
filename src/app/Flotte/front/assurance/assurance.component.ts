import { Component, OnInit } from '@angular/core';
import { AssuranceService } from '../../services/assurance.service';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.scss']
})
export class AssuranceComponent implements OnInit {
messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataAssuranceVehicule = {
    id: '',
    date_debut: '',
    date_fin:'',
    id_compagnie_ass:'',
    id_vehicule:'',
    id_type_ass:'',
    montant_ass:'',
    montant_vis_techn:'',
    nbre_jours_alerte:'',
    arret_contrat:'',
    date_arret_contrat:'',
    notes_visite_techn:'',
    num_ass:'',
    sacnner_ass:'',
    notes_ass:''
    


  }
  objectKeys = Object.keys;
  itemsVariable = {
    date_debut: '',
    date_fin:'',
    id_compagnie_ass:'',
    id_vehicule:'',
    id_type_ass:'',
    montant_ass:'',
    montant_vis_techn:'',
    nbre_jours_alerte:'',
    arret_contrat:'',
    date_arret_contrat:'',
    notes_visite_techn:'',
    num_ass:'',
    sacnner_ass:'',
    notes_ass:''
  }
  items = {
   date_debut: '',
    date_fin:'',
    id_compagnie_ass:'',
    id_vehicule:'',
    id_type_ass:'',
    montant_ass:'',
    montant_vis_techn:'',
    nbre_jours_alerte:'',
    arret_contrat:'',
    date_arret_contrat:'',
    notes_visite_techn:'',
    num_ass:'',
    sacnner_ass:'',
    notes_ass:''
  }
  constructor(private serv: AssuranceService ) {
    
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
   
  }

  

  
  ngOnInit(): void {
  }

}
