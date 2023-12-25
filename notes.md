# Vue 3 Crash Course

## Vue Introduction

- React, Angular, and Vue are the three most popular front-end frameworks. They
  all do more or less the same things, but in different ways and with different
  approaches

- Vue is arguably easier to learn and use than React. Also, a lot of the
  concepts are similar

- Vue is more similar to HTML than React is. It uses HTML tags, etc

- Vue uses SFCs (Single File Components), which have a `.vue` extension. They
  contain HTML, CSS, and JavaScript

- Recommended VSCode extensions for Vue: `Vue Language Features (Volar)`,
  `TypeScript Vue Plugin (Volar)`, `Vetur`

- The entry point in a Vue application is the `main.js` file

- To create a Vue file template, we can type `vbase` (similar to `rfce` in
  React)

- The `v-something` syntax is a basic concept in Vue, called "directives". They
  are similar to React hooks, but they are used in the template (the HTML), not
  in the script (the JS code). For example: `v-if`, `v-for`, `v-bind`,
  `v-model`, etc

- Vue has props, just like React

- Prop drilling in Vue: Basically the same as in React. Vue 3 uses a built-in
  solution for complex prop drilling called the `provide` \ `inject` pattern
  (somewhat similar to React's context API)

- The `emitter` \ `listener` pattern in Vue is a similar pattern that's used to
  pass data up the component tree. It's similar to using event handlers in React

- Vue has a state management library called Vuex, which is similar to Redux and
  a library valled Pinia, which is another optional state management library

### Vue Components

- The `App.vue` file is the root component. It contains the header, footer and
  main content

- Every component can have a `script` (JS), `template` (HTML), and `style` (CSS)
  section, usually in this order. Any of these sections can be omitted except
  for the `template` section

- Every Vue component goes through 3 basic lifecycle stages: `created`,
  `mounted`, and `destroyed`

- The `<script setup>` tag is actually a combinatin of a tag and an attribute
  (like in regular HTML). This is syntactic sugar that sets up the component
  without having to use a setup() function, like it was done before Vue 3. It
  uses the Vue composition API under the hood to implement the `created` part of
  the component lifecycle

- The official Vue docs have a good diagram of the component lifecycle. This
  diagram will be an important resource when working on advanced Vue development

- State management: State in Vue is also called `data`. State can be managed
  inside the component, or it can be managed globally using a state management
  library

- Template slots: A way to pass content from a parent component to a child
  component. The child component has a `<slot>` tag, and the parent component
  has the content that will be passed to the child component. The content can be
  anything, including other components

- Importing\exporting components: In Vue, there's no need to export components,
  only to import them

### Vue Views

- Unlike React, Vue has a `views` folder, which contains the views of the
  application. The views aren't components themselves, but they contain the
  components. Vues in Vue are a unique entity

- The main differnce between a view and a component is that a view is a page
  that is rendered, while a component is a reusable piece of code that has to be
  placed inside a view. Besides that, they are pretty much the same thing

### Vue Routing

- The default Vue router setup is pretty simple. Inside the router, there is an
  index.js file that contains an array of routes, each with a path and a
  component. The router needs to be registered in the `main.js` file

- The `<router-link>` tag is used to create links to different routes. It is
  similar to the `<Link>` tag in React

### Style and CSS in Vue

- The basic way to add CSS to a Vue component is in it's `<style>` tag, which is
  similar to using a CSS-in-JS in React. This CSS is scoped to the component. If
  we want to add global CSS, we will usually add it to the `App.vue` file's
  `<style>` tag

- In larger projects, we can also create a CSS file in the `assets` folder and
  import it into the `main.js` file

- The `scoped` attribute in the `<style>` tag is used to scope the CSS to the
  component. If omitted, the CSS will be global

### Data\State in Vue

- There are 2 basic methods for creating state in Vue: `ref` and `reactive`

- `ref` can be used to create any primitive state, including a string or a
  number. It actually returns a special object that Vue "unwraps" when
  referenced. So, to reference the value in the component, we need to simply
  reference the returned value. But to reference the value in a console.log, we
  need to use `variableName.value`

- `reactive` is used to create an object state. It's similar to `ref`, but it
  returns a "regular" object that needs to be referenced using
  `variableName.propertyName`, no matter where it's referenced

- Both `ref` and `reactive` can do the exact same things. Some developers even
  like to just choose one, and use it ecclusively across the entire project

- To bind the state to an element, we use the `v-model` directive. This
  directive is similar to the `onChange` event in React

- To reference a state in the template, we need to use the `{{}}` syntax. We can
  also use the `v-bind` directive to bind the state to an HTML attribute
  (`v-bind` is similar to `useState` in React)

### Emitting and Listening to Events

- The `v-on` directive is used to listen to events. It's similar to the
  `onClick` event in React. There's a shorthand for it, which is `@`. For
  exmaple: `@click`

- The defineEmits() function\macro: This function is used to define the events
  that a component can emit. It's similar to the `propTypes` object in React. It
  accepts an array of strings, each string is the name of an event that the
  component can emit. It returns a function that can be used to emit the event.
  This function recieves the name of the event as the first argument, and the
  2nd argument is an object that contains the data\state\payload that will be
  passed to the event listener
