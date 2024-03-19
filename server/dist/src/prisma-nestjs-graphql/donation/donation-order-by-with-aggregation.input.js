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
exports.DonationOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const donation_count_order_by_aggregate_input_1 = require("./donation-count-order-by-aggregate.input");
const donation_avg_order_by_aggregate_input_1 = require("./donation-avg-order-by-aggregate.input");
const donation_max_order_by_aggregate_input_1 = require("./donation-max-order-by-aggregate.input");
const donation_min_order_by_aggregate_input_1 = require("./donation-min-order-by-aggregate.input");
const donation_sum_order_by_aggregate_input_1 = require("./donation-sum-order-by-aggregate.input");
let DonationOrderByWithAggregationInput = class DonationOrderByWithAggregationInput {
};
exports.DonationOrderByWithAggregationInput = DonationOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DonationOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DonationOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DonationOrderByWithAggregationInput.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DonationOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DonationOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], DonationOrderByWithAggregationInput.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], DonationOrderByWithAggregationInput.prototype, "team", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], DonationOrderByWithAggregationInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_count_order_by_aggregate_input_1.DonationCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", donation_count_order_by_aggregate_input_1.DonationCountOrderByAggregateInput)
], DonationOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_avg_order_by_aggregate_input_1.DonationAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", donation_avg_order_by_aggregate_input_1.DonationAvgOrderByAggregateInput)
], DonationOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_max_order_by_aggregate_input_1.DonationMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", donation_max_order_by_aggregate_input_1.DonationMaxOrderByAggregateInput)
], DonationOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_min_order_by_aggregate_input_1.DonationMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", donation_min_order_by_aggregate_input_1.DonationMinOrderByAggregateInput)
], DonationOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_sum_order_by_aggregate_input_1.DonationSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", donation_sum_order_by_aggregate_input_1.DonationSumOrderByAggregateInput)
], DonationOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.DonationOrderByWithAggregationInput = DonationOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], DonationOrderByWithAggregationInput);
//# sourceMappingURL=donation-order-by-with-aggregation.input.js.map