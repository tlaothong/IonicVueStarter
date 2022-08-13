// import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default class MyFormData {
  firstName = '';
  lastName = '';
  email = '';
  address = '';

  get rules() {
    return {
      firstName: { required }, // Matches state.firstName
      lastName: { required }, // Matches state.lastName
      email: { required, email },
      address: { required },
    };
  }

  toValidator() {
    return useVuelidate(this.rules, this);
  }
}