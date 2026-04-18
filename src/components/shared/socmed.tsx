import { Link } from "@tanstack/react-router";
import type { IconType } from "react-icons/lib";

interface SocmedProps {
    icon: IconType
    link: string
}

export default function Socmed({ icon: Icon, link }: SocmedProps) {
    return (
        <Link to={link} className="text-gray-500 hover:text-white hover:bg-primary flex items-center justify-center rounded-full p-2">
            <Icon />
        </Link>
    )
}