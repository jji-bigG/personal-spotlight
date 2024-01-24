import PhotoCarousel from '@/components/PhotoCarousel'
import PhotosLayout from '@/components/PhotosLayout'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import React from 'react'

const photos = [
  'bailey1.jpeg',
  'waterfall2.jpeg',
  'lot.JPG',
  'pier.JPG',
  'gws3.jpeg',
  'waterfall1.jpeg',
  'bailey2.jpeg',
]

export default function Gallery() {
  return (
    <PhotosLayout>
      <PhotoCarousel items={photos.map((p) => '/photos/featured/' + p)} />

      <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((p) => (
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={'/photos/featured/' + p}
              alt=""
            />
          </div>
        ))}
      </div>
    </PhotosLayout>
  )
}
