# 🏖️ Holiday time!

<details>
<summary>Cart image</summary>

![localhost_3000_ (1)](https://user-images.githubusercontent.com/1881266/128444562-74513fa4-3719-4a88-a37e-3e9cff37b1e5.png)

</details>


<details>
<summary>Wishlist image</summary>

![localhost_3000_ (2)](https://user-images.githubusercontent.com/1881266/128444637-e361e471-99d8-453a-825a-fe0b02426e4e.png)

</details>

![localhost_3000_](https://user-images.githubusercontent.com/1881266/128444333-30e8deef-6c58-4816-9362-c81d06353579.png)


## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Docker instructions

**Build current project docker image**

```shell
docker build -t iamandrewluca/holiday-time .
```

**Run build image with port 3000 mapped**

```shell
docker run -it -p 3000:3000 iamandrewluca/holiday-time
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Demo points

- [x] TypeScript
- [x] Nuxt with SSR
- [x] Storybook
- [x] Tailwind CSS
- [x] Automated release notes and CHANGELOG
- [x] GitHub Action to run test/lint
- [x] SCSS preprocesor
- [x] Simple build with node/npm or docker
- [x] Responsive
- [x] Code linting with prettier/eslint
- [x] Style linting with stylelint
- [x] Performant code
- [x] Unit testing
- [x] E2E testing

## Demo features see [`CHANGELOG.md`](./CHANGELOG.md)

- [x] Develop the “Add/Remove to Bag” and “Add/Remove to Wishlist” actions
- [x] Develop a product listing pagination with 6 products per page
- [x] The bag in the header must be updated with the new quantities and the new total price
- [x] Build a mini-bag with convenient actions, coherent with design
- [x] Make the application responsive

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
