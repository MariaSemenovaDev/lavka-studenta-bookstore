import {createClient} from "next-sanity";

import {hasSanityEnv, sanityEnv} from "@/sanity/env";

export const sanityClient = hasSanityEnv
    ? createClient({
        projectId: sanityEnv.projectId,
        dataset: sanityEnv.dataset,
        apiVersion: sanityEnv.apiVersion,
        useCdn: false,
        perspective: "published",
    })
    : null;
