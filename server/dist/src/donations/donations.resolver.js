"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const donations_service_1 = require("./donations.service");
const graphql_2 = require("../graphql");
const donation_create_input_1 = require("../@generated/prisma-nestjs-graphql/donation/donation-create.input");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const publicSubscription = new graphql_subscriptions_1.PubSub();
let DonationsResolver = class DonationsResolver {
    constructor(donationsService) {
        this.donationsService = donationsService;
    }
    async create(createDonationInput) {
        const newDonation = await this.donationsService.create(createDonationInput);
        const total = await this.donationsService.getTotal();
        publicSubscription.publish('totalUpdated', { totalUpdated: { total } });
        return newDonation;
    }
    totalUpdated() {
        return publicSubscription.asyncIterator('totalUpdated');
    }
    findAll(orderBy) {
        return this.donationsService.findAll(orderBy);
    }
    findOne(id) {
        return this.donationsService.findOne({ id });
    }
    totalDonation() {
        return this.donationsService.getTotal();
    }
};
exports.DonationsResolver = DonationsResolver;
__decorate([
    (0, graphql_1.Mutation)('createDonation'),
    __param(0, (0, graphql_1.Args)('createDonationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donation_create_input_1.DonationCreateInput]),
    __metadata("design:returntype", Promise)
], DonationsResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Subscription)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DonationsResolver.prototype, "totalUpdated", null);
__decorate([
    (0, graphql_1.Query)('donations'),
    __param(0, (0, graphql_1.Args)('orderBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.OrderByParams]),
    __metadata("design:returntype", void 0)
], DonationsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('donation'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DonationsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)('totalDonations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DonationsResolver.prototype, "totalDonation", null);
exports.DonationsResolver = DonationsResolver = __decorate([
    (0, graphql_1.Resolver)('Donation'),
    __metadata("design:paramtypes", [donations_service_1.DonationsService])
], DonationsResolver);
//# sourceMappingURL=donations.resolver.js.map