import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballTeamCreationComponent } from './football-team-creation.component';

describe('FootballTeamCreationComponent', () => {
  let component: FootballTeamCreationComponent;
  let fixture: ComponentFixture<FootballTeamCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballTeamCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballTeamCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
