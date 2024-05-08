/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").ProductVariant} ProductVariant
 */

/**
 * @type {FunctionRunResult}
 */
const EMPTY_DISCOUNT = {
  discounts: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */


export function run(input) {

  const configuration = JSON.parse(
    input?.discountNode?.metafield?.value ?? "{}"
  );

  console.log('configuration percentage', configuration.percentage)


  // Get the subtotal amount from the cart
  const subtotalAmount = parseFloat(input.cart.cost.subtotalAmount.amount);

  console.log('targets', input.cart.deliveryGroups[0].deliveryOptions[0].handle);

  const targetObject = [
    {
      "deliveryOption": {
        "handle": input.cart.deliveryGroups[0].deliveryOptions[0].handle
      }
    }
  ];

  console.log('targetObject', targetObject);

  let cartContainsSubscriptionItem = false;
  let hasTagFreeShip = false;

  input.cart.lines.forEach(cartLine => {
    console.log(cartLine.sellingPlanAllocation?.sellingPlan?.recurringDeliveries);
    console.log('hasFreeShipTag', cartLine.merchandise.__typename === "ProductVariant" && cartLine.merchandise.product.hasAnyTag);

    if (cartLine.sellingPlanAllocation?.sellingPlan?.recurringDeliveries) {
      cartContainsSubscriptionItem = true;
    }

    if (cartLine.merchandise.__typename === "ProductVariant" && cartLine.merchandise.product.hasAnyTag) {
      hasTagFreeShip = true;
    }
  });

  console.log('cartContainsSubscriptionItem', cartContainsSubscriptionItem);

  // Check if the subtotal is greater than 1500
  if (subtotalAmount > 1500.0 || cartContainsSubscriptionItem || hasTagFreeShip) {
    // Return free shipping discount
    return {
      discounts: [
        {
          targets: targetObject,
          value: {
            percentage: {
              value: configuration.percentage ? configuration.percentage : 100
            },
          },
          message: configuration.percentage ? 'Shipping Discount Applied' : 'Free Shipping Discount'
        }
      ]
    };
  } else {
    // Return empty discounts if subtotal is not greater than 1500
    return {
      discounts: []
    };
  }
}