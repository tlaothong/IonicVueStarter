<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>My Form</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <form novalidate @submit.prevent="onSave">
        <ion-list lines="full" class="ion-no-margin">
          <ion-list-header lines="full">
            <ion-label>My Form with Inputs</ion-label>
          </ion-list-header>

          <ion-item>
            <InputState :model="model.firstName" label="ชื่อ" />
            <ion-input v-model="model.firstName.$model" placeholder="ชื่อจริง เช่น ธีรชัย"></ion-input>
          </ion-item>
          <ion-item>
            <InputState :model="model.lastName" label="นามสกุล" />
            <ion-input v-model="model.lastName.$model" placeholder="นามสกุล เช่น หลาวทอง"></ion-input>
          </ion-item>
          <ion-item>
            <InputState :model="model.email" label="email" />
            <ion-input v-model="model.email.$model" placeholder="อีเมล์ เช่น teeralao@yourmail.com"></ion-input>
          </ion-item>
          <ion-item>
            <InputState :model="model.address" label="ที่อยู่" />
            <ion-textarea v-model="model.address.$model" rows="3" auto-grow="true" placeholder="ใส่ที่อยู่ เช่น 22/33 ซอยถี่ยิบ"></ion-textarea>
          </ion-item>
        </ion-list>
        <section>
          <ion-button color="success" type="submit">
            OK
          </ion-button>
          <ion-button color="danger" @click="onCancel">
            Cancel
          </ion-button>
        </section>
      </form>

      <pre>{{ formData }}</pre>
      <br />
      <pre>{{ model }}</pre>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { IonInput, IonTextarea } from '@ionic/vue';

import InputState from '../components/InputState.vue';
import MyFormData from '../models/MyFormData';

const formData = reactive(new MyFormData());
const model = formData.toValidator();

async function onSave() {
 if (await model.value.$validate()) {
  alert('Save!');
 } else {
  alert('Error!');
 }
}

function onCancel() {
  alert('Cancelled!!');
}

export default defineComponent({
  name: 'MyForm',
  components: {
    IonInput,
    IonTextarea,
    InputState,
},
  setup() {
    return {
      formData,
      model,
      onSave,
      onCancel,
    };
  }
});
</script>

<style scoped>
.label-stacked.sc-ion-label-md-h {
  transform: scale(1);
}

form ion-item {
  padding-top: 8px;
}
</style>
