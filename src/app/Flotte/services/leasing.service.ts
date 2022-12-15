import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LeasingService {
url = environment.url
  constructor(private http: HttpClient) { }

    getAllleasings() {
      return this.http.get(`${this.url}/leasing/find`)
     // return this.http.get('http://localhost:5004/api/leasing/find')
    }

    addleasing(leas: any) {
      return this.http.post(`${this.url}/leasing/create`, leas)
    }

    deleteleasing(id: any) {
      return this.http.delete(`${this.url}/leasing/` + id)
     // return this.http.delete('http://localhost:5004/api/leasing/' + id)
    }

    updateleasing(id:any , leas:any){
      return this.http.put(`${this.url}/leasing/` + id,leas)
    //  return this.http.put('http://localhost:5004/api/leasing/' + id,leas)
    }

    getoneleasing(id:any){
      return this.http.get(`${this.url}/leasing/find/` + id)
    //  return this.http.get('http://localhost:5004/api/leasing/find/' + id)
    }

  }

