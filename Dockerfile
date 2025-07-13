# Gunakan Node.js versi 16 agar cocok dengan dependency
FROM node:16

# Set direktori kerja
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies dengan mengabaikan konflik peer deps
RUN npm install --legacy-peer-deps

# Salin seluruh project
COPY . .

# Buka port React (dev server)
EXPOSE 3000

# Jalankan React dev server (listen dari luar container)
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
