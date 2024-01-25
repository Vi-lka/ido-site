import type { DynamicZoneT } from '@/lib/types/entity-types'
import React from 'react'
import RichText from './RichText'
import SliderComponent from './SliderComponent'
import EmbededHTML from './EmbededHTML'
import VideoComponent from './VideoComponent'
import FilesList from './FilesList'

export default function DynamicZone({
    item
}: {
    item: DynamicZoneT
}) {
  return (
    item.__typename === "ComponentCustomRichText"
      ? (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <RichText title={item.title} text={item.text} />
      )
    : item.__typename === "ComponentCustomSlider"
      ? (
        <SliderComponent title={item.title} images={item.images} classNameSlider='lg:w-4/5 mx-auto' />
      )
    : item.__typename === "ComponentCustomVideoEmbed"
      ? (
        <EmbededHTML title={item.title} elem={item.embed} classNameEmbeded="lg:w-4/5 mx-auto" />
      )
    : item.__typename === "ComponentCustomVideo"
      ? (
        <VideoComponent title={item.title} video={item.video} classNameVideo="lg:w-4/5 mx-auto" />
      )
    : item.__typename === "ComponentCustomFilesList"
      ? (
        <FilesList title={item.title} list={item.list} />
      )
    : null
  )
}
