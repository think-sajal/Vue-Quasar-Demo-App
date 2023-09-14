<template v-slot:header>
  <q-header elevated class="bg-primary text-white toolbar">
    <q-toolbar>
      <q-toolbar-title class="title"> Admin App </q-toolbar-title>
      <div>
        <q-icon
          class="q-px-md"
          color="white"
          name="fas fa-envelope"
          size="lg"
        />
        <q-icon color="white" name="fas fa-mobile" size="lg" />
        <q-icon class="q-px-sm" color="white" name="fab fa-github" size="lg" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<style>
</style>

<script>
export default {
  name: "ToolBar",
};
</script>

<style scoped>
.toolbar {
  min-height: 60px;
}
.title {
  padding-top: 14px;
}
</style>
