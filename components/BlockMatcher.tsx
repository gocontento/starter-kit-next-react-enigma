'use client'

import { useId } from 'react'
import { BlockData } from '@gocontento/client'
import Hero from './blocks/Hero'
import Text from './blocks/Text'
import ImageAndText from './blocks/ImageAndText'
import ImageBlock from './blocks/ImageBlock'
import Form from './blocks/Form'

export default function BlockMatcher({ blocks }: { blocks: BlockData[] }) {
  const id = useId()

  return blocks.map((block: BlockData, index) => {
    switch (block.content_type.handle) {
      case 'hero':
        return <Hero key={id + '-' + index} block={block} />

      case 'text':
        return <Text key={id + '-' + index} block={block} />

      case 'image_and_text':
        return <ImageAndText key={id + '-' + index} block={block} />

      case 'image':
        return <ImageBlock key={id + '-' + index} block={block} />

      case 'form':
        return <Form key={id + '-' + index} block={block} />

      default:
        return (
          <div className="py-16">
            <div
              key={id + '-' + index}
              className="prose max-w-none border-t-8 border-red-400 bg-zinc-100 p-4"
            >
              <h2 className="mb-0 text-red-400">
                Invalid block - {block.content_type.name}
              </h2>
              <p>
                Please check you have added the block to the block matcher and
                the case matches the{' '}
                <span className="font-semibold">content_type.handle</span>
              </p>

              <pre className="max-h-[40vh]">
                {JSON.stringify(block, null, '  ')}
              </pre>
            </div>
          </div>
        )
    }
  })
}
