import ErrorHandler from "@/components/errors/ErrorHandler";
import { getMainPage } from "@/lib/queries/main";
import Events from "./(mainPage)/Events";
import Books from "./(mainPage)/Books";
import Methodologicals from "./(mainPage)/Methodologicals";
import WaveRedSvg from "@/components/svg/WaveRedSvg";
import BooksSvg from "@/components/svg/BooksSvg";
import Projects from "./(mainPage)/Projects";
import News from "./(mainPage)/News";

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
      <section className="hero w-full text-center mt-6 relative overflow-hidden">
        <h1 className="mt-6 px-6 mx-auto font-NotoSerif font-semibold 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-2xl text-xl">{dataResult.value.title}</h1>
        <h2 className="mx-auto mt-6 max-w-[18rem] font-Raleway font-normal lg:text-base sm:text-sm text-xs">{dataResult.value.subTitle}</h2>
        <BooksSvg className='xl:w-full lg:w-[150%] w-[200%] absolute bottom-0 left-1/2 -translate-x-1/2' />
      </section>

      <Events />

      <Books />

      <Projects />

      <div className="relative w-full">
        <WaveRedSvg className="w-full absolute lg:bottom-80 sm:bottom-96 min-[2000px]:hidden sm:block hidden left-1/2 -translate-x-1/2 opacity-70 dark:opacity-[0.02] -z-10" />
      </div>

      <Methodologicals />

      <News />
    </main>
  )
}
