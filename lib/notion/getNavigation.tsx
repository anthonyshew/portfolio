import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NavProperties } from "@/lib/notion/types";
import { notion } from "./client";

export const getNavigation = async () => {
  const database = await notion.databases.query({
    database_id: process.env.NAV_DB_ID,
    sorts: [{ property: "Slug", direction: "ascending" }],
  });

  const results = database.results as unknown as Array<
    PageObjectResponse & {
      properties: NavProperties;
    }
  >;

  return results;
};
