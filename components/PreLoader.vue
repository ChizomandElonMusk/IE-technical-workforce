<template>
  <div class="preloader-overlay">
    <div class="preloader-wrapper big active"> <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreloaderOverlay"
}
</script>

<style scoped>
.preloader-overlay {
  /* Positioning: Fixed covers the whole screen regardless of scroll */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* Dark Transparency */
  background-color: rgba(0, 0, 0, 0.6); /* 0.6 is the opacity of the black */
  
  /* Centering the spinner */
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Stacking: Ensure it is above all other elements */
  z-index: 9999;
}
</style>