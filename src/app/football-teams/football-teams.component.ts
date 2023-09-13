import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FifaServiceService } from '../services/fifa-service.service';
import { FootballTeamCreationComponent } from '../dialogs/football-team-creation/football-team-creation.component';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FootballTeam } from '../models/football-team';
import { FootballTeamEditionComponent } from '../dialogs/football-team-edition/football-team-edition.component';

@Component({
  selector: 'app-football-teams',
  templateUrl: './football-teams.component.html',
  styleUrls: ['./football-teams.component.scss']
})
export class FootballTeamsComponent implements OnInit {
  teams: FootballTeam[] = [];
  teamsLenght: number = 0;
  paginacion: PageEvent = new PageEvent();
  searchForm!: FormGroup;

  constructor(private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private fifaService: FifaServiceService) {
                this.searchForm = this.formBuilder.group({
                  id: '',
                  fechaDe: '',
                  fechaHasta: '',
                });
              }

  ngOnInit(): void {
    this.paginacion.pageIndex = 0;
    this.paginacion.pageSize = 5;
    this.getTeamList(this.paginacion.pageIndex, this.paginacion.pageSize);

  }

  displayedColumns: string[] = ['id', 'nombre', 'estadio', 'sitioWeb', 'nacionalidad', 'fundacion', 'entrenador', 'capacidad', 'valor', 'acciones'];


  addTeam() {
    this.dialog.open(FootballTeamCreationComponent);
  }

  editTeam(team: any) {
    const dialogRef = this.dialog.open(FootballTeamEditionComponent, {
      data: team
    });

    dialogRef.afterClosed().subscribe(result => {
      const equipoModificado = result;
      this.fifaService.updateTeam(equipoModificado).subscribe(() => {
        this.resetTeams();
      });
    });
  }

  deleteTeam(id: number) {
    this.fifaService.deleteTeam(id).subscribe(() => {
      this.getTeamList(this.paginacion.pageIndex, this.paginacion.pageSize);
    });
  }

  loadTeams() {
    const nombre = this.searchForm.get('id')?.value;
    let fechaDe = this.searchForm.get('fechaDe')?.value;
    let fechaHasta = this.searchForm.get('fechaHasta')?.value;
    if (nombre !== null && nombre !== '') {
      this.fifaService.findTeamById(nombre).subscribe((data:any) => {
        this.teams = [];
        this.teams.push(data);
      });
    }
    if (fechaDe !== null && fechaDe !== '' && fechaHasta !== null && fechaHasta !== '') {
      fechaHasta = fechaHasta.toLocaleDateString('en-GB');
      fechaDe = fechaDe.toLocaleDateString('en-GB');
      this.fifaService.findTeamByDate(this.formatDate(fechaDe), this.formatDate(fechaHasta)).subscribe((data:any) => {
        this.teams = [];
        this.teams = data;
        this.teamsLenght = this.teams.length;
        this.paginacion.pageSize = this.teamsLenght;
      });
    }
  }

  resetTeams() {
    this.searchForm.reset();
    this.getTeamList(0, 5);
  }

  onPageChange(event: PageEvent) {
    this.paginacion = event;
    this.getTeamList(this.paginacion.pageIndex, this.paginacion.pageSize);
  }

  getTeamList(page: number, pageSize: number) {
    this.fifaService.getTeamsList(page, pageSize).subscribe(data => {
      this.teams = data.content;
      this.teamsLenght = data.totalElements;
    });
  }

  formatDate(date: string) {
    const parts = date.split('/');
    const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      return `${day}-${month}-${year}`;

  }
}
