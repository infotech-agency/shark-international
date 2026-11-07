/** Shared browser event used by sector links and the enquiry form. */
export const ENQUIRY_PRODUCT_EVENT = 'product-select';

export function selectEnquiryProduct(product: string): void {
  window.dispatchEvent(new CustomEvent<string>(ENQUIRY_PRODUCT_EVENT, { detail: product }));
}
