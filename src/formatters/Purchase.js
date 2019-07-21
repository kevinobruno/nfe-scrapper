class PurchaseFormatter {
  details(purchase) {
    const invoice = {
      id: purchase.invoice.id,
      number: purchase.invoice.number,
      serie: purchase.invoice.serie,
      accessKey: purchase.invoice.accessKey,
      issueDate: purchase.invoice.issueDate,
    };
  
    const products = purchase.products.map(product => ({
      id: product.id,
      code: product.code,
      description: product.description,
      value: product.value,
      unity: product.unity,
      quantity: product.PurchaseProduct.quantity,
    }));

    const response = {
      id: purchase.id,
      totalSpent: purchase.getTotalSpent(products),
      purchasedAt: purchase.purchasedAt,
      invoice,
      products,
    };

    return response;
  }

  list(purchases) {
    return purchases.map(purchase => this.details(purchase));
  }
}

module.exports = new PurchaseFormatter();
