import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const analyzer = new WinAnalysis('Man United');
const report = new ConsoleReport();

const summary = new Summary(analyzer, report);
summary.buildAndPrintReport(matchReader.matches);
