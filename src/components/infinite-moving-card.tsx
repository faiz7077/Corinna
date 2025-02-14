// 'use client'

// import { cn } from '@/lib/utils'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'

// const InfiniteMovingCards = () => ({
//   items,
//   direction = 'left',
//   speed = 'fast',
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     href: string
//   }[]
//   direction?: 'left' | 'right'
//   speed?: 'fast' | 'normal' | 'slow'
//   pauseOnHover?: boolean
//   className?: string
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null)
//   const scrollerRef = React.useRef<HTMLUListElement>(null)

//   useEffect(() => {
//     addAnimation()
//   }, [])
  
//   const [start, setStart] = useState(false)
//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children)

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true)
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem)
//         }
//       })

//       getDirection()
//       getSpeed()
//       setStart(true)
//     }
//   }
//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === 'left') {
//         containerRef.current.style.setProperty(
//           '--animation-direction',
//           'forwards'
//         )
//       } else {
//         containerRef.current.style.setProperty(
//           '--animation-direction',
//           'reverse'
//         )
//       }
//     }
//   }
//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === 'fast') {
//         containerRef.current.style.setProperty('--animation-duration', '20s')
//       } else if (speed === 'normal') {
//         containerRef.current.style.setProperty('--animation-duration', '40s')
//       } else {
//         containerRef.current.style.setProperty('--animation-duration', '80s')
//       }
//     }
//   }
//   console.log(items)
//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           ' flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap',
//           start && 'animate-scroll ',
//           pauseOnHover && 'hover:[animation-play-state:paused]'
//         )}
//       >
//         {items.map((item, idx) => (
//           <Image
//             width={170}
//             height={1}
//             src={item.href}
//             alt={item.href}
//             className=" relative rounded-2xl  object-contain opacity-50"
//             key={item.href}
//           />
//         ))}
//       </ul>
//     </div>
//   )
// }
// export default InfiniteMovingCards;
// ?take 2

'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

// Define the props interface for better TypeScript support
interface InfiniteMovingCardsProps {
  items: {
    href: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      setDirection()
      setSpeed()
      setStart(true)
    }
  }

  const setDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }

  const setSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <Image
            width={170}
            height={1}
            src={item.href}
            alt={`Card image ${idx}`}
            className="relative rounded-2xl object-contain opacity-50"
            key={item.href}
          />
        ))}
      </ul>
    </div>
  )
}

export default InfiniteMovingCards;
