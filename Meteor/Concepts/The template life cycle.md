## The template life cycle

![](https://lh3.googleusercontent.com/q65nNey3ZmJfUkUv7xadPfZeEeNYMzsY9h5SS8SInhn4yqjIe-0LtsoGBqzoP2bSDlU69akf2EgOEpclAqlpPe6jVcz6Ng5vWi5rnD5WMBIm23cxD-FTjRcPinGR_qH28UiOJphxQQPQl6ltDG0_QzJOip_4UpgyDZppOXoHg2tKh4Irjnsue3vth9rJS6dScd0ofPXp9fmvuNBNczyfzNrgZb-mhU7h3ntLW9wkIRhaBWkC35vUzGpJa0nDo3wGy6r5fJACaUw4uP1iN9H3LFBRd83HHRQXvF_lMkwosSBEYfb17p-7oOcEPmsekRWmSnWCUm4AoGjLhVTVCO6phfnJp8U6QkXRaPKSDo6MjNfWaR_bZ7QTF9ydL6QkbeLeKHq0D5cQJrM1hmdo2y9ggt8UgdPXKOmOtNMgic8_275twyVZP75eHk92MRsEPCMYnlx_eVTnVhEV722TagJ1GV6-O0hi1UQDOOshAwMdutgaAlYbDekBx3edg3W8zyGRl50OfixXiwjwpe9CwiEpStty-RNEHKJTKCLswg6khauhDHYT1hM7qGk5R7Nvydxa25zF=w1086-h320-no)

### onCreated

The first step when inserting a template into the DOM is called created. Although the actual template isn’t visible yet, the template instance is already accessible.

The associated callback `onCreated` is especially useful if you want to initially create some properties for the template instance before it’s rendered and visible to the user.

All properties that you set in the `onCreated` callback are available in the other life-cycle callbacks as well.

You can even use them in your helpers and event handlers. To access a template instance from within a helper or event handler, use `Template.instance()`.

### onRendered

The second state for a template is called rendered. The associated `onRendered` callback is used to initiate objects that are inside the DOM already.

Typical examples are jQuery plug-ins like datepickers, calendars, or datetables.

They require a rendered DOM element, so they’re initiated in the `onRendered` callback.

```js
Template.formTemplate.onRendered(function() {
  var templateInstance = this;
  templateInstance.$('.dateinput').datepicker({
    // additional options
  });
});
```

Here we extend all elements inside the formTemplate that have a `.dateinput` class with a datepicker.

### onDestroyed

The third callback, `onDestroyed`, is used to clean up anything that you set up during the lifetime of a template.

After it executes, the template instance is neither visible nor accessible anymore.

All three callbacks are just executed once and won’t be repeated, even if data on the page changes.
