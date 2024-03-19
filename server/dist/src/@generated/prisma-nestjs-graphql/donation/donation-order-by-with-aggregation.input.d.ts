import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DonationCountOrderByAggregateInput } from './donation-count-order-by-aggregate.input';
import { DonationAvgOrderByAggregateInput } from './donation-avg-order-by-aggregate.input';
import { DonationMaxOrderByAggregateInput } from './donation-max-order-by-aggregate.input';
import { DonationMinOrderByAggregateInput } from './donation-min-order-by-aggregate.input';
import { DonationSumOrderByAggregateInput } from './donation-sum-order-by-aggregate.input';
export declare class DonationOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    count?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    phoneNumber?: SortOrderInput;
    team?: SortOrderInput;
    message?: SortOrderInput;
    _count?: DonationCountOrderByAggregateInput;
    _avg?: DonationAvgOrderByAggregateInput;
    _max?: DonationMaxOrderByAggregateInput;
    _min?: DonationMinOrderByAggregateInput;
    _sum?: DonationSumOrderByAggregateInput;
}
