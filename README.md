> *We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)*

# VitePress Theme

*A minimalist OGSiD 11® VitePress theme designed to be used in VitePress documentations.* 

![Preview](./docs/preview.avif)

<a href="./LICENSE" target="_blank"><img alt="license badge" src="https://img.shields.io/github/license/OGS-GmbH/vitepress-theme?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/vitepress-theme/actions/workflows/main-deploy.yml" target="_blank"><img alt="deploy badge" src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/vitepress-theme/main-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/vitepress-theme" target="_blank"><img alt="npm badge" src="https://img.shields.io/npm/v/%40ogs-gmbh%2Fvitepress-theme?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

- **OGSiD 11®**\
  Official theme for OGSiD 11®

- **Color-Only Theme**\
  Minimalist design emphasizing palettes.

- **Contrast & Accessibility**\
  WCAG compliance for color combinations.

## Prerequisites

- Node.js version 18 or higher
- A VitePress project
- A package manager: e.g. npm, pnpm, ...

## Installation

Using npm:
```sh
$ npm install -D @ogs-gmbh/vitepress-theme
```

<details>
  <summary>Using a different package managers?</summary>
  <br/>
  
  Using yarn:
  ```sh
  $ pnpm add -D @ogs-gmbh/vitepress-theme
  ```
  
  Using pnpm:
  ```sh
  $ pnpm add -D @ogs-gmbh/vitepress-theme
  ```
  
  Using bun:
  ```sh
  $ bun add -D @ogs-gmbh/vitepress-theme
  ```

</details>

## Usage

Create a [VitePress custom theme](https://vitepress.dev/guide/custom-theme#using-a-custom-theme). Add a `custom.scss` file and import it in your custom theme. Now, you're ready to give it some usage:

```scss
@use "@ogs-gmbh/vitepress-theme" as vitepress-theme;

@include vitepress-theme.include();
```

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing
Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests
Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests
GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct
We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

Gesellschaft für Datenverarbeitung und Systemberatung mbH

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)

