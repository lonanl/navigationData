import {JWT} from 'google-auth-library';
import googleServiceAccount from '../token.json';

export const auth: JWT = new JWT({
	email: googleServiceAccount.client_email,
	key: googleServiceAccount.private_key,
	scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
})
