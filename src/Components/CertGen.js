

import React from 'react'
import { Document, Page, Image, Text } from "@react-pdf/renderer";

const CertGen = () => {
  <Document>
    <Page>
      <Image src="path/to/your/image/template.jpg" />
      <Text>This is a dynamic text.</Text>
    </Page>
  </Document>;
}

export default CertGen