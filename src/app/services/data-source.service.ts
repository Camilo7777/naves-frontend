import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  public opc :number =0;



  private apiUrlLanzadera = 'http://localhost:8080/vehiculo-lanzadera/';
  private apiUrlNoTripulada = 'http://localhost:8080/no-tripulada/';
  private apiUrlTripulada = 'http://localhost:8080/tripulada/';

  constructor(private http: HttpClient) {}


  public registerNave(nave:any){
    if(this.opc == 1){
      return this.http.post(this.apiUrlLanzadera,nave);
    }
    if(this.opc == 3){
      return this.http.post(this.apiUrlNoTripulada,nave);
    }else{
      return this.http.post(this.apiUrlTripulada,nave);
    }

  }

  getData(): Observable<any[]> {
    if(this.opc == 1){
      return this.http.get<any[]>(this.apiUrlLanzadera);
    }
    if(this.opc == 3){
      return this.http.get<any[]>(this.apiUrlNoTripulada);
    }else{
      return this.http.get<any[]>(this.apiUrlTripulada);
    }

  }
}
