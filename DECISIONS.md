# DECISIONS.md

# Overview

This document explains the architectural and product decisions made during implementation of the ESG ingestion and analyst review prototype.

The assignment intentionally left several ambiguities open-ended. The goal of this document is to explain how those ambiguities were resolved and what tradeoffs were accepted during implementation.

---

# 1. Frontend and Backend Stack

## Decision

Used:

- Django REST Framework for backend APIs
- React + TypeScript for frontend UI

## Why

Django REST Framework provides rapid API development, structured serialization, and strong admin tooling suitable for ingestion workflows and analyst review systems.

React enables fast dashboard development, dynamic state management, and enterprise-style UI composition.

This stack also aligns well with rapid prototype delivery within the assignment timeline.

---

# 2. Source Ingestion Strategy

## Decision

Implemented ingestion through file upload workflows instead of direct external API integrations.

## Why

The assignment allowed flexibility in ingestion mechanisms.

File upload was selected because:

- SAP exports are commonly delivered as flat files or CSV exports
- Utility data is frequently exported manually by facilities teams
- Travel systems often provide downloadable reports

This approach realistically models operational ESG workflows while remaining achievable within the assignment timeline.

---

# 3. SAP Data Handling

## Decision

Modeled SAP ingestion as structured export uploads rather than direct SAP connectivity.

## Why

Real SAP integrations involve significant complexity including:

- IDoc processing
- OData services
- BAPI integrations
- enterprise authentication
- plant code mappings

For the prototype, the implementation focused on normalized ingestion workflows rather than enterprise middleware integration.

## Subset Handled

- Fuel consumption records
- Procurement-style operational rows
- Unit normalization

## Ignored

- Deep SAP hierarchy mapping
- multilingual configurations
- ERP-specific customizations
- live SAP synchronization

---

# 4. Utility Data Handling

## Decision

Modeled utility ingestion using uploaded electricity datasets.

## Why

Facilities teams commonly export billing or consumption data manually from utility portals.

CSV-style ingestion was chosen because it realistically represents operational workflows while avoiding unnecessary OCR or PDF parsing complexity.

## Considerations

Utility data often contains:

- billing periods
- meter units
- tariff inconsistencies

The prototype simplified these into normalized emissions-ready records.

---

# 5. Corporate Travel Handling

## Decision

Modeled travel ingestion as structured uploaded travel records.

## Why

Travel systems such as Concur or Navan expose operational travel exports, but full API integration was outside the scope of a rapid prototype.

The prototype focuses on normalized Scope 3 categorization and analyst review.

## Subset Handled

- flight travel
- travel categories
- emissions totals

## Ignored

- airport-code routing logic
- distance estimation
- hotel-night conversion models
- live travel APIs

---

# 6. Multi-Tenancy

## Decision

Every major entity is associated with a Tenant model.

## Why

The assignment explicitly required multi-tenant support.

This design enables future tenant isolation, enterprise scaling, and organization-level reporting.

---

# 7. Review Workflow

## Decision

Implemented analyst review states:

- PENDING
- APPROVED
- REJECTED

## Why

The assignment emphasized analyst sign-off before audit readiness.

This workflow models enterprise ESG governance and operational review processes.

---

# 8. Audit Logging

## Decision

Implemented a separate AuditLog model.

## Why

Auditability is critical in ESG reporting systems.

The audit log provides traceability for:

- ingestion actions
- review decisions
- compliance workflows

---

# 9. Dashboard Design

## Decision

Built an analyst-focused dashboard with:

- emissions metrics
- charts
- review queues
- upload workflows

## Why

The assignment specifically evaluated analyst usability.

The UI prioritizes operational clarity over visual complexity.

---

# 10. Authentication

## Decision

Implemented lightweight frontend authentication for prototype access control.

## Why

The goal was to simulate protected analyst workflows without implementing a full enterprise IAM solution during the assignment window.

---

# Questions I Would Ask the PM

If additional time or stakeholder access existed, I would clarify:

1. Expected ingestion volume and scale
2. Whether live SAP integrations are required
3. Whether utility PDF/OCR parsing is necessary
4. Expected tenant isolation/security requirements
5. Whether audit logs must be immutable
6. Expected analyst approval SLAs
7. Whether emission factors are centrally managed
8. Whether downstream auditor exports are required

---

# Final Design Philosophy

The implementation prioritizes:

- realistic ingestion workflows
- traceability
- normalized analytics
- analyst usability
- maintainability

over attempting enterprise-complete integrations within a short assignment timeline.