<template>
<div class="wrapper">

  <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__wobble" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
  </div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
   <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
  <RouterView/>
  </div>
   <!-- Main Footer -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io"></a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.2.0
    </div>
  </footer>
</div>
<!-- ./wrapper -->
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";
export default {
  components:{
    Navbar,
    Sidebar
  },
  data() {
    return {
      errors:[],
      dataSave:false,
      data: {
        fname: "",
        sname: "",
        email: "",
        course: [
          {
            name: "",
            pri: "",
          },
        ],
      },
      subjects: [
        { name: "English", prority: "First" },
        { name: "Math", prority: "Second" },
        { name: "Physics", prority: "Third" },
      ],
    };
  },
  methods: {
    addItem() {
          
      this.data.course.push(
         {
            name: "",
            pri: "",
          }
      );
    },
    removeItem(index) {
      this.data.course.splice(index, 1);
    },
    save() {
       axios.post('http://127.0.0.1:8000/api/store',this.data)
       .then(res=>{
         console.log(res);
         this.dataSave=true;
        })
       .catch(err=>{ 
         this.errors=err.response.data.errors;
         console.log(this.errors);
       })
    },
  },
};
</script>