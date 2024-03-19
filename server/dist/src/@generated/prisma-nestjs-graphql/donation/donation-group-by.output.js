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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const donation_count_aggregate_output_1 = require("./donation-count-aggregate.output");
const donation_avg_aggregate_output_1 = require("./donation-avg-aggregate.output");
const donation_sum_aggregate_output_1 = require("./donation-sum-aggregate.output");
const donation_min_aggregate_output_1 = require("./donation-min-aggregate.output");
const donation_max_aggregate_output_1 = require("./donation-max-aggregate.output");
let DonationGroupBy = class DonationGroupBy {
};
exports.DonationGroupBy = DonationGroupBy;
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], DonationGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], DonationGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], DonationGroupBy.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DonationGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DonationGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DonationGroupBy.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DonationGroupBy.prototype, "team", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DonationGroupBy.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_count_aggregate_output_1.DonationCountAggregate, { nullable: true }),
    __metadata("design:type", donation_count_aggregate_output_1.DonationCountAggregate)
], DonationGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_avg_aggregate_output_1.DonationAvgAggregate, { nullable: true }),
    __metadata("design:type", donation_avg_aggregate_output_1.DonationAvgAggregate)
], DonationGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_sum_aggregate_output_1.DonationSumAggregate, { nullable: true }),
    __metadata("design:type", donation_sum_aggregate_output_1.DonationSumAggregate)
], DonationGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_min_aggregate_output_1.DonationMinAggregate, { nullable: true }),
    __metadata("design:type", donation_min_aggregate_output_1.DonationMinAggregate)
], DonationGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_max_aggregate_output_1.DonationMaxAggregate, { nullable: true }),
    __metadata("design:type", donation_max_aggregate_output_1.DonationMaxAggregate)
], DonationGroupBy.prototype, "_max", void 0);
exports.DonationGroupBy = DonationGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], DonationGroupBy);
//# sourceMappingURL=donation-group-by.output.js.map