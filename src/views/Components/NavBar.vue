<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
  <div class="container"><a class="navbar-brand" href="#"><img src="../../assets/img/logo1.svg" alt="" width="120" /></a>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto border-bottom border-lg-bottom-0 pt-2 pt-lg-0">
        <li class="nav-item mr-4"> <router-link class="nav-link active active" aria-current="page" :to="{name:'home'}">Home</router-link></li>
        <li class="nav-item mr-4"> <router-link class="nav-link" :to="{name:'services'}">Service</router-link> </li>
        <li class="nav-item mr-4"><a class="nav-link" href="#">Portfolio </a></li>
        <li class="nav-item mr-4"><a class="nav-link" href="#">About</a></li>
        </ul>
    </div>
  </div>        
</nav>
</template>