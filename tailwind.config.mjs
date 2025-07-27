export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			BgColor: {
  				DEFAULT: 'rgb(173,231,226)',
  				Navclr: 'rgb(193,193,193)',
  				homecolor: 'rgb(245,245,245)',
  				test: 'rgb(231,231,231)',
  				//  contactcolor: 'rgb(255,255,255)',
				contactcolor:'rgb(252, 252, 253)',
				formcolour: 'rgb(231,231,231)',
  				darkcolor: 'rgb(205,219,220)',
  				ChooseUscolor: 'rgb(181,211,213)',
  				Contactbgclr: 'rgb(242,245,252)',
  				btncolr: 'rgb(23,72,110)',
  				Footerbg: 'rgb(208,237,249)',
  				Services: 'rgb(255,255,255)',
  				career: 'rgb(242, 240, 230)',
  				NavNewColor: 'rgb(11,20,63)',
  				ServicesJobseekers: 'rgb(200,223,207)',
  				testing: 'rgb(235, 238, 245)',
  				FAQ: 'rgb(254,241,237)',
  				buttonclr: 'rgb(28, 79, 86)',
  		        card: 'rgb(229, 232, 235)',
		
  				accent: 'rgb(245, 166, 35)',
  				Backgroundlight: 'rgb(249, 250, 251)',
  				Primaryclr: 'rgb(10, 34, 57)',
  				Secondaryclr: 'rgb(18, 93, 152)',
  				TextPrimary: 'rgb(51, 51, 51)',
  				TextSecondary: 'rgb(255, 255, 255)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
