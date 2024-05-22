<script lang="ts" ?>
    import type { User } from "../types";

    export let user: User;
</script>

<article>
    <header>{user.firstName} {user.lastName}</header>
    I hail from {user.address.city}, {user.address.state}
    <footer>{user.ip}</footer>
</article>
