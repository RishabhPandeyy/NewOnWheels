# Payment Page Fix Plan

## Issues to Fix:
1. **Service Price Editable Issue**: Currently users can edit the service price field, causing potential financial loss
2. **Missing QR Code Option**: Need to add QR code image placeholder for online payments

## Current Problems Identified:
- `service-price` input field is editable by users
- Online payment option is disabled and lacks QR code display
- No reserved space for QR code dimensions

## Detailed Fix Plan:

### 1. Service Price Field Security
- **Current**: `<input type="text" id="service-price" name="service-price" class="form-input" required placeholder="Auto-calculated based on service">`
- **Fix**: Add `readonly` attribute and `data-calculated="true"` for security
- **Impact**: Users cannot manually edit prices, preventing financial loss

### 2. QR Code Implementation
- **Location**: Inside the online payment option section
- **Dimensions**: Standard QR code size (200x200px or 150x150px)
- **Features**: 
  - Placeholder for QR code image
  - Proper styling to match payment page design
  - Hidden by default, shown only when online payment is selected
  - Space for "Scan to Pay" instruction

### 3. Code Updates Required:
- **HTML Structure**: Add QR code container and placeholder
- **CSS Styling**: Style QR code section appropriately
- **JavaScript Logic**: Show/hide QR code based on payment method selection
- **Responsive Design**: Ensure QR code works on mobile devices

### 4. Security Enhancements:
- Make service price read-only
- Remove any manual price editing capabilities
- Ensure all pricing comes from predefined service mappings
- Add validation to prevent price manipulation

### 5. User Experience Improvements:
- Clear visual indication when prices are calculated
- Professional QR code display
- Maintain current styling and color scheme
- Mobile-responsive QR code section

## Files to Modify:
- `/Users/techierisy/OnWheel/payment_with_db.html` (primary file)

## Testing Requirements:
- Verify service price cannot be edited
- Test QR code visibility on payment method selection
- Ensure responsive design works on mobile
- Validate price calculation remains accurate
- Check all existing functionality still works

## Expected Outcome:
- Secure payment page with non-editable prices
- Professional QR code display for online payments
- Maintained user experience with enhanced security
- Prevention of potential financial losses from price manipulation
