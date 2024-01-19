import { PrismaClient } from '@prisma/client'
import next from 'next'
const prisma = new PrismaClient()

exports.getAllData = async (req, res, next) => {
    try {
        const allData = await prisma.user.findMany();
        res.status(200).json({
            status: "Success",
            users,
        });
        await prisma.$disconnect();
        console.log(users);
        res.status(200).json({
            status: "Success",
            allData,
        });
        await prisma.$disconnect();
        console.log(users);
    } catch (error) {
        console.log("Something went wrong !", error);
    }

}

