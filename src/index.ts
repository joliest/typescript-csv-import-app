import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { HtmlReports } from './reports/HtmlReports';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const analyzer = new WinAnalysis('Man United');
const report = new ConsoleReport();
const htmlReport = new HtmlReports();

const summary = new Summary(analyzer, htmlReport);
summary.buildAndPrintReport(matchReader.matches);
