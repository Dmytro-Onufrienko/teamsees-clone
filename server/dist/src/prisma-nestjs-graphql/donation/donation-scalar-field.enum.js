"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var DonationScalarFieldEnum;
(function (DonationScalarFieldEnum) {
    DonationScalarFieldEnum["id"] = "id";
    DonationScalarFieldEnum["createdAt"] = "createdAt";
    DonationScalarFieldEnum["count"] = "count";
    DonationScalarFieldEnum["name"] = "name";
    DonationScalarFieldEnum["email"] = "email";
    DonationScalarFieldEnum["phoneNumber"] = "phoneNumber";
    DonationScalarFieldEnum["team"] = "team";
    DonationScalarFieldEnum["message"] = "message";
})(DonationScalarFieldEnum || (exports.DonationScalarFieldEnum = DonationScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined });
//# sourceMappingURL=donation-scalar-field.enum.js.map