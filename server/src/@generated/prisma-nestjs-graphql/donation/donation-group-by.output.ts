import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DonationCountAggregate } from './donation-count-aggregate.output';
import { DonationAvgAggregate } from './donation-avg-aggregate.output';
import { DonationSumAggregate } from './donation-sum-aggregate.output';
import { DonationMinAggregate } from './donation-min-aggregate.output';
import { DonationMaxAggregate } from './donation-max-aggregate.output';

@ObjectType()
export class DonationGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:true})
    phoneNumber?: number;

    @Field(() => String, {nullable:true})
    team?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => DonationCountAggregate, {nullable:true})
    _count?: DonationCountAggregate;

    @Field(() => DonationAvgAggregate, {nullable:true})
    _avg?: DonationAvgAggregate;

    @Field(() => DonationSumAggregate, {nullable:true})
    _sum?: DonationSumAggregate;

    @Field(() => DonationMinAggregate, {nullable:true})
    _min?: DonationMinAggregate;

    @Field(() => DonationMaxAggregate, {nullable:true})
    _max?: DonationMaxAggregate;
}
