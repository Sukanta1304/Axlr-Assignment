import FigmaTool from "./CloneFigmaTool";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { AddComponent } from "./redux/actionType";
import { useEffect } from "react";

export default function App() {
  const tdata = [
    {
      id: 1,
      componentText: "First Component",
      img:
        "https://play-lh.googleusercontent.com/pR3AhTl1bOz8anFPzWj3O6RucXldUqrhOQVkCRpnmtfVUcHiyPC_E4Yppb8s9GjGlg"
    },
    {
      id: 2,
      componentText: "Second Component",
      img:
        "https://play-lh.googleusercontent.com/pR3AhTl1bOz8anFPzWj3O6RucXldUqrhOQVkCRpnmtfVUcHiyPC_E4Yppb8s9GjGlg"
    },
    {
      id: 3,
      componentText: "Third Component",
      img:
        "https://play-lh.googleusercontent.com/pR3AhTl1bOz8anFPzWj3O6RucXldUqrhOQVkCRpnmtfVUcHiyPC_E4Yppb8s9GjGlg"
    },
    {
      id: 4,
      componentText: "Fourth Component",
      img:
        "https://play-lh.googleusercontent.com/pR3AhTl1bOz8anFPzWj3O6RucXldUqrhOQVkCRpnmtfVUcHiyPC_E4Yppb8s9GjGlg"
    }
  ];

  const { data } = useSelector((state) => state.components);
  const dispatch = useDispatch();
  console.log(data);

  const addData = () => {
    dispatch(AddComponent(tdata));
  };
  useEffect(() => {
    addData();
  }, []);
  return (
    <div className="App">
      <FigmaTool />
    </div>
  );
}
