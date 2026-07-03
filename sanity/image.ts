import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

import { sanityEnv } from "@/sanity/env";

const builder = createImageUrlBuilder({
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
});

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
