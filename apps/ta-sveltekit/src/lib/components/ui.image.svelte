<div class="relative mb-4 ml-4 {cEl}">
  {#if border}<div class="absolute inset-0 {right ? 'translate-x-10' : '-translate-x-10'} translate-y-10 {cBorderImage} {cBorder}" />{/if}
  <img alt="" src={image.url} class="relative shadow {cImg}" />
</div>

<script lang="ts">
  import type {Image} from '$lib/data';
  import type {Opt} from '@niama/core';

  // PROPS =================================================================================================================================
  export let border: Opt<number> = undefined;
  export let image: Image;
  export let right = false;

  // STYLES ================================================================================================================================
  let [cBorder, cEl, cImg] = ['', '', ''];
  export {cBorder, cEl as class, cImg};
  $: cBorderImageSource = border === 1 ? '[border-image-source:url(/deco1.png)]' : '[border-image-source:url(/deco2.png)]';
  $: cBorderImage = `[border-image-repeat:round] [border-image-slice:60_fill] [border-image-width:60px] ${cBorderImageSource}`;
</script>
