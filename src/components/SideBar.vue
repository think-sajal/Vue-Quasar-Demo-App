<template>
  <q-drawer
    v-model="drawer"
    bordered
    show-if-above
    :width="300"
    :breakpoint="400"
  >
    <div class="profile">
      <q-avatar size="56px" class="inline-block avatar">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      <div class="user-name">
        <span class="text-white"> {{ this.user.name }}</span>
        <hr />
        <span class="text-white">{{ this.user.email }}</span>
        <hr />
        <q-btn
          class="actions"
          bordered
          square
          color="blue"
          size="sm"
          icon="person"
        />
        <q-btn
          class="actions"
          bordered
          square
          color="blue"
          size="sm"
          icon="lock"
        />
        <q-btn
          class="actions"
          bordered
          square
          color="blue"
          size="sm"
          icon="exit_to_app"
        />
      </div>
    </div>

    <q-list bordered separator padding>
      <q-item active clickable v-ripple>
        <router-link class="list" :to="{ path: '/' }">DashBoard</router-link>
      </q-item>
      <q-item active clickable v-ripple>
        <router-link class="list" :to="{ path: '/form' }">Forms</router-link>
      </q-item>
      <q-item active clickable v-ripple>
        <router-link
          class="list"
          :to="{ path: '/about'}"
          >Pages</router-link
        >
      </q-item>
    </q-list>
  </q-drawer>
</template>
  <script>
export default {
  name: "SideBar",
  data() {
    return {
      user: {
        photo: "",
        userId: "123",
        name: "User First Name",
        lastName: "User Last Name",
        email: "user.name@thinkitive.com",
      },
    };
  },
};
</script>
  <style scoped>
.avatar {
  padding: 20px;
}
.profile {
  height: 140px;
  background-color: #009688;
}
.user-name {
  left: 105px;
  bottom: 45px;
  position: relative;
  width: 159px;
}
.actions {
  margin: 1px;
}
.list {
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
  font-weight: 550;
  line-height: 40px;
  padding-left: 16px;
  width: 100%;
  text-decoration: underline;
}
</style>
  