import { Card, CardContent, CardHeader } from "#/components/ui/card";
import type { Member } from "#/types/member.d";
import { Image } from "@unpic/react";

export default function PersonCard ( { name, position, image} : Member ) {
  return (
    <Card className="p-4 gap-4 h-full">
        <CardHeader className="p-0">
            <Image src={image} alt={name} layout="fullWidth" className="rounded-md aspect-square object-top" />
        </CardHeader>
        <CardContent className='flex flex-col items-center justify-center'>
          <p className='text-lg font-semibold'>{name}</p>
          <p className='text-xs text-primary'>{position}</p>
        </CardContent>
    </Card>
  )
}