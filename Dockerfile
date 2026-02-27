# 1. Stage ديال الـ Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# 2. Stage ديال الـ Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# ⚠️ حط الرابط ديال الباكيند هنا وقت الـ Build
ENV NEXT_PUBLIC_API_URL=https://ashghal-backend-production.up.railway.app
RUN npm run build

# 3. Stage ديال الـ Runner
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]