/* =========================================================
   MOM'S KITCHEN
   DIRECT WHATSAPP ORDERING
========================================================= */


/*
   Replace this with Mom's WhatsApp number.

   India country code = 91

   Example:
   919876543210

   Do NOT use:
   +
   spaces
   brackets
   -
*/

const WHATSAPP_NUMBER = "919612550590";


/* =========================================================
   OPEN WHATSAPP
========================================================= */

function orderOnWhatsApp(item = "an order") {

    const message = `Hello Mom's Kitchen! 👋

I would like to place an order.

🍽️ Item: ${item}

Please share the available quantity, price and delivery details.

📍 Location: Silchar, Assam

Thank you! ❤️
`;


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank");
}


/* =========================================================
   BULK ORDER
========================================================= */

function bulkOrderOnWhatsApp() {

    const message = `Hello Mom's Kitchen! 👋

I would like to place a BULK ORDER.

🍽️ Food items:
Please let me know the available options.

📦 Approximate quantity:
I will confirm the quantity with you.

📅 Required date:
Please let me know availability.

📍 Location:
Silchar, Assam

Please share the price and bulk-order details.

Thank you! ❤️
`;


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank");
}