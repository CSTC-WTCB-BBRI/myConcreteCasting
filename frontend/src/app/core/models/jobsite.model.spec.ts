import { Casting } from './casting.model';
import { Jobsite } from './jobsite.model';

describe('Jobsite', () => {
  it('should create an instance', () => {
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
    expect(jobsite).toBeTruthy();
  });
});
