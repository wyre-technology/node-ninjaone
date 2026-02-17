# 1.0.0 (2026-02-17)


### Bug Fixes

* update package scope from [@asachs01](https://github.com/asachs01) to [@wyre-technology](https://github.com/wyre-technology) ([0fd9864](https://github.com/wyre-technology/node-ninjaone/commit/0fd98641f03be445aa69f44ec53d2f705ffa3b46))


### Features

* **ci:** add release workflow with semantic-release and GitHub Packages publishing ([c99742f](https://github.com/wyre-technology/node-ninjaone/commit/c99742f1de65043af2b5eae384a5867fb6cddcb4))
* Initial implementation of @asachs01/node-ninjaone ([4747bc4](https://github.com/wyre-technology/node-ninjaone/commit/4747bc489ff89b75095e3f151d67606056b892d2))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of @asachs01/node-ninjaone
- Full TypeScript support with comprehensive type definitions
- OAuth 2.0 authentication with automatic token refresh
- Support for all three regional endpoints (US, EU, Oceania)
- Built-in rate limiting with configurable thresholds
- Organizations resource (list, get, create, update, delete)
- Devices resource (list, get, update, reboot, services, software, inventory)
- Alerts resource (list, get, delete, reset)
- Tickets resource (list, get, create, update, delete, comments)
- Webhooks resource (list, get, create, update, delete)
- Automatic retry logic for rate limits and server errors
- Comprehensive error classes for different error conditions
- Full test suite with unit and integration tests using Vitest and MSW
