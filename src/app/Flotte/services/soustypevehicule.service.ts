import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SousTypevehiculeService {
  url = environment.url


  constructor(private http: HttpClient) { }

  getAllsoustypevehicule() {
    return this.http.get(`${this.url}/soustypemachine/find`)
  }

  addsoustypevehicule(leas: any) {
    return this.http.post(`${this.url}/soustypemachine/create`, leas)
  }

  deletesoustypevehicule(id: any) {
    return this.http.delete( `${this.url}/soustypemachine/` + id)
  }

  updatesoustypevehicule(id:any , leas:any){
    return this.http.put(`${this.url}/soustypemachine/` + id,leas)
  }

  getonesoustypevehicule(id:any){
    return this.http.get(`${this.url}/soustypemachine/find/`+ id)
  }
}

