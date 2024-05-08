import {
    Box,
    Card,
    Layout,
    Link,
    List,
    Page,
    Text,
    BlockStack,
  } from "@shopify/polaris";
  
  export default function TestPage() {
    return (
      <Page>
        <ui-title-bar title="Test page" />
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="300">
                <Text as="p" variant="bodyMd">
                  This is a test page.
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
          
        </Layout>
      </Page>
    );
  }
  
  function Code({ children }) {
    return (
      <Box
        as="span"
        padding="025"
        paddingInlineStart="100"
        paddingInlineEnd="100"
        background="bg-surface-active"
        borderWidth="025"
        borderColor="border"
        borderRadius="100"
      >
        <code>{children}</code>
      </Box>
    );
  }
  