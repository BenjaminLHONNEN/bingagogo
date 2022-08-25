<template>
  <div class="tab">
    <h3>Title</h3>
    <div class="tab-selector">
      <div class="left-selector" ref="leftSelector"></div>
      <div class="right-selector" ref="rightSelector"></div>
      <div class="tab-c f" ref="tab">
        <div v-for="(tab, index) in tabs" :key="index"
        @click="updateSelectorPosition(index, tab)"
          @keypress="updateSelectorPosition(index, tab)"
          class="f1 tab-item"> {{tab.name}} </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TabModel } from './TabModel';

export default defineComponent({
  name: 'tabs-component',
  data() {
    return {
      lastSelectedElement: null as unknown as HTMLElement,
      firstInit: true,
    };
  },
  mounted() {
    console.log('mounted');
    this.updateSelectorPosition(0, this.tabs[0]);
  },
  props: {
    tabs: {
      type: Array as PropType<TabModel[]>,
      default: () => [],
    },
  },
  methods: {
    updateSelectorPosition(index: number, tab: TabModel) {
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

      const leftSelector = (this.$refs.leftSelector as HTMLDivElement);
      const rightSelector = (this.$refs.rightSelector as HTMLDivElement);

      leftSelector.style.right = `${(tabWidth - leftSumWidth)}px`;
      rightSelector.style.left = `${(leftSumWidth + elementWidth)}px`;

      selectedElement.classList.add('active');
      if (this.lastSelectedElement && this.lastSelectedElement !== selectedElement) {
        this.lastSelectedElement.classList.remove('active');
      }

      this.lastSelectedElement = selectedElement;

      if (this.firstInit) {
        this.firstInit = false;
      } else {
        tab.action();
      }
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

      &::before {
        content: '';
        position: absolute;
        background-clip: padding-box;
        border-bottom: solid 15px transparent;
        box-shadow: -10px 1px 0 0 white;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        bottom: -1px;
        right: -20px;
        width: 20px;
        animation: fade 0.3s ease-out;
      }
    }
    .right-selector {
      border-top-left-radius: 10px;

      &::after {
        content: '';
        position: absolute;
        background-clip: padding-box;
        border-bottom: solid 15px transparent;
        box-shadow: 10px 1px 0 0 white;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        bottom: -1px;
        left: -20px;
        width: 20px;
        animation: fade 0.3s ease-out;
      }
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
        position: relative;
      }
    }
  }
}
</style>
