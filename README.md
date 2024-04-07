# What is this?

A simple dismissable cookie banner web component.

<img width="1075" alt="image" src="https://github.com/akmur/basic-cookie-banner/assets/957841/b0257f8a-add1-4dfa-9b93-dbc7f2c41db4">

# How to use it

Include the file cookie-banner.js

```
<script src="path/to/cookie-banner.js" defer></script>
```

Then you can use the component as follows:

```
<cookie-banner 
  message="Your custom message"
  link="https://link-to-your-privacy-policy" 
  link-text="Privacy Policy"
  button-text="Ok"
  button-color="#d8348a"
>
</cookie-banner>
```

You can customize:
- message: Message to be shown in your banner. Defaults to "We're using cookies."
- link: Link to the privacy policy. Defaults to "#"
- link-text: Text of the Privacy Policy link. Defaults to "Privacy Policy"
- button-text: Text of the button. Defaults to "Ok"
- button-color: Color of the button. Defaults to "#4a4a4a"
