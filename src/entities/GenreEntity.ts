import { IEntity, IEntityFields } from '@/types/entities';
import { TOrUndefined } from '@/types/globals';

export interface IGenreFields extends IEntityFields {
	name: string;
}

export interface IGenreEntity extends IEntity {
	name(): string;
	changeName(name: string): this;
}

export default class GenreEntity implements IGenreEntity {
	private fields: IGenreFields = {
		name: '',
	};

	constructor(name: string) {
		this.changeName(name);
	}

	public name(): string {
		return this.fields.name;
	}

	public changeName(name: string) {
		this.fields.name = name;
		return this;
	}

	public id(): TOrUndefined<number> {
		return this.fields.id;
	}

	public toJSON(): Omit<IGenreFields, 'id'> {
		return {
			name: this.fields.name,
		};
	}
}
