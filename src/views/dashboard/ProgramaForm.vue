<template>
  <VRow>
    <VCol cols="12">
      <formprograma 
      @pguardar="cestado"
      :item="programa"
      @peditar="editado" />

      
    </VCol>

    <VCol cols="12">
       <listprograma
         :estado="estado" 
         @plistado="cestadof"
         @editar="editar"
       
         />
    </VCol>
  </VRow>

   
  
</template>

<script>

import formprograma from '@/views/user-interface/programa/formprograma.vue'
import listprograma from '../user-interface/programa/listprograma.vue';


export default {
  components: { formprograma, listprograma},
  data() {
    return {
      estado : false,
      programa : null,
      show : true,
      codigo : '234'
    };
  },
  methods: {
    cestado(){
      this.estado=true
    },

    cestadof(){
      this.estado=false
    },

    editar(item){
      this.programa=item
    },

    editado(){
      this.estado=true
      this.programa=null
    }
  },
  
 
};
</script>


