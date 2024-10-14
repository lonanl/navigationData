import {GoogleSpreadsheet} from 'google-spreadsheet';
import {Keys} from '../configs/Keys.ts';
import config from '../configs/config.json';
import {getSheetRows, toBoolean} from '../functions/commons.js';
import {Locations} from '../configs/types.js';

export async function makeLocations(spreadsheet: GoogleSpreadsheet) {
	const rows = await getSheetRows(spreadsheet, config.sheetsIDs.locations);

	const locations: Locations = {}; //Итоговый объект с локациями

	rows.forEach(row => {
		// По каждой строке таблицы получаем его поля по ключу (заголовку столбца) и сохраняем в объект с локациями
		locations[row.get(Keys.id)] = {
			id: row.get(Keys.id),
			title: row.get(Keys.title),
			short: row.get(Keys.short),
			available: toBoolean(row.get(Keys.available)),
			address: row.get(Keys.locations.address),
		};
	});

	console.log('Локации заполнены\n');

	return locations;
}

