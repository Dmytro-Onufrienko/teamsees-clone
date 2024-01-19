import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { OrderByParams } from 'src/graphql';

@Injectable()
export class DonationsService {
  constructor(private prismaService: PrismaService) { }
  create(createDonationInput: Prisma.DonationCreateInput) {
    return this.prismaService.donation.create({ data: createDonationInput });
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    
    return this.prismaService.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(donationUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prismaService.donation.findUnique({ where: donationUniqueInput });
  }

  async getTotal() {
    const response = await this.prismaService.donation.aggregate({
      _sum: {
        count: true
      }
    })

    return response._sum.count;
  }
}
