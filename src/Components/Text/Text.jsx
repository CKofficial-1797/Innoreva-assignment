import "./Text.css";
import { motion } from "framer-motion";

function App() {
  const text = "Unveil the elegance of every tick.".split(" ");

  return (
    <div className="Text">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.6,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default App;
