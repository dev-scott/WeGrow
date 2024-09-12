import { onAuthenticatedUser } from "@/actions/auth"
import BackdropGradient from "@/components/global/backdrop-gradient"
import GlassCard from "@/components/global/glass-card"
import Image from "next/image"
import { redirect } from "next/navigation"
import React from "react"

type Props = {
    children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
    const user = await onAuthenticatedUser()
    if (user.status === 200) redirect("/callback/sign-in")

    return (
        <div className=" h-screen flex justify-center items-center  bg-hero-pattern bg-cover bg-center ">
            <div className=" container flex  w-full h-full items-center py-24 bg-white relative ">
                <BackdropGradient
                    className=""
                    container="bg-red-500 rounded-5 bg-cover bg-center flex flex-col w-1/2 h-full items-center relative "
                >
                    <Image
                    priority
                    src="/dev-scott.jpg"
                    className="opacity-[0.95]"
                    alt="dev-scott"
                    sizes="100vw"
                    fill
                    objectFit="cover"
                />
                </BackdropGradient>

                <BackdropGradient
                    className="w-6/12 h-2/6 opacity-40"
                    container="flex flex-col w-1/2 h-full items-center"
                >
                    <GlassCard className="xs:w-full md:w-7/12 lg:w-full xl:w-full p-7 rounded-none backdrop-blur-none bg-opacity-0 backdrop-filter-none border-none bg-transparent  h-full">
                        {children}
                    </GlassCard>
                </BackdropGradient>
            </div>
        </div>
    )
}

export default AuthLayout
