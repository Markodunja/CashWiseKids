import { PageContainer } from "@/components/layout/PageContainer";
import { ProductGrid } from "@/components/store/ProductGrid";
import { CartSummary } from "@/components/store/CartSummary";

export default function StorePage() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-2xl font-bold text-navy">Store</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProductGrid />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </PageContainer>
  );
}
