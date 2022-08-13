<template>
  <ion-label position="stacked">
    <ion-icon v-if="!model.$dirty" :icon="entryStates.unlinkOutline"></ion-icon>
    <ion-icon v-else-if="model.$error" :icon="entryStates.alertCircleOutline" color="danger"></ion-icon>
    <ion-icon v-else :icon="entryStates.linkOutline"></ion-icon>
    {{ label }}
  </ion-label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { unlinkOutline, linkOutline, alertCircleOutline } from 'ionicons/icons';

const entryStates = {
  unlinkOutline,
  linkOutline,
  alertCircleOutline
};

export default defineComponent({
  name: 'MyForm',
  props: {
    model: { type: Object, required: true },
    label: { type: String, required: true }
  },
  components: {
  },
  setup() {
    return {
      entryStates,
    };
  }
});
</script>

<style>
form ion-label ion-icon {
  vertical-align: bottom;
}
</style>