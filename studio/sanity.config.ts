import { defineConfig } from 'sanity'

export default defineConfig({
  name: 'm5v-corp',
  title: 'm5v-corp',
  projectId: 'eddugmcj',
  dataset: 'production',

  // no imports, no plugins, no schemaTypes at all
  schema: {
    types: []
  }
})
