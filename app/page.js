import Container from "./components/container";
import Main from "./components/Main/main"


export default function Home() {
  return (
      <Container>
        <div className="w-full h-full flex flex-grow items-center justify-center">
          <Main />
        </div>
      </Container>
  );
}
