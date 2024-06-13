<template>
    <div>
        <h1>Contact</h1>
        <div class="alert alert-success" role="alert" v-if="success">
            Messagge sent!
        </div>
        <div class="row">
            <form @submit.prevent="sendForm()" class="col-12 col-lg-6 text-start">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control border-0 border-bottom" id="name" v-model="name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control border-0 border-bottom" id="email" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control border-0 border-bottom" id="message" rows="3" v-model="message">
                        {{ message }}
                    </textarea>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="loading">
                    {{ loading ? 'Sending...' : 'Send'}}
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

    export default {
        name: "ContactComponent",
        data() {
            return {
                store,
                name: '',
                email: '',
                message: '',
                errors: {},
                success: false,
                loading: false
            }
        },
        methods: {
            sendForm() {
                this.success = false;
                this.loading = true;
                const data = {
                    name: this.name,
                    address: this.email,
                    message: this.message
                };
                axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response) => {
                    console.log(response.data);
                    this.success = true;
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }).catch((error) => {
                    this.errors = error.response.data;
                }).finally(() => {
                    this.loading = false;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>