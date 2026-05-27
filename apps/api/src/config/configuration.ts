export default () => ({
  app: {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: Number(process.env.API_PORT ?? 4000),
    frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET ?? 'dev-only-secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    magicLinkSecret: process.env.MAGIC_LINK_SECRET,
  },
  notifications: {
    emailFrom: process.env.NOTIFICATION_EMAIL_FROM ?? 'noreply@crushly.app',
  },
});
