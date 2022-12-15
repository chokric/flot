import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TypevehiculeService {
  url = environment.url


  constructor(private http: HttpClient) { }

  getAlltypevehicule() {
    return this.http.get(`${this.url}/typemachine/find`)
  }

  addtypevehicule(leas: any) {
    return this.http.post(`${this.url}/typemachine/create`, leas)
  }

  deletetypevehicule(id: any) {
    return this.http.delete( `${this.url}/typemachine/` + id)
  }

  updatetypevehicule(id:any , leas:any){
    return this.http.put(`${this.url}/typemachine/` + id,leas)
  }

  getonetypevehicule(id:any){
    return this.http.get(`${this.url}/typemachine/find/`+ id)
  }
}
