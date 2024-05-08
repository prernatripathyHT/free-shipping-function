import {
    Box,
    Card,
    Layout,
    Link,
    List,
    Page,
    Text,
    Form,
    Button,
    BlockStack,
    TextField
  } from "@shopify/polaris";

  import { useState, useEffect, useMemo } from "react";
import { json } from  "@remix-run/node";
import {
    useActionData,
    useNavigation,
    useSubmit,
    useLoaderData,
} from "@remix-run/react";
import shopify from "../shopify.server";

// data get
// export const loader = async ({ params, request }) => {

//     const { functionId, id } = params;

//     const functionID = 'b681b03c-a058-4c7c-8237-df05fb1ccc41'

//     console.log('functionID=======', functionID);

//     return {
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             percentage: "40",
//         }),
//       };
// };


// action with data
export const action = async ({ params, request }) => {

    // const { functionId } = params;
    // console.log('functionId test ====>', functionId)
    const { admin } = await shopify.authenticate.admin(request);
    const formData = await request.formData();
    console.log('Shipping Discount Submitted:', formData.get('shipping_discount_percentage'));

    const randomNumber = Math.floor(100000 + Math.random() * 900000)

    const title = `Shipping Discount with Remix ${randomNumber}`
    const functionId = 'b681b03c-a058-4c7c-8237-df05fb1ccc41'


    const shippingDiscountPercentage = formData.get('shipping_discount_percentage')

    const baseDiscount = {
        functionId,
        title,
        startsAt: "2024-05-04T00:00:00"
    };

      const response = await admin.graphql(
        `#graphql
            mutation CreateAutomaticDiscount($discount: DiscountAutomaticAppInput!) {
              discountCreate: discountAutomaticAppCreate(automaticAppDiscount: $discount) {
                userErrors {
                  code
                  message
                  field
                }
              }
            }`,
        {
          variables: {
            discount: {
              ...baseDiscount,
              metafields: [
                {
                  namespace: "$app:shipping-discount",
                  key: "function-configuration",
                  type: "json",
                  value: JSON.stringify({
                    percentage: shippingDiscountPercentage
                  }),
                },
              ],
            },
          },
        }
      );
  
      const responseJson = await response.json();
      const errors = responseJson.data.discountCreate?.userErrors;


      console.log('action output ===>', json({ errors }))

      return json({ errors });


    //return Object.fromEntries(formData.entries());



}


  
export default function ShippingDiscountPage() {
    const loaderData = useLoaderData();
    const actionData = useActionData();

    return (
      <Page>
        <ui-title-bar title="Additional page" />
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="300">
                <Text as="p" variant="bodyMd">
                {/* {loaderData.message} */}
                  <br />
                </Text>
                {/* <Form method="POST">
                    <input name="first_name" />
                    <input name="last_name" />

                    <button>Submit</button>
                </Form> */}
                
                {/* <div>
                    name:{" "}
                    {actionData ? `${actionData.first_name} ${actionData.last_name}` : null}
                </div> */}

                <br />
                <Card>Add Shipping Discount Percentage</Card>

                <form method="POST">
                    <input name="shipping_discount_percentage" />
                    <button>Submit</button>
                </form>


              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
  
 