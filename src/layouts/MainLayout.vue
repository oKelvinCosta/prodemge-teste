<template>
  <q-layout view="hHh Lpr lFf">
    <q-header reveal bordered class="bg-white">
      <q-toolbar>
        <!-- Hamburguer -->
        <q-btn
          flat
          dense
          round
          color="secondary"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <!-- Hamburguer -->

        <!-- Logo Prodemge -->
        <q-toolbar-title class="row items-center no-wrap">
          <img
            class="logo_prodemge"
            src="/img/logo_prodemge.png"
            alt="logo_prodemge"
          />
        </q-toolbar-title>
        <!-- Logo Prodemge -->

        <!-- Area da direita -->
        <div class="q-gutter-sm row items-center no-wrap">
          <!-- Notificações -->
          <q-btn round dense flat color="secondary" icon="notifications">
            <q-badge color="primary" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section> Notificação #1</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section> Notificação #2</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <!-- Notificações -->
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="/img/perfil.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section> Perfil</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section> Deslogar</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <!-- Area da direita -->
      </q-toolbar>
    </q-header>

    <!-- MENU LATERAL -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-white"
      :width="270"
    >
      <q-list>
        <q-item-label header></q-item-label>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <!-- fim MENU LATERAL -->

    <q-page-container>
      <div class="q-pt-md q-pl-xl q-pr-xl main-container">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Contratos",
    caption: "",
    icon: "description",
    link: "",
  },
  {
    title: "Documentação",
    caption: "",
    icon: "code",
    link: "",
  },
  {
    title: "Ajuda",
    caption: "",
    icon: "help",
    link: "",
  },

];

const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
