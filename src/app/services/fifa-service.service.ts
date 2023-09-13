import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FootballTeam } from '../models/football-team';

@Injectable({
  providedIn: 'root'
})
export class FifaServiceService {

  private baseURL: string = 'https://wo-fifa.azurewebsites.net';

  constructor(private http: HttpClient) { }

  getTeamsList(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.baseURL}/equipos/listar/${page}/${pageSize}`);
  }

  findTeamByDate(dateFrom: string, dateTo: string): Observable<any> {
    return this.http.get(`${this.baseURL}/equipos/consultar/${dateFrom}/${dateTo}`);
  }

  findTeamById(id: number) : Observable<FootballTeam> {
    return this.http.get<FootballTeam>(`${this.baseURL}/equipos/consultar/${id}`);
  }

  createTeam(team: FootballTeam): Observable<any> {
    return this.http.post(`${this.baseURL}/equipos/crear`, team);
  }

  updateTeam(data: any): Observable<any> {
    console.log(data);
    return this.http.put(`${this.baseURL}/equipos/actualizar/${data.id}`, data);
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/equipos/eliminar/${id}`);
  }
}
