<script setup>
import { useTheme } from 'vuetify'
const form = ref({
  email: '',
  password: '',
  remember: false,
})

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <!-- eslint-disable vue/no-v-html -->
        <div class="d-flex">
          <img
            src="../../../public/logo.png"
            alt="Logo"
            width="100"
          />
        </div>
      </VCardItem>

      <VCardText class="pt-2">
        <h4 class="text-h4 mb-1">Restablecer contraseña Suga!</h4>
        <p class="mb-0">Le enviaremos un correo para restablecer su contrasena</p>
      </VCardText>

      <VCardText>
        <v-form
          ref="form"
          validate-on="Enviar lazy"
          @submit.prevent="Enviar"
        >
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Correo"
                placeholder="example@example.com"
                autocomplete="email"
              />
            </VCol>

            <VCol cols="12">
              <VBtn
                block
                type="submit"
                @click="Enviar"
                color="#fc7323"
              >
                Enviar
              </VBtn>
            </VCol>
          </VRow>
        </v-form>
      </VCardText>
    </VCard>

    <!-- bg img -->
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    API: process.env.VUE_APP_API,
    loading: false,
    email: '',
    emailRules: [
      value => !!value || 'E-mail is required.',
      value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
    ],
  }),
  methods: {
    async Enviar() {
      try {
        const response = await axios.post('http://localhost:3000/usuarios/recuperar-contrasena', { email: this.email })

        this.$notify({ text: response.data.message, type: 'success' }) // Cambia el tipo según sea necesario;
      } catch (error) {
        console.error('Error al obtener los roles:', error)
      }
    },
  },
}
</script>
