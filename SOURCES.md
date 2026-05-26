# SOURCES.md

# Overview

This document summarizes the real-world ESG data source formats researched during implementation of the prototype ingestion platform.

The goal was not to perfectly replicate enterprise integrations, but to understand how these operational datasets are typically structured and how they create normalization challenges in ESG workflows.

---

# 1. SAP Fuel and Procurement Data

## Research Conducted

Researched common SAP export patterns including:

- flat file exports
- CSV exports
- IDoc structures
- SAP OData integrations
- procurement and fuel operational datasets

Reviewed publicly available SAP integration documentation and ESG operational examples.

---

## What Was Learned

SAP operational exports are often inconsistent and difficult to normalize because:

- units vary across plants
- naming conventions differ by region
- some exports contain multilingual headers
- operational identifiers require lookup tables
- dates appear in inconsistent formats

Fuel and procurement records are frequently exported as large flat operational datasets rather than ESG-specific reports.

---

## Prototype Assumptions

The prototype models SAP ingestion as uploaded structured export files containing:

- fuel usage
- operational procurement activity
- quantity and unit fields
- emissions-related operational data

This subset was selected because it realistically reflects operational ESG ingestion without requiring full ERP connectivity.

---

## What Would Break in Production

A real deployment would require:

- plant mapping systems
- ERP authentication
- schema reconciliation
- custom tenant transformations
- multilingual normalization
- large-scale ingestion handling

The current prototype intentionally avoids direct SAP middleware complexity.

---

# 2. Utility Electricity Data

## Research Conducted

Researched:

- utility portal exports
- electricity billing CSV formats
- facilities energy tracking workflows
- utility reporting structures

Reviewed common energy consumption reporting patterns from enterprise utility providers.

---

## What Was Learned

Utility data often contains:

- billing periods
- meter identifiers
- tariff structures
- inconsistent billing cycles
- multiple consumption units

Facilities teams frequently export data manually from utility portals instead of relying on APIs.

---

## Prototype Assumptions

The prototype models utility ingestion through uploaded electricity datasets containing:

- consumption quantities
- energy units
- billing-related operational data
- normalized emissions-ready values

CSV-style uploads were chosen because they realistically reflect operational workflows.

---

## What Would Break in Production

A production deployment would likely require:

- OCR/PDF parsing
- utility-specific connectors
- tariff normalization
- billing reconciliation
- regional energy factor management

The prototype intentionally focuses on normalized ingestion rather than document extraction complexity.

---

# 3. Corporate Travel Platforms

## Research Conducted

Researched travel and expense systems including:

- Concur
- Navan
- business travel reporting formats
- operational travel exports

Reviewed how travel platforms expose:

- flights
- hotels
- transportation
- expense reporting

---

## What Was Learned

Travel data often lacks direct emissions metrics.

Operational exports may contain:

- airport codes
- travel categories
- expense amounts
- route information
- transportation modes

Emission calculations frequently require additional mapping logic.

---

## Prototype Assumptions

The prototype models travel ingestion through uploaded structured records including:

- travel category
- activity type
- normalized emissions totals
- Scope 3 categorization

The implementation focuses on analyst review workflows rather than complex routing calculations.

---

## What Would Break in Production

A real deployment would require:

- airport distance mapping
- travel class emission factors
- hotel-night conversion logic
- regional transportation modeling
- API synchronization
- duplicate travel reconciliation

---

# Sample Data Philosophy

The sample data used in the prototype was intentionally designed to resemble realistic enterprise operational datasets rather than toy examples.

The records include:

- multiple scope categories
- varying operational activities
- normalized emissions values
- analyst review workflows
- ingestion metadata

This structure was chosen to demonstrate how heterogeneous ESG data can be normalized into a reviewable operational system.

---

# Final Reflection

The research process reinforced that the hardest problem in ESG systems is not emissions calculation itself, but operational data normalization across inconsistent enterprise systems.

The prototype therefore prioritizes:

- ingestion workflows
- traceability
- normalization
- analyst usability
- auditability

over attempting complete enterprise integrations within the assignment timeline.