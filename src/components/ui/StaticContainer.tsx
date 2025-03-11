"use client";
import React from "react";

export const StaticContainer = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-4 py-8 md:py-12 lg:py-16">
      <div className="max-w-5xl mx-auto">
        <StaticHeader titleComponent={titleComponent} />
        <StaticCard>{children}</StaticCard>
      </div>
    </div>
  );
};

export const StaticHeader = ({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode;
}) => {
  return <div className="mb-6 md:mb-8 text-center">{titleComponent}</div>;
};

export const StaticCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      className="w-full aspect-[4/3] md:aspect-[16/9] border border-gray-300 dark:border-gray-700 p-2 md:p-4 bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
    >
      <div className="h-full w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 p-2 md:p-4">
        {children}
      </div>
    </div>
  );
};
