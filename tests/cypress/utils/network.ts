const intercept = {

  getFacetCategories(fixture?: any, as?: string): string {
    const tag = as ?? "getFacetCategories";
    cy.intercept("/api/ctf/getFacetCategories", fixture).as(tag);
    return `@${tag}`;
  },

  getFacetProductProjection(fixture?: any, as?: string): string {
    const tag = as ?? "getFacetProductProjection";
    cy.intercept("/api/ctf/getFacetProductProjection", fixture).as(tag);
    return `@${tag}`;
  },

  getProduct(fixture?: any, as?: string): string {
    const tag = as ?? "getProduct";
    cy.intercept("/api/ct/getProduct", fixture).as(tag);
    return `@${tag}`;
  },

  addToCart(fixture?: any, as?: string): string {
    const tag = as ?? "addToCart";
    cy.intercept("/api/ct/addToCart", fixture).as(tag);
    return `@${tag}`;
  },

  getShippingMethods(fixture?: any, as?: string): string {
    const tag = as ?? "getShippingMethods";
    cy.intercept("/api/ct/getShippingMethods", fixture).as(tag);
    return `@${tag}`;
  }

};

export default intercept;
