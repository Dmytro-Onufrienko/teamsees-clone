import { DonationsService } from './donations.service';
import { OrderByParams } from 'src/graphql';
import { DonationCreateInput } from 'src/@generated/prisma-nestjs-graphql/donation/donation-create.input';
export declare class DonationsResolver {
    private readonly donationsService;
    constructor(donationsService: DonationsService);
    create(createDonationInput: DonationCreateInput): Promise<{
        id: number;
        createdAt: Date;
        count: number;
        name: string;
        email: string;
        phoneNumber: number;
        team: string;
        message: string;
    }>;
    totalUpdated(): AsyncIterator<unknown, any, undefined>;
    findAll(orderBy?: OrderByParams): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        count: number;
        name: string;
        email: string;
        phoneNumber: number;
        team: string;
        message: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__DonationClient<{
        id: number;
        createdAt: Date;
        count: number;
        name: string;
        email: string;
        phoneNumber: number;
        team: string;
        message: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    totalDonation(): Promise<number>;
}
