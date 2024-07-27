import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			'/graphql': 'http://localhost:4000', // Forward /graphql requests to the backend
		  },
	},
});