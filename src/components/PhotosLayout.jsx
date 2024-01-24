import React from 'react'
import { SimpleLayout } from './SimpleLayout'
import Link from 'next/link'

export default function PhotosLayout({ children }) {
  return (
    <SimpleLayout
      title={'Photos Gallery'}
      intro={`The proud photos I have taken around the United States and China.`}
    >
      <div class="flex flex-wrap items-center justify-center py-1 md:py-2">
        <Link
          type="button"
          class="mb-3 me-3 rounded-full border border-blue-600 bg-white px-5 py-2.5 text-center text-base font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:bg-gray-900 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          href={'/photos'}
        >
          Featured
        </Link>
        <Link
          type="button"
          class="mb-3 me-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800"
          href={'/photos/cornell'}
        >
          Cornell
        </Link>
        <Link
          type="button"
          class="mb-3 me-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800"
          href={'/photos/roadtrips'}
        >
          Roadtrips
        </Link>
        <Link
          type="button"
          class="mb-3 me-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800"
          href={'/photos/city'}
        >
          City
        </Link>
        <Link
          type="button"
          class="mb-3 me-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800"
          href={'/photos/animals'}
        >
          Animals
        </Link>
      </div>

      {children}
    </SimpleLayout>
  )
}
