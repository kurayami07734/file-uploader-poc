<script lang="ts" ?>
    import type { User } from "../types";

    export let user: User;
</script>

<article>
    <header>
        <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
    </header>

    <img
        src={user.picture.thumbnail}
        alt={`Photo of ${user.name.first} ${user.name.last}`}
    />
    <footer>
        {user.location.city}, {user.location.state}, {user.location.country}
    </footer>
</article>
