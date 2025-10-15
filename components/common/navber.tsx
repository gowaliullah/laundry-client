import Link from "next/link"
import { MenuList } from "./menuList"
import Image from "next/image"

import logo from "@/public/assets/loundry-logo.png"


export function Navber() {
    return (
        <>
            <div className="container flex items-center">
                <Link href="/" className="w-full">
                    <Image src={logo} width={80} height={50} alt="Logo" />
                </Link>
                <MenuList />
            </div>

        </>
    )
}
