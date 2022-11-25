<div class="flex items-center justify-center bg-cover bg-center font-bold {cEl}" style={image ? `background-image:url(${image.url})` : ''}>
  <div class="relative p-40 text-white text-center uppercase tracking-widest">
    <div class="splash absolute inset-0 bg-primary-500" />
    <h1 class="my-2 relative text-7xl max-w-2xl">{t}</h1>
    <h2 class="relative text-xs">{subtitle}</h2>
  </div>
</div>

<script lang="ts">
  import type {HeroData} from '$lib/data';
  
  // PROPS =================================================================================================================================
  let cEl = '';
  export {cEl as class};
  export let data: HeroData;

  // VARS ==================================================================================================================================
  $: ({image, subtitle, title} = data ?? {});
  $: t = title === 'Accueil' ? 'Traditions Ancestrales' : title;
  //data.menu.items.flatMap(({children, label, to}) => [{label, to}, ...children]).find(({to}) => to === `/${$page.routeId}`)?.label ??
  //data.title;

  // DEBUG =================================================================================================================================
  let debug = false;
  $: if (debug) console.debug('HERO', data);
</script>

<style>
  .splash {
    mask-image: url(/splash.webp);
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
  }
</style>
