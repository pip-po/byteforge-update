import { User } from "@/types/userType";
import Image from "next/image";
import React from "react";
import { getTeamData } from "../_api/getTeam";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  LocateIcon,
  LocateOffIcon,
  MailIcon,
  MapPin,
  PhoneCallIcon,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const TeamCard = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const user: User | null = await getTeamData();
  if (!user) return null;
  return (
    <div>
      <Card className="flex  ">
        <CardHeader className="relative">
          <Image
            src={user.picture.large}
            alt="teamImg"
            width={200}
            height={200}
            // className="rounded-lg overflow-hidden max-w-full max-h-[300px] shadow-sm object-cover"
            className="w-30 h-30 rounded-full mx-auto  object-cover ring-4 ring-gray-100 hover:ring-gray-200 transition-all duration-300"
          />
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <p className="text-lg font-bold">{` ${user.name.first} ${user.name.last}`}</p>
            <p className="text-xl font-black text-gray-500"> {title}</p>
            <p className="text-base">{description}</p>
            <div className="flex gap-2 items-center justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="border p-2 rounded-md">
                    <MapPin />
                  </div>
                </PopoverTrigger>
                <PopoverContent>{user.location.city}</PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <div className="border p-2 rounded-md">
                    <MailIcon />
                  </div>
                </PopoverTrigger>
                <PopoverContent>{user.email}</PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <div className="border p-2 rounded-md">
                    {" "}
                    <PhoneCallIcon />
                  </div>
                </PopoverTrigger>
                <PopoverContent>{user.phone}</PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamCard;
