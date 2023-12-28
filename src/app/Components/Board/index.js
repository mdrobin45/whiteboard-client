"use client";
import { useEffect, useRef, useState } from "react";

const Board = () => {
   const canvasRef = useRef(null);
   const [isDrawing, setIsDrawing] = useState(null);

   useEffect(() => {
      if (!canvasRef.current) {
         return;
      }
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Configure line draw
      const drawConfig = () => {
         context.strokeStyle = "red";
         context.lineWidth = 5;
      };

      // Start drawing function
      const startDrawing = (e) => {
         setIsDrawing(true);
         context.beginPath();
         context.moveTo(e.clientX, e.clientY);
      };

      // Drawing function
      const draw = (e) => {
         if (!isDrawing) {
            return;
         }

         context.lineTo(e.clientX, e.clientY);
         context.stroke();
      };

      // End drawing function
      const endDrawing = (e) => {
         setIsDrawing(false);
      };

      // Event listener for drawing
      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", endDrawing);

      drawConfig();

      return () => {
         canvas.removeEventListener("mousedown", startDrawing);
         canvas.removeEventListener("mousemove", draw);
         canvas.removeEventListener("mouseup", endDrawing);
      };
   }, [isDrawing]);
   return <canvas ref={canvasRef} />;
};

export default Board;
