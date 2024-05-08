import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { authenticate } from "../shopify.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  console.log('loading main data')
  await authenticate.admin(request);

  // return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });

  return json({ apiKey: process.env || "" });
};

export default function App() {
  const { apiKey } = useLoaderData();

  var shippingDiscountURL = `/app/shipping-discount/${apiKey.SHOPIFY_SHIPPING_DISCOUNT_REMIX_ID}/new`;
  // var shippingDiscountURL = `/app/shipping-discount`;

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey.SHOPIFY_API_KEY}>
      <ui-nav-menu>
        <Link to="/app" rel="home">
          Home
        </Link>
        <Link to="/app/additional">Additional page</Link>
        <Link to={shippingDiscountURL} rel="shipping-discount">Free Shipping</Link>
      </ui-nav-menu>
      <Outlet />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
