import { enhance, handle } from '@grrr/hansel'
// import { enhancer as fooEnhancer, handler as fooHandler } from './foo';

enhance(document.documentElement, {
  // fooEnhancer,
})

handle(document.documentElement, {
  // fooHandler,
})
