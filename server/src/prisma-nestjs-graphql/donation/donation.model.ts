import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Donation {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:true})
    phoneNumber!: number | null;

    @Field(() => String, {nullable:true})
    team!: string | null;

    @Field(() => String, {nullable:true})
    message!: string | null;
}
