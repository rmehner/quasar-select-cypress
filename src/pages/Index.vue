<template>
  <q-page class="flex flex-center">
    <q-select outlined label="Number" :options="options" />
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      options: [...Array(5000).keys()]
    };
  }
};
</script>
