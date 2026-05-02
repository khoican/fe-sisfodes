import { Card, CardContent, CardHeader } from "#/components/ui/card";
import type { Official } from "#/types/official";
import { Image } from "@unpic/react";

export default function PersonCard ( { name, position, image} : Official ) {
  return (
    <Card className="p-4 gap-2 h-full">
        <CardHeader className="p-0">
            <Image src={image} alt={name} layout="fullWidth" className="rounded-md aspect-square object-top" />
        </CardHeader>
        <CardContent className='flex flex-col items-center justify-center px-2 h-full'>
          <p className='text-md font-semibold line-clamp-1 text-foreground'>{name}</p>
          <p className='text-xs text-primary'>{position}</p>
        </CardContent>
    </Card>
  )
}