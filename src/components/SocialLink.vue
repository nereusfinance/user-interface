<template>
  <a target="_blank" :href="link" class="icons">
    <div v-if="type === 'image'">
      <img :src="data" alt="" />
    </div>
    <div v-else-if="type === 'text'">
      {{ data }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
    },
    link: {
      type: String,
    },
    position: {
      type: String,
    },
    type: {
      type: String,
    },
  },
};
</script>
<style scoped lang="scss">
.icons {
  padding-right: 28px;
  font-family: Work Sans, sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #55bcc0;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: $clrNavHover;
  }
}
.icons:last-child {
  padding-right: 0;
}
</style>
