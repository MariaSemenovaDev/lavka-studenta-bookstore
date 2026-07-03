import { structureTool } from "sanity/structure";
import { defineConfig } from "sanity";

import { sanityEnv } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Книжная Лавка Студента",
  projectId: sanityEnv.projectId || "missing-project-id",
  dataset: sanityEnv.dataset,
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
