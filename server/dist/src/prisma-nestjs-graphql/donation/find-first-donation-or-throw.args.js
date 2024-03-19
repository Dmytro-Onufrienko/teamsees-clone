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
exports.FindFirstDonationOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const donation_where_input_1 = require("./donation-where.input");
const class_transformer_1 = require("class-transformer");
const donation_order_by_with_relation_input_1 = require("./donation-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const donation_where_unique_input_1 = require("./donation-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const donation_scalar_field_enum_1 = require("./donation-scalar-field.enum");
let FindFirstDonationOrThrowArgs = class FindFirstDonationOrThrowArgs {
};
exports.FindFirstDonationOrThrowArgs = FindFirstDonationOrThrowArgs;
__decorate([
    (0, graphql_1.Field)(() => donation_where_input_1.DonationWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => donation_where_input_1.DonationWhereInput),
    __metadata("design:type", donation_where_input_1.DonationWhereInput)
], FindFirstDonationOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [donation_order_by_with_relation_input_1.DonationOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstDonationOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => donation_where_unique_input_1.DonationWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstDonationOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstDonationOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstDonationOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [donation_scalar_field_enum_1.DonationScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstDonationOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstDonationOrThrowArgs = FindFirstDonationOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstDonationOrThrowArgs);
//# sourceMappingURL=find-first-donation-or-throw.args.js.map