import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      intlTelInput
    }
  };
});