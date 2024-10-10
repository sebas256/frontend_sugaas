<template>
    <v-dialog
      v-model="dialog"
      width="auto"
      persistent="true"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        :text="`Esta seguro de borrar : ${mensaje } con codigo : ${codigo}`"
        title="Borrar Programa"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Aceptar"
            @click="procesar()"
          ></v-btn>
          <v-btn
            class="ms-auto"
            text="Cancelar"
            @click="cancelar()"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>
<script>

export default {
    props: {
    active: {
      type: Boolean,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    mensaje: {
      type: String,
      required: true,
    },

    },
  data() {
    return {
        dialog : false
    }
   },
   methods: {
    cancelar(){
       this.$emit('cerrarconfirmation')
    },
    procesar(){
        this.$emit('procesar',this.codigo)
    }
   },
   watch: {
    active(){
        this.dialog = this.active
    }
   },
}
</script>
