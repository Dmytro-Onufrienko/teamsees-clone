import { DonationCountAggregate } from './donation-count-aggregate.output';
import { DonationAvgAggregate } from './donation-avg-aggregate.output';
import { DonationSumAggregate } from './donation-sum-aggregate.output';
import { DonationMinAggregate } from './donation-min-aggregate.output';
import { DonationMaxAggregate } from './donation-max-aggregate.output';
export declare class DonationGroupBy {
    id: number;
    createdAt: Date | string;
    count: number;
    name: string;
    email: string;
    phoneNumber?: number;
    team?: string;
    message?: string;
    _count?: DonationCountAggregate;
    _avg?: DonationAvgAggregate;
    _sum?: DonationSumAggregate;
    _min?: DonationMinAggregate;
    _max?: DonationMaxAggregate;
}
