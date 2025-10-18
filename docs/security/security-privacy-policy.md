# Security & Privacy Policy (Initial Draft)

## 1. Purpose & Scope

This policy establishes the foundational security and privacy controls for the payments platform. It applies to all environments (development, staging, production), all services within the monorepo, third-party integrations, and personnel with access to systems or data.

## 2. Security Principles

1. **Least Privilege:** Access granted strictly based on job function, implemented using role-based access control (RBAC) and just-in-time elevation.
2. **Defence in Depth:** Layered security across network, application, and data layers with continuous monitoring.
3. **Security by Design:** Embed security requirements into architecture decisions, user stories, and acceptance criteria.
4. **Compliance Alignment:** Controls mapped to RBI, PCI-DSS, AML/KYC, GST, and card network obligations.

## 3. Access Control

- Centralized identity management via Auth Service integrated with enterprise IdP (SAML/OIDC).
- Multi-factor authentication required for all privileged accounts and production access.
- Segregation of duties enforced between development, operations, and compliance teams.
- Quarterly access recertification with automated reports from Auth Service.

## 4. Data Classification & Handling

| Classification | Description | Handling Requirements |
| --- | --- | --- |
| **Confidential** | Cardholder data, KYC documents, financial transactions | Encrypt at rest/in transit, restricted to PCI/VPN network segments, monitored access, masking in logs |
| **Sensitive** | Personal identifiers (email, phone), merchant business data | Encryption, tokenization where possible, access via audited APIs |
| **Internal** | Non-public configs, runbooks, operational metrics | VPN-only access, log access |
| **Public** | Marketing content, public documentation | No restrictions |

- Data residency: All payment and KYC data stored within Indian data centres to comply with RBI guidelines.
- Encryption: Use TLS 1.2+ for all network traffic; data at rest encrypted with managed KMS keys (AWS KMS or Vault).

## 5. Secure Development Lifecycle

1. **Design Reviews:** Threat modeling for new features, with Security sign-off for high-risk changes.
2. **Static & Dynamic Analysis:** Automated scans integrated into CI/CD (SAST, DAST, dependency checks).
3. **Secrets Management:** No secrets in source code. Use Vault/Secrets Manager with short-lived tokens.
4. **Infrastructure Hardening:** CIS benchmarks applied to OS, containers, and cloud resources.
5. **Logging & Monitoring:** Centralized logs, real-time alerting, and integrity protection.

## 6. Incident Response

- Incident Response Team (IRT) on-call rotation with defined severity levels.
- 4-stage process: **Detect → Contain → Eradicate → Recover** with post-incident reviews.
- RBI reporting obligations: Notify the regulator within 24 hours for security incidents affecting customer data or services.
- Maintain simulated incident drills twice per year.

## 7. Privacy Principles

1. **Lawful & Purpose-bound Processing:** Collect only data necessary for payments, KYC, and regulatory compliance.
2. **Transparency:** Provide clear privacy notices at onboarding and checkout touchpoints.
3. **Data Minimization:** Tokenize or pseudonymize identifiers where feasible; purge data when no longer required.
4. **User Rights:** Enable merchants and end-customers to request data access, correction, or deletion via self-service portal or support channels.
5. **Retention & Disposal:** Retain data per statutory requirements (e.g., 8 years for payment transactions) and securely delete post-retention.

## 8. Consent Management Approach

- **Consent Ledger:** Auth Service maintains a consent ledger capturing scope, purpose, timestamp, and expiry for each consent record. Ledger entries are immutable and signed.
- **Granular Scopes:** Consent categories aligned to data usage (payment processing, marketing communication, analytics, third-party sharing).
- **Versioned Policies:** Consent references specific policy versions with change logs maintained in repository.
- **Revocation Mechanisms:** APIs and UI components allow users to revoke consent; downstream services subscribe to revocation events via Kafka to enforce near real-time propagation.
- **Auditability:** Consent evidence stored in encrypted object storage with correlation IDs linking to ledger entries.

## 9. Third-Party & Vendor Security

- Perform security risk assessments before onboarding vendors; require SOC 2, ISO 27001, or equivalent attestations.
- Enforce contractual clauses for data protection, breach notification (<24 hours), and right to audit.
- Monitor vendor compliance via annual reviews and integration health dashboards.

## 10. Continuous Improvement

- Track security KPIs (MTTD, MTTR, number of critical vulnerabilities) and report monthly to leadership.
- Adopt purple-team exercises and bug bounty programs as the platform matures.
- Align roadmap with evolving regulations (e.g., DPDP Act) and update policies accordingly.

This policy serves as the baseline and must be revisited quarterly or upon significant architectural, regulatory, or operational changes.
