import {useSession} from "next-auth/react";


export default function Home() {

    const {data: session, status} = useSession()
    console.log(status)
    if (status === "loading") {
        return "Loading or not authenticated..."
    }
    return (
        <>

            <div>
                home
            </div>
        </>
    )
}
