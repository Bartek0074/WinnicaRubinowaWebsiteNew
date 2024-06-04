export interface WineVintage {
	wineVintage: number;
	wines: Wine[];
}

export interface Wine {
    year:number;
	name: string;
	color: string;
	taste: string;
	variety: string;
	alcohol: string;
	description: string;
	imageSrc: string;
	isAvailable: boolean;
	isNew: boolean;
	hasQualitySign: boolean;
	image:{
		height: string;
		top: string;
	}
}
