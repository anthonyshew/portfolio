import { RichText } from "@/components/blocks/RichText";
import { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  listItems: BulletedListItemBlockObjectResponse[];
}

export const BulletedList = async ({ listItems }: Props) => {
  return (
    <ul>
      {listItems.map((item) => {
        return (
          <li key={item.id}>
            <RichText rich_text={item.bulleted_list_item.rich_text} />
          </li>
        );
      })}
    </ul>
  );
};
