import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DonationWhereInput } from './donation-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class DonationWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DonationWhereInput], {nullable:true})
    AND?: Array<DonationWhereInput>;

    @Field(() => [DonationWhereInput], {nullable:true})
    OR?: Array<DonationWhereInput>;

    @Field(() => [DonationWhereInput], {nullable:true})
    NOT?: Array<DonationWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    phoneNumber?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    team?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;
}
