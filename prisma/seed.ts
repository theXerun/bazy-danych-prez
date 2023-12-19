// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const categories = ["MariaDB", "MongoDB", "Inne"]

async function main() {
    console.log(`Start seeding ...`)

    for (const p of categories) {
        const category = await prisma.category.create({
            data: {
                name: p,
            }
        })
        console.log(`Created category with id: ${category.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })