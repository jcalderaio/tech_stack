function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

function renderIfElse(condition, content1, content2) {
    if (condition) {
        return content1;
    } else if (!condition) {
        return content2;
    }
}

export { renderIf, renderIfElse };
