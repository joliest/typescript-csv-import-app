import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    // returns a String. If we do not specify this, it will return a buffer
    encoding: 'utf-8',
  })
  /**
   * Array of rows
   * ['28/10/2018,Man United,Everton,2,1,H,J Moss',
   * 29/10/2018,Tottenham,Man City,0,1,A,K Friend']
   */
  .split('\n')
  /**
   * Array of of strings
   * [...[ '27/10/2018', 'Watford', 'Huddersfield', '3', '0', 'H', 'M Dean' ] ...]
   */
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);
