import FeaturesPage from "@/components/Features/FeaturesPage";
export default async function Page({ params }: any) {
  const { name } = await params;
return <FeaturesPage name={name}/>
}
