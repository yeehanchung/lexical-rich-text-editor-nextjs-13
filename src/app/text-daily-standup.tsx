import { format } from "date-fns";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";
import { $createListItemNode, $createListNode } from "@lexical/list";

/**
 * docs: https://lexical.dev/docs/demos/plugins/markdown
 */

export function textDailyStandup() {
    const root = $getRoot();

    /**
     * Today's Standup date
     */
    const paragraph = $createParagraphNode();
    const currentDate = new Date();
    const todayStandupDate = format(currentDate, "ddMMyyyy");
    paragraph.append(
        $createTextNode(`/${todayStandupDate}`),
    );

    /**
     * Focusing
    */
    const paragraph2 = $createParagraphNode();
    paragraph2.append($createTextNode("#focusing"));

    /**
     * Focusing list
    */
    const list = $createListNode("bullet");
    list.append(
        $createListItemNode().append(
            $createTextNode(`..`)
        )
    );

    /**
     * Root
     */
    root.append(paragraph);
    root.append(paragraph2);
    root.append(list);
}
