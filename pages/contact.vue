<template>
  <section id="contactSection">
    <fieldset>
      <legend>Information</legend>
      <ul>
        <li>Email: {{ $config.email }}</li>
        <li>Secondary email: {{ $config.secondaryEmail }}</li>
      </ul>
      <small>You can also send a message by using form below.</small>
    </fieldset>
    <fieldset>
      <legend>Contact</legend>
      <form id="contactForm" v-on:submit="sendMessage">
        <div class="form-group">
          <label for="_replyto">Email:</label>
          <input
            v-model="email"
            id="_replyto"
            name="_replyto"
            type="email"
            required=""
            minlength="5"
            placeholder="your email address"
          />
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            v-model="message"
            id="message"
            cols="30"
            rows="5"
            name="message"
            placeholder="your message"
          ></textarea>
        </div>
        <div class="form-group">
          <button
            class="btn btn-default"
            type="submit"
            role="button"
            name="submit"
            id="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </fieldset>
  </section>
</template>
<script>
import VxModal from "~/utils/VxModal";
export default {
  name: "Contact",
  data: () => ({
    email: "",
    message: "",
  }),
  methods: {
    sendMessage(e) {
      e.preventDefault();
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!emailRegex.test(this.email)) {
        VxModal.show("Please enter a valid email address.");
      } else {
        const fd = new FormData();
        fd.append("_replyto", this.email);
        fd.append("message", this.message);
        this.$axios
          .post("https://formspree.io/f/mqkwjppn", fd, {
            headers: { accept: " application/json, text/plain, */*" },
          })
          .then(() => {
            VxModal.show(
              "message has been sent, thank you for reaching me, i will get back to you soon as possible."
            );
          });
      }
    },
  },
};
</script>
