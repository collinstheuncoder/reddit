<template>
  <form @submit.prevent="createPost">
    <div class="form-group">
      <input class="form-control" placeholder="Title" v-model="title" />
    </div>
    <div class="form-group" v-show="postType === 'text'">
      <textarea
        class="form-control"
        placeholder="Description (Optional)"
        v-model="description"
      />
    </div>
    <div class="form-group" v-show="postType === 'image'">
      <file-upload v-on:upload="getImgUrl" />
    </div>
    <div class="form-group" v-show="postType === 'link'">
      <input class="form-control" placeholder="Link" v-model="link" />
    </div>
    <div class="form-group">
      <b-form-checkbox v-model="isOC" name="original-content"
        >Original Content</b-form-checkbox
      >
      <b-form-checkbox v-model="isNSFW" name="nsfw">NSFW</b-form-checkbox>
      <b-form-checkbox v-model="isNSFL" name="nsfl">NSFL</b-form-checkbox>
      <b-form-checkbox v-model="isSerious" name="serious-post"
        >Serious Post</b-form-checkbox
      >
      <b-form-checkbox v-model="hasSpoiler" name="contains-spoiler"
        >Contains Spoiler</b-form-checkbox
      >
    </div>
    <button type="submit" class="btn btn-info">Post</button>
  </form>
</template>

<script>
import { CREATE_POST } from '../../graphql/mutations';
import FileUpload from '../shared/FileUpload';

export default {
  name: 'create-post-form',
  components: {
    FileUpload,
  },
  props: {
    postType: {
      type: String,
      required: true,
    },
    subredditId: {
      type: String,
    },
  },
  data() {
    return {
      title: '',
      description: '',
      image: '',
      link: '',
      isOC: false,
      isNSFW: false,
      isNSFL: false,
      isSerious: false,
      hasSpoiler: false,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async createPost() {
      this.isLoading = true;

      try {
        const res = await this.$apollo.mutate({
          mutation: CREATE_POST,
          variables: {
            data: {
              title: this.title.trim(),
              description: this.description.trim(),
              image: this.image.trim(),
              link: this.link.trim(),
              isOC: this.isOC,
              isNSFW: this.isNSFW,
              isNSFL: this.isNSFL,
              isSerious: this.isSerious,
              hasSpoiler: this.hasSpoiler,
              postedBy: {
                connect: {
                  username: 'easymoneysniper',
                },
              },
              subreddit: {
                connect: {
                  id: this.subredditId,
                },
              },
            },
          },
        });

        this.isLoading = false;
        this.error = null;

        console.log(res);
      } catch (error) {
        this.isLoading = false;
        this.error = error;
        console.log(error);
      }
    },

    getImgUrl(img_url) {
      this.image = img_url;
    },
  },
};
</script>
