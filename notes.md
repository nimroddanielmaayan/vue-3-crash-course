# Vue 3 Crash Course

## Vue Introduction

- React, Angular, and Vue are the three most popular front-end frameworks. They
  all do more or less the same things, but in different ways and with different
  approaches

- Vue uses SFCs (Single File Components), which have a `.vue` extension. They
  contain HTML, CSS, and JavaScript

- The entry point in Vue is the `main.js` file

- Vue is more similar to HTML than React is. It uses HTML tags, etc

### Vue Components

- The `App.vue` file is the root component. It contains the header, footer and
  main content

- Every component can have a `script` (JS), `template` (HTML), and `style` (CSS)
  section, usually in this order. Any of these sections can be omitted except
  for the `template` section

- Every Vue component goes through 3 basic lifecycle stages: `created`,
  `mounted`, and `destroyed`

- The `<script setup>` tag in some of the Vue files is actually a combinatin of
  a tag and an attribute (like in regular HTML). This is syntactic sugar that
  sets up the component without having to use a setup() function, like it was
  done before Vue 3. It uses the Vue composition API under the hood to implement
  the `created` part of the component lifecycle

- The View docs have a good diagram of the component lifecycle. This diagram
  will be an important resource when working with advanced Vue development

- Props: Vue has props, just like React

- Template slots: a way to pass content from a parent component to a child
  component. The child component has a `<slot>` tag, and the parent component
  has the content that will be passed to the child component. The content can be
  anything, including other components

### Vue Router

- The basic Vue router setup is pretty simple. Inside the router, there is an
  index.js file that contains an array of routes, each with a path and a
  component. The router needs to be registered in the main.js file

### Vue Views

- Unlike React, Vue has a `views` folder, which contains the views of the
  application. The views aren't components themselves, but they contain the
  components. Vues in Vue are a unique entity

- The main differnce between a view and a component is that a view is a page
  that is rendered, while a component is a reusable piece of code that has to be
  placed inside a view. Besides that, they are pretty much the same thing
