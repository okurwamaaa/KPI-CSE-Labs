# Sequence Diagram: Place Order (Оформлення замовлення)

**Actor:** User (Registered Customer)  
**Goal:** Successfully place an order and process payment.  
**Use Case Reference:** UC4 (Place Order), UC5 (Process Payment).

## Declarative Description (PlantUML)

```plantuml
@startuml
autonumber
actor "User" as user
participant "Web Interface" as ui
participant "Order Service" as svc
database "Database" as db
participant "Payment Gateway" as bank

user -> ui : clickCheckout(cartItems)
activate ui

ui -> svc : createOrder(userId, items)
activate svc

svc -> db : checkStock(items)
activate db
db --> svc : stockOK
deactivate db

svc -> db : saveOrder(status="New")
activate db
db --> svc : orderId
deactivate db

svc -> bank : initiatePayment(amount)
activate bank

alt Payment Successful
    bank --> svc : success
    svc -> db : updateStatus(orderId, "Paid")
    svc -> db : clearCart(userId)
    svc --> ui : showConfirmation(orderId)
else Payment Failed
    bank --> svc : failure
    deactivate bank
    svc -> db : updateStatus(orderId, "PaymentFailed")
    svc --> ui : showError("Payment Declined")
end

deactivate svc
deactivate ui
@enduml