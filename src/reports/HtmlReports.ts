import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReports implements OutputTarget {
  print(report: string): void {
    // use back ticks to avoid error
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('html-reports/report.html', html);
  }
}
