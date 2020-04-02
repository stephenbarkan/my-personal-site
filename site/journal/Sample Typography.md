---
title: Sample Typography
date: 2020-01-02
---

[View on GitHub](https://github.com/tailwindcss/typography)

A plugin that provides a `rich-text` class you can use to add sensible typographic defaults to any vanilla HTML you don't control (like HTML rendered from Markdown, or pulled from a CMS).

```html
<div class="rich-text">
  content
</div>
```

What follows is just a big block of example content designed to dogfood the plugin.

It includes every sensible typographic element I could think of, like **bold text**, unordered lists, ordered lists, code blocks, block quotes, _and even italics_.

It's important to cover all of these use cases for a few reasons:

1. We want everything to look good out of the box.
2. Really just the first reason, that's the whole point of the plugin.

Now we're going to try out a header style.

---

#### Typography should be easy

So that's a header for you — with any luck by the time I'm done writing this plugin that will look pretty reasonable.

Something a wise person once told me about typography is:

> Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.

It's probably important that images look okay here by default as well:

![Someone paying for something at a check out counter](https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

Now I'm going to show you an example of an unordered list to make sure that looks good, too:

- So here is the first item in this list.
- In this example we're keeping the items short.
- Later, we'll use longer, more complex list items.

And that's the end of this section.

#### What if we stack headings?

##### We should make sure that looks good, too.

Sometimes you have headings directly underneath each other. In those cases you have to be careful not to use too much margin, because typically the space you need between a heading and a paragraph is more than you want between two headings.

##### When a heading comes after a paragraph...

When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.

- **I often do this thing where list items have headings.**

  For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.

  I often have two or three paragraphs in these list items too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense.

  Pretty tough honestly.

- **Since this is a list, I need at least two items.**

  I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic.

  That's why I've added this second list item so I actually have something to look at when writing the styles.

- **It's not a bad idea to add a third item either.**

  I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.

  With any luck this will make it even easier for me to get the styles right.

After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.

#### Code should look okay by default.

I think most people are going to use highlight.js or Prism or something if they want to style their code blocks but it wouldn't hurt to make them look _okay_ out of the box, even with no syntax highlighting.

Here's the Tailwind config file for this docs site:

```js
module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('../src/index.js'),
  ],
}
```

Hopefully that looks good enough to you.

##### What about nested lists?

Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it I have to carry the burden of at least making it work.

1. **Nested lists are rarely a good idea.**
    + You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.
    + Nested navigation in UIs is a bad idea too, keep things as flat as possible.
    + Nesting tons of folders in your source code is also not helpful.
2. **Since we need to have more items, here's another one.**
    + I'm not sure if I'll bother styling more than two levels deep.
    + Two is already too much, three is guaranteed to be a bad idea.
    + If you nest four levels deep you belong in prison.
3. **Two items isn't really a list, three is good though.**
    + Again please don't nest lists if you want people to actually read your content.
    + Nobody wants to look at this.
    + I'm upset that I even have to bother styling this.

The most annoying thing about lists in Markdown is that `<li>` elements aren't given a child `<p>` tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.

- **For example, here's another nested list.**

  But this time with a second paragraph.
    - These list items won't have `<p>` tags
    - Because they are only one line each
- **But in this second top-level list item, they will.**

  This is especially annoying because of the spacing on this paragraph.
    - As you can see here, because I've added a second line, this list item now has a `<p>` tag.

      This is the second line I'm talking about by the way.
    - Finally here's another list item so it's more like a list.
- A closing list item, but with no nested list, because why not?

And finally a sentence to close off this section.

#### There are other elements we need to style

I almost forgot to style links, like [this link to the Tailwind CSS website](https://tailwindcss.com). How should those look by default, blue I guess? I dunno.

We also need to make sure inline code looks good, like if I wanted to talk about `<span>` elements or tell you the good news about `@tailwindcss/typography`.

##### Sometimes I even use `code` in headings

Even though it's probably a bad idea, and I tend to have a hard time making it look good.

Another thing I've done in the past is make some code a link, like if I wanted to tell you about [`@tailwindcss/custom-forms`](https://github.com/tailwindcss/custom-forms), a useful plugin for making it easier to style form elements in your Tailwind projects.

###### We haven't used an `h4` yet

But now we have. Please don't use `h5` or `h6` in your content, Medium only supports two heading levels for a reason you animals.

##### We still need to think about stacked headings though.

###### Let's make sure we don't screw that up with `h4` elements, either.

Phew, with any luck we have styled the headings above this text and they look pretty good.

Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.

What I've written here is probably long enough, but adding this final sentence can't hurt.