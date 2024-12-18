import { router } from "../__internals/router"
import { publicProcedure } from "../procedures"

export const authRouter = router({
    getDatabaseSyncStatus: publicProcedure.query(({ c }) =>{
        return c.json({ status: "success" })
    }),
})


// toute.ts

export const GET = (req: Request) => {
    return new Response(JSON.stringify({status: "success"}))
}