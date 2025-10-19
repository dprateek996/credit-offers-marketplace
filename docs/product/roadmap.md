# Delivery Roadmap & MVP Scope

## 1. Guiding Principles

- Compliance and risk controls must launch concurrently with core payment functionality.
- Prioritise reusable platform capabilities (ledger, consent, onboarding) before channel-specific features.
- Maintain short, verifiable milestones with clear exit criteria tied to regulatory readiness.

## 2. Phased Roadmap

| Phase | Timeline | Objectives | Key Deliverables | Compliance Gates |
| --- | --- | --- | --- | --- |
| **Phase 0 – Foundation** | Weeks 0-6 | Establish engineering baseline and compliance governance | Monorepo scaffolding, CI/CD pipelines with security scans, infrastructure sandbox, initial policies approved, compliance steering committee formed | Policy approval records, CI security scan reports |
| **Phase 1 – MVP Core Payments** | Weeks 7-16 | Launch domestic card & UPI acceptance with essential compliance controls | API Gateway, Auth Service (MFA, consent ledger), Payments Orchestrator integrated with Razorpay, Ledger v1 (double-entry), Onboarding Service with Karza integration, baseline Risk Engine rules, merchant portal beta | PCI readiness checklist, KYC completion tracking, RBI settlement process dry-run |
| **Phase 2 – Settlements & Reporting** | Weeks 17-24 | Automate settlements, GST, and regulatory reporting | Settlement Service with nodal account workflows, GST invoicing, reconciliation dashboards, reporting service for RBI filings, ops console for disputes | RBI settlement certification, GST return mock submissions |
| **Phase 3 – Operational Hardening** | Weeks 25-32 | Enhance resilience, monitoring, and dispute handling | Advanced risk analytics, real-time alerts, notification service, dispute/case management, incident response runbooks tested | Incident drill reports, fraud monitoring KPIs within network thresholds |
| **Phase 4 – Scale & Expansion** | Weeks 33-48 | Add PSP diversification, analytics, and cross-border readiness | Additional PSP integrations, data warehouse pipelines, privacy self-service portals, vendor management automation, SOC 2 readiness | External audit plan, continuous controls monitoring setup |

## 3. MVP Scope Priorities

1. **Customer Onboarding & KYC:** Seamless merchant onboarding with automated document verification, risk scoring, and consent capture.
2. **Payment Authorization:** API-first payment flows supporting card tokenization and UPI, with real-time fraud checks.
3. **Ledger Foundations:** Accurate recording of financial events with idempotency and reconciliation against PSP reports.
4. **Compliance Baseline:** PCI-DSS readiness tasks, RBI nodal account structure, AML monitoring rules, privacy notices.
5. **Operational Visibility:** Dashboards for payment success rates, risk alerts, and SLA tracking.

## 4. Dependencies & Risks

- **Regulatory Approvals:** Payment aggregator license timelines may impact launch date; maintain buffer in Phase 1.
- **Vendor Readiness:** PSP and KYC provider onboarding requires completed security assessments; track via vendor management board.
- **Team Capacity:** Ensure dedicated compliance engineering resources to avoid bottlenecks.
- **Data Localization:** Confirm selected cloud regions and backup strategies meet RBI residency requirements before production cutover.

## 5. Success Metrics

- MVP go-live with <1% payment downtime, >98% API success rate.
- 100% of critical compliance controls implemented and evidenced.
- Settlement accuracy >99.5% with automated reconciliation.
- Incident response MTTR < 4 hours for high severity events by Phase 3.

This roadmap should be revisited after each phase to incorporate learnings, regulatory updates, and customer feedback.
