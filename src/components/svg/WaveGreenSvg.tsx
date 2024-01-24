import { cn } from '@/lib/utils'
import React from 'react'

export default function WaveGreenSvg({
  className
}: {
  className?: string
}) {
  return (
    <svg 
      width="100%" 
      viewBox="0 0 1920 699" 
      fill="none"
      className={cn(
        "",
        className
      )}
      xmlns="http://www.w3.org/2000/svg" 
    >
      <path d="M973.5 126.5C501.713 19.3005 -78.8315 10.4999 -78.8315 126.5L-78.8315 542.863C-31.2559 453.217 227.682 335.684 882.831 582.718C1537.98 829.753 1888.74 603.241 2045.5 618.5C2437.26 640.055 3061.76 -65.8676 2121.5 6.00007C1746 34.701 1407 225 973.5 126.5Z" fill="#E4FFF0"/>
    </svg>
  )
}
