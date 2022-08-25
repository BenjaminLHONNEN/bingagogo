<template>
    <div class="f collection-item" :class="classProp">
        <div class="img-c" v-if="image">
            <img :style="{maxHeight: imageMaxHeight, maxWidth: imageMaxWidth}"
                :src="image"
                alt="card image">
        </div>
        <div class="text f1">
            <div>{{title}}</div>
            <div v-if="description">{{description}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    image: {
      type: String,
      default: null,
    },
    imageMaxHeight: {
      type: String,
      default: '24px',
    },
    imageMaxWidth: {
      type: String,
      default: '24px',
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    classProp: {
      type: Object,
      default: null,
    },
  },
});

</script>

<style scoped lang="scss">
.collection-item{
    border: 1px $border-color solid;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    .img-c {
        padding: 5px;
        img {
            max-height: 100%;
            max-width: 100%;
            border-radius: 100%;
        }
    }
    .text {
        padding: 5px;
    }
    &.purple{
      color: white;
      background-color: $purple;
    }
    &.pink{
      color: white;
      background-color: $pink;
    }
}
</style>
