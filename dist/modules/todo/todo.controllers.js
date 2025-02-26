"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [];
const getAllTodo = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            results: data,
        });
    }
    catch (error) {
        console.error(`Error in getAllTodo: ${error}`);
        res.status(500).send({
            success: false,
            message: `Error in getAllTodo: ${error}`,
        });
    }
};
exports.default = {
    getAllTodo,
};
