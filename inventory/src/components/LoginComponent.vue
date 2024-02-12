<template>
    <div class="login dshadow">
        <h1>Login</h1>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style>
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