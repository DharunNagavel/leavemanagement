import "@/app/globals.css";

export const metadata = {
	title: 'Authentication',
	description: 'Sign in or sign up to manage leave requests',
}

export default function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
	return (
		<html>
      <body>
        {children}
      </body>
    </html>
			
	)
}

