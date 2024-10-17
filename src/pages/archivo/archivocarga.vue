<template>
    <div>
        <listprograma
        @selprograma="selprograma"></listprograma>
        <listcompetprogra
         class="mt-5"
         :competencias="competencias"
         @selcompetencia="selcompetencia">
        </listcompetprogra>
        <listresult
         :programa="programa"
         :competencia="competencia"
         @selresultado="selresultado"></listresult>
         <v-row v-if="!carga">
            <v-col
             cols="12">
             
                <v-btn block  @click="openWidget">Subir Archivo</v-btn>
             
            </v-col>
         </v-row>
     
         <v-table theme="dark">
            <thead>
              <tr>
                <th class="text-left">
                  Nombre
                </th>
                <th class="text-left">
                  Tamaño Kb
                </th>
              </tr>
            </thead>
            <tbody>
              <tr             
              >
                <td>{{ this.paquete.name }}</td>
                <td>{{ this.paquete.tamano }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-row class="mt-3">
            <v-col
             cols="6">
               <v-btn block  color="#16B1FF" @click="guardar()">GUARDAR DATOS</v-btn>
             </v-col>
             <v-col
             cols="6">
               <v-btn block  color="#DDB1FF" @click="cancelar()">CANCELAR</v-btn>
             </v-col>
         </v-row>
         <v-row>
            <v-col
            cols="12"
            >
              <listarchivoresultado
               :idresultado="resultado"
               :actualizar="carga"
              ></listarchivoresultado>          
            </v-col>
         </v-row>
         <LoaderCarga
         :dialog="dialog"
         ></LoaderCarga>
    </div>
  </template>
  
  <script>
  import listcompetprogra from '@/views/user-interface/listas/listcompet_programa.vue';
import listprograma from '@/views/user-interface/listas/listprogramas.vue';
import listresult from '@/views/user-interface/listas/listresultprogcompt.vue';
import axios from 'axios';
import listarchivoresultado from './listarchivoresultado.vue';
  export default {
    components: { listprograma, listcompetprogra, listresult, listarchivoresultado},
    data() {
      return {
        paquete : {
          url : '',
          tamano  : 0,
          name : '',
          publicid : null
        },
        competencias: [],
        competencia : null,
        programa : null,
        resultado : null,
        carga : false,
        dialog : false,
      };
    },
    methods: {
       async  guardar(){
             if ((this.competencia != null) && (this.programa != null) && (this.resultado != null) && (this.carga) && (this.paquete.publicid != null))
                {
                  this.dialog = true
                  const response = await axios.post(`http://localhost:3000/archivo/${this.resultado}`, this.paquete );
                  this.$notify({text: 'Guia de aprendizaje cargada con éxito...',
                  type: 'success'})
                  this.dialog = false
                  this.paquete.url = ''; // URL de la imagen subida
                  this.paquete.name =''
                  this.paquete.tamano = 0
                  this.paquete.publicid = ''
                  this.carga = false

                }
             else
               {
                this.$notify({text: 'Faltan datos...',
                type: 'error'})
               }   
        },

        selresultado(resul){
            if (resul){
                this.resultado = resul.id
             
            }
               
        },
        selprograma(prog){
          this.programa = prog.id
          this.competencias = prog.competencias
        },

        selcompetencia(compt){
            console.log(compt)
            if (compt != null)
               this.competencia = compt.id
         
        },

      openWidget() {
        let vm = this
        const myWidget = cloudinary.createUploadWidget(
          {
            cloudName: 'dsdfju4il',
            uploadPreset: 'guiassena',
            resourceType: 'raw',
            access_mode: 'public'
          },
          (error, result) => {
            if (!error && result && result.event === 'success') {
              vm.paquete.url = result.info.secure_url; // URL de la imagen subida
              vm.paquete.name =result.info.original_filename
              vm.paquete.tamano = Math.round(result.info.bytes / 1024)
              vm.paquete.publicid = result.info.public_id
              vm.carga = true
              console.log('Archivo subido con éxito: ', result.info);
            }
          }
        );
        if ((this.programa != null) && (this.competencia != null) && (this.resultado != null))
           myWidget.open();
        else
         {
            this.$notify({text: 'Faltan datos...',
            type: 'error'})
         }
      },
    },
  };
  </script>
  
  <style>
  /* Agrega estilos si es necesario */
  </style>
