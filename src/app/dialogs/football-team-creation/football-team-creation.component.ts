import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FifaServiceService } from 'src/app/services/fifa-service.service';

@Component({
  selector: 'app-football-team-creation',
  templateUrl: './football-team-creation.component.html',
  styleUrls: ['./football-team-creation.component.scss']
})
export class FootballTeamCreationComponent implements OnInit {

  equipoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fifaService: FifaServiceService,
    public dialogRef: MatDialogRef<FootballTeamCreationComponent>
  ) {
    this.equipoForm = this.formBuilder.group({
      nombre: '',
      estadio: '',
      sitioWeb: '',
      nacionalidad: '',
      fundacion: '',
      entrenador: '',
      capacidad: '',
      valor: ''
    });
  }

  ngOnInit(): void {
  }

  guardarEquipo() {
    this.fifaService.createTeam(this.equipoForm.value).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
