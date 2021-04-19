<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:20"
      >
        <v-text-field
          v-model="user.username"
          :counter="10"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="password"
        rules="required|max:20"
      >
        <v-text-field
          type="password"
          v-model="user.password"
          :error-messages="errors"
          label="Pass"
          required
        ></v-text-field>
      </validation-provider>
      

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
    import { required, email, max, regex } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

    setInteractionMode('eager')


    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })

    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })

    export default {
        components: {
        ValidationProvider,
        ValidationObserver,
        },
        data: () => ({
            user: {
                username: '',
                password: '',
            }
        }),

        methods: {
            async submit () {
                const isValid = this.$refs.observer.validate();
                if (!isValid) {
                    return;
                }
                this.$store.dispatch('currentUser/loginUser', this.user)
            },
        },
    }
</script>