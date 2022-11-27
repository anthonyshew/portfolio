import { PageObjectResponse, MultiSelectPropertyItemObjectResponse, StatusPropertyItemObjectResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"

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