import * as storage from './utils/storage'

// override settings
storage.set('cms.preview-visible', false)
storage.set('netlify-cms.entries.sort', {
  ...storage.get('netlify-cms.entries.sort'),
  event: { eventDate:{ key:'eventDate', direction: 'Descending', index: 0 } },
})

