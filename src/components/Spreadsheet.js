import React, { useEffect, useRef } from "react";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";
import { io } from "socket.io-client";
import useSheetStore from "../store";

const socket = io("http://localhost:5000");

const Spreadsheet = () => {
  const { data, updateData } = useSheetStore();
  const tableRef = useRef(null);

  useEffect(() => {
    const hot = new Handsontable(tableRef.current, {
      data,
      colHeaders: true,
      rowHeaders: true,
      licenseKey: "non-commercial-and-evaluation",
      afterChange: (changes, source) => {
        if (source === "edit") {
          socket.emit("updateCell", hot.getData());
        }
      },
    });

    socket.on("updateCell", (updatedData) => {
      updateData(updatedData);
      hot.loadData(updatedData);
    });

    return () => {
      socket.off("updateCell");
      hot.destroy();
    };
  }, [data]);

  return <div ref={tableRef} />;
};

export default Spreadsheet;
