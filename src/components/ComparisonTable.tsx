import AffiliateLink from "./AffiliateLink";

interface Product {
  name: string;
  price: number;
  affiliateUrl: string;
  specs: Record<string, string | number>;
  pros: string[];
  cons: string[];
  rating: number;
  badge?: string;
}

interface ComparisonTableProps {
  products: Product[];
  specLabels: Record<string, string>;
  title?: string;
}

/**
 * Tableau de comparaison pour articles comparatifs
 * Optimisé SEO avec schema.org
 */
export default function ComparisonTable({
  products,
  specLabels,
  title = "Comparatif",
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-8">
      <table
        className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm"
        itemScope
        itemType="https://schema.org/Table"
      >
        <caption className="sr-only">{title}</caption>
        <thead>
          <tr className="bg-emerald-600 text-white">
            <th className="p-4 text-left font-semibold">Caractéristique</th>
            {products.map((product) => (
              <th key={product.name} className="p-4 text-center font-semibold">
                <div className="flex flex-col items-center gap-1">
                  {product.badge && (
                    <span className="bg-yellow-400 text-gray-900 text-xs px-2 py-0.5 rounded">
                      {product.badge}
                    </span>
                  )}
                  <span>{product.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Prix */}
          <tr className="border-b border-gray-200 bg-emerald-50">
            <td className="p-4 font-semibold text-gray-900">Prix</td>
            {products.map((product) => (
              <td
                key={product.name}
                className="p-4 text-center font-bold text-emerald-700"
              >
                {product.price.toLocaleString("fr-MA")} DH
              </td>
            ))}
          </tr>

          {/* Specs */}
          {Object.keys(specLabels).map((specKey, index) => (
            <tr
              key={specKey}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="p-4 font-medium text-gray-700">
                {specLabels[specKey]}
              </td>
              {products.map((product) => (
                <td key={product.name} className="p-4 text-center text-gray-600">
                  {product.specs[specKey] ?? "-"}
                </td>
              ))}
            </tr>
          ))}

          {/* Note */}
          <tr className="border-b border-gray-200 bg-white">
            <td className="p-4 font-semibold text-gray-900">Notre note</td>
            {products.map((product) => (
              <td key={product.name} className="p-4 text-center">
                <div className="flex items-center justify-center">
                  <span className="text-lg font-bold text-emerald-600">
                    {product.rating}
                  </span>
                  <span className="text-gray-400">/5</span>
                </div>
              </td>
            ))}
          </tr>

          {/* Points forts */}
          <tr className="border-b border-gray-200 bg-green-50">
            <td className="p-4 font-semibold text-green-800">✓ Points forts</td>
            {products.map((product) => (
              <td key={product.name} className="p-4">
                <ul className="text-sm text-green-700 space-y-1">
                  {product.pros.slice(0, 3).map((pro, i) => (
                    <li key={i}>+ {pro}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Points faibles */}
          <tr className="border-b border-gray-200 bg-red-50">
            <td className="p-4 font-semibold text-red-800">✗ Points faibles</td>
            {products.map((product) => (
              <td key={product.name} className="p-4">
                <ul className="text-sm text-red-700 space-y-1">
                  {product.cons.slice(0, 3).map((con, i) => (
                    <li key={i}>- {con}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* CTA */}
          <tr className="bg-gray-100">
            <td className="p-4"></td>
            {products.map((product) => (
              <td key={product.name} className="p-4 text-center">
                <AffiliateLink
                  href={product.affiliateUrl}
                  productName={product.name}
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Voir le prix →
                </AffiliateLink>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
