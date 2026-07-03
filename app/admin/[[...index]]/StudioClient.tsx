"use client";

import { NextStudio } from "next-sanity/studio";

import sanityConfig from "@/sanity.config";

export default function StudioClient() {
  return <NextStudio config={sanityConfig} />;
}
