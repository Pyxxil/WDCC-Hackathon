import nextConnect from "next-connect";
import mongodb from "../../middleware/database";

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
  if (req.query) {
    const doc = await req.db
      .collection("goals")
      .find({ user_id: req.query.user_id })
      .toArray();
    console.log("Doc", doc);
    res.json(doc);
  } else {
    req.json({ message: "error" });
  }
});

handler.post(async (req, res) => {
  const data = JSON.parse(req.body);
  data.date = new Date();
  data.user_id = req.query.user_id;

  console.log(data);

  try {
    await req.db
      .collection("goals")
      .updateOne({ date: data.date }, { $set: data }, { upsert: true });
    res.json({ message: "ok" });
  } catch (e) {
    res.json({ message: "error", e });
  }
});

export default handler;
