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
exports.DonationGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const donation_where_input_1 = require("./donation-where.input");
const class_transformer_1 = require("class-transformer");
const donation_order_by_with_aggregation_input_1 = require("./donation-order-by-with-aggregation.input");
const donation_scalar_field_enum_1 = require("./donation-scalar-field.enum");
const donation_scalar_where_with_aggregates_input_1 = require("./donation-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const donation_count_aggregate_input_1 = require("./donation-count-aggregate.input");
const donation_avg_aggregate_input_1 = require("./donation-avg-aggregate.input");
const donation_sum_aggregate_input_1 = require("./donation-sum-aggregate.input");
const donation_min_aggregate_input_1 = require("./donation-min-aggregate.input");
const donation_max_aggregate_input_1 = require("./donation-max-aggregate.input");
let DonationGroupByArgs = class DonationGroupByArgs {
};
exports.DonationGroupByArgs = DonationGroupByArgs;
__decorate([
    (0, graphql_1.Field)(() => donation_where_input_1.DonationWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => donation_where_input_1.DonationWhereInput),
    __metadata("design:type", donation_where_input_1.DonationWhereInput)
], DonationGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [donation_order_by_with_aggregation_input_1.DonationOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], DonationGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [donation_scalar_field_enum_1.DonationScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], DonationGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_scalar_where_with_aggregates_input_1.DonationScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", donation_scalar_where_with_aggregates_input_1.DonationScalarWhereWithAggregatesInput)
], DonationGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DonationGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DonationGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_count_aggregate_input_1.DonationCountAggregateInput, { nullable: true }),
    __metadata("design:type", donation_count_aggregate_input_1.DonationCountAggregateInput)
], DonationGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_avg_aggregate_input_1.DonationAvgAggregateInput, { nullable: true }),
    __metadata("design:type", donation_avg_aggregate_input_1.DonationAvgAggregateInput)
], DonationGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_sum_aggregate_input_1.DonationSumAggregateInput, { nullable: true }),
    __metadata("design:type", donation_sum_aggregate_input_1.DonationSumAggregateInput)
], DonationGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_min_aggregate_input_1.DonationMinAggregateInput, { nullable: true }),
    __metadata("design:type", donation_min_aggregate_input_1.DonationMinAggregateInput)
], DonationGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_max_aggregate_input_1.DonationMaxAggregateInput, { nullable: true }),
    __metadata("design:type", donation_max_aggregate_input_1.DonationMaxAggregateInput)
], DonationGroupByArgs.prototype, "_max", void 0);
exports.DonationGroupByArgs = DonationGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DonationGroupByArgs);
//# sourceMappingURL=donation-group-by.args.js.map