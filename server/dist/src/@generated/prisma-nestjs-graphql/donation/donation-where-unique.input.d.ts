import { DonationWhereInput } from './donation-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
export declare class DonationWhereUniqueInput {
    id?: number;
    AND?: Array<DonationWhereInput>;
    OR?: Array<DonationWhereInput>;
    NOT?: Array<DonationWhereInput>;
    createdAt?: DateTimeFilter;
    count?: IntFilter;
    name?: StringFilter;
    email?: StringFilter;
    phoneNumber?: IntNullableFilter;
    team?: StringNullableFilter;
    message?: StringNullableFilter;
}
