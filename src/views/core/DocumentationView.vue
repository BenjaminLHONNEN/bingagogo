<template>
    <div class="documentation">
        <h2>Component Documentation</h2>
        <h4>Collection</h4>
        <div>
          <h5>Image Collection</h5>
          <image-collection-component
            title="Title"
            description="Description"
            imageMaxHeight="48px"
            imageMaxWidth="48px"
            image="/img/no_img_275_275.jpg">
          </image-collection-component>
          <image-collection-component
            title="Title"
            description="Description"
            imageMaxHeight="48px"
            imageMaxWidth="48px"
            image="/img/no_img_275_275.jpg"
            :classProp="{purple: true}">
          </image-collection-component>
          <image-collection-component
            title="Title"
            description="Description"
            imageMaxHeight="48px"
            imageMaxWidth="48px"
            image="/img/no_img_275_275.jpg"
            :classProp="{pink: true}">
          </image-collection-component>
        </div>
        <div>
          <h5> Tabs </h5>
          <div>
            <tabs-component :tabs="tabs"></tabs-component>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import ImageCollectionComponent from '@/components/core/ImageCollectionComponent.vue';
import TabsComponent from '@/components/core/TabsComponent.vue';
import { defineComponent } from 'vue';

import { TabModel } from '../../components/core/TabModel';

export default defineComponent({
  components: { ImageCollectionComponent, TabsComponent },
  name: 'DocumentationView',
  data() : {
    tabs: TabModel[]
    } {
    return {
      tabs: [
        {
          name: 'Tab 1',
          action: () => {
            console.log('click Tab 1');
          },
        },
        {
          name: 'Tab 2',
          action: () => {
            console.log('click Tab 2');
          },
        },
        {
          name: 'Tab 3',
          action: () => {
            console.log('click Tab 3');
          },
        },
      ],
    };
  },
});
</script>

<style scoped>

</style>
