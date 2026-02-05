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
