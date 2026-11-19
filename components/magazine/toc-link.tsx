'use client'

import type { ReactNode } from 'react'
import { useBook } from './flip-book'

export function TocLink({
  pageIndex,
  className,
  children,
}: {
  pageIndex: number
  className?: string
  children: ReactNode
}) {
  const { goToPage } = useBook()
  return (
    <button type="button" className={className} onClick={() => goToPage(pageIndex)}>
      {children}
    </button>
  )
}
