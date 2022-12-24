import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import CardE from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { DeletComponent } from "./redux/actionType";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FigmaTool() {
  const [show, setShow] = useState(false);
  const { data } = useSelector((state) => state.components);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const delteComo = (id) => {
    dispatch(DeletComponent(data, id));
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ width: "30%", height: "300px" }}>
          {data[0]?.map((el) => (
            <div key={el.id}>
              <CardE
                img={el.img}
                text={el.componentText}
                show={show}
                setShow={setShow}
              />
            </div>
          ))}
        </div>
        <div style={{ width: "50%", height: "700px", border: "1px solid red" }}>
          <Button variant="contained">Save</Button>
          <Box mt={28}>
            {show && <Button variant="contained">Edit</Button>}
            {show && <Button variant="contained">Delete</Button>}
          </Box>
        </div>

        <div style={{ width: "20%", height: "700px", border: "1px solid red" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField required id="outlined-required" label="Image Link" />
              <TextField required id="outlined-required" label="Text" />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
