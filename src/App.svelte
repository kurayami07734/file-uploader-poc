<script lang="ts">
  import { fetchUser } from "./helpers/fetchUser";
  import UserCard from "./components/UserCard.svelte";
  import type { User } from "./types";
  let users: User[] = [];
  let bound: number | null = 0;

  async function fetchManyUsers() {
    console.time("call");
    let promises = [];
    for (let i = 1; i <= bound!; i++) {
      promises.push(fetchUser(i));
    }

    try {
      users = await Promise.all(promises);
    } catch (e) {
      console.error("Fetch requests failed", e.toString());
    }

    console.timeEnd("call");
  }
</script>

<main class="container">
  <h1>Making concurrent get requests</h1>
  <h4>number of parallel requests : {bound}</h4>
  <input
    type="number"
    name="bound"
    id="bound"
    bind:value={bound}
    aria-label="number of requests"
  />

  <button on:click={fetchManyUsers} disabled={isNaN(Number(bound))}>
    make requests
  </button>

  {#each users as user}
    <UserCard {user} />
  {/each}
</main>
