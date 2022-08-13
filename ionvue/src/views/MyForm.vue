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
      <form>
        <ion-list lines="full" class="ion-no-margin">
          <ion-list-header lines="full">
            <ion-label>My Form with Inputs</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label position="stacked">ชื่อ</ion-label>
            <ion-input v-model="model.firstName.$model" placeholder="ชื่อจริง เช่น ธีรชัย"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">นามสกุล</ion-label>
            <ion-input v-model="model.lastName.$model" placeholder="นามสกุล เช่น หลาวทอง"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">email</ion-label>
            <ion-input v-model="model.email.$model" placeholder="อีเมล์ เช่น teeralao@yourmail.com"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">ที่อยู่</ion-label>
            <ion-textarea v-model="model.address.$model" placeholder="ใส่ที่อยู่ เช่น 22/33 ซอยถี่ยิบ"></ion-textarea>
          </ion-item>
        </ion-list>
        <section>
          <ion-button color="success">OK</ion-button>
          <ion-button color="danger">Cancel</ion-button>
        </section>
      </form>
      <pre>{{ formData }}</pre>
      <br />
      <hr />
      <pre>{{ model }}</pre>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { IonInput, IonTextarea } from '@ionic/vue';

import MyFormData from '../models/MyFormData';

const formData = reactive(new MyFormData());

export default defineComponent({
  name: 'MyForm',
  components: {
    IonInput,
    IonTextarea
  },
  setup() {
    const model = formData.toValidator();

    return {
      formData,
      model,
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
</style>
