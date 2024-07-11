
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://aiDataBase_owner:oONm0CH4eLzD@ep-lingering-cake-a2p8ez4l.eu-central-1.aws.neon.tech/aiDataBase?sslmode=require',
  },
  verbose: true,
  strict: true,
})