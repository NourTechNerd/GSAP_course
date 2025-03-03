

const config = {
    darkMode: ["class"],
    content: [
       
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "320px", //Mobiles
			    md: "768px", // Tablets
				lg: "1024px", // Laptops
            },
            colors:{
                first :'#2997FF',
                second: {
                    DEFAULT: "#86868b",
                    100: "#94928d",
                    200: "#afafaf",
                    300: "#94938c",
                  },
                  third: "#101010",
            }
        
           
            
            
        },
    },
};

export default config;