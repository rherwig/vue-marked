# VueMarked

[![npm version](https://badge.fury.io/js/%40rherwig%2Fvue-marked.svg)](https://badge.fury.io/js/%40rherwig%2Fvue-marked)

VueMarked is an isomorphic and configurable Vue Component that renders Markdown
as HTML. It is based on [marked](https://github.com/markedjs/marked) - one of 
the most popular JavaScript libraries for rendering Markdown.

> At the moment, VueMarked is still under development, so use it at your
> own risk or wait for the first major release.

## Installation
In order to install VueMarked, run the following command inside your NodeJS project.

```bash
$ npm i @hrwg/vue-marked
```

## Usage
Using the component is as simple as importing and registering it into your Vue components
and providing it with your Markdown code using the default slot.

```vue
<template>
    <vue-marked>#Headline</vue-marked>
</template>

<script>
    import VueMarked from 'vue-marked';
    
    export default {
        components: {
            VueMarked,
        },
    };
</script>
```

Please be aware that additional spaces in the Markdown code are not being trimmed.
Inserting your Markdown directly in the slot may lead to unwanted behavior.

## Changelog
This project adheres to [Semantic Versioning](https://semver.org/). 
Please refer to the [CHANGELOG.md](CHANGELOG.md) for detailed changes and
migration instructions.

## License
MIT
