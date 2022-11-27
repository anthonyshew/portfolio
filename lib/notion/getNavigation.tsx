import { NavigationDatabaseResult } from "@/lib/notion/types";
import { notion } from "./client";

const handlePlacement = (
  results: NavigationDatabaseResult,
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
    database_id: process.env.NEXT_PUBLIC_NAV_DB_ID,
    sorts: [{ property: "Slug", direction: "ascending" }],
  });

  const results = database.results as unknown as NavigationDatabaseResult;

  return {
    footer: handlePlacement(results, "Footer"),
    desktop: handlePlacement(results, "Desktop"),
    mobile: handlePlacement(results, "Mobile"),
  };
};
