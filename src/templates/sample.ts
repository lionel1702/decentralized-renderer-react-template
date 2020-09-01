import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "OpenAttestation Tutorial Certificate of Completion",
  recipient: {
    name: "Lim Gin Keat"
  },
  $template: {
    name: "COC",
    type: "v2.TemplateType.EmbeddedRenderer",
    url: "http://localhost:3000"
  }
};