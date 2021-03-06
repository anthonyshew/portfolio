import { NavigationDatabaseResult } from "@/lib/notion/types";
import { notion } from "./client";

const handlePlacement = (
  results: NavigationDatabaseResult,
  placement: "Header" | "Footer"
) => {
  return results.filter(
    (page) =>
      page.properties.Status.status.name === "Posted" &&
      page.properties.Placement.multi_select.filter(
        (place) => place.name === placement
      )
  )
};

export const getNavigation = async () => {
  const database = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NAV_DB_ID,
    filter: { property: "Status", status: { equals: "Posted" } },
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  const results = database.results as unknown as NavigationDatabaseResult;

  return {
    header: handlePlacement(results, "Header"),
    footer: handlePlacement(results, "Footer"),
  };
};
