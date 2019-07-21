class PurchaseFormatter {
  details(purchase) {
    const { invoice, products } = purchase;

    const response = {
      id: purchase.id,
      purchasedAt: purchase.purchasedAt,
    };

    if (invoice) {
      response.invoice = {
        id: invoice.id,
        number: invoice.number,
        serie: invoice.serie,
        accessKey: invoice.accessKey,
        issueDate: invoice.issueDate,
      };
    }

    if (products) {
      response.products = products.map(product => ({
        id: product.id,
        code: product.code,
        description: product.description,
        value: product.value,
        unity: product.unity,
        quantity: product.PurchaseProduct.quantity,
      }));
    };

    return response;
  }

  list(purchases) {
    return purchases.map(purchase => this.details(purchase));
  }
}

module.exports = new PurchaseFormatter();
