<template>
  <form @submit.prevent="addComment">
    <div class="editor">
      <editor-menu-bar :editor="editor">
        <div class="editor-icons" slot-scope="{ commands, isActive }">
          <i
            class="fas fa-bold editor-icon"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          ></i>
          <i
            class="fas fa-italic editor-icon"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          ></i>
          <i
            class="fas fa-strikethrough editor-icon"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          ></i>
          <i
            class="fas fa-underline editor-icon"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          ></i>
          <i
            class="fas fa-code editor-icon"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          ></i>
          <i
            class="fas fa-list-ul editor-icon"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          ></i>
          <i
            class="fas fa-list-ol editor-icon"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          ></i>
          <i
            class="fas fa-quote-left editor-icon"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          ></i>
          <span
            class="editor-span"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
            >H1</span
          >
          <span
            class="editor-span"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
            >H2</span
          >
          <span
            class="editor-span"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
            >H3</span
          >
          <button
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            Code block
          </button>
        </div>
      </editor-menu-bar>
      <editor-content :editor="editor" />
    </div>
    <button type="submit" class="btn btn-primary">Comment</button>
  </form>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
} from 'tiptap-extensions';

import { ADD_COMMENT } from '../../graphql/mutations';

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: null,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async addComment() {
      this.isLoading = true;

      console.log(this.editor);

      this.isLoading = false;

      // try {
      //   const res = await this.$apollo.mutate({
      //     mutation: ADD_COMMENT,
      //     variables: {
      //       data: {
      //         body: 'this.comment.trim()',
      //         commentedBy: {
      //           connect: {
      //             id: 'user.id or user.username'
      //           }
      //         },
      //         post: {
      //           connect: {
      //             id: 'post.id'
      //           }
      //         }
      //       }
      //     }
      //   });

      //   this.isLoading = false;

      //   console.log(res);
      // } catch (error) {
      //   this.isLoading = false;
      //   this.error = error;
      // }
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
      ],
      content: "<textarea class='form-control' rows='3'></textarea>",
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss" scoped>
.editor {
  border: 1px solid #dedede;
  border-radius: 0.125rem;

  &-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem;
    background-color: #efefef;
  }

  &-icon,
  &-span {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.125rem;
    height: 2rem;
    width: 2rem;

    &:hover,
    &:active {
      background-color: #d1d1d1;
    }
  }

  &-span {
    display: table;
    font-size: 0.75rem;
    font-weight: 600;
  }
}
</style>
