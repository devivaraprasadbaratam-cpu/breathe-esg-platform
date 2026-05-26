# TRADEOFFS.md

# Overview

This document explains features and capabilities intentionally not implemented during the assignment timeline and the reasoning behind those decisions.

The goal was to prioritize realistic ingestion workflows, normalized emissions modeling, analyst review usability, and maintainable architecture over excessive feature breadth.

---

# 1. Real SAP Integration

## Not Implemented

Direct SAP integration through:

- IDocs
- OData APIs
- BAPIs
- middleware connectors

## Why

Enterprise SAP integration is highly complex and environment-specific.

A production implementation would require:

- ERP access
- authentication handling
- plant mappings
- schema customization
- middleware orchestration

Within the assignment timeline, file-based ingestion better balanced realism and implementation feasibility.

## Tradeoff

The prototype demonstrates realistic ingestion workflows but does not simulate live enterprise ERP synchronization.

---

# 2. OCR / PDF Utility Parsing

## Not Implemented

Automated parsing of utility bill PDFs using OCR pipelines.

## Why

Utility bills vary heavily by provider, region, and formatting structure.

A robust OCR pipeline would require:

- document preprocessing
- layout parsing
- validation rules
- confidence scoring

The prototype instead models utility ingestion through structured uploaded datasets.

## Tradeoff

The system demonstrates utility normalization workflows without introducing unstable OCR complexity into the prototype.

---

# 3. AI-Based Anomaly Detection

## Not Implemented

Machine learning or statistical anomaly detection for suspicious emissions records.

## Why

The assignment prioritized ingestion architecture and analyst workflows over predictive modeling.

A meaningful anomaly detection system would require:

- historical emissions baselines
- tenant-specific behavior models
- threshold calibration
- false-positive handling

Instead, the prototype includes a simplified suspicious flag structure that could support future anomaly workflows.

## Tradeoff

The current system supports review workflows but does not automate anomaly intelligence.

---

# Additional Features Deferred

The following were considered but intentionally deferred:

- role-based access control
- immutable audit logs
- background ingestion queues
- live external APIs
- enterprise IAM integration
- emission factor management services
- auditor export pipelines
- multi-region deployment

---

# Final Tradeoff Philosophy

The implementation intentionally prioritized:

- realistic data modeling
- ingestion workflows
- review lifecycle management
- auditability
- analyst usability

over attempting production-complete enterprise integrations within a short assignment timeline.

The resulting prototype is designed to demonstrate architectural thinking and workflow realism rather than feature maximalism.