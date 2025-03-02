

const config = {
    darkMode: ["class"],
    content: [
       
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "475px",
			    md: "768px",
				lg: "1024px",
            },
            colors:{
                blue :'#2997FF',
                gray: {
                    DEFAULT: "#86868b",
                    100: "#94928d",
                    200: "#afafaf",
                    300: "#42424570",
                  },
                  zinc: "#101010",
            }
        
           
            
            
        },
    },
};

export default config;