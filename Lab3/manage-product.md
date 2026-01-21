# Sequence Diagram: Manage Product (Редагування товару)

**Actor:** Administrator  
**Goal:** Update product price or details in the catalog.  
**Use Case Reference:** UC7 (Manage Products).

## Declarative Description (PlantUML)

```plantuml
@startuml
autonumber
actor "Admin" as admin
participant "Admin Dashboard" as ui
participant "Product Service" as svc
database "Database" as db

admin -> ui : updatePrice(productId, newPrice)
activate ui

ui -> svc : updateProduct(id, price)
activate svc

svc -> db : getProduct(id)
activate db
db --> svc : productDetails
deactivate db

alt Product Exists
    svc -> db : updateRow(id, price)
    activate db
    db --> svc : success
    deactivate db
    svc --> ui : showSuccess("Price Updated")
else Product Not Found
    svc --> ui : showError("Product Not Found")
end

deactivate svc
deactivate ui
@enduml