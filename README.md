# React Key Generator
A generator of random React keys using `window.crypto`.

## Table of contents
- [Purpose](#purpose)
- [Status](#status)
- [Project Stack](#project-stack)
- [Quick start](#quick-start)
- [Documentation](#documentation)
- [Usage](#usage)
- [Versioning](#versioning)
- [Roadmap](#roadmap)
- [Changelog](#changelog)
- [License](#license)
<!-- - [Contributing](#contributing) -->

## Purpose
After working on several React-based projects integrated with [SonarCloud/SonarQube](https://sonarcloud.io/) quality reviews, I have noticed a pattern in the shape of a warning that requires a specific function to be solved: generating a random [`key`](https://react.dev/learn/rendering-lists#where-to-get-your-key) for each project's children (feature used to avoid performance issues).

Now, I decided to create a simple but effective generator method that can be installed and called whenever needed, rather than implementing the whole function in each project. 

## Status
[![Npm Version][badge-npm-version]][link-npm]
[![Npm Bundle Size][badge-npm-size]][link-npm]
[![Npm Downloads][badge-npm-downloads]][link-npm-downloads]
[![Code Coverage][badge-code-coverage]][link-code-coverage]
<!-- [![Netlify Status][badge-netlify-status]][link-netlify-status]
[![Quality Gate Status][badge-soundcloud-quality]][link-soundcloud-status]
[![Maintainability Rating][badge-soundcloud-maintanibility]][link-soundcloud-status]
[![Security Rating][badge-soundcloud-security]][link-soundcloud-status]
[![Technical Debt][badge-soundcloud-tech-debt]][link-soundcloud-status]
[![Known Vulnerabilities][badge-snyk-status]][link-snyk-status] -->
[![GitHub Repo stars][badge-github-repo-stars]][link-github-stars]
[![GitHub commit activity][badge-github-commits]][link-github-commit-activity]
[![GitHub last commit][badge-github-last-commit]][link-github-commit-history]
[![Semantic Commits][badge-semantic-commits]][link-semantic-commits]
[![Contributor Covenant][badge-code-of-conduct]][link-code-of-conduct]

[badge-npm-version]: https://img.shields.io/github/package-json/v/nicolasomar/react-key-generator?label=npm%20version&logo=npm&labelColor=535353&color=success&style=flat
[badge-npm-size]: https://img.shields.io/bundlephobia/min/@nicolasomar/react-key-generator?label=bundle%20size&labelColor=535353&logo=npm&style=flat
[badge-npm-downloads]: https://img.shields.io/npm/dm/@nicolasomar/react-key-generator?label=downloads&labelColor=535353&style=flat&logo=npm
[link-npm]: https://www.npmjs.com/package/@nicolasomar/react-key-generator
[link-npm-downloads]: https://www.npmjs.com/package/@nicolasomar/react-key-generator?activeTab=versions
[badge-code-coverage]: https://img.shields.io/codecov/c/github/nicolasomar/react-key-generator?label=coverage&labelColor=535353&logo=codecov&style=flat
[link-code-coverage]: https://app.codecov.io/gh/NicolasOmar/react-key-generator
<!-- [badge-netlify-status]: https://api.netlify.com/api/v1/badges/3101f2b5-0e28-4734-b749-ebb0e3e413c6/deploy-status
[link-netlify-status]: https://app.netlify.com/sites/reactivebulma/deploys
[badge-soundcloud-quality]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_react-key-generator&metric=alert_status
[badge-soundcloud-maintanibility]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_react-key-generator&metric=sqale_rating
[badge-soundcloud-security]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_react-key-generator&metric=security_rating
[badge-soundcloud-tech-debt]: https://sonarcloud.io/api/project_badges/measure?project=NicolasOmar_react-key-generator&metric=sqale_index
[link-soundcloud-status]: https://sonarcloud.io/summary/new_code?id=NicolasOmar_react-key-generator
[badge-snyk-status]: https://snyk.io/test/github/nicolasomar/react-key-generator/badge.svg
[link-snyk-status]: https://snyk.io/test/github/nicolasomar/react-key-generator -->
[badge-github-repo-stars]: https://img.shields.io/github/stars/nicolasomar/react-key-generator?label=stars&logo=github&labelColor=535353&style=flat
[badge-github-commits]: https://img.shields.io/github/commit-activity/m/nicolasomar/react-key-generator?logo=github
[badge-github-last-commit]: https://img.shields.io/github/last-commit/nicolasomar/react-key-generator?logo=github
[link-github-stars]: https://github.com/NicolasOmar/react-key-generator/activity
[link-github-commit-activity]: https://github.com/NicolasOmar/react-key-generator/activity
[link-github-commit-history]: https://github.com/NicolasOmar/react-key-generator/commits/main
[badge-semantic-commits]: https://img.shields.io/badge/using-conventional%20commits-e10079?logo=conventional-commits
[link-semantic-commits]: https://github.com/semantic-release/semantic-release
[badge-code-of-conduct]: https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg
[link-code-of-conduct]: code_of_conduct.md

## Project Stack
![typescript dependency][badge-dependency-typescript]
![vitest dependency][badge-dependency-vitest]

[badge-dependency-typescript]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/react-key-generator/dev/typescript/main?logo=typescript
[badge-dependency-vitest]: https://img.shields.io/github/package-json/dependency-version/nicolasomar/react-key-generator/dev/vitest/main?logo=vitest

## Quick start
Several quick start options are available:

- Clone the repo: `git clone https://github.com/NicolasOmar/react-key-generator.git`.
- Install with [npm](https://www.npmjs.com/package/react-key-generator): `npm install @nicolasomar/react-key-generator@latest`
  - Before cloning this repo, I recommend installing [Node](https://nodejs.org/en/download/) `>=20.10.0` to install packages.

## Documentation
It will be added shortly in the form of TypeScript comments and other useful ways.

## Usage
Once the package has been installed, just call its (for now) only method, `generateKey` whenever you need:
```jsx
import { generateKey } from "@nicolasomar/react-key-generator"
```

## Versioning
After my previous experience with [semantic-release](https://semantic-release.gitbook.io/semantic-release/) in [other projects](https://github.com/NicolasOmar/reactive-bulma/issues/3), I decided to give the following meaning to the project's versions after `v4.0.0`:
- Major versions (`5.0.0`, `6.0.0`, and beyond) will refer to milestone achievements and significant changes that will need extra attention before the update.
- Minor versions (`4.1.0`, `4.2.0`, and so on) will refer to bug fixes that required several important code changes or specific new features.
- Patch versions (`4.0.1`, `4.0.2`, and so on) will refer to bug fixes that required small code changes or weekly dependency updates.

I will not have a roadmap for this project until I need it.

### Branching

Given the mentioned release logic, `main` is the only static branch, and each developed feature or fix will have a unique branch with its PR and a merge commit following [semantic versioning](https://semver.org/) and [semantic commits](https://github.com/semantic-release/semantic-release#commit-message-format) specifications.

## Changelog

The [changelog](https://github.com/NicolasOmar/react-key-generator/blob/main/CHANGELOG.md) (powered by `semantic-release`) is regularly updated to reflect what's changed in each new release.

<!-- ## Contributing

If you're interested in contributing to Reactive Bulma, please read [our contributing docs](./CONTRIBUTING.md) before submitting a pull request. -->

## License

Code released under the [MIT License](https://github.com/nicolasomar/react-key-generator/blob/main/LICENSE).