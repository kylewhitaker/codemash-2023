# Cypress vs. Playwright

This folder contains test code reviewed during the Cypress vs. Playwright presentation at CodeMash 2023 on January 12th.

**Recorded presentation:** https://www.youtube.com/watch?v=czvQUYpQ0Lo

**Slides:** https://slides.com/kylewhitaker51/cypress-vs-playwright

**Title:** Cypress vs. Playwright: The best E2E testing frameworks go head-to-head"

**Description:** Back when writing E2E tests with a framework like Protractor was still a thing, Cypress came along and changed the game. Cypress testing UX is best-in-class with its powerful replay and debugging capabilities. Just when you thought another framework could not possibly challenge Cypress, along came Playwright, crushing right through the limitations of Cypress. Playwright is cross-browser, cross-platform, cross-everything at its core. Yet, there is no clear winner.

In this session, we’ll discuss the benefits and tradeoffs of both frameworks. We’ll look at the code and execute tests side-by-side. And we’ll review a case study of two IT projects within the same company who arrived at different decisions–one Cypress, the other Playwright. You be the judge. Which E2E testing framework is the better choice for your team or company? Cypress or Playwright? At the end of this session, you’ll be able to confidently get started writing tests with both frameworks. You’ll leave armed with the information and research you need to make a strong recommendation to your team."

## Cypress

Location: `e2e-cy`

Reference: https://cypress.io

Notes:
1. Environment variables defined in a `.env` file are not included in source control, but here are the relevant variables if you care:
    ```
    TEMPORARY_PASSWORD=
    ADMIN_EMAIL=
    ADMIN_PASSWORD=
    REGISTRAR_EMAIL=
    REGISTRAR_PASSWORD=
    SUPERGROUPLEADER_EMAIL=
    SUPERGROUPLEADER_PASSWORD=
    ```
1.  Within the `support/enums.ts` file there are two enums defined within the client source code (not included here): ID and AccessRole.
1. The client app under test was developed with AWS Amplify. There is a file `aws-exports.js` which is not included in source control that would contain environment connection data.

## Playwright

Location: `e2e-pw`

Reference: https://playwright.dev

Notes:
1. There are two useful folders for test run data that are, by default, not included in source control: `playwright-report` and `test-results`. These folders will self-populate with test run data such as HTML, .zip files, and videos. These are useful when debugging your test runs using the `show-report` command and Trace Viewer feature.