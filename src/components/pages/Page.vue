<template>
  <q-layout view="hHh Lpr lff">
    <ToolBar />
    <SideBar />
    <q-page-container>
      <q-page>
        <div class="col q-col-gutter-sm q-ma-xs">
          <q-card flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h5 q-mt-sm q-mb-xs text-center">
                  User Name
                </div>
                <q-card-section class="col-2">
                  <q-img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-card-section>
                <div class="text-caption text-grey">
                  <h7
                    >Developer at Thinkitive technologies. Having a one year of
                    total expiriance</h7
                  >
                </div>
              </q-card-section>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-toolbar-title
                >This is a demo project of VueJs using quasar framework.
              </q-toolbar-title>
            </q-card-section>
          </q-card>
        </div>
        <div class="row-lg-6 row-md-6 row-sm-12 row-xs-12">
          <q-card>
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input filled v-model="data.first_name" label="First Name" />
                <q-input filled v-model="data.last_name" label="Last Name" />
                <q-input filled v-model="data.userId" label="user Id" />
                <q-input filled v-model="data.email" label="Email" />
                <q-input filled v-model="data.phone" label="Phone" />
                <div>
                  <q-btn label="Update" type="submit" color="primary" />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
      
  <script>
import ToolBar from "../ToolBar.vue";
import SideBar from "../SideBar.vue";

export default {
  name: "AboutPage",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: {
        first_name: "User First Name",
        last_name: "User Last Name",
        userId: 123,
        email: "user.name@thinkitive.com",
        phone: "96******12",
      },
    };
  },
  components: {
    ToolBar,
    SideBar,
  },
};
</script>
      