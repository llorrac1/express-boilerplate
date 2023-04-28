import { messageDto } from "../dtos/dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getMessage = async(): Promise<messageDto> => {
    const messageInDb = await prisma.message.findFirst()
    let message: messageDto
    if (messageInDb) {
        message = {
            message: messageInDb.message
        }
        console.log("retrieved message from db via prisma")
        return message
    }

    message = {
        message: "no message found in db"
    }

    return message

}