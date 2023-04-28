import { Router, Request, Response } from "express";
import { getMessage } from "../controllers/controller";

const router = Router()

router.get('/', async function(req: Request, res: Response) {
    try {
        const data = await getMessage()
        if (!data) {
            return res.status(400).send("could not retrieve message")
        }
        console.log("retrieved message from controller")
        return res.status(200).send(data)

    }
    catch (e) {
        return res.status(500).send("something bad happened" + e)

    }
}
)

export default router