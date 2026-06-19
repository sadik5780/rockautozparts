# Build and run in a clean, controlled Node environment. The default deploy
# sandbox resolves a duplicate React during the build-time prerender worker,
# which crashes static generation ("Cannot read properties of null (reading
# 'useContext')" and "<Html> should not be imported outside of pages/_document").
# A standard node image builds this project cleanly (verified), so building
# inside the image avoids the broken sandbox entirely.
FROM node:20-slim AS base
WORKDIR /app
ENV NODE_ENV=production

# Install dependencies against the committed lockfile (single, deduped React).
COPY package.json package-lock.json ./
RUN npm ci

# Build the app.
COPY . .
RUN npm run build

EXPOSE 3000
ENV PORT=3000
# Build artifacts (.next) already exist from the RUN above, so just serve.
CMD ["npx", "next", "start"]
