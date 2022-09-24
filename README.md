# Level Editor Tutorial for Rhythm Doctor

Visit the tutorial website [here](https://rd-editor-docs.github.io/rd-editor-docs/intro). This is the GitHub repository for the tutorial.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. If you want to add information or make some edits, keep reading to see how to make a pull request.


## Local Development

### Forking the repository

TODO as everyone currently making changes should be directly added to the organization (can commit directly to `main`).

### Making changes

- Make sure you have [Node.js](https://nodejs.org/en/download/) v16 or higher. You can check your Node version with `node -v`.
- Clone the repository to your own computer. There are many tutorials on using Git if you don't know how to do this.
- Navigate to the cloned repository in a terminal and run `npm install` to install required dependencies. This will take a while.
- Run `npm start` to start the website locally (takes ~50s). A browser window will open automatically once ready.
	- Changes to Markdown files will be reflected live without having to restart the server.
		- If this doesn't seem to work, try running `npm start -- --poll` instead.
	- However, changes such as new files/folders or configuration changes will require a server restart.
	- Note that this kind of deployment only supports **one locale**. Trying to change locale will result in "no page found" errors.
		- To view a different locale (e.g. French), start with `npm start -- --locale fr`.
- Run `npm run build` to build all the static content (takes ~1-2m) into the `build` directory.
	- Run `npm run serve` to view the site locally. This supports **all locales**.
	- As the static content has already been created, the site will no longer reflect any changes made to Markdown files.
- Push your changes to the `main` branch to trigger an automatic GitHub workflow.
	- This will try to build your changes and deploy the new website (takes ~3 minutes).

### Making a pull request

TODO as everyone currently making changes should be directly added to the organization (can commit directly to `main`).

## Working with Docusaurus

### Documentation pages

All the documentation files are in the `docs` folder.
- A single page `Title` is created from a file `title.md(x)`.
	- Use the `.mdx` extension if you want to leverage JavaScript or React components on the page.
- Nested pages are created from folders that contain Markdown files inside.
	- Typically, there is also a `_category_.json` file that serves as the "base" page for the folder.
		- You can copy a previous file to use as an example.
- Files are added to the sidebar by default.
	- To reorder files in the sidebar (default is alphabetical), prefix the file names with `01-`, `02-`, etc. These are automatically stripped by Docusaurus so they don't show up on the site.
	- You can also use *front matter* at the beginning of Markdown files like so to reorder files:
	```
	---
		sidebar_position: 1
	---
	```
  
All images should go in `static/img`. To reference these from `docs`, use `img/<rest of file path>`.

### Custom pages

If you want to create your own wacky page, it goes in `src/pages`. The homepage is one of those files.
- This kind of page lets you leverage React and JavaScript along with custom CSS files.

### Translations

Translations go in `i18n/<locale>/docusaurus-plugin-content-docs/current/<rest of file path>`.
- All files here should have the same structure as `docs/` and have the same names.

If you're adding a new locale (i.e. no pages previously existed for that locale), make sure you add it to the list of locales in `docusaurus.config.js` in the config `i18n` object.
