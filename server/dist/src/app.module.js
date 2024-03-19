"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const donations_module_1 = require("./donations/donations.module");
const graphql_2 = require("graphql");
const payment_controller_1 = require("./payment/payment.controller");
const payment_service_1 = require("./payment/payment.service");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const DateTimeScalar = new graphql_2.GraphQLScalarType({
    name: 'DateTime',
    description: 'DateTime scalar type',
    serialize(value) {
        return value instanceof Date ? value.toISOString() : null;
    },
    parseValue(value) {
        return new Date(value);
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_2.Kind.STRING) {
            return new Date(ast.value);
        }
        return null;
    },
});
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                driver: apollo_1.ApolloDriver,
                resolvers: { DateTime: DateTimeScalar },
                subscriptions: {
                    'graphql-ws': true,
                    'subscriptions-transport-ws': true,
                },
            }),
            donations_module_1.DonationsModule,
            config_1.ConfigModule.forRoot({
                envFilePath: (0, path_1.join)(__dirname, '..', '.env'),
            }),
        ],
        controllers: [app_controller_1.AppController, payment_controller_1.PaymentController],
        providers: [app_service_1.AppService, payment_service_1.PaymentService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map