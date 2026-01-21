# Requirements & Traceability Matrix

## 1. Functional Requirements (FR)
| ID | Requirement Description |
|----|-------------------------|
| **FR-01** | The system must allow users to search for products by name or category. |
| **FR-02** | The system must allow guests to register and log in. |
| **FR-03** | The system must allow logged-in users to add items to a shopping cart. |
| **FR-04** | The system must allow users to place an order based on cart contents. |
| **FR-05** | The system must securely process payments via an external gateway. |
| **FR-06** | The system should allow applying discount codes during checkout. |
| **FR-07** | The system must send email notifications upon order confirmation. |
| **FR-08** | Administrators must be able to add, update, and delete products. |

## 2. Non-Functional Requirements (NFR)
| ID | Requirement Description |
|----|-------------------------|
| **NFR-01** | **Security:** All user passwords must be encrypted using hash algorithms. |
| **NFR-02** | **Performance:** Product search results must load within 2 seconds. |
| **NFR-03** | **Availability:** The system must be available 99.9% of the time. |

## 3. Traceability Matrix (Requirements ↔ Use Cases)

| Requirement | UC1 (Search) | UC2 (Auth) | UC3 (Cart) | UC4 (Order) | UC5 (Payment) | UC6 (Discount) | UC7 (Manage) | UC8 (Notify) |
|:-----------:|:------------:|:----------:|:----------:|:-----------:|:-------------:|:--------------:|:------------:|:------------:|
| **FR-01** | **X** | | | | | | | |
| **FR-02** | | **X** | | | | | | |
| **FR-03** | | | **X** | | | | | |
| **FR-04** | | | | **X** | | | | **X** |
| **FR-05** | | | | **X** | **X** | | | |
| **FR-06** | | | | **X** | | **X** | | |
| **FR-07** | | | | | | | | **X** |
| **FR-08** | | | | | | | **X** | |