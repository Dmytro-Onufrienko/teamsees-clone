import { DonationWhereInput } from './donation-where.input';
import { DonationOrderByWithAggregationInput } from './donation-order-by-with-aggregation.input';
import { DonationScalarFieldEnum } from './donation-scalar-field.enum';
import { DonationScalarWhereWithAggregatesInput } from './donation-scalar-where-with-aggregates.input';
import { DonationCountAggregateInput } from './donation-count-aggregate.input';
import { DonationAvgAggregateInput } from './donation-avg-aggregate.input';
import { DonationSumAggregateInput } from './donation-sum-aggregate.input';
import { DonationMinAggregateInput } from './donation-min-aggregate.input';
import { DonationMaxAggregateInput } from './donation-max-aggregate.input';
export declare class DonationGroupByArgs {
    where?: DonationWhereInput;
    orderBy?: Array<DonationOrderByWithAggregationInput>;
    by: Array<keyof typeof DonationScalarFieldEnum>;
    having?: DonationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DonationCountAggregateInput;
    _avg?: DonationAvgAggregateInput;
    _sum?: DonationSumAggregateInput;
    _min?: DonationMinAggregateInput;
    _max?: DonationMaxAggregateInput;
}
