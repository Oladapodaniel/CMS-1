<template>
  <div>
    <div class="container">
      <div class="row mt-4" style="margin-top: 10px">
        <div class="col-md-12 d-flex">
          <a class="p-2 mx-1 page-btn rounded-circle" @click="getPageContent(+currentPage - 1)"
            ><i class="fa fa-angle-left"></i>
          </a>
          <a
            class="p-2 mx-1 page-btn rounded-circle"
            :class="{ 'primary-bg text-white': i === currentPage}"
            v-for="i in 10"
            :key="i"
            @click="getPageContent(i)"
            >{{ i }}</a
          >
          <a class="p-2 mx-1 page-btn rounded-circle" @click="getPageContent(+currentPage + 1)"
            ><i class="fa fa-angle-right"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ "itemsCount", "currentPage" ],

  data() {
    return {
      test: "",
    };
  },

  methods: {
    getPageContent(page) {
      if (page < 1) return false;
      this.$emit("getcontent", page);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.page-btn {
  display: flex;
  height: 30px;
  width: 30px;
  border: 1px solid #8898aa80;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}

.page-btn:hover {
  cursor: pointer;
}
</style>