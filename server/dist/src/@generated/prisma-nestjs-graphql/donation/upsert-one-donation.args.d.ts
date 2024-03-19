import { Prisma } from '@prisma/client';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationCreateInput } from './donation-create.input';
import { DonationUpdateInput } from './donation-update.input';
export declare class UpsertOneDonationArgs {
    where: Prisma.AtLeast<DonationWhereUniqueInput, 'id'>;
    create: DonationCreateInput;
    update: DonationUpdateInput;
}
