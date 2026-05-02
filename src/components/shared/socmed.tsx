import { Link } from "@tanstack/react-router";
import type { IconType } from "react-icons/lib";

interface SocmedProps {
    icon: IconType
    link: string
    label: string
}

export default function Socmed({ icon: Icon, link, label }: SocmedProps) {
    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground hover:text-white hover:bg-primary flex items-center justify-center rounded-full p-2 transition-colors"
        >
            <Icon />
        </a>
    )
}