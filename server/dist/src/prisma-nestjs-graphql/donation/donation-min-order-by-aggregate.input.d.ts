import { SortOrder } from '../prisma/sort-order.enum';
export declare class DonationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    count?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    phoneNumber?: keyof typeof SortOrder;
    team?: keyof typeof SortOrder;
    message?: keyof typeof SortOrder;
}
