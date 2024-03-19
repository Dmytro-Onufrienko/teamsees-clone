import { DonationUpdateInput } from './donation-update.input';
import { Prisma } from '@prisma/client';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
export declare class UpdateOneDonationArgs {
    data: DonationUpdateInput;
    where: Prisma.AtLeast<DonationWhereUniqueInput, 'id'>;
}
