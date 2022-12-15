import { Component, OnInit } from '@angular/core';
import { VisiteTechniqueService } from '../../services/visite-technique.service';
@Component({
  selector: 'app-visite-technique',
  templateUrl: './visite-technique.component.html',
  styleUrls: ['./visite-technique.component.scss']
})
export class VisiteTechniqueComponent implements OnInit {

  messageSuccess = ''
  messageErreur = ''
  dataArray: any = []
  dataArrayOriginal: any = []
  dataModeleVehicule = {
    id: '',
    date_expiration: '',
    montant_vis_techn:'',
    date_heure_rdv:'',
    id_services_mins:'',
    id_vehicule:'',
    date_prochaine_vis:'',
    resultat_visite_techn:'',
    notes_visite_techn:'',
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
  constructor(private serv: VisiteTechniqueService ) {
    
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
