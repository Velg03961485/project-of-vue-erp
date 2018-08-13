<template>
  <el-transfer v-model="value1" :data="data"></el-transfer>
</template>

<script>
    export default {
        name: "cancel",
      data(){
        const generateData = _ => {
          const data = [];
          for (let i = 1; i <= 15; i++) {
            data.push({
              key: i,
              label: `备选项 ${ i }`,
              disabled: i % 4 === 0
            });
          }
          return data;
        };
        return {
          data: generateData(),
          value1: [1, 4]
        };
      }
    }
</script>

<style scoped>

</style>
