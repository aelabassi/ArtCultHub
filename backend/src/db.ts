import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    //prisma queries go heree
}

main ()
 .catch(e => {
    console.error(e.message)
 })
 .finally(async () => {
    await prisma.$disconnect()
 })

export default prisma;
