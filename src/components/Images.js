import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei";

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const groupRef = useRef();
  const data = useScroll();

  useFrame(() => {
    groupRef.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    groupRef.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    groupRef.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    groupRef.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
  });
  return (
    <group ref={groupRef}>
      <Image
        url="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMjY2OTg3&ixlib=rb-1.2.1&q=80&w=3000&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        scale={[4, height, 1]}
        position={[-1.1, 0, 1]}
      />
      <Image
        url="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=3000&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        scale={[4, 2, 1]}
        position={[2, 0, 1]}
      />
      <Image
        url="https://images.unsplash.com/photo-1661805262969-42ed67348982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTg5MTU2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        scale={[1, 2, 1]}
        position={[-0.3, -height, 3.2]}
      />
      <Image
        url="https://images.unsplash.com/photo-1506875644286-0fa3dc4df91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzUzNDU4NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        scale={[width, height, 1]}
        position={[0, -height * 2, 0]}
      />
      <Image
        url="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ2NDA2&ixlib=rb-1.2.1&q=80&w=5000&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        scale={[1, 2, 1]}
        position={[1, -height, 2]}
      />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls
        pages={3} // Each page takes 100% of the height of the canvas
        horizontal={false}
        infinite={false}
      >
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1
            style={{
              position: "absolute",
              top: "70vh",
              left: "1.5em",
              fontSize: "22vw",
            }}
          >
            Be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "115vh",
              left: "12vw",
              fontSize: "22vw",
            }}
          >
            Creative
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "170vh",
              left: "40vw",
              fontSize: "10vw",
            }}
          >
            with
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "191.5vh",
              left: "55vw",
              fontSize: "26vw",
            }}
          >
            R3F
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
