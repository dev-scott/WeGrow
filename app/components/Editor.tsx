"use client";

import { Button } from "@/components/ui/button";
import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import Starterkt from "@tiptap/starter-kit";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-5">
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
        }
      >
        H1
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "secondary"
        }
      >
        H2
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "secondary"
        }
      >
        H3
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "secondary"}
      >
        Bold
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "secondary"}
      >
        Italic
      </Button>
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "default" : "secondary"}
      >
        Strike
      </Button>
    </div>
  );
};

export function TipTapEditor() {
  const editor = useEditor({
    extensions: [Starterkt],
    content: "<p>Hello world</p>",
    editorProps: {
      attributes: {
        class:
          "focus:outline-none  min-h-[150px] prose prose-sm sm:prose-base overflow-hidden",
      },
    },
  });

  return (
    <div className="gap-y-2 flex flex-col">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="rounded-lg border p-2 min-h-[150px] mt-2"
      />
    </div>
  );
}
