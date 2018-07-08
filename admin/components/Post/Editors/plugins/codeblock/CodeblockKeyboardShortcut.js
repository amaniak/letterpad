export const isCodeBlock = value =>
    value.blocks.some(block => {
        console.log(block.type);
        return block.type === "code_block";
    });

/* eslint-disable react/prop-types */
const codeblockKeyboardShortcut = (event, change) => {
    const { value } = change;
    const { startBlock } = value;
    if (event.key != "Enter") return;
    if (startBlock.type != "code") return;
    if (value.isExpanded) change.delete();
    change.unwrapBlock("code_block");
    change.insertText("\n");
    return true;

    // const { value } = change;
    // const { startBlock } = value;
    // const { texts } = value;
    // const currentTextNode = texts.get(0);
    // console.log(currentTextNode);
    // if (
    //     value.startOffset == 0 &&
    //     !value.isExpanded &&
    //     event.key == "Backspace"
    // ) {
    //     if (isCodeBlock(value)) {
    //         return change.unwrapBlock("code_block");
    //     }
    // }
    // if (value.startOffset != 0) return;
    // if (event.key != "Enter") return;
    // //if (startBlock.type != "code") return;
    // if (startBlock.type == "paragraph") return;
    // if (value.isExpanded) change.delete();

    // event.preventDefault();
    // change.setBlocks("paragraph");

    // if (startBlock.type == "code_block") {
    //     change.unwrapBlock("code_block");
    //     change.setBlocks("paragraph");
    // }
    // change.insertText("\n");

    // return true;

    // if (!isMod(event) && event.key === "Backspace") {
    //     console.log("Backspace");
    // }
};

export default codeblockKeyboardShortcut;
