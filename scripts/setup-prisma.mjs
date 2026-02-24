import { execSync } from 'child_process';

console.log('[v0] Starting Prisma setup...');

try {
  // Generate Prisma client
  console.log('[v0] Generating Prisma client...');
  execSync('npx prisma generate', {
    stdio: 'inherit',
  });
  
  console.log('[v0] Prisma client generated successfully!');
} catch (error) {
  console.error('[v0] Error setting up Prisma:', error.message);
  process.exit(1);
}
