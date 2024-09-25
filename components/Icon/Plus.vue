<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.13 44.13">
    <line class="plus-icon-line" y1="21.48" x2="44.13" y2="21.48"/>
    <line class="plus-icon-line hide" x1="22.06" x2="22.06" y2="44.13"/>
  </svg>
</template>

<style lang="scss" scoped>
  .plus-icon-line {
    fill: none;
    stroke: currentColor;
    stroke-miterlimit: 10;
    stroke-width: 3px;
    transition: .25s ease;
  }

  .nav.open .hide,
  .minus .hide {
    opacity: 0;
  }
</style>