import SearchContent from "@/components/search/SearchContent";
import SearchField from "@/components/search/SearchField";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function SearchPageDrawer({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {

  return (
    <>
      <div className="flex items-center gap-3">
        <SearchField placeholder="Найти..." className="flex-1" />
      </div>

      <Suspense fallback={
        <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
          <Loader2 className="mx-auto h-12 w-12 animate-spin" />
        </div>
      }>
        <SearchContent searchParams={searchParams}/>
      </Suspense>
    </>
  )
}