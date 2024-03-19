import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { OrderByParams } from 'src/graphql';
export declare class DonationsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createDonationInput: Prisma.DonationCreateInput): Prisma.Prisma__DonationClient<{
        id: number;
        createdAt: Date;
        count: number;
        name: string;
        email: string;
        phoneNumber: number;
        team: string;
        message: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(orderBy?: OrderByParams): Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        count: number;
        name: string;
        email: string;
        phoneNumber: number;
        team: string;
        message: string;
    }[]>;
    findOne(donationUniqueInput: Prisma.DonationWhereUniqueInput): Prisma.Prisma__DonationClient<{
        id: number;
        createdAt: Date;
        count: number;
        name: string;
        email: string;
        phoneNumber: number;
        team: string;
        message: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getTotal(): Promise<number>;
}
