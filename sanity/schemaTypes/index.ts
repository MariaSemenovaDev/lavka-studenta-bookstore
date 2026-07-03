import { blockContentType } from "@/sanity/schemaTypes/blockContent";
import { bookClubAnnouncementType } from "@/sanity/schemaTypes/bookClubAnnouncement";
import { eventType } from "@/sanity/schemaTypes/event";
import { recommendationType } from "@/sanity/schemaTypes/recommendation";

export const schemaTypes = [blockContentType, eventType, recommendationType, bookClubAnnouncementType];
