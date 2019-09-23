<template>
  <div>
    <input class="form-control" type="file" name="file" @change="uploadFile" />
    <img v-show="file_url" :src="file_url" />
  </div>
</template>

<script>
export default {
  name: 'file-upload',
  data() {
    return {
      file_url: '',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async uploadFile(e) {
      this.isLoading = true;

      try {
        const { files } = e.target;
        const data = new FormData();

        data.append('file', files[0]);
        data.append(
          'upload_preset',
          process.env.VUE_APP_CLOUDINARY_UPLOAD_PRESET
        );

        const res = await fetch(process.env.VUE_APP_CLOUDINARY_URL, {
          method: 'POST',
          body: data,
        });

        const file = await res.json();

        this.file_url = file.secure_url;

        this.$emit('upload', this.file_url);

        this.isLoading = false;
        this.error = null;
      } catch (error) {
        this.isLoading = false;
        this.error = error.message;
      }
    },
  },
};
</script>
