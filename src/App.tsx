import {
  Container
} from "@/components/ui/container"
import {
  LinkButton,
  LinkButtonDescription,
  LinkButtonTitle
} from "@/components/ui/link-button"

import './styles/globals.css'
function App() {
  return (
    <Container>
      <div className="h-screen flex-col flex items-center justify-center gap-8">
        <h1 className="md:text-5xl text-4xl text-center">React Boilerplate build using awesome tools and library!</h1>
        <div className="flex-col lg:flex-row gap-2 flex items-center justify-center w-full">
        <a href="https://react.dev/" className="md:w-[400px] w-[280px]">
          <LinkButton>
            <LinkButtonTitle>React.js</LinkButtonTitle>
            <LinkButtonDescription>
              The library for web and native user interfaces.
            </LinkButtonDescription>
          </LinkButton>
        </a>
        <a href="https://ui.shadcn.com/" className="md:w-[400px] w-[280px]">
          <LinkButton>
            <LinkButtonTitle>Shadcn/UI</LinkButtonTitle>
            <LinkButtonDescription>
              Beautifully designed components.
            </LinkButtonDescription>
          </LinkButton>
        </a>
        <a href="https://vitejs.dev/" className="md:w-[400px] w-[280px]">
          <LinkButton>
            <LinkButtonTitle>Vite</LinkButtonTitle>
            <LinkButtonDescription>
              Next Generation Frontend Tooling.
            </LinkButtonDescription>
          </LinkButton>
        </a>
        </div>
      </div>
    </Container>
  )
}

export default App
