nova.commands.register("space-encoder.convertSpaces", (editor) => {
 // A RegExp that selects all occurrences of space.
 const rx = new RegExp(" ", "g");

 editor.edit((e) => {
     let text = editor.getTextInRange(editor.selectedRange);
     const replacementText = text.replace(rx, "%20");
     e.replace(editor.selectedRange, replacementText);
 });
});