import { RichText } from "@/components/blocks/RichText";
import { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  listItems: NumberedListItemBlockObjectResponse[];
}

export const OrderedList = async ({ listItems }: Props) => {
  return (
    <ol>
      {listItems.map((item) => {
        return (
          <li key={item.id}>
            <RichText rich_text={item.numbered_list_item.rich_text} />
          </li>
        );
      })}
    </ol>
  );
};
