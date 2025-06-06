# WhatsApp Integration Setup

## How to Configure Your WhatsApp Number

To set up WhatsApp integration for your shoes and watches website, you need to update the WhatsApp number in the following files:

### 1. ProductCard Component
**File:** `src/Components/ProductCard.jsx`
**Line:** 19
```javascript
const whatsappNumber = "+1234567890" // Replace with your actual WhatsApp number
```

### 2. Home Page
**File:** `src/Pages/Home.jsx`
**Line:** 11
```javascript
const whatsappNumber = "+1234567890" // Replace with your actual WhatsApp number
```

## WhatsApp Number Format

Use international format without spaces or special characters:
- ✅ Correct: `+1234567890`
- ✅ Correct: `+919876543210`
- ❌ Wrong: `+1 (234) 567-890`
- ❌ Wrong: `+91 98765 43210`

## How It Works

When customers click "Buy Now" or "Contact" buttons:
1. A pre-filled WhatsApp message opens
2. The message includes the product name
3. Different messages for "Buy Now" vs "Contact"
4. Opens in a new tab/window

## Example Messages

**Buy Now Button:**
```
Hi! I'm interested in buying the Nike Air Max 270. Could you please provide more details about pricing and availability?
```

**Contact Button:**
```
Hi! I'd like to know more about the Nike Air Max 270. Can you help me with details?
```

## Testing

To test the integration:
1. Update the phone number
2. Click any "Buy Now" or "Contact" button
3. Verify WhatsApp opens with correct message
4. Check that the product name appears in the message

## Note

Make sure your WhatsApp number:
- Is active and can receive messages
- Has WhatsApp Business (recommended) for professional appearance
- Can handle customer inquiries effectively 