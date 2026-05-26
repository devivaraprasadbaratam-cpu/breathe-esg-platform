# MODEL.md

## Overview

The system is designed as a multi-tenant ESG emissions data platform where enterprise clients can upload emissions-related datasets from multiple operational sources including SAP exports, utility data, and corporate travel systems.

The platform normalizes uploaded data into a unified emissions structure and enables analyst review workflows before records are finalized for audit purposes.

The architecture separates ingestion metadata, normalized emissions records, and audit history into independent entities for maintainability and traceability.

---

# Core Models

## 1. Tenant

Represents an enterprise customer using the ESG platform.

### Purpose

Supports multi-tenancy by isolating emissions data between different organizations.

### Fields

- name
- organization metadata

### Why this model exists

The assignment specifically required multi-tenant support. Every uploaded dataset and emission record is associated with a tenant to ensure data isolation and future scalability.

---

## 2. DataSource

Represents the original source system from which emissions data was ingested.

### Supported Sources

- SAP exports
- Utility electricity datasets
- Corporate travel platforms

### Fields

- tenant
- source_type
- file_name
- uploaded_by
- upload_timestamp

### Purpose

Tracks the provenance of incoming ESG data.

This model acts as the source-of-truth layer required by the assignment specification.

### Why separate this model

A single tenant may upload multiple datasets from multiple systems over time. Separating ingestion metadata from normalized emissions records improves traceability and auditability.

---

## 3. EmissionRecord

Central normalized emissions entity.

All incoming source data is transformed into this unified structure regardless of original source format.

### Fields

- tenant
- source
- category
- scope
- activity_type
- quantity
- unit
- normalized_value
- emission_factor
- co2e
- status
- is_suspicious

### Scope Handling

The platform supports:

- Scope 1
- Scope 2
- Scope 3

categorization for enterprise carbon accounting workflows.

### Purpose

Normalizes heterogeneous operational datasets into a consistent emissions model suitable for analyst review and reporting.

### Status Workflow

Records move through review states:

- PENDING
- APPROVED
- REJECTED

before becoming audit-ready.

### Why normalization matters

Real-world ESG datasets contain inconsistent units, formats, and structures across systems.

The normalized structure enables unified analytics, dashboard visualization, and analyst review workflows.

---

## 4. AuditLog

Tracks analyst and system actions performed on emissions records.

### Fields

- record
- action
- performed_by
- timestamp

### Purpose

Supports auditability and operational traceability.

This model records review decisions and ingestion actions required for enterprise ESG governance workflows.

### Why this model exists

The assignment explicitly emphasized audit-readiness and analyst review capability. The audit log provides historical traceability for compliance workflows.

---

# Data Flow

1. Tenant uploads source data
2. Source metadata stored in DataSource
3. Raw operational data normalized into EmissionRecord
4. Analysts review records through dashboard
5. Actions stored in AuditLog
6. Approved records become audit-ready

---

# Multi-Tenancy Strategy

Every major entity is linked to Tenant.

This enables future tenant isolation, role-based permissions, and enterprise scalability.

---

# Unit Normalization

Incoming datasets may contain inconsistent units including:

- liters
- kWh
- kilometers
- fuel units

The normalized_value field standardizes values before emissions calculations are applied.

---

# Auditability

The system preserves:

- source provenance
- upload tracking
- review actions
- approval status

to support enterprise ESG governance workflows.

---

# Design Philosophy

The platform prioritizes:

- traceability
- reviewability
- normalized analytics
- operational simplicity

over excessive early optimization.

The goal was to create a prototype architecture realistic enough to reflect enterprise ESG ingestion workflows while remaining implementable within the assignment timeline.