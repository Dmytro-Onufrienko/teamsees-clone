import { Prisma } from '@prisma/client';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
export declare class FindUniqueDonationOrThrowArgs {
    where: Prisma.AtLeast<DonationWhereUniqueInput, 'id'>;
}
