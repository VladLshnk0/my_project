import { getCompanyBySlug } from "@/utils/fetchers/getCompanyBySlug";
import MainContent from "./components/MainContent";
import ReloadComponent from "@/utils/components/ReloadComponent";

export default async function page({ params }: { params: { slug: string } }) {
  const company = await getCompanyBySlug(params.slug);
  return (
    <div className="">
      {
        company ? 
        <div className="w-full">
          <MainContent props={company} />
          <ReloadComponent />
        </div> :
          <h1>Company not found</h1>
      }
    </div>
  );
}