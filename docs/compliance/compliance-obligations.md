# Regulatory Obligations & Compliance Strategy

## 1. Regulatory Scope

The payments platform operates under the jurisdiction of Indian regulators and global card networks. The primary compliance domains are:

- **Reserve Bank of India (RBI)** – Guidelines for payment aggregators and payment gateways, data localization, settlement timelines.
- **PCI-DSS** – Protection of cardholder data due to storage/processing of card tokens.
- **AML/KYC** – Prevention of money laundering and financing of terrorism, entity and beneficial ownership verification.
- **GST** – Accurate collection and remittance of Goods and Services Tax for merchant settlements and service fees.
- **Card Network Rules** – Visa, Mastercard, RuPay scheme mandates covering dispute handling, fraud monitoring, and data security.

## 2. Control Mapping

| Regulation | Key Obligations | Technical Controls | Control Owner | Evidence & Reporting |
| --- | --- | --- | --- | --- |
| **RBI** | Payment aggregator licensing conditions, nodal account management, settlement within T+1, customer grievance redressal | Segregated nodal accounts via Settlement Service, automated reconciliation in Ledger, SLA-driven workflow in Ops Console, complaint tracking module | Settlement Service Lead, Ops Team | Daily settlement reports, automated reconciliation logs, complaint resolution dashboard |
| **RBI** | Data localization for payments data | Regional deployments with geo-fenced storage, encryption at rest, data residency tagging | Platform Engineering | Cloud region policy, storage location audits |
| **PCI-DSS** | Secure handling of card data, tokenization, network segmentation | PSP tokenization via Razorpay, card data restricted to PCI zone, network segmentation, HSM-backed key mgmt | Payments Orchestrator Lead, Security Team | Quarterly ASV scans, penetration tests, tokenization audit trails |
| **AML/KYC** | Customer due diligence, ongoing monitoring, suspicious transaction reporting | Onboarding Service with rule engine, integration with Karza/Signzy, risk scoring via Risk Engine, case management workflows | Compliance + Risk Engine Lead | KYC completion reports, SAR filings, case management history |
| **AML/KYC** | Screening against sanctions/PEP lists | Nightly sanctions list sync, real-time screening via Risk Engine | Risk & Compliance | Sanction match logs, exception approvals |
| **GST** | Tax invoice issuance, GST returns, reconciliation | Settlement Service calculates GST, integration with GSTN APIs, reporting service generates GSTR-1/3B extracts | Finance Ops | GST filings, ledger postings audit |
| **Card Network Rules** | Chargeback handling, fraud monitoring thresholds | Dispute management module in Ops Console, rule-based alerts in Risk Engine, near real-time fraud feeds | Risk & Operations | Chargeback SLA metrics, fraud ratio dashboards |
| **Card Network Rules** | 3DSecure / SCA enforcement | Utilize Razorpay 3DS flows, fallback monitoring, failure analytics | Payments Orchestrator | 3DS completion rates, failure logs |

## 3. Compliance Strategy Outline

### 3.1 Governance & Ownership

- **Compliance Steering Committee** comprising Legal, Security, Engineering, and Operations to review policies quarterly.
- **Control Owners** assigned per service boundary with documented RACI matrix stored in `/docs/compliance/`.
- **Policy Lifecycle** managed through version-controlled markdown, approved via pull requests to ensure auditable change history.

### 3.2 Risk Management

1. Maintain a consolidated risk register referencing each regulatory obligation.
2. Apply risk-based prioritisation for control implementation, emphasising PCI and RBI requirements for MVP launch.
3. Leverage automated control testing (infrastructure compliance scanning, static analysis) to reduce manual effort.

### 3.3 Monitoring & Evidence Collection

- Centralized audit logging (immutable storage, cryptographic signing) for security events, admin actions, and financial transactions.
- Scheduled control attestations, e.g., daily settlement reconciliation, weekly KYC exception review, monthly access recertification.
- Evidence repository in secure object storage with metadata tagging for quick retrieval during audits.

### 3.4 Vendor & Third-Party Management

- Conduct due diligence for PSP and KYC providers covering certifications (PCI-DSS, ISO 27001), SLA commitments, and data handling practices.
- Maintain contractual clauses enforcing breach notifications, sub-processor transparency, and periodic compliance attestations.

### 3.5 Change & Incident Management

- Integrate change management with CI/CD approvals; every production deployment requires compliance impact assessment.
- Define incident response runbooks for data breach, payment outage, and fraud escalation; align with RBI 24-hour breach notification requirement.

### 3.6 Training & Awareness

- Mandatory annual compliance training for all employees; role-specific deep dives for operations and engineering personnel.
- Secure coding workshops and tabletop exercises for incident response.

## 4. Compliance Roadmap Priorities

1. **MVP Launch** – Obtain payment aggregator license, establish nodal account, complete PCI-DSS readiness assessment, implement baseline AML/KYC workflows, enable GST-compliant invoicing.
2. **Post-MVP** – Expand PSP integrations, automate GST filings, enhance dispute management workflows, integrate advanced fraud analytics.
3. **Scale Phase** – Continuous controls monitoring (CCM), SOC 2 Type II attestations, cross-border compliance readiness (FEMA, GDPR where applicable).

## 5. Documentation & Audit Readiness

- Store all policies, procedures, and runbooks in version control with tagging for regulatory scope.
- Align logging retention and evidence retention policies with statutory requirements (e.g., minimum 8 years for payment data in India).
- Schedule quarterly internal audits and annual external assessments.

This document should evolve alongside legal interpretations and regulatory updates. Update the control mapping and strategy as new obligations emerge or services expand internationally.
