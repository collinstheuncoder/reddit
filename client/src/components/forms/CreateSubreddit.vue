<template>
  <form>
    <div class="form-group">
      <label for="name">Subreddit Name</label>
      <input id="name" name="name" v-model="name" class="form-control" />
    </div>
    <div class="form-group">
      <label for="description">Subreddit Description</label>
      <textarea
        id="description"
        name="description"
        v-model="description"
        class="form-control"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="topics">Subreddit Topics</label>
      <p>TBD</p>
    </div>
    <b-form-group label="Subreddit Type">
      <b-form-radio v-model="subredditType" name="subreddit-type" value="PUBLIC"
        >Public</b-form-radio
      >
      <b-form-radio
        v-model="subredditType"
        name="subreddit-type"
        value="RESTRICTED"
        >Restricted</b-form-radio
      >
      <b-form-radio
        v-model="subredditType"
        name="subreddit-type"
        value="PRIVATE"
        >Private</b-form-radio
      >
    </b-form-group>
    <b-form-checkbox v-model="isNSFW" name="is-nsfw"
      >Is Adult Content (NSFW)</b-form-checkbox
    >
    <div class="form-group">
      <label for="image">Upload Subreddit Main Image</label>
      <file-upload v-on:upload="getMainImgUrl" />
    </div>
    <div class="form-group">
      <label for="image">Upload Subreddit Header Image</label>
      <file-upload v-on:upload="getHeaderBgImgUrl" />
    </div>
  </form>
</template>

<script>
import { CREATE_SUBREDDIT } from '../../graphql/mutations';
import FileUpload from '../shared/FileUpload';

export default {
  name: 'create-subreddit-form',
  components: {
    FileUpload,
  },
  data() {
    return {
      name: '',
      topics: [],
      description: '',
      image: '',
      headerBgImage: '',
      subredditType: 'PUBLIC',
      isNSFW: false,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async createSubreddit() {
      this.isLoading = true;

      try {
        const res = await this.$apollo.mutate({
          mutation: CREATE_SUBREDDIT,
          variables: {
            data: {
              name: this.name.trim(),
              topics: this.topics,
              description: this.description.trim(),
              image: this.image,
              headerBgImage: this.headerBgImage,
              subredditType: this.subredditType,
              isNSFW: this.isNSFW,
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

    getMainImgUrl(img_url) {
      this.image = img_url;
    },

    getHeaderBgImgUrl(img_url) {
      this.headerBgImage = img_url;
    },
  },
};
</script>
