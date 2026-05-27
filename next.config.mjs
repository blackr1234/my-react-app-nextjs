/** @type {import('next').NextConfig} */

const BASE_PATH = "/my-react-app-nextjs";

const nextConfig = {
	basePath: BASE_PATH,
	output: "export",
	env: {
		NEXT_PUBLIC_BASE_PATH: BASE_PATH,
	},
};

export default nextConfig;
