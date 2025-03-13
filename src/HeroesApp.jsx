import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <div>
          <AppRouter/>
      </div>
    </AuthProvider>
  )
}

