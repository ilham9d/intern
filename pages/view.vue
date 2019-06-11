<template>
  <section>
    <div align="center">
      <div class="fixed-top">
        <b-navbar toggleable="lg" type="dark" variant="primary">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
 
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#" active>Link</b-nav-item>
              <b-nav-item href="#">Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>User</em></template>
                <b-dropdown-item href="#" active>Profile</b-dropdown-item>
                <b-dropdown-item href="#" active>Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <div class="pb-5"></div>
      <div class="pb-5"></div>
      <div class="col-8">
        <b-form-group>
          <b-input-group>
            <b-form-input v-model="searchText" placeholder="Type to Search"></b-form-input>
          </b-input-group>
        </b-form-group>
        
        <b-table
          :items="IDKota"
          :fields="fields"
        >
        </b-table>
      </div>
    </div>
  </section>
</template>

<script>
  import gql from 'graphql-tag';
  import SEARCH_QUERY from '~/graphql/query.gql';

  
  export default {

    data(){
      return{
        fields: [
          {key : 'id', sortable:true},
          {key : 'nama', sortable:true},
          {key : 'kota', sortable:true},
          {key : 'provinsi', sortable:true},
          {key : 'kodepos', sortable:true},
        ],
        searchText:'',
      }
    },
  
    apollo: {
      IDKota: {
        query : SEARCH_QUERY,
        variables() {
          return{
            search: this.searchText,
          }
        },
      },
    },
  }       

</script>