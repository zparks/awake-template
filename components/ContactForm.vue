<template>
  <div class="content column is-three-fifths is-offset-one-fifth">
    <div class="box">
      <h2 style="text-align:center">Contact Us</h2>
      <p style="text-align:center">
        Submit the form below or email us at
        <a href="mailto: support@gymbet.app">support@gymbet.app</a>.
      </p>
      <form name="contact" method="POST" data-netlify="true">
        <!-- Name -->
        <div class="field">
          <label class="label is-medium">Name</label>
          <div class="control has-icons-left">
            <input
              class="input is-medium"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <span class="icon is-small is-left">
              <font-awesome-icon icon="user" />
            </span>
          </div>
        </div>
        <!-- Email -->
        <div class="field">
          <label class="label is-medium">Email</label>
          <div class="control has-icons-left">
            <input
              class="input is-medium"
              type="email"
              placeholder="you@email.com"
              name="email"
            />
            <span class="icon is-small is-left">
              <font-awesome-icon icon="envelope" />
            </span>
          </div>
        </div>
        <!-- Subject -->
        <!-- <div class="field">
        <label class="label is-medium">Subject</label>
        <div class="control has-icons-left">
          <input
            class="input is-medium"
            type="text"
            placeholder="Brief Summary"
          />
          <span class="icon is-small is-left">
            <font-awesome-icon icon="briefcase" />
          </span>
        </div>
      </div> -->
        <!-- Message -->
        <div class="field">
          <label class="label is-medium">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Detailed description of your comment, request, or question"
              rows="8"
              name="message"
            ></textarea>
          </div>
        </div>
        <div class="control">
          <button type="submit" class="button is-primary">
            Contact Us
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
