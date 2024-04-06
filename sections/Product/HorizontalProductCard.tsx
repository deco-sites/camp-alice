import type { Product } from "apps/commerce/types.ts";
import { HorizontalProductCard } from "$components/product/HorizontalProductCard.tsx";
import { asset } from "$fresh/runtime.ts";
import { clx } from "deco-sites/camp-alice/sdk/clx.ts";

export interface HorizontalProductSectionProps {
  products: Product[] | null;
  animation?: boolean;
  layout:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
}

export function loader(props: HorizontalProductSectionProps, _req: Request) {
  // throw new Error("Not implemented");

  return props;
}

// export function loader(props) {
//   throw new Error();

//   return props;
// }

const HorizontalProductSection = ({
  products,
  animation,
  layout,
}: HorizontalProductSectionProps) => {
  if (!products?.length) return null;

  return (
    <div
      class={clx(
        "container flex items-center justify-center gap-x-4 flex-wrap py-4 w-full bg-neutral-content p-2 sm:p-4 md:p-6 rounded-xl",
        layout,
      )}
    >
      {products.map((product) => (
        <HorizontalProductCard animation={animation} product={product} />
      ))}
    </div>
  );
};

export function LoadingFallback() {
  // Renderer spinners, skeletons and other placeholder
  return (
    <div class="container flex justify-center py-4">
      <div class="flex max-sm:flex-col gap-4">
        <div class="skeleton h-52 w-52 shrink-0"></div>
        <div class="px-2 flex flex-col gap-1 self-stretch shrink-0 w-64">
          <div class="skeleton h-4"></div>
          <div class="skeleton h-4 w-full mb-auto"></div>
          <div class="skeleton h-4 w-14"></div>
          <div class="skeleton h-4 w-18 mb-4"></div>
          <div class="skeleton h-12 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export function ErrorFallback({ error: _error, ...props }: { error?: Error }) {
  console.log(props);
  return (
    <div class="flex flex-col mx-auto max-w-96">
      <img
        src={asset("/image/moqueca.jpg")}
        alt={"a"}
        height={400}
        width={400}
      />
      <p>dasdasd</p>
      <p>ddasdasdas</p>
      <a href="/cultura" class="btn btn-block">
        "Para Saber mais"
      </a>
    </div>
  );
}

export default HorizontalProductSection;
