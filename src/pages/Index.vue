<template>
  <q-page class="flex flex-center">
    <q-linear-progress :value="progress" />
    <q-select
      outlined
      label="Number"
      :options="options"
      v-model="selectedValue"
      @virtual-scroll="onScroll"
      :virtual-scroll-item-size="scrollItemSize"
    />
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      progress: 0.01,
      selectedValue: "",
      options: [...Array(100).keys()],
      // changing the following to 0 makes it work with Cypress
      scrollItemSize: 24
    };
  },

  mounted() {
    setInterval(() => {
      this.$nextTick(() => {
        if (this.progress >= 1) {
          this.progress = 0.01;
          return;
        }

        this.progress = Math.min(1, this.progress + 0.1);
      });
    }, 700);
  },

  methods: {
    onScroll(details) {
      console.log(details);
    }
  }
};
</script>
