<style>
/* CSS truncated for brevity */
</style>
<template>
    <table>
        <thead>
            <tr>
                <th v-for="key in columns" @click="sortBy(key)" :class="{active: sortKey == key}">
                    {{key | capitalize}}
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in data | orderBy sortKey sortOrders[sortKey]">
                <td v-for="key in columns" v-on:click="rowClick(entry)">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
module.exports = {
    props: {
        data: Array,
        columns: Array
    },
    data: function() {
        var sortOrders = {}
        this.columns.forEach(function(key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    methods: {
        sortBy: function(key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        },
        rowClick: function(row){
          this.$dispatch('onRecruiterDetail', row);
        }
    }
}
</script>