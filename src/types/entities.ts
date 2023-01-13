import { TOrUndefined } from './globals';

export interface IEntityFields {
	id?: number;
}

export interface IEntity {
	id(): TOrUndefined<number>;
	toJSON(): object;
}
