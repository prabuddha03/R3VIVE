import express from "express";
import cors from "cors";

import { z, ZodError } from "zod";
import sheets, { SHEET_ID } from "./complainSheet.js";
import Comsheets, {COM_SHEET_ID} from "./sheetClient.js";

const app = express();
app.use(cors());
const contactFormSchema = z.object({
    type: z.string(),
    name: z.string(),
    email: z.string(),
    date: z.string(),
    time:z.string(),
    address:z.string(),
});

const ComformSchema = z.object({
  name: z.string(),
  email: z.string(),
  house: z.string(),
  img: z.string(),
  address: z.string(),
  type:z.string(),
})

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/send-text", async (req, res) => {
  try {
    const body = contactFormSchema.parse(req.body);
    const rows = Object.values(body);
    console.log(rows);
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A1:B2",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rows],
      },
    });
    res.send("Data received");
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error });
      console.log(error.message);
    }
  }
});

app.post("/send-com", async (req, res) => {
  try {
    const body = ComformSchema.parse(req.body);
    const rows = Object.values(body);
    console.log(rows);
    await Comsheets.spreadsheets.values.append({
      spreadsheetId: COM_SHEET_ID,
      range: "Sheet1!A1:B2",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rows],
      },
    });
    res.send("Data received");
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error });
      console.log(error.message);
    }
  }
});

app.get("/get-data", async (req, res) => {
  try {
      const response = await sheets.spreadsheets.values.get({
          spreadsheetId: SHEET_ID,
          range: "Sheet1", 
      });
      const data = response.data.values;
      res.json({ data });
  } catch (error) {
      console.error("Error retrieving data:", error);
      res.status(500).json({ error: "Error retrieving data" });
  }
});

app.get("/get-bin-data", async (req, res) => {
  try {
      const response = await sheets.spreadsheets.values.get({
          spreadsheetId: SHEET_ID,
          range: "Sheet3", 
      });
      const data = response.data.values;
      res.json({ data });
  } catch (error) {
      console.error("Error retrieving data:", error);
      res.status(500).json({ error: "Error retrieving data" });
  }
});

app.get("/get-com-data", async (req, res) => {
  try {
      const response = await Comsheets.spreadsheets.values.get({
          spreadsheetId: COM_SHEET_ID,
          range: "Sheet1", 
      });
      const data = response.data.values;
      res.json({ data });
  } catch (error) {
      console.error("Error retrieving data:", error);
      res.status(500).json({ error: "Error retrieving data" });
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
