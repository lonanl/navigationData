export type Corpuses = {
	[key: string]: Corpus
}

export type Corpus = {
	id: string,
	location: string,
	title: string,
	available: boolean
}

export type Location = {
	id: string;
	title: string;
	short: string;
	available: boolean;
	address: string;
	corpuses?: Corpuses
}

export type Locations = {
	[key: string]: Location;
}
