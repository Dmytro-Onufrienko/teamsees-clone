import { DonationWhereInput } from './donation-where.input';
import { DonationOrderByWithRelationInput } from './donation-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationScalarFieldEnum } from './donation-scalar-field.enum';
export declare class FindFirstDonationArgs {
    where?: DonationWhereInput;
    orderBy?: Array<DonationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DonationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DonationScalarFieldEnum>;
}
