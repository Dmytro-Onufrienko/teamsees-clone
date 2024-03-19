import { Prisma } from '@prisma/client';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
export declare class DeleteOneDonationArgs {
    where: Prisma.AtLeast<DonationWhereUniqueInput, 'id'>;
}
