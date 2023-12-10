import ErrorHandler from "@/components/errors/ErrorHandler";
import { getMainPage } from "@/lib/queries/main-page";
import BooksSvg from '@/components/BooksSvg';
import Events from "./(mainPage)/Events";
import Books from "./(mainPage)/Books";

export default async function Home() {

  const [ dataResult ] = await Promise.allSettled([ getMainPage() ]);
  if (dataResult.status === "rejected")
    return (
      <ErrorHandler
        error={dataResult.reason as unknown}
        place="Main Page"
        notFound
        goBack={false}
      />
    );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <section className="w-full text-center mt-6 h-[80dvh] relative overflow-hidden">
        <h1 className="mt-6 px-6 mx-auto font-NotoSerif font-semibold 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-2xl text-xl">{dataResult.value.title}</h1>
        <h2 className="mx-auto mt-6 max-w-[18rem] font-Raleway font-normal lg:text-base sm:text-sm text-xs">{dataResult.value.subTitle}</h2>
        <BooksSvg className='xl:w-full lg:w-[150%] w-[200%] absolute bottom-0 left-1/2 -translate-x-1/2' />
      </section>

      <Events />

      <Books />
    </main>
  )
}
