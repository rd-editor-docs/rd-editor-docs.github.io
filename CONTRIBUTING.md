# Contribution Guide

Thanks for your interest in helping improve the tutorial!

This page is split into two guides, depending on how involved you want to get.
- If you only want to make minor edits, use the Quick Start.
- If you would like to make more significant edits, use the Normal Start.

### Requirements
- A GitHub account.
- Install [Node](https://nodejs.org/en/download/) v16 or higher.
- Git. Windows does not come with Git; you can install [Git for Windows](https://gitforwindows.org/), which comes with Git Bash ( a terminal).


## Quick Start
This is only suitable for small-scale edits and does not explain hosting a local version of the site (so you will not be able to confirm that your changes do not break the site).

1. Find the page you want to edit on the website, and click the "Edit this page" link.
2. You will be prompted to make a fork (a copy of the repository where you are the owner and can thus make changes freely).
2. Click on the pencil icon, and make the desired edits.
3. Click "Commit" at the bottom once you're finished.
4. Click "Create a pull request" to request that your changes be merged into the main repository.
5. Wait for your pull request to be reviewed, and make any requested changes.


## Normal Start
This guide assumes no knowledge of using Git or a terminal, and does not explain any of those commands listed. If you are interested in learning more, you can find many tutorials online.

### Creating and cloning a fork
1. Create a fork of the [main repository](https://github.com/<username>/rd-editor-docs.github.io) (click "Fork" on the top right of the page).
2. Open Git Bash, type `cd ~/Desktop`, and press Enter. (All future commands typed into the terminal should be submitted with the Enter key.)
3. Type `git clone https://github.com/<username>/rd-editor-docs.github.io`, replacing `<username>` with your GitHub username. Once the command finishes, a local copy of your forked repository will be on your desktop.
4. Type `cd ~/Desktop/rd-editor-docs.github.io`, then `npm install` to install dependencies.

### Making local changes
1. You can directly modify files inside the folder using your text editor of choice.
2. To host a local version of the website to see if your changes had an effect, type `npm start`.
3. A browser window will open with your changes (may take some time). Any further file changes should automatically update the website.
4. Press `Ctrl-C` in the terminal to stop the process.
Note: If the browser window does not seem to automatically update changes, first make sure that you are saving the edited files. Otherwise, try stopping the process and then running `npm start -- --poll` instead of `npm start`.
 
### Committing changes
1. Type `git config core.editor notepad` to use Notepad as your default git editor.
2. To commit your changes, type `cd ~/Desktop/rd-editor-docs.github.io`, then `git add .`, then `git commit`.
3. Notepad will open. Type your commit message, then close the file when you want to save.
4. Type `git push` to push your new commit to your fork. You will now be able to view your changes on the [main page of your fork](https://github.com/<username>/rd-editor-docs.github.io).

### Making a pull request
1. Go to the main page of your fork on GitHub.
2. Press "Contribute" --> "Make a pull request", then leave a summary of the changes in the description.

Your pull request will be reviewed as soon as possible, and comments may be left on suggested edits before it can be merged.


## Additional Documentation on Docusaurus-specific Commands
- Run `npm start` to start the website locally (takes ~50s). A browser window will open automatically once ready.
	- Changes to Markdown files should be reflected live without having to restart the server.
		- If this doesn't seem to work, try refreshing the page, or running `npm start -- --poll` instead.
	- However, changes such as new files/folders or configuration changes will require a server restart.
	- Note that this kind of deployment only supports **one locale**. Trying to change locale will result in "no page found" errors.
		- To view a different locale (e.g. French), start with `npm start -- --locale fr`.
- Run `npm run build` to build all the static content (takes ~1-2m) into the `build` directory.
	- Run `npm run serve` to view the site locally. This supports **all locales**.
	- As the static content has already been created, the site will no longer reflect any changes made to Markdown files.
