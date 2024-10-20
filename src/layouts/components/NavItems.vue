<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue';
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'Programa',
      badgeClass: 'bg-error',
      icon: 'ri-home-smile-line',
     
    }"
  >
    
    <VerticalNavLink
      :item="{
        title: 'Crear Programa',
        badgeClass: 'bg-light-primary text-primary',
        to: '/sugas/programa',
      }"
    />
   
  </VerticalNavGroup>

  <VerticalNavGroup
  :item="{
    title: 'Competencia',
    badgeClass: 'bg-error',
    icon: 'ri-home-smile-line',
   
  }"
>

<VerticalNavLink
      :item="{
        title: 'Crear Competencias',
        badgeClass: 'bg-light-primary text-primary',
        to: '/sugas/competencia',
      }"
    />
</VerticalNavGroup>

<VerticalNavGroup
  :item="{
    title: 'Asociacion',
    badgeClass: 'bg-error',
    icon: 'ri-home-smile-line',
   
  }"
>

<VerticalNavLink
      :item="{
        title: 'Crear asocacion',
        badgeClass: 'bg-light-primary text-primary',
        to: '/sugas/programacompetencia',
      }"
    />
</VerticalNavGroup>




  <!-- 👉 Front Pages -->
  <VerticalNavGroup
    :item="{
      title: 'Resultado Aprendizaje',
      icon: 'ri-file-copy-line',
       }"
  >
    <VerticalNavLink
      :item="{
        title: 'Res. Aprendizaje',
        to: '/sugas/resultado_aprendizaje',
       
      }"
    />
    
  </VerticalNavGroup>

  <VerticalNavGroup
    :item="{
      title: 'Cargar Guia',
      icon: 'ri-file-copy-line',
       }"
  >
    <VerticalNavLink
      :item="{
        title: 'Cargar guia',
        to: '/sugas/cargar_archivo',
       
      }"
    />
    
  </VerticalNavGroup>



  

  <VerticalNavLink
    :item="{
      title: 'Account Settings',
      icon: 'ri-user-settings-line',
      to: '/account-settings',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Login',
      icon: 'ri-login-box-line',
      to: '/login',
    }"
  />



  <!-- 👉 Others -->


 
</template>
