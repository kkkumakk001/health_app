import "./styles/style.css"
import FadeInAnimation from "./components/FadeInAnimation";

export default function Home() {
  return (
    <>
      <div style={{ height: "1000px", backgroundColor: "skyblue", borderBottom: "1px solid #ccc" }}>スクロールしてみよう！</div>
      <FadeInAnimation animation="fadeIn" rootMargin="0px" triggerOnce>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            height: "300px",
            width: "300px",
            boxShadow: "2px 3px 6px #333",
            background: "#f6f6f6"
          }}
        >
          スクロールするとフェードインされます。
          <br />
          フェードインされます
        </div>
      </FadeInAnimation>
      <FadeInAnimation animation="fadeIn" rootMargin="0px" triggerOnce>1</FadeInAnimation>
      <FadeInAnimation animation="fadeIn" rootMargin="0px" triggerOnce>2</FadeInAnimation>
      <FadeInAnimation animation="fadeIn" rootMargin="0px" triggerOnce>3</FadeInAnimation>
      <FadeInAnimation animation="fadeIn" rootMargin="0px" triggerOnce>4</FadeInAnimation>
      <h1>Home Page</h1>
    </>
  )
}
