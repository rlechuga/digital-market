import { Access, CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token}) => {
        return `
          <div>
            <h1>Verify your email</h1>
            <a href="http://localhost:3000/verify-email?token=${token}">Verify</a>
          </div>
        `
      }
    }
  },
  access: {
    read: (): boolean => true,
    create: (): boolean => true,
  },
  fields: [
    {
      name: 'role',
      required: true,
      defaultValue: 'user',
      // admin: {
      //   condition: (): boolean => false,
      // },
      type: 'select',
      options: [
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
    },
  ],
}
