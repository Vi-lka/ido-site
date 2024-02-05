import { getSearchAll } from '@/lib/queries/main';
import ErrorHandler from '../errors/ErrorHandler';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import NotFound from '../errors/NotFound';
import { getDateName, getShortDescription } from '@/lib/utils';
import ImgItem from '../thumbnails/ImgItem';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ScrollArea } from '../ui/scroll-area';
import ImageComponent from '../thumbnails/ImageComponent';
import IconBooksSvg from '../svg/IconBooksSvg';

export default async function SearchContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const search = searchParams["searchAll"] as string | undefined;

  if (!search || search.length === 0) return null
  
  const [ dataResult ] = await Promise.allSettled([
    getSearchAll(search),
  ]);
  if (dataResult.status === "rejected")
    return (
      <>
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Search All"
          notFound
          goBack
        />
      </>
    )

  const eventsCount = dataResult.value.events.data.length
  const methodResourcesCount = dataResult.value.methodResources.data.length
  const booksCount = dataResult.value.books.data.length
  const newsCount = dataResult.value.news.data.length
  const projectsCount = dataResult.value.projects.data.length

  const tabs = [
    {value: "events", name: "События", count: eventsCount},
    {value: "methodResources", name: "Методические ресурсы", count: methodResourcesCount},
    {value: "books", name: "Библиотека", count: booksCount},
    {value: "news", name: "Новости", count: newsCount},
    {value: "projects", name: "Проекты", count: projectsCount},
  ]

  const maxCount = Math.max(eventsCount, methodResourcesCount, booksCount, newsCount, projectsCount)
  let maxTab = '';

  for (const item of tabs) {
    if (item.count === maxCount) {
      maxTab = item.value
    }
  }

  if (maxCount === 0) return <NotFound goBack={false} />

  return (
    <Tabs key={Math.random()} defaultValue={maxTab} className='w-full h-[90%] flex flex-col font-Raleway'>
      <TabsList className='w-full h-fit flex justify-around flex-wrap lg:gap-1'>
        {tabs.map((item, index) => {
          if (item.count === 0) return null
          return (
            <TabsTrigger 
              key={index}
              value={item.value} 
              className='font-Raleway text-sm lg:py-2 lg:px-4 border-[1px] border-transparent data-[state=active]:border-primary cursor-pointer'
            >
              {`${item.name} (${item.count})`}
            </TabsTrigger>
          )
        })}
      </TabsList>

      <ScrollArea type='always' className="w-full rounded-md bg-background h-full" classNameViewport="max-h-full mt-2">
        <TabsContent value="events">
            {dataResult.value.events.data.map(event => {
              const dateName = getDateName({
                day: event.attributes.date.day,
                month: event.attributes.date.month,
                year: event.attributes.date.year,
              })
              const dateArray = dateName.split(' ');
              const monthName = dateArray[1]
              const yearName = dateArray[2] + ' ' + dateArray[3]
            
              return (
                <div key={event.id} className="flex lg:flex-row flex-col items-start justify-between lg:gap-8 gap-3 mt-6 mb-12">
                  <div className="flex items-start lg:justify-around gap-8 lg:w-1/3 w-full">
                    <div className="font-Raleway w-fit flex flex-col gap-2 items-center">
                      <h2 className="lg:text-4xl text-3xl font-semibold w-max">{event.attributes.date.day}</h2>
                      <h3 className="lg:text-base text-sm w-max">{monthName}</h3>
                      <h3 className="lg:text-lg text-base font-semibold w-max">{yearName}</h3>
                    </div>
              
                    <ImgItem
                      href={`/events/${event.id}`}
                      src={event.attributes.image.data?.attributes.url}
                      title={null}
                      className="lg:w-1/2 w-1/3 max-w-sm"
                    />
                  </div>
              
                  <div className="font-Raleway flex flex-col justify-between gap-3 lg:w-3/4 w-full h-full">
                    <div className="font-Raleway flex flex-col gap-1 w-full">
                      <Link href={`/events/${event.id}`} className="hover:text-primary transition-all">
                        <h1 className="font-bold text-base">{event.attributes.title}</h1>
                      </Link>
                      <h2 className="text-primary mb-3 text-sm">{event.attributes.category?.data?.attributes.title}</h2>
                      {/* Desktop */}
                      <p className="whitespace-pre-line sm:block hidden text-xs">{event.attributes.description}</p>
                      {/* Mobile */}
                      <p className="whitespace-pre-line sm:hidden block text-xs">{getShortDescription(event.attributes.description)}</p>
                    </div>
                    <Link href={`/events/${event.id}`} passHref className='w-fit h-fit mb-2'>
                      <Button className='font-Raleway font-semibold text-sm lg:px-10 px-8 py-4 hover:bg-primary/90'>
                        Читать далее
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
        </TabsContent>
        <TabsContent value="methodResources">
          <div className="mx-auto my-12 grid w-[85%] grid-cols-1 gap-16 md:w-full">
            {dataResult.value.methodResources.data.map(method => (
                <div key={method.id} className="flex lg:flex-row flex-col items-center justify-between gap-6">
                  <div className="flex items-center lg:w-1/6 w-full lg:justify-normal justify-center">
                    {method.attributes.image.data ?
                        <Link href={`/methodological/${method.attributes.section.data?.attributes.slug}/${method.id}`} className="aspect-square w-full lg:max-w-[180px] max-w-[140px] rounded-full overflow-hidden hover:ring ring-ring ring-offset-2 transition-all duration-200 break-inside-avoid outline outline-2 outline-offset-0 outline-accent ml-2">
                            <ImageComponent
                              src={method.attributes.image.data?.attributes.url}
                              alt={method.attributes.title}
                              fill={false}
                              width={180}
                              height={180}
                              priority
                              className="w-full h-full object-cover"
                            />
                        </Link>
                      : (
                      <Link href={`/methodological/${method.attributes.section.data?.attributes.slug}/${method.id}`} className="aspect-square w-full lg:max-w-[160px] max-w-[120px] hover:scale-105 transition-all duration-200">
                        <IconBooksSvg className='w-full h-full' />
                      </Link>
                    )}
                  </div>
                      
                  <div className="font-Raleway flex flex-col justify-between gap-6 w-full h-full">
                    <div className="font-Raleway flex flex-col gap-1 w-full">
                      <Link href={`/methodological/${method.attributes.section.data?.attributes.slug}/${method.id}`} className="hover:text-primary transition-all">
                        <h1 className="font-bold text-base">{method.attributes.title}</h1>
                      </Link>
                      {method.attributes.description && (<>
                        {/* Desktop */}
                        <p className="whitespace-pre-line sm:block hidden text-xs">{method.attributes.description}</p>
                        {/* Mobile */}
                        <p className="whitespace-pre-line sm:hidden block text-xs">{getShortDescription(method.attributes.description)}</p>
                      </>)}
                    </div>
                    <Link href={`/methodological/${method.attributes.section.data?.attributes.slug}/${method.id}`} passHref className='w-fit h-fit mb-2'>
                      <Button className='font-Raleway font-semibold text-sm lg:px-10 px-8 py-4 hover:bg-primary/90'>
                        Открыть
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </TabsContent>
        <TabsContent value="books">
          <div className="mx-auto my-12 grid w-[85%] grid-cols-1 gap-6 md:w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[3000px]:grid-cols-5 min-[4000px]:grid-cols-6">
            {dataResult.value.books.data.map(book => (
              <ImgItem
                key={book.id}
                href={`/library/${book.attributes.section.data?.attributes.slug}/${book.id}`}
                src={book.attributes.image.data?.attributes.url}
                title={book.attributes.title}
                width={200}
                height={200}
                className='max-w-[200px] mx-auto'
                classNameParagraph='text-xs lg:text-sm'
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="news">
          <div className="mx-auto my-12 grid w-[85%] grid-cols-1 gap-6 md:w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[3000px]:grid-cols-5 min-[4000px]:grid-cols-6">
            {dataResult.value.news.data.map(news => {
              const date = new Date(news.attributes.date);
                const dateName = date.toLocaleString('ru', { day: "numeric", month: 'long', year: "numeric" });
            
              return (
                <ImgItem
                  key={news.id}
                  href={`/news/${news.id}`}
                  src={news.attributes.image.data?.attributes.url}
                  title={news.attributes.title}
                  objectContain
                  width={200}
                  height={200}
                  className='max-w-[200px] mx-auto'
                  classNameParagraph='text-xs lg:text-sm'
                >
                  <p className="font-Raleway text-sm text-primary">{dateName}</p>
                </ImgItem>
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value="projects">
          <div className="mx-auto my-12 grid w-[85%] grid-cols-1 gap-16 md:w-full">
            {dataResult.value.projects.data.map(project => (
                <div key={project.id} className="flex lg:flex-row flex-col items-start justify-between lg:gap-6 gap-3">
                  <div className="flex items-start justify-around lg:w-2/5 w-full">
                    <ImgItem
                      href={`/projects/${project.id}`}
                      src={project.attributes.image.data?.attributes.url}
                      title={null}
                      className="lg:w-4/6 w-1/2 max-w-md"
                    />
                  </div>
            
                  <div className="font-Raleway flex flex-col justify-between gap-6 w-full h-full">
                    <div className="font-Raleway flex flex-col gap-1 w-full">
                      <Link href={`/projects/${project.id}`} className="hover:text-primary transition-all">
                        <h1 className="font-bold text-base">{project.attributes.title}</h1>
                      </Link>
                      {project.attributes.description && (<>
                        {/* Desktop */}
                        <p className="whitespace-pre-line sm:block hidden text-xs">{getShortDescription(project.attributes.description, 50)}</p>
                        {/* Mobile */}
                        <p className="whitespace-pre-line sm:hidden block text-xs">{getShortDescription(project.attributes.description)}</p>
                      </>)}
                    </div>
                    <Link href={`/projects/${project.id}`} passHref className='w-fit h-fit mb-2'>
                      <Button className='font-Raleway font-semibold text-sm lg:px-10 px-8 py-4 hover:bg-primary/90'>
                        Читать далее
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </TabsContent>
      </ScrollArea>
    </Tabs>
  )
}