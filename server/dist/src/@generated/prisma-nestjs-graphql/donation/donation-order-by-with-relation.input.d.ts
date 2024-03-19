import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
export declare class DonationOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    count?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    phoneNumber?: SortOrderInput;
    team?: SortOrderInput;
    message?: SortOrderInput;
}
