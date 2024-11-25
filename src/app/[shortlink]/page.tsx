import { getLink } from "@/lib/findshortlink";
import {redirect} from "next/navigation";

interface Props {
    params: Promise<{ shortlink: string }>
}

export default async function Page({ params }: Props) {
    const { shortlink } = await params
    const link = await getLink({ shortlink })
    redirect(link)
}