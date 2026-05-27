CREATE TYPE "InvitationStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
CREATE TYPE "InvitationResponseType" AS ENUM ('YES', 'MAYBE', 'NO');
CREATE TYPE "NotificationChannel" AS ENUM ('EMAIL', 'PUSH', 'REALTIME');
CREATE TYPE "NotificationStatus" AS ENUM ('PENDING', 'SENT', 'FAILED');

CREATE TABLE "User" (
  "id" TEXT PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "displayName" TEXT NOT NULL,
  "avatarUrl" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "Theme" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "description" TEXT,
  "gradientFrom" TEXT NOT NULL,
  "gradientTo" TEXT NOT NULL,
  "animationKey" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "Invitation" (
  "id" TEXT PRIMARY KEY,
  "uniqueSlug" TEXT NOT NULL UNIQUE,
  "senderId" TEXT NOT NULL,
  "recipientName" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "place" TEXT NOT NULL,
  "scheduledAt" TIMESTAMP(3) NOT NULL,
  "themeId" TEXT,
  "status" "InvitationStatus" NOT NULL DEFAULT 'PUBLISHED',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Invitation_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE,
  CONSTRAINT "Invitation_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE SET NULL
);

CREATE TABLE "InvitationResponse" (
  "id" TEXT PRIMARY KEY,
  "invitationId" TEXT NOT NULL UNIQUE,
  "response" "InvitationResponseType" NOT NULL,
  "note" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "InvitationResponse_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE CASCADE
);

CREATE TABLE "Notification" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "invitationId" TEXT,
  "channel" "NotificationChannel" NOT NULL,
  "status" "NotificationStatus" NOT NULL DEFAULT 'PENDING',
  "payload" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "sentAt" TIMESTAMP(3),
  CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
);

CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");
CREATE INDEX "Invitation_senderId_createdAt_idx" ON "Invitation"("senderId", "createdAt" DESC);
CREATE INDEX "Invitation_scheduledAt_idx" ON "Invitation"("scheduledAt");
CREATE INDEX "Invitation_status_idx" ON "Invitation"("status");
CREATE INDEX "InvitationResponse_response_createdAt_idx" ON "InvitationResponse"("response", "createdAt");
CREATE INDEX "Notification_userId_status_createdAt_idx" ON "Notification"("userId", "status", "createdAt" DESC);
