<template>
  <div class="tab">
    <h3>Title</h3>
    <div class="tab-selector">
      <div class="left-selector" ref="leftSelector"></div>
      <div class="right-selector" ref="rightSelector"></div>
      <div class="tab-c f" ref="tab">
        <div @click="updateSelectorPosition(0)"
          @keypress="updateSelectorPosition(0)"
          class="f1 tab-item">Tab1</div>
        <div @click="updateSelectorPosition(1)"
          @keypress="updateSelectorPosition(1)"
          class="f1 tab-item">Tab2</div>
        <div @click="updateSelectorPosition(2)"
          @keypress="updateSelectorPosition(2)"
          class="f1 tab-item">Tab3</div>
        <div @click="updateSelectorPosition(3)"
          @keypress="updateSelectorPosition(3)"
          class="f1 tab-item">Tab4</div>
        <div @click="updateSelectorPosition(4)"
          @keypress="updateSelectorPosition(4)"
          class="f1 tab-item">Tab5</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'tabs-component',
  data() {
    return {
      lastSelectedElement: null as unknown as HTMLElement,
    };
  },
  mounted() {
    this.updateSelectorPosition(0);
  },
  methods: {
    updateSelectorPosition(index: number) {
      const tabWidth = (this.$refs.tab as HTMLDivElement).getBoundingClientRect().width;
      const selectedElement = ((this.$refs.tab as HTMLDivElement)
        .children[index] as HTMLElement);
      const elementWidth = ((this.$refs.tab as HTMLDivElement)
        .children[index] as HTMLElement).getBoundingClientRect().width;
      let leftSumWidth = 0;
      Array.from((this.$refs.tab as HTMLDivElement).children)
        .slice(0, index)
        .forEach((value) => {
          leftSumWidth += (value as HTMLElement).getBoundingClientRect().width;
        });

      console.log(tabWidth);
      console.log(elementWidth);
      console.log(leftSumWidth);

      const leftSelector = (this.$refs.leftSelector as HTMLDivElement);
      const rightSelector = (this.$refs.rightSelector as HTMLDivElement);

      leftSelector.style.right = `${(tabWidth - leftSumWidth)}px`;
      rightSelector.style.left = `${(leftSumWidth + elementWidth)}px`;

      selectedElement.classList.add('active');
      if (this.lastSelectedElement) {
        this.lastSelectedElement.classList.remove('active');
      }

      this.lastSelectedElement = selectedElement;
    },
  },
});
</script>

<style scoped lang="scss">
.tab {
  color: black;
  background: rgb(41,39,88);
  background: $mainGradient;
  z-index: 10;

  h3{
    color: white;
    padding: 50px 10px;
  }

  .tab-selector{
    position: relative;
    .left-selector, .right-selector{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: white;
      z-index: 15;
      color: black;
      transition: left ease-in-out 0.3s, right ease-in-out 0.3s;
    }
    .left-selector {
      border-top-right-radius: 10px;
    }
    .right-selector {
      border-top-left-radius: 10px;
    }
  }

  .tab-c {
    z-index: 20;
    .tab-item {
      text-align: center;
      z-index: 25;
      padding: 10px;
      transition: color ease-in-out 0.3s;
      &.active{
        color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
}
</style>
