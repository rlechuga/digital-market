import { publicProcedure, router } from './trpc'

import { authRouter } from './auth-router'

// this will be our backend
export const appRouter = router({
  auth: authRouter,
})

export type AppRouter = typeof appRouter
