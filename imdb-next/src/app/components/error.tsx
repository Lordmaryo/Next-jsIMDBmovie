"use client";
import { Button } from "@radix-ui/themes";
import React, { useEffect } from "react";

interface ErrorProps {
  reset: () => void;
  error: any;
}

const error = ({ reset, error }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center space-y-5 mt-5 mx-5">
      <h1 className="text-base sm:text-lg md:text-2xl text-amber-700 dark:text-amber-400">
        Something went wrong, please try again.
      </h1>
      <Button onclick={() => reset()}>Try again</Button>
    </div>
  );
};

export default error;
