{#if items.length}<UiSection {color} {title} image={item?.image} uri={item?.uri} expanded={!hasSingle} {...$$restProps}>
    {#if hasSingle}<slot name="single" {item} />
    {:else if items?.length > 0}
      <Splide options={{fixedWidth: '24rem', arrows: loop, pagination: false, padding: '1rem', gap: '2rem', focus: 'center', type: loop ? 'loop' : 'slide', width: '100vw'}} class="mx-auto">
        {#each items as item}<slot name="many" {item} />{/each}
      </Splide>
    {/if}
  </UiSection>{/if}

<script lang="ts">
  import {UiSection} from '$lib/components';
  import {Splide} from '@splidejs/svelte-splide';

  // PROPS =================================================================================================================================
  let userTitle: string;
  export let color: 'none' | 'primary' | 'surface' | 'white' = 'none';
  export let items: any[];
  export {userTitle as title};

  // VARS ==================================================================================================================================
  $: hasSingle = items?.length === 1;
  $: loop = items?.length > 4;
  $: title = `${userTitle}${hasSingle ? '' : 's'}`;
  $: item = hasSingle ? items[0] : undefined;
</script>
