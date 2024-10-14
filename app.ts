import {GoogleSpreadsheet} from 'google-spreadsheet';
import * as fs from 'fs';
import config from './configs/config.json' assert {type: 'json'};
import {auth} from './functions/auth.ts';
import {makeLocations} from './stages/makeLocations.js';
import {Locations} from './configs/types.js';
import {makeCorpuses} from './stages/makeCorpuses.js';


const spreadsheet: GoogleSpreadsheet = new GoogleSpreadsheet(config.spreadsheetID, auth); //Создаем документ таблицы по айди и токену
await spreadsheet.loadInfo(); //Загружаем основные данные таблицы




const locations: Locations = await makeLocations(spreadsheet)
await makeCorpuses(spreadsheet, locations)


fs.rmSync('dist', { recursive: true, force: true })
fs.mkdirSync('dist', {recursive: true});
const json = JSON.stringify(locations, null, 2);
fs.writeFileSync('dist/locations.json', json); //Сохраняем

console.log('ФАЙЛ СОХРАНЕН');
setTimeout(() => {

}, 5000)

// await makeCorpuses()


