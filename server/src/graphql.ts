/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDonationInput {
  count: number;
  name: string;
  email: string;
  phoneNumber?: Nullable<number>;
  team?: Nullable<string>;
  message?: Nullable<string>;
  createdAt?: Nullable<DateTime>;
}

export class OrderByParams {
  field?: Nullable<string>;
  direction?: Nullable<string>;
}

export class Donation {
  id: number;
  count: number;
  name: string;
  email: string;
  phoneNumber?: Nullable<number>;
  team?: Nullable<string>;
  message?: Nullable<string>;
  createdAt: DateTime;
}

export abstract class IQuery {
  abstract donations(
    orderBy?: Nullable<OrderByParams>,
  ): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

  abstract donation(
    id: number,
  ): Nullable<Donation> | Promise<Nullable<Donation>>;

  abstract totalDonations(): number | Promise<number>;
}

export abstract class IMutation {
  abstract createDonation(
    createDonationInput: CreateDonationInput,
  ): Donation | Promise<Donation>;

  abstract removeDonation(
    id: number,
  ): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export class Result {
  total: number;
}

export abstract class ISubscription {
  abstract totalUpdated(): Nullable<Result> | Promise<Nullable<Result>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
