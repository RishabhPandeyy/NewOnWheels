# Service Booking to Payment Redirect Plan

## Information Gathered:
- **Current mechanic.html**: Collects user details (name, phone), vehicle details, and service requirements
- **Current payment.html**: Has manual input fields for mechanic to fill out service details and pricing
- **Task Requirements**: Redirect user from mechanic.html to payment.html after booking completion, pre-fill service details, remove mechanic name field

## Current File Analysis:
1. **mechanic.html**: Form submission sends data to `http://127.0.0.1:4000/api/book` 
2. **payment.html**: Has fields for mechanic name, vehicle type, service performed, and manual price entry
3. **Missing**: Service-to-price mapping, URL parameter handling, redirect logic

## Implementation Plan:

### Step 1: Update mechanic.html
- Modify the successful submission handler to redirect to payment.html
- Pass service details as URL parameters (vehicle type, problem/service, brand, model)
- Keep user contact details for payment reference

### Step 2: Transform payment.html for Customer Use
- **Remove**: Mechanic name field (not needed for customer payment)
- **Pre-fill**: Service details from URL parameters
- **Add**: Customer details section (read-only from URL params)
- **Create**: Service-to-price mapping based on selected service
- **Update**: Payment form title and labels for customer perspective

### Step 3: Create Service Pricing Logic
- Map common services to approximate price ranges
- Auto-calculate prices based on service type and vehicle
- Allow manual adjustment for specific cases

### Step 4: Update Form Submission
- Handle customer payment confirmation
- Send service completion data to backend
- Show success message to customer

## Dependent Files to be Edited:
1. `/Users/techierisy/OnWheel/mechanic.html` - Update submission handler
2. `/Users/techierisy/OnWheel/payment.html` - Complete transformation for customer use

## Expected Outcome:
- Seamless flow from booking to payment
- Pre-filled service details reduce customer input
- Service-based pricing eliminates manual price entry
- Customer-focused payment interface
