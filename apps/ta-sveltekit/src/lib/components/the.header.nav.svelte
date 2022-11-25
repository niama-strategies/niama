{#if children.length > 0}
  <span class="relative">
    <button use:menu={{menu: label}} class={cNav}>
      {label}
    </button>
    <nav class="list-nav card" data-menu={label}>
      <ul>
        {#each children as { label, to: href }}<li><a {href}>{label}</a></li>{/each}
      </ul>
    </nav>
  </span>
{:else}<a {href} class={cNav}>{label}</a>{/if}

<script lang="ts">
  import type {Nav} from '$lib/data';
  import {menu} from '@brainandbones/skeleton';
  import {scrolled} from '../../routes/stores';

  // PROPS =================================================================================================================================
  export let nav: Nav;

  // VARS ==================================================================================================================================
  $: ({children, label, to: href} = nav);
  $: cNav = `btn font-bold !text-xs !py-2 uppercase ${$scrolled ? '' : 'text-white'}`;
</script>
