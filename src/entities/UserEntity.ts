import { IEntity, IEntityFields } from '@/types/entities';
import { TOrUndefined } from '@/types/globals';

export interface IUserFields extends IEntityFields {
	first_name: string;
	last_name: string;
	email: string;
	password?: string;
	role: number;
}

export interface IUserEntity extends IEntity {
	firstName(): string;
	changeFirstName(first_name: string): this;
	lastName(): string;
	changeLastName(last_name: string): this;
	email(): string;
	changeEmail(email: string): this;
	password(): TOrUndefined<string>;
	changePassword(password: string): this;
	role(): number;
	changeRole(role: number): this;
}

export default class UserEntity implements IUserEntity {
	private fields: IUserFields = {
		first_name: '',
		last_name: '',
		email: '',
		role: 0,
	};

	constructor(first_name: string, last_name: string, email: string) {
		this.changeFirstName(first_name)
			.changeLastName(last_name)
			.changeEmail(email);
	}

	public firstName(): string {
		return this.fields.first_name;
	}

	public changeFirstName(first_name: string) {
		this.fields.first_name = first_name;
		return this;
	}

	public lastName(): string {
		return this.fields.last_name;
	}

	public changeLastName(last_name: string) {
		this.fields.last_name = last_name;
		return this;
	}

	public email(): string {
		return this.fields.email;
	}

	public changeEmail(email: string) {
		this.fields.email = email;
		return this;
	}

	public password(): TOrUndefined<string> {
		return this.fields.password;
	}

	public changePassword(password: string): this {
		this.fields.password = password;
		return this;
	}

	public role(): number {
		return this.fields.role;
	}

	public changeRole(role: number): this {
		this.fields.role = role;
		return this;
	}

	public id(): TOrUndefined<number> {
		return this.fields.id;
	}

	public toJSON(): Omit<IUserFields, 'id' | 'role' | 'password'> {
		return {
			first_name: this.fields.first_name,
			last_name: this.fields.last_name,
			email: this.fields.email,
		};
	}
}
