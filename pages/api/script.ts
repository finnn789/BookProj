
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
          username: 'Alice123',
          password: 'alice'
        },
      })
      console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
    console.log("Database Connected")
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })