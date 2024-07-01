
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, async () => {
    try {
        console.log(`Server listening on port 8080`);

    } catch(error) {
        console.log("error : ", error.message);
    }
})