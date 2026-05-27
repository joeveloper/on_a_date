import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.theme.upsert({
    where: { name: 'Midnight Neon' },
    update: {},
    create: {
      name: 'Midnight Neon',
      description: 'Dark gradient with cinematic reveal animations.',
      gradientFrom: '#0F172A',
      gradientTo: '#581C87',
      animationKey: 'cinematic-reveal-v1',
    },
  });
}

void main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
