import VueRouter from "vue-router";

<template>
  <div>
    <s-autocomplete></s-autocomplete>
    <s-customer-input v-model="customerInputValue"></s-customer-input>
    <s-scrollbar></s-scrollbar>
  </div>
</template>
<script>
import SAutocomplete from "@/components/autocomplete";
import SCustomerInput from "@/components/customer-input";
import SScrollbar from "@/components/scrollbar";
export default {
  name: "index",
  data() {
    return {
      customerInputValue: "",
    };
  },
  components: {
    SAutocomplete,
    SCustomerInput,
    SScrollbar,
  },
};
</script>