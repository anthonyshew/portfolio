import { MultiSelectPropertyItemObjectResponse, StatusPropertyItemObjectResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"

export interface NavProperties {
  Status: StatusPropertyItemObjectResponse & {
    name: "Not started" | "In progress" | "Ready to post" | "Done"
  },
  Placement: MultiSelectPropertyItemObjectResponse,
  Slug: TextRichTextItemResponse,
  Title: TextRichTextItemResponse
}