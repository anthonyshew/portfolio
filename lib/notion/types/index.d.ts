import { PageObjectResponse, MultiSelectPropertyItemObjectResponse, StatusPropertyItemObjectResponse, TextRichTextItemResponse, DatePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export interface NavProperties {
  Status: StatusPropertyItemObjectResponse & {
    name: "Not started" | "In progress" | "Ready to post" | "Done"
  },
  Placement: MultiSelectPropertyItemObjectResponse,
  Slug: { rich_text: TextRichTextItemResponse[] },
  Title: { title: TextRichTextItemResponse[0] }
}

export type NavigationDatabaseResult = Array<
  PageObjectResponse & {
    properties: NavProperties;
  }
>;

export interface BlogPostProperties {
  Status: StatusPropertyItemObjectResponse & {
    name: "Not started" | "In progress" | "Ready to post" | "Done"
  },
  Date: Omit<DatePropertyItemObjectResponse, "object">,
  LastUpdated: { id: string, type: string, last_edited_time: Date }
  YtVidStatus: StatusPropertyItemObjectResponse & {
    name: "Not started" | "Recording" | "Editing" | "Done" | "Nah"
  },
  Categories: MultiSelectPropertyItemObjectResponse,
  Title: { title: TextRichTextItemResponse[0] }
  Slug: { rich_text: TextRichTextItemResponse[] }
}

export type BlogDatabaseResult = Array<
  PageObjectResponse & {
    properties: BlogPostProperties
  }
>;

export interface LandingsProperties {
  Status: StatusPropertyItemObjectResponse & {
    name: "Not started" | "In progress" | "Ready to post" | "Done"
  }
  Placement: MultiSelectPropertyItemObjectResponse
  Title: { title: TextRichTextItemResponse[0] }
  Slug: { rich_text: TextRichTextItemResponse[] }
}

export type LandingsDatabaseResult = Array<
  PageObjectResponse & {
    properties: LandingsProperties;
  }
>;