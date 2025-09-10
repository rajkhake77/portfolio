"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative md:col-span-2 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {/* 🔮 Purple moving border */}
      <div
        className="absolute inset-0"
        style={{ borderRadius }}
      >
        <MovingBorder duration={duration} rx={borderRadius} ry={borderRadius}>
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(circle,rgba(168,85,247,0.8)_40%,transparent_70%)] opacity-80", // purple glow
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      {/* 🖤 Black gradient background */}
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-neutral-700 text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: borderRadius,
          background: "linear-gradient(180deg, #000000, #1a1a1a)", // black gradient
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
