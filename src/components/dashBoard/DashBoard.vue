<template>
  <div class="layout-padding">
    <div class="content-header">
      <span class="vertical-bottom content-header-title">DashBoard One</span>
      <hr />
    </div>
    <div class="flex wrap gutter total">
      <div style="width: 30%">
        <cardTotal
          class="card q-pa-xs"
          title="Total Posts"
          background-color="bg-teal-9"
          icon-name="local_post_office"
          :total="totalPosts"
        >
        </cardTotal>
      </div>
      <div style="width: 30%">
        <cardTotal
          class="card q-pa-xs"
          title="Total comments"
          background-color="bg-teal-7"
          icon-name="comment"
          :total="totalComments"
        >
        </cardTotal>
      </div>
      <div style="width: 30%">
        <cardTotal
          class="card q-pa-xs"
          title="Static total"
          background-color="bg-teal-5"
          icon-name="repeat_one"
          :total="50004"
        >
        </cardTotal>
      </div>
    </div>
    <div class="flex wrap gutter q-pa-lg row" style="min-height: 400px">
      <div class="col-4 q-pa-sm q-pr-md">
        <card-chart card-title="Total Graph" :data="dataForGraph"> </card-chart>
      </div>
      <div class="col-8 q-pa-sm q-pr-md">
        <knob-statistics card-title="General statistics"> </knob-statistics>
      </div>
    </div>
    <div class=" text-white text-h6 wrap gutter q-px-xl q-py-md">
      <div class="">
        <card-todo card-title="Generic todos" api="todos"> </card-todo>
      </div>
    </div>
  </div>
</template>
<script>
import cardChart from "./cardChart.vue";
import cardTotal from "./cardTotal.vue";
import cardTodo from "./cardTodo.vue";
import knobStatistics from "./knobStatistics.vue";
export default {
  name: "DashBoard",
  data() {
    return {
      totalPosts: 50,
      totalComments: 150,
      totalTodos: 75,
    };
  },
  computed: {
    dataForGraph() {
      return {
        posts: this.totalPosts,
        todos: this.totalTodos,
        comments: this.totalComments,
      };
    },
  },
  components: {
    cardTotal,
    cardChart,
    cardTodo,
    knobStatistics,
  },
};
</script>
<style scoped>
.total {
  justify-content: space-evenly;
}

.content-header-title {
  font-size: 20px;
  font-weight: 300;
}

.content-header {
  position: relative;
  padding: 1em 4em 1em 4em;
}

.card {
  width: 1/3;
}

.cart-chart {
  width: 100px;
  height: 120%;
}
</style>
