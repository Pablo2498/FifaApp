import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FootballTeam } from 'src/app/models/football-team';

@Component({
  selector: 'app-football-team-edition',
  templateUrl: './football-team-edition.component.html',
  styleUrls: ['./football-team-edition.component.scss']
})
export class FootballTeamEditionComponent {

  teamForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<FootballTeamEditionComponent>,
    @Inject(MAT_DIALOG_DATA) public team: FootballTeam,
    private formBuilder: FormBuilder
  ) {
    this.teamForm = this.formBuilder.group({
      id: team.id,
      nombre: team.nombre,
      estadio: team.estadio,
      sitioWeb: team.sitioWeb,
      nacionalidad: team.nacionalidad,
      fundacion: team.fundacion,
      entrenador: team.entrenador,
      capacidad: team.capacidad,
      valor: team.valor
    });
  }

  saveTeam() {
    const equipoActualizado: FootballTeam = {
      ...this.teamForm.value
    };
    this.dialogRef.close(equipoActualizado);
  }

}
