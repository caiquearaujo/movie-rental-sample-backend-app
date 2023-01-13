import { IEntity, IEntityFields } from '@/types/entities';
import { TOrUndefined } from '@/types/globals';
import { timestamp } from '@/utils';
import { ICustomerEntity } from './CustomerEntity';
import { IUserEntity } from './UserEntity';

export interface IRentalFields extends IEntityFields {
	amount: number;
	fine?: number;
	payment_method: string;
	rental_date: number;
	return_date: number;
}

export interface IRentalEntity extends IEntity {
	customer(): ICustomerEntity;
	assignCustomer(customer: ICustomerEntity): this;
	operator(): IUserEntity;
	assignOperator(operator: IUserEntity): this;
	amount(): number;
	applyAmount(amount: number): this;
	fine(): TOrUndefined<number>;
	applyFine(fine: number): this;
	paymentMethod(): string;
	applyPaymentMethod(payment_method: string): this;
	rentalDate(): number;
	returnDate(): number;
	changeReturnDate(return_date: number): this;
}

export default class RentalEntity implements IRentalEntity {
	private fields: IRentalFields = {
		amount: 0,
		payment_method: 'Dinheiro',
		rental_date: 0,
		return_date: 0,
	};

	private customerEntity: ICustomerEntity;

	private operatorEntity: IUserEntity;

	constructor(
		customer: ICustomerEntity,
		operator: IUserEntity,
		rental_date = 0
	) {
		this.customerEntity = customer;
		this.operatorEntity = operator;

		this.fields.rental_date =
			rental_date === 0 ? timestamp() : rental_date;
	}

	public customer(): ICustomerEntity {
		return this.customerEntity;
	}

	public assignCustomer(customer: ICustomerEntity) {
		this.customerEntity = customer;
		return this;
	}

	public operator(): IUserEntity {
		return this.operatorEntity;
	}

	public assignOperator(operator: IUserEntity) {
		this.operatorEntity = operator;
		return this;
	}

	public amount(): number {
		return this.fields.amount;
	}

	public applyAmount(amount: number) {
		this.fields.amount = amount;
		return this;
	}

	public fine(): TOrUndefined<number> {
		return this.fields.fine;
	}

	public applyFine(fine: number) {
		this.fields.fine = fine;
		return this;
	}

	public paymentMethod(): string {
		return this.fields.payment_method;
	}

	public applyPaymentMethod(payment_method: string) {
		this.fields.payment_method = payment_method;
		return this;
	}

	public rentalDate(): number {
		return this.fields.rental_date;
	}

	public returnDate(): number {
		return this.fields.return_date;
	}

	public changeReturnDate(return_date: number) {
		this.fields.return_date = return_date;
		return this;
	}

	public id(): TOrUndefined<number> {
		return this.fields.id;
	}

	// todo: exportar cliente e operador
	public toJSON(): Omit<IRentalFields, 'id'> {
		return {
			amount: this.amount(),
			fine: this.fine(),
			payment_method: this.paymentMethod(),
			rental_date: this.rentalDate(),
			return_date: this.returnDate(),
		};
	}
}
