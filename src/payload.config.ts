// import { Media } from './collections/Media'
// import { Orders } from './collections/Orders'
// import { ProductFiles } from './collections/ProductFile'
// import { Products } from './collections/Products/Products'
// import { Users } from './collections/Users'
import { buildConfig } from 'payload/config'
import dotenv from 'dotenv'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import path from 'path'
import { slateEditor } from '@payloadcms/richtext-slate'
import { webpackBundler } from '@payloadcms/bundler-webpack'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  // collections: [Users, Products, Media, ProductFiles, Orders],
  collections: [],
  routes: {
    admin: '/sell',
  },
  admin: {
    // user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Digital Market place',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
