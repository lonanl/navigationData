import {GoogleSpreadsheet, GoogleSpreadsheetRow, GoogleSpreadsheetWorksheet} from 'google-spreadsheet';

export function toBoolean(value: string | boolean): boolean {
	if(typeof value === 'string') {
		return value.toLowerCase() === 'true'
	}
	return value
} //Преобразование гугловского значения в булево

export async function getSheetRows(spreadsheet: GoogleSpreadsheet, sheetID: string): Promise<GoogleSpreadsheetRow[]> {
	const sheet: GoogleSpreadsheetWorksheet = spreadsheet.sheetsById[sheetID];
	return await sheet.getRows();
} //Получить лиси из книги
