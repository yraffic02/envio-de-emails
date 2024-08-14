import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function AvatarComponent() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/yraffic02.png" alt="@shadcn" />
            <AvatarFallback>YR</AvatarFallback>
        </Avatar>
    )
}
