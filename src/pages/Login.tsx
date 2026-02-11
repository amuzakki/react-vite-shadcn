// import { Button } from "@/components/ui/button"
// import { Link } from "react-router-dom"

// export default function Login() {
//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="w-96 space-y-4">
//         <h1 className="text-2xl font-bold">Login</h1>
//         <Button className="w-full">Masuk</Button>
//         <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white w-full" to="/dashboard">Masuk</Link>

//       </div>
//     </div>
//   )
// }

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
