<div class="relative {cEl}" on:mouseover={onMouseover}>
  {#if hover}<iframe
      title="map"
      width="600"
      height="450"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:EjA0NyBSdWUgZGVzIEF2b2NhdGllcnMsIFNhaW50LUxldSA5NzQzNiwgUsOpdW5pb24iMBIuChQKEgmR_zSPSpeCIRHBeCjTpTDdVRAvKhQKEgn1bjGjSpeCIRE12G5tt19GRw&key=AIzaSyAHxbwn2WzKOvwnhlVTU5wATtFSicBPi-A"
      class="absolute top-0 left-0 !w-full !h-full border-0"
    />{/if}
</div>

<script lang="ts">
	// PROPS =================================================================================================================================
	let cEl = '';
	export {cEl as class};

  // VARS ==================================================================================================================================
  let hover = true;

  // EVENTS ================================================================================================================================
  const onMouseover = () => (hover = true);
</script>
