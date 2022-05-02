import { writable } from "svelte/store";

export let menu_visible = writable(true)
// export let jisho1 = writable([]);
export let words1 = writable(false);
export let words2 = writable(false);

