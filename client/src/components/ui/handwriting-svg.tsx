"use client";

import { motion } from "framer-motion";
import * as opentype from "opentype.js";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_FONT_URL = "/handwriting.ttf";

export interface HandwritingSvgProps {
  path?: string;
  text?: string;
  fontUrl?: string;
  className?: string;
  strokeClassName?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  ease?: any;
}

export const DEFAULT_HELLO_PATH =
  "M 45 42 C 35 26, 45 16, 56 18 C 66 20, 58 45, 52 75 C 46 105, 42 125, 38 135 " +
  "M 95 18 C 92 45, 88 85, 85 125 C 84 135, 88 138, 95 132 " +
  "M 48 78 C 65 72, 85 70, 102 74 C 112 78, 120 120, 130 115 " +
  "C 138 110, 145 92, 140 84 C 134 76, 122 84, 126 102 C 130 118, 145 122, 155 110 " +
  "C 165 98, 185 30, 175 20 C 165 10, 152 35, 160 80 C 166 115, 172 125, 185 118 " +
  "C 195 105, 215 30, 205 20 C 195 10, 182 35, 190 80 C 196 115, 202 125, 215 118 " +
  "C 225 108, 235 90, 250 88 C 265 86, 272 98, 268 112 C 262 128, 240 128, 236 112 C 232 98, 248 88, 262 88 C 275 88, 290 95, 305 92";

export function HandwritingSvg({
  path: pathProp,
  text,
  fontUrl = DEFAULT_FONT_URL,
  className,
  strokeClassName,
  duration = 2,
  delay = 0.5,
  strokeWidth = 2,
  width = 100,
  height = 100,
  fontSize = 48,
  ease = "easeInOut",
}: HandwritingSvgProps) {
  const [path, setPath] = useState<string | null>(pathProp ?? (text?.toLowerCase() === 'hello' ? DEFAULT_HELLO_PATH : null));
  const [viewBox, setViewBox] = useState(`${0} ${0} ${width} ${height}`);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pathProp) {
      setPath(pathProp);
      setViewBox(`0 0 ${width} ${height}`);
      return;
    }
    if (!text) {
      setPath(null);
      return;
    }
    if (text.toLowerCase() === 'hello') {
      setPath(DEFAULT_HELLO_PATH);
      setViewBox("0 0 340 160");
      return;
    }

    let cancelled = false;
    setLoading(true);
    fetch(fontUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Font fetch failed");
        return res.arrayBuffer();
      })
      .then((buffer) => {
        if (cancelled) return;
        const font = opentype.parse(buffer);
        const p = font.getPath(text, 0, fontSize, fontSize);
        const bbox = p.getBoundingBox();
        const pad = 5;
        const vx = Math.floor(bbox.x1) - pad;
        const vy = Math.floor(bbox.y1) - pad;
        const vw = Math.ceil(bbox.x2 - bbox.x1) + pad * 2;
        const vh = Math.ceil(bbox.y2 - bbox.y1) + pad * 2;
        setViewBox(`${vx} ${vy} ${vw} ${vh}`);
        setPath(p.toPathData(2));
      })
      .catch(() => {
        if (!cancelled) {
          setPath(DEFAULT_HELLO_PATH);
          setViewBox("0 0 340 160");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [text, fontUrl, pathProp, fontSize, width, height]);

  if (loading) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={cn("text-muted-foreground", className)}
        aria-hidden={true}
      >
        <title>Handwriting SVG loading</title>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={14}
        >
          Loading…
        </text>
      </svg>
    );
  }

  const d = path || DEFAULT_HELLO_PATH;

  const svgViewBox = pathProp ? `0 0 ${width} ${height}` : viewBox;

  return (
    <svg
      width={width}
      height={height}
      viewBox={svgViewBox}
      className={cn("text-rose-500", className)}
      aria-hidden={true}
    >
      <title>Handwriting SVG</title>
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={strokeClassName}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration, ease }}
      />
    </svg>
  );
}

export default HandwritingSvg;
