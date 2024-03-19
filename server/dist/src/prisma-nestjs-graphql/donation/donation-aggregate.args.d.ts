import { DonationWhereInput } from './donation-where.input';
import { DonationOrderByWithRelationInput } from './donation-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationCountAggregateInput } from './donation-count-aggregate.input';
import { DonationAvgAggregateInput } from './donation-avg-aggregate.input';
import { DonationSumAggregateInput } from './donation-sum-aggregate.input';
import { DonationMinAggregateInput } from './donation-min-aggregate.input';
import { DonationMaxAggregateInput } from './donation-max-aggregate.input';
export declare class DonationAggregateArgs {
    where?: DonationWhereInput;
    orderBy?: Array<DonationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DonationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: DonationCountAggregateInput;
    _avg?: DonationAvgAggregateInput;
    _sum?: DonationSumAggregateInput;
    _min?: DonationMinAggregateInput;
    _max?: DonationMaxAggregateInput;
}
