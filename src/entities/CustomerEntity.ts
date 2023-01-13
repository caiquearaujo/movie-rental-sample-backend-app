import { IEntity, IEntityFields } from '@/types/entities';
import { TOrUndefined } from '@/types/globals';

export interface ICustomerFields extends IEntityFields {
	first_name: string;
	last_name: string;
	email?: string;
	phone: string;
}

export interface ICustomerEntity extends IEntity {
	firstName(): string;
	changeFirstName(first_name: string): this;
	lastName(): string;
	changeLastName(last_name: string): this;
	email(): TOrUndefined<string>;
	changeEmail(email: string): this;
	phone(): string;
	changePhone(phone: string): this;
}

export default class CustomerEntity implements ICustomerEntity {
	private fields: ICustomerFields = {
		first_name: '',
		last_name: '',
		phone: '',
	};

	constructor(first_name: string, last_name: string) {
		this.changeFirstName(first_name).changeLastName(last_name);
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

	public email(): TOrUndefined<string> {
		return this.fields.email;
	}

	public changeEmail(email: string) {
		this.fields.email = email;
		return this;
	}

	public phone(): string {
		return this.fields.phone;
	}

	public changePhone(phone: string): this {
		this.fields.phone = phone;
		return this;
	}

	public id(): TOrUndefined<number> {
		return this.fields.id;
	}

	public toJSON(): Omit<ICustomerFields, 'id' | 'role' | 'phone'> {
		return {
			first_name: this.fields.first_name,
			last_name: this.fields.last_name,
			email: this.fields.email,
		};
	}
}
