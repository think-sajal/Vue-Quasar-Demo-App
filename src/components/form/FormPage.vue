<template>
  <q-layout view="hHh Lpr lff">
    <ToolBar />
    <SideBar />
    <q-page-container>
      <div class="q-pa-md q-gutter-sm text-right">
        <q-btn
          label="Write your review"
          color="primary"
          @click="card = true"
        ></q-btn>
        <q-dialog v-model="card">
          <q-card class="q-pa-lg">
            <q-form>
              <q-card-section>
                <div class="text-h6">Review form</div>
                <div class="text-subtitle1">
                  Fill out the following form to mark your review
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section class="column q-gutter-md">
                <q-input label="Name *"></q-input>
                <q-input label="Email *"></q-input>
                <q-input label="Phone" fill-mask></q-input>
                <q-input label="Write your review here "></q-input>
                <div class="password-criteria q-pa-sm">
                  <div class="text-subtitle2 q-mb-sm"></div>
                  <div>
                    <q-icon name="cancel" color="negative"></q-icon>
                    Review must contain atleast 120 words.
                  </div>
                  <div>
                    <q-icon name="cancel" color="negative"></q-icon>
                    Revies should not be greater than 300 word.
                  </div>
                </div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn flat type="cancel">Cancel</q-btn>
                <q-btn color="primary" type="submit">Submit</q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
      </div>
      <!-- <q-page class="q-pa-sm"> -->
      <div class="q-pa-md">
        <q-table title="Reviews" :rows="rows" row-key="name" flat bordered>
        </q-table>
      </div>
      <!-- </q-page> -->
    </q-page-container>
  </q-layout>
</template>
    
<script>
import ToolBar from "../ToolBar.vue";
import SideBar from "../SideBar.vue";
import { ref } from "vue";

export default {
  name: "FormPage",
  data() {
    return {
      card: ref(false),
      rows: [
        {
          name: "Person 1",
          email: "Person.1@thinkitive.com",
          phone: 918124556,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 2",
          email: "Person.2@thinkitive.com",
          phone: 18125545,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 3",
          email: "Person.3@thinkitive.com",
          phone: 9145451250,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 4",
          email: "Person.4@thinkitive.com",
          phone: 91814725,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 5",
          email: "Person.5@thinkitive.com",
          phone: 91771250,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 6",
          email: "Person.6@thinkitive.com",
          phone: 9184545125,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 7",
          email: "Person.7@thinkitive.com",
          phone: 918125,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 8",
          email: "Person.8@thinkitive.com",
          phone: 918125,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 9",
          email: "Person.9@thinkitive.com",
          phone: 9181250,
          review: "This is a demo project of vue using quasar Framework",
        },
        {
          name: "Person 10",
          email: "Person.10@thinkitive.com",
          phone: 9181250,
          review: "This is a demo project of vue using quasar Framework",
        },
      ],
    };
  },
  components: {
    ToolBar,
    SideBar,
  },
};
</script>
    