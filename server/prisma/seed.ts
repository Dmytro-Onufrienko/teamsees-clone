import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.donation.deleteMany();
  const dmytro = await prisma.donation.create({
    data: {
      email: "dmytroonufrienko@gmail.com",
      count: 10,
      name: "Dmytro"
    },
  })

  console.log({ dmytro });
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  })