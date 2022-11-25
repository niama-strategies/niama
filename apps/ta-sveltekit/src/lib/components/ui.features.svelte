<dl class="w-full flex flex-wrap p-4 {cElBg} {cEl}">
  {#each items as { key, value }}<div class="mx-4 flex gap-2">
      <dd class="font-bold">{key} :</dd>
      <dt>{value}</dt>
    </div>{/each}
</dl>

<script lang="ts">
  // PROPS =================================================================================================================================
  export let color: 'none' | 'primary' | 'surface' | 'white' = 'none';
  export let items: {key: string; value: string}[];

  // STYLES ================================================================================================================================
  let cEl = '';
  export {cEl as class};
  $: cElBg = color === 'white' ? 'bg-primary-500/25' : 'bg-white/25'; 
</script>
