import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatDialogModule } from '@angular/material/dialog';

import { JobsiteDashboardComponent } from './jobsite-dashboard.component';
import { Jobsite } from '../../models/jobsite.model';
import { Casting } from '../../models/casting.model';

describe('JobsiteDashboardComponent', () => {
  let component: JobsiteDashboardComponent;
  let fixture: ComponentFixture<JobsiteDashboardComponent>;
  let castingsArray: Array<Casting> = [
    new Casting(
      'fqs4d56f4qds65f',
      'name',
      'description',
      true,
      0.2,
      false,
      0.2,
      'CEM 52.5 N',
      'C20_25',
      25,
      1629669600,
      43200,
      1630101
    ),
  ];

  let jobsite = new Jobsite(
    1,
    1,
    'name',
    'address',
    [0, 0],
    'description',
    castingsArray
  );

  let jobsitesArray: Array<Jobsite> = [jobsite, jobsite];

  const requestResponse = [
    {
      id: 12,
      owner: 'test@test.com',
      name: 'test',
      address:
        '16, Rue de la Loi, Quartier Royal, Pentagon, Brussels, City of Brussels, Brussels-Capital, 1000, Belgium',
      coordinates: '[4.3665285, 50.8461624]',
      description: 'dsqdsqd',
      castings:
        '[{"id": "484223de-edd7-45d5-9397-be9c14f040b8", "name": "name", "description": "description", "isClassEI": "True", "fcm2_fcm28_ratio": "0", "type2_addition": "True", "rc2_rc28_ratio": "0", "cement_type": "CEM 1 52.5 N ou R", "curing_start": "", "curing_end": ""}]',
    },
    {
      id: 13,
      owner: 'test@test.com',
      name: 'dsfds',
      address: 'fdsfdsf',
      coordinates: '[4.254469203264735, 50.893171073773544]',
      description: 'fdsfsfsfds',
      castings:
        '[{"id": "484223de-edd7-45d5-9397-be9c14f040b8", "name": "name", "description": "description", "isClassEI": "True", "fcm2_fcm28_ratio": "0", "type2_addition": "True", "rc2_rc28_ratio": "0", "cement_type": "CEM 1 52.5 N ou R", "curing_start": "", "curing_end": ""}]',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientTestingModule],
      declarations: [JobsiteDashboardComponent],
    }).compileComponents();
    localStorage.setItem(
      'user',
      '{"id":1,"firstName":"test","lastName":"test","email":"test@test.com"}'
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsiteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const navbar = compiled.querySelector('app-navbar');
    const newJobsiteButton = compiled.querySelector(
      'button[id="newJobsiteButton"]'
    );
    const refreshButton = compiled.querySelector('button[id="refreshButton"]');

    expect(navbar).toBeTruthy();
    expect(newJobsiteButton).toBeTruthy();
    expect(refreshButton).toBeTruthy();
  });

  it('should fill jobsites array', () => {
    component.fillJobsitesArray(requestResponse);
    expect(component.jobsiteArray.length).toBe(2);
    expect(component.jobsiteArray[0].getCastings().length).toBe(1);
    expect(component.jobsiteArray[1].getCastings().length).toBe(1);
  });
});
