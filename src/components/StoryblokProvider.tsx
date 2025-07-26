'use client';

import type { PropsWithChildren } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { Page } from "./Page";

storyblokInit({
    components: {
        page: Page,
    },
    enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
    return <>{children}</>;
};