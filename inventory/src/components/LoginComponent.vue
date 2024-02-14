<script>
import { mapMutations } from "vuex";
export default {
    data: () => {
        return {
            email: "",
            password: "",
        };  
    },
    methods: {
        ...mapMutations(["setUser", "setToken"]),
        async login(e) {
            e.preventDefault();
            try {
                const response = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password,
                    }),
                });
                const { user, token } = await response.json();
                this.setUser(user);
                this.setToken(token);
                window.localStorage.setItem("token", JSON.stringify(token));
                window.location.assign("/");
            } catch (error) {
                console.error("Error:", error);
                // Handle error, show message, etc.
            }
        },
    }   
};
</script>

<template>
    <div class="login dshadow">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" name="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" id="password" name="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style>
    main {
        height: 100vh;
        width: 100vw;
        background-color: #f9ffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login {
        background-color: white;
        width: 20vw;
        padding: 3rem 3rem;
        border-radius: 12px;
    }
    h1 {
        font-weight: bold;
        margin-bottom: 1rem;
        font-size:38px;
    }
    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }
    label {
        font-size: 13px;
        font-weight: 500;
    }
    input {
        height: 40px;
        padding: 1rem 0;
        padding-inline-start: 7px;
        font-size: 18px;
    }
    button {
        margin-top: 1rem;
        width: 100%;
        height: 40px;
        border: none;
        background-color: var(--vt-c-blue);
        color: white;
    }
</style>