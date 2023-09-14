<template>
  <q-layout view="hHh Lpr lff">
    <ToolBar />
    <SideBar />
    <q-page-container>
      <DashBoard>
        <router-view></router-view>
      </DashBoard>
    </q-page-container>
  </q-layout>
</template>
  
<script>

import ToolBar from "./ToolBar.vue";
import SideBar from "./SideBar.vue";
import DashBoard from "./dashBoard/DashBoard.vue";

export default {
  name: "HomePage",
  components: {
    ToolBar,
    SideBar,
    DashBoard,
  },
};
</script>
  