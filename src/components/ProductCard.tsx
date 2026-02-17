import Image from "next/image";
import Link from "next/link";
import AffiliateLink from "./AffiliateLink";

interface ProductCardProps {
  name: string;
  slug: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: string;
  affiliateUrl: string;
  badge?: string;
}

export default function ProductCard({
  name,
  slug,
  image,
  price,
  originalPrice,
  rating,
  category,
  affiliateUrl,
  badge,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {badge}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <span className="text-xs text-emerald-600 font-medium uppercase tracking-wide">
          {category}
        </span>

        {/* Name */}
        <h3 className="mt-1 font-semibold text-gray-900 line-clamp-2">
          <Link href={`/produits/${slug}`} className="hover:text-emerald-600">
            {name}
          </Link>
        </h3>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? "fill-current" : "fill-gray-300"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-500">({rating})</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">
            {price.toLocaleString("fr-MA")} DH
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice.toLocaleString("fr-MA")} DH
            </span>
          )}
        </div>

        {/* CTA */}
        <AffiliateLink
          href={affiliateUrl}
          productName={name}
          className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors inline-block"
        >
          Voir le prix →
        </AffiliateLink>
      </div>
    </article>
  );
}
