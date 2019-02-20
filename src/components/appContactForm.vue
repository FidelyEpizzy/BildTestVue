<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-7 appFormCol">
          <h4>CONTACT FORM</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum cumque laboriosam nulla commodi inventore.</p>
          <form>
            <div class="form-group col-9">
              <input type="text" placeholder="Name" class="form-control" required>
            </div>
            <div class="form-group col-9">
              <input type="email" placeholder="Mail" class="form-control" required>
            </div>
            <div class="form-group col-9">
              <input type="text" placeholder="Subject" class="form-control">
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="10"
                placeholder="500 characters max"
                v-model="formMail"
                @keyup="alerted()"
              ></textarea>
            </div>
            <p>{{ charsLeft }}</p>
            <button-click
              appButtonValue="Send Message"
              class="appContactSendMessage"
              v-if="lengthOK"
            ></button-click>
          </form>
        </div>

        <div class="offset-1 col-4" id="appContactInfoCol">
          <h4>CONTACT INFO</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, nobis?</p>
          <p>
            <strong>email:</strong> info@display.com
            <br>
            <strong>phone:</strong> 1.306.222.4545
          </p>
          <p>222 2nd Ave South
            <br>Saskabush, SK S7M1T6
          </p>
          <br>
          <h4>STORE HOURS</h4>
          <div>
            <p>Monday-Thursday
              <br>Friday
              <br>Saturday
              <br>Sunday & Holidays
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonClickHere from "./ButtonClickHere.vue";
export default {
  data() {
    return {
      maxCharacters: "10",
      charsLeft: "",
      formMail: "",
      lengthOK: true
    };
  },
  components: {
    buttonClick: ButtonClickHere
  },
  methods: {
    alerted() {
      this.charsLeft =
        this.maxCharacters - this.formMail.length + " characters left";

      if (this.charsLeft < "0") {
        this.lengthOK = false;
        this.charsLeft = "Maximum mail length exceeded";
      } else {
        this.lengthOK = true;
      }
    }
  }
};
</script>

<style scoped>
.form-group {
  padding: 0;
  border: 1px solid grey;
}
.container {
  max-width: 970px;
  color: #8a8888;
  font-size: 0.85rem;
}
.appContactSendMessage {
  margin-bottom: 1em;
}
</style>
