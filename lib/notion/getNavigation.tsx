import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NavProperties } from "@/lib/notion/types";
import { notion } from "./client";

type DatabaseResult = Array<
  PageObjectResponse & {
    properties: NavProperties;
  }
>;

const handlePlacement = (
  results: DatabaseResult,
  placement: "Desktop" | "Mobile" | "Footer"
) => {
  return results.filter(
    (page) =>
      page.properties.Status.status.name === "Posted" &&
      page.properties.Placement.multi_select.filter(
        (place) => place.name === placement
      )
  );
};

export const getNavigation = async () => {
  const database = await notion.databases.query({
    database_id: process.env.NAV_DB_ID,
    sorts: [{ property: "Slug", direction: "ascending" }],
  });

  const results = database.results as unknown as DatabaseResult;

  return {
    footer: handlePlacement(results, "Footer"),
    desktop: handlePlacement(results, "Desktop"),
    mobile: handlePlacement(results, "Mobile"),
  };
};
