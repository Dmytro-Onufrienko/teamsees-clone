import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
export declare class DonationScalarWhereWithAggregatesInput {
    AND?: Array<DonationScalarWhereWithAggregatesInput>;
    OR?: Array<DonationScalarWhereWithAggregatesInput>;
    NOT?: Array<DonationScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    count?: IntWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    email?: StringWithAggregatesFilter;
    phoneNumber?: IntNullableWithAggregatesFilter;
    team?: StringNullableWithAggregatesFilter;
    message?: StringNullableWithAggregatesFilter;
}
