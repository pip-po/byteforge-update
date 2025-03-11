"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import React, { useMemo } from "react";

const stats = [
  { label: "Successful Projects", value: 100 },
  { label: "Satisfied Clients", value: 60 },
  { label: "Tech Solutions Delivered", value: 150 },
];

// Variants untuk animasi agar lebih efisien
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const StatTickers = React.memo(() => {
  // Gunakan useMemo untuk mencegah perhitungan ulang `stats`
  const renderedStats = useMemo(
    () =>
      stats.map(({ label, value }) => (
        <Card key={label} className="border-none shadow-none">
          <CardHeader>
            <p className="text-lg font-medium">{label}</p>
          </CardHeader>
          <CardContent className="flex justify-center items-center gap-1">
            <NumberTicker
              value={value}
              className="whitespace-pre-wrap text-7xl font-bold tracking-tighter text-[#272727] dark:text-white"
            />
            <span className="text-7xl font-bold text-[#272727] dark:text-white">
              +
            </span>
          </CardContent>
        </Card>
      )),
    []
  );

  return (
    <section className="flex items-center justify-center p-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-5 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {renderedStats}
      </motion.div>
    </section>
  );
});

export default StatTickers;
