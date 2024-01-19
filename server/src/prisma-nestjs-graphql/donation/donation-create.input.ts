import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DonationCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

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
}
