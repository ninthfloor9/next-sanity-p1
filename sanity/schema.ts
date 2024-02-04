import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import post2 from './schemas/post2'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, post2],
}
