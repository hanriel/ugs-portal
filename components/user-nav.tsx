import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import LogoutButton from "./logout-button";
import { auth } from "@/auth";
import Link from "next/link";

export default async function UserNav () {
  const session = await auth();
  if (!session?.user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar>
            <AvatarImage
              src={`https://pmkspo.ru/img/staff/${session?.user?.id}.png` || "avatars/01.png"}
              alt={session?.user?.id || "USER"}
            />
            <AvatarFallback>{session?.user?.name.split(' ')[0][0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href='/profile'>
              Профиль
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Настройки
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href='/admin'>
              Админпанель
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogoutButton/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};