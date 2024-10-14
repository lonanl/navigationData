import {GoogleSpreadsheet} from 'google-spreadsheet';
import {Keys} from '../configs/Keys.ts';
import config from '../configs/config.json';
import {getSheetRows, toBoolean} from '../functions/commons.js';
import {Corpus, Locations} from '../configs/types.js';

export async function makeCorpuses(spreadsheet: GoogleSpreadsheet, locations: Locations) {
	const rows = await getSheetRows(spreadsheet, config.sheetsIDs.corpuses);

	rows.forEach(row => {
		// Пока что заполняем только корпуса
		if(toBoolean(row.get(Keys.available))) {
			const corpus: Corpus = {
				id: row.get(Keys.id),
				title: row.get(Keys.title),
				available: toBoolean(row.get(Keys.available)),
				location: row.get(Keys.corpuses.location),
			}; //Заполняем объект с корпусом

			if(!locations[corpus.location].corpuses) {
				locations[corpus.location].corpuses = {};
			} //Создаем поле для корпусов в локации, если оно еще не создано

			locations[corpus.location].corpuses[corpus.id] = corpus; // Пушим корпус в локацию
		} else {
			//Здесь будет обработка незавершенных корпусов
		}
	});

	console.log('Корпуса заполнены\n');
}
