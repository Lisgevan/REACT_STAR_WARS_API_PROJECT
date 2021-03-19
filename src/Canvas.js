import React from "react";
import useCanvas from "./useCanvas";
import "../starwarsintro.css";

const Canvas = props => {
	const { draw, ...rest } = props;
	const canvasRef = useCanvas(draw);

	return <canvas id="canvas" className="stretch" ref={canvasRef} {...rest} />;
};

export default Canvas;
