import { db } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        name: string | string[] | undefined;
    }
}

const Page = async ({params}: PageProps) => {
    if(typeof params.name !== "string") return notFound()
    
    const auth = await currentUser()

    if(!auth) {
        return notFound()
    }

    const user = await db.user.findUnique({
        where: { externalId: auth.id },
    })

    if(!user) return notFound()

        const category = await db.eventCategory.findUnique({
            where: {
                name_userId: {
                    name: params.name,
                    userId: user.id,
                },
            },
            include: {
                _count: {
                    select: {
                        events: true,
                    },
                },
            },
        })

    return (
        <></>
    )
}

export default Page;