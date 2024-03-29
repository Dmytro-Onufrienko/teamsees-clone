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
exports.DonationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let DonationsService = class DonationsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createDonationInput) {
        return this.prismaService.donation.create({ data: createDonationInput });
    }
    findAll(orderBy) {
        const { field = 'createdAt', direction = 'desc' } = orderBy || {};
        return this.prismaService.donation.findMany({
            orderBy: { [field]: direction },
        });
    }
    findOne(donationUniqueInput) {
        return this.prismaService.donation.findUnique({
            where: donationUniqueInput,
        });
    }
    async getTotal() {
        const response = await this.prismaService.donation.aggregate({
            _sum: {
                count: true,
            },
        });
        return response._sum.count;
    }
};
exports.DonationsService = DonationsService;
exports.DonationsService = DonationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DonationsService);
//# sourceMappingURL=donations.service.js.map