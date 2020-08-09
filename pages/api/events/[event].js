import nextConnect from "next-connect";
import mongodb from "../../../middleware/database";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(mongodb);
/* Event schema
  {
    date: timestamp when record created
    value: value of the record.
  }
*/
handler.get(async (req, res) => {
  // find returns a cursor which we need to iterate through to get the results.
  // use next or toArray

  if (req.query.event) {
    const doc = await req.db.collection("events").find().toArray();
    res.json(
      doc.find((event) => event._id.toString() === req.query.event.toString())
    );
  }
});

handler.post(async (req, res) => {
  const data = JSON.parse(req.body);
  data.date = new Date();

  try {
    await req.db
      .collection("events")
      .updateOne({ date: data.date }, { $set: data }, { upsert: true });
    res.json({ message: "ok" });
  } catch (e) {
    res.json({ message: "error", e });
  }
});

export default handler;
