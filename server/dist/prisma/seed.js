"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const main = async () => {
    await prisma.donation.deleteMany();
    const dmytro = await prisma.donation.create({
        data: {
            email: "dmytroonufrienko@gmail.com",
            count: 10,
            name: "Dmytro"
        },
    });
    console.log({ dmytro });
};
main()
    .catch(e => console.log(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map