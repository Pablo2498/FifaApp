import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballTeamEditionComponent } from './football-team-edition.component';

describe('FootballTeamEditionComponent', () => {
  let component: FootballTeamEditionComponent;
  let fixture: ComponentFixture<FootballTeamEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballTeamEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballTeamEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
