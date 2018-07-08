import {
    insertNewLineBeforeCodeBlock,
    deleteNewLineBeforeCodeBlock,
    isPrintableKeycode
} from "./CodeblockUtils";

export const isCodeBlock = value =>
    value.blocks.some(block => block.type === "code_block");

/* eslint-disable react/prop-types */
const codeblockKeyboardShortcut = (event, change) => {
    const { value } = change;

    if (value.isExpanded && isPrintableKeycode(event.which)) {
        change.delete();
    }

    switch (event.key) {
        case "Enter":
            if (value.startOffset === 0) {
                return insertNewLineBeforeCodeBlock(change);
            }
            return;
        case "Backspace":
            if (value.startOffset === 0) {
                return deleteNewLineBeforeCodeBlock(change);
            }
    }
};

export default codeblockKeyboardShortcut;
