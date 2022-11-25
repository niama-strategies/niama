<SplideSlide slot="many" let:item={{duration, excerpt, image, places, price, title, uri}} class="card shadow-md !bg-white">
  <img src={image.url} alt="" class="flex-none aspect-[3/2] object-cover" />
  <div class="card-body flex flex-col px-8">
    <h4 class="mb-4 font-heading text-2xl first-letter:text-primary-500 first-letter:text-4xl">{title}</h4>
    <UiFeatures
      items={features}
      color="white"
      class="mb-4"
    />
    <UiText value={excerpt} />
    <a href={uri} class="btn btn-base btn-filled-primary self-end mt-8">En savoir plus</a>
  </div>
</SplideSlide>

<script lang="ts">
  import {SplideSlide} from '@splidejs/svelte-splide';
  import {UiText} from '.';

  // PROPS =================================================================================================================================
  export let item: Consultation[];
</script>
