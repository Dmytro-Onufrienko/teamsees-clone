import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    count = "count",
    name = "name",
    email = "email",
    phoneNumber = "phoneNumber",
    team = "team",
    message = "message"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
