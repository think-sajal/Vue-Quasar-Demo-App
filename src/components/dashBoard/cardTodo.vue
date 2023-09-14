<template>
  <q-card class="bg-white">
    <div class="bg-teal q-pa-md text-white">
      {{ cardTitle }}
      <div class="float-right"></div>
    </div>
    <div class="card-content">
      <div class="">
        <div class="list item-inset-delimiter auto">
          <q-infinite-scroll :handler="loadMore" :offset="7">
            <q-virtual-scroll
              type="table"
              style="max-height: 70vh"
              :virtual-scroll-item-size="48"
              :virtual-scroll-sticky-size-start="48"
              :virtual-scroll-sticky-size-end="32"
              :items="todos"
            >
              <template v-slot:before>
                <thead >
                  <tr>
                    <th>Index</th>
                    <th >
                      TODO
                    </th>
                    <th >
                      Completed
                    </th>
                  </tr>
                </thead>
              </template>

              <template v-slot="{ item: index }">
                <tr :key="index" class="text-center">
                  <td   >{{ index }}</td>
                  <td  >This is the data in Demo task.Please add a todo here. This is the data in Demo task.Please add a todo here. </td>
                  <td>
                    <q-toggle
                      class="item-secondary"
                      icon="done"
                      :model-value="true"
                    ></q-toggle>
                  </td>
                </tr>
              </template>
            </q-virtual-scroll>
          </q-infinite-scroll>
        </div>
      </div>
    </div>
  </q-card>
</template>
<script type="text/javascript">
/* eslint-disable */
// import Chart from "chart.js";

export default {
  name: "cardTodo",

  data() {
    return {
      columns: [{ name: "TODO" }, { name: "Completed" }],
      todos: ["1", "2", "3", "4", "5", "6", "7", "8"],
      actualMaxPosition: 10,
    };
  },
  props: ["cardTitle", "api"],
  watch: {},
  computed: {},
  methods: {
    loadMore(index, done) {},
    completeTodo(todo) {},
  },
};
</script>
<style scoped>
input {
  padding: 7px 0;
  font-size: 16px;
}
.completed-line {
  text-decoration: line-through;
}
</style>
