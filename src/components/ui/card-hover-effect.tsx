"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { ReactNode, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

interface Item {
  image: string;
  icon: ReactNode;
  name: string;
  description: string;
}

export const HoverEffect = React.memo(
  ({ items, className }: { items: Item[]; className?: string }) => {
    return (
      <div
        className={cn(
          "grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div key={item.name} className="relative group block  h-full w-full">
            <Card>
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-[150px] object-cover rounded-md"
              />
              <CardTitle>
                <div className="flex gap-2 font-semibold">
                  {item.icon} {item.name}
                </div>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    );
  }
);

const Card = React.memo(
  ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <div
      className={cn(
        "rounded-lg h-full w-full p-3 overflow-hidden bg-white shadow-md dark:border-white/20 group-hover:border-slate-700 relative z-20 hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
);

const CardTitle = React.memo(
  ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <h4
      className={cn("text-[#272727] font-bold tracking-normal mt-4", className)}
    >
      {children}
    </h4>
  )
);

const CardDescription = React.memo(
  ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <p
      className={cn(
        "text-[#272727] mt-2 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  )
);
