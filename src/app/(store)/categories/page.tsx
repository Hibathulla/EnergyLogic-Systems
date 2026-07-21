import CategoryCard from "@/components/store/CategoryCard";
import PageLayout from "@/layouts/pageLayout";

export default function Page() {
  return (
    <PageLayout>
      <h1 className="laptop:text-[46px] text-[46px] font-extrabold text-(--primary-color)">
        Our Categories
      </h1>

      <div className="tablet:grid-cols-3 mt-14 grid auto-rows-[140px] grid-cols-[1fr] gap-10.25">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </PageLayout>
  );
}
