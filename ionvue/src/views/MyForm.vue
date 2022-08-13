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
            <ion-label position="stacked">
              <ion-icon v-if="!model.firstName.$dirty && !model.firstName.$model" :icon="entryStates.unlinkOutline"></ion-icon>
              <ion-icon v-else-if="model.firstName.$error" :icon="entryStates.alertCircleOutline" color="danger"></ion-icon>
              <ion-icon v-else :icon="entryStates.linkOutline"></ion-icon>
              ชื่อ
            </ion-label>
            <ion-input v-model="model.firstName.$model" placeholder="ชื่อจริง เช่น ธีรชัย"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              <ion-icon v-if="!model.lastName.$dirty" :icon="entryStates.unlinkOutline"></ion-icon>
              <ion-icon v-else-if="model.lastName.$error" :icon="entryStates.alertCircleOutline" color="danger"></ion-icon>
              <ion-icon v-else :icon="entryStates.linkOutline"></ion-icon>
              นามสกุล
            </ion-label>
            <ion-input v-model="model.lastName.$model" placeholder="นามสกุล เช่น หลาวทอง"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              <ion-icon v-if="!model.email.$dirty" :icon="entryStates.unlinkOutline"></ion-icon>
              <ion-icon v-else-if="model.email.$error" :icon="entryStates.alertCircleOutline" color="danger"></ion-icon>
              <ion-icon v-else :icon="entryStates.linkOutline"></ion-icon>
              email
            </ion-label>
            <ion-input v-model="model.email.$model" placeholder="อีเมล์ เช่น teeralao@yourmail.com"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              <ion-icon v-if="!model.address.$dirty && !model.address.$model" :icon="entryStates.unlinkOutline"></ion-icon>
              <ion-icon v-else-if="model.address.$error" :icon="entryStates.alertCircleOutline" color="danger"></ion-icon>
              <ion-icon v-else :icon="entryStates.linkOutline"></ion-icon>
              ที่อยู่
            </ion-label>
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
import { unlinkOutline, linkOutline, alertCircleOutline } from 'ionicons/icons';


import MyFormData from '../models/MyFormData';

const formData = reactive(new MyFormData());
const model = formData.toValidator();

const entryStates = {
  unlinkOutline,
  linkOutline,
  alertCircleOutline
};

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
  },
  setup() {
    return {
      formData,
      model,
      onSave,
      onCancel,
      entryStates,
    };
  }
});
</script>

<style scoped>
/* 
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
*/

#container a {
  text-decoration: none;
}

.label-stacked.sc-ion-label-md-h {
  transform: scale(1);
}

form ion-item {
  padding-top: 8px;
}

form ion-label ion-icon {
  vertical-align: bottom;
}
</style>
