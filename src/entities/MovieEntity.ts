import { IEntity, IEntityFields } from '@/types/entities';
import { TOrUndefined } from '@/types/globals';

export interface IMovieFields extends IEntityFields {
	title: string;
	poster?: string;
	releaseYear?: number;
	stock: number;
}

export interface IMovieEntity extends IEntity {
	title(): string;
	changeTitle(title: string): this;
	poster(): TOrUndefined<string>;
	changePoster(poster: string): this;
	releaseYear(): TOrUndefined<number>;
	changeReleaseYear(year: number): this;
	stock(): number;
	increaseStock(stock: number): this;
	decreaseStock(stock: number): this;
}

export default class MovieEntity implements IMovieEntity {
	private fields: IMovieFields = {
		title: '',
		stock: 0,
	};

	constructor(title: string, stock = 0) {
		this.changeTitle(title).increaseStock(stock);
	}

	public title(): string {
		return this.fields.title;
	}

	public changeTitle(title: string) {
		this.fields.title = title;
		return this;
	}

	public poster(): TOrUndefined<string> {
		return this.fields.poster;
	}

	public changePoster(poster: string): this {
		this.fields.poster = poster;
		return this;
	}

	public releaseYear(): TOrUndefined<number> {
		return this.fields.releaseYear;
	}

	public changeReleaseYear(year: number): this {
		this.fields.releaseYear = year;
		return this;
	}

	public stock(): number {
		return this.fields.stock;
	}

	public increaseStock(stock: number): this {
		this.fields.stock += stock;
		return this;
	}

	public decreaseStock(stock: number): this {
		this.fields.stock -= stock;
		return this;
	}

	public id(): TOrUndefined<number> {
		return this.fields.id;
	}

	public toJSON(): Omit<IMovieFields, 'stock' | 'id'> {
		return {
			title: this.fields.title,
			poster: this.fields.poster,
			releaseYear: this.fields.releaseYear,
		};
	}
}
