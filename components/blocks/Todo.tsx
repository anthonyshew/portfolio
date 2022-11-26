import { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface Props {
  todoItem: ToDoBlockObjectResponse;
}

export const Todo = ({ todoItem }: Props) => {
  const { to_do } = todoItem;
  const { rich_text } = to_do;

  return (
    <div className="form-check">
      <input
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value={todoItem.to_do.rich_text.map((text) => text.plain_text).join()}
        id={todoItem.id}
      />
      <label
        className="form-check-label inline-block ml-4 text-gray-800"
        htmlFor={todoItem.id}
      >
        <RichText rich_text={rich_text} />
      </label>
    </div>
  );
};
