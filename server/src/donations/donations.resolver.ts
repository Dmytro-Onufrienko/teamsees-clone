import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { DonationsService } from './donations.service';
import { OrderByParams } from 'src/graphql';
import { DonationCreateInput } from 'src/@generated/prisma-nestjs-graphql/donation/donation-create.input';
import { PubSub } from 'graphql-subscriptions';

const publicSubscription = new PubSub();

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  async create(
    @Args('createDonationInput') createDonationInput: DonationCreateInput,
  ) {
    const newDonation = await this.donationsService.create(createDonationInput);
    const total = await this.donationsService.getTotal();
    publicSubscription.publish('totalUpdated', { totalUpdated: { total } });

    return newDonation;
  }

  @Subscription()
  totalUpdated() {
    return publicSubscription.asyncIterator('totalUpdated');
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.donationsService.findAll(orderBy);
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne({ id });
  }

  @Query('totalDonations')
  totalDonation() {
    return this.donationsService.getTotal();
  }
}
