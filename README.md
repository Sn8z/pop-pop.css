# Pop-Pop.css
![npm](https://img.shields.io/npm/v/@sn8z/pop-pop.css?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@sn8z/pop-pop.css?style=flat-square)
![npm](https://img.shields.io/npm/dw/@sn8z/pop-pop.css?style=flat-square)
[![GitHub license](https://img.shields.io/github/license/Sn8z/pop-pop.css?style=flat-square)](https://github.com/Sn8z/pop-pop.css/blob/master/LICENSE)

A __pure CSS__ tooltip library with __no dependencies__ and support for __CSS custom properties__.

## Demo

[Pop-Pop.css website](https://sn8z.github.io/pop-pop.css/)

## Features

* No dependencies
* Pure CSS
* ~ 14kb minified (~ 1,3kb when minified & Gzipped)
* Customizable
* Supports CSS custom properties
* Supports multiple browsers

## Installation & Basic usage

### NPM / Yarn
```
npm install @sn8z/pop-pop.css
```
```
yarn add @sn8z/pop-pop.css
```
You can then import the normal CSS file or the minified version from the *dist* folder in the package.

```
@import "node_modules/@sn8z/pop-pop.css/dist/pop-pop.min.css";
```
or
```
<link rel="stylesheet" href="node_modules/@sn8z/pop-pop.css/dist/pop-pop.min.css">
```
### CDN
You can import the CSS from unpkg.
```
<link rel="stylesheet" href="https://unpkg.com/@sn8z/pop-pop.css@latest/dist/pop-pop.min.css">
```
### Download
You can also download the CSS from GitHub and include it to your html as you would normally do.
```
<link rel="stylesheet" href="pop-pop.min.css">
```
### Usage
To add a tooltip simply add the attribute *data-pop* and an *aria-label* to the tag where you want it to appear.
```
<div data-pop aria-label="Tooltip text goes here">...</div>
```
For more examples and configuration check out the [website](https://sn8z.github.io/pop-pop.css/).
## Contribute
If you want to contribute with enhancements and/or bugfixes:
* Fork and/or clone the repo
```
git clone https://github.com/Sn8z/pop-pop.css.git
```
* Enter the directory
```
cd pop-pop.css
```
* Run
```
npm install
```
* Edit *pop-pop.scss* in the *src* folder.
* Run the following command to generate the minified and normal CSS file.
```
npm run build:all
```
* Open the *index.html* file found in the *docs* folder to confirm things are working as expected.
* If everything works as expected open a Pull request with a brief explanation!

## Sponsor

If you enjoy using Pop-Pop.css consider [supporting me here on GitHub by becoming a sponsor](https://github.com/sponsors/Sn8z)!

### Made by [@Sn8z](https://github.com/Sn8z)